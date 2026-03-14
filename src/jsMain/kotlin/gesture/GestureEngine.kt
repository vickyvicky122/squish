package gesture

import kotlin.math.abs
import kotlin.math.hypot

enum class HandGesture(val label: String) {
    NONE("No hand"),
    OPEN("Open Palm"),
    CLOSE("Fist"),
    POINTER("Pointer"),
    OK("OK"),
    VICTORY("Victory"),
    THUMBS_UP("Thumbs Up"),
    SPREAD("Explode!"),
    HORNS("Scramble!"),
    PUNCH("Punch!")
}

class GestureEngine {
    var enabled = false
        private set
    var currentGesture = HandGesture.NONE
        private set
    var handDetected = false
        private set

    // Normalized hand position (0-1, webcam coords)
    var handX = 0.5
        private set
    var handY = 0.5
        private set

    // Index fingertip position for pointer mode
    var fingerTipX = 0.5
        private set
    var fingerTipY = 0.5
        private set

    // Frame-to-frame hand movement delta
    var handDeltaX = 0.0
        private set
    var handDeltaY = 0.0
        private set

    private var prevHandX = 0.5
    private var prevHandY = 0.5

    // Gesture smoothing
    private var rawGesture = HandGesture.NONE
    private var gestureFrames = 0
    private val confirmFrames = 3

    // One-shot action debounce
    private var resetCooldown = 0.0
    private var colorCooldown = 0.0
    private var explodeCooldown = 0.0
    private var scrambleCooldown = 0.0
    private var punchCooldown = 0.0

    fun toggle(): Boolean {
        if (enabled) stop() else start()
        return enabled
    }

    private fun start() {
        val available: Boolean = js("typeof window.Hands !== 'undefined'") as Boolean
        if (!available) {
            println("MediaPipe Hands not loaded from CDN")
            return
        }
        enabled = true
        js("window.initGesture()")
    }

    private fun stop() {
        enabled = false
        js("window.stopGesture()")
        currentGesture = HandGesture.NONE
        handDetected = false
        handDeltaX = 0.0
        handDeltaY = 0.0
    }

    /** Call each frame from animation loop */
    fun update(dt: Double) {
        if (!enabled) return

        resetCooldown = (resetCooldown - dt).coerceAtLeast(0.0)
        colorCooldown = (colorCooldown - dt).coerceAtLeast(0.0)
        explodeCooldown = (explodeCooldown - dt).coerceAtLeast(0.0)
        scrambleCooldown = (scrambleCooldown - dt).coerceAtLeast(0.0)
        punchCooldown = (punchCooldown - dt).coerceAtLeast(0.0)

        val detected: Boolean = js("window._handDetected === true") as Boolean
        if (!detected) {
            handDetected = false
            currentGesture = HandGesture.NONE
            handDeltaX = 0.0
            handDeltaY = 0.0
            // Update label
            val label: dynamic = js("document.getElementById('gestureLabel')")
            if (label != null) {
                label.textContent = "No hand"
            }
            return
        }

        handDetected = true
        val lm: dynamic = js("window._handLandmarks")
        if (lm == null) return

        // Update hand position (wrist = landmark 0)
        prevHandX = handX
        prevHandY = handY
        handX = lm[0].x as Double
        handY = lm[0].y as Double
        handDeltaX = handX - prevHandX
        handDeltaY = handY - prevHandY

        // Index fingertip (landmark 8) for pointer mode
        fingerTipX = lm[8].x as Double
        fingerTipY = lm[8].y as Double

        // Classify gesture
        val detectedGesture = classifyGesture(lm)

        // Smoothing: require same gesture for N consecutive frames
        if (detectedGesture == rawGesture) {
            gestureFrames++
        } else {
            rawGesture = detectedGesture
            gestureFrames = 1
        }

        if (gestureFrames >= confirmFrames) {
            currentGesture = rawGesture
        }

        // Upgrade fist → punch when hand is moving fast
        if (currentGesture == HandGesture.CLOSE) {
            val velocity = hypot(handDeltaX, handDeltaY)
            if (velocity > 0.025) {
                currentGesture = HandGesture.PUNCH
            }
        }

        // Update gesture label in DOM
        val label: dynamic = js("document.getElementById('gestureLabel')")
        if (label != null) {
            label.textContent = currentGesture.label
        }
    }

    /** Check if reset action should fire (debounced) */
    fun shouldReset(): Boolean {
        if (currentGesture == HandGesture.OK && resetCooldown <= 0.0) {
            resetCooldown = 1.5
            return true
        }
        return false
    }

    /** Check if color cycle should fire (debounced) */
    fun shouldCycleColor(): Boolean {
        if (currentGesture == HandGesture.THUMBS_UP && colorCooldown <= 0.0) {
            colorCooldown = 1.0
            return true
        }
        return false
    }

    fun shouldExplode(): Boolean {
        if (currentGesture == HandGesture.SPREAD && explodeCooldown <= 0.0) {
            explodeCooldown = 1.5
            return true
        }
        return false
    }

    fun shouldScramble(): Boolean {
        if (currentGesture == HandGesture.HORNS && scrambleCooldown <= 0.0) {
            scrambleCooldown = 1.2
            return true
        }
        return false
    }

    fun shouldPunch(): Boolean {
        if (currentGesture == HandGesture.PUNCH && punchCooldown <= 0.0) {
            punchCooldown = 0.6
            return true
        }
        return false
    }

    /** Convert fingertip position to NDC for raycaster (accounts for webcam mirror) */
    fun getFingerNDC(): Pair<Double, Double> {
        val ndcX = 1.0 - 2.0 * fingerTipX
        val ndcY = 1.0 - 2.0 * fingerTipY
        return Pair(ndcX, ndcY)
    }

    /** Convert hand movement to rotation values (mirrored for natural feel) */
    fun getRotationDelta(): Pair<Double, Double> {
        if (!handDetected) return Pair(0.0, 0.0)
        return Pair(handDeltaY * 4.0, -handDeltaX * 4.0)
    }

    private fun classifyGesture(lm: dynamic): HandGesture {
        val thumbUp = isThumbExtended(lm)
        val indexUp = isFingerExtended(lm, 6, 8)
        val middleUp = isFingerExtended(lm, 10, 12)
        val ringUp = isFingerExtended(lm, 14, 16)
        val pinkyUp = isFingerExtended(lm, 18, 20)

        // OK: thumb tip and index tip very close together
        val thumbTipX = lm[4].x as Double
        val thumbTipY = lm[4].y as Double
        val indexTipX = lm[8].x as Double
        val indexTipY = lm[8].y as Double
        val okDist = hypot(thumbTipX - indexTipX, thumbTipY - indexTipY)

        return when {
            // OK sign: thumb+index touching, at least one other finger extended
            okDist < 0.06 && (middleUp || ringUp || pinkyUp) -> HandGesture.OK
            // Spread / jazz hands: ALL 5 fingers including thumb → explode
            thumbUp && indexUp && middleUp && ringUp && pinkyUp -> HandGesture.SPREAD
            // Horns / rock sign: index + pinky only → scramble
            indexUp && !middleUp && !ringUp && pinkyUp -> HandGesture.HORNS
            // Victory: index + middle extended, ring + pinky closed
            indexUp && middleUp && !ringUp && !pinkyUp -> HandGesture.VICTORY
            // Thumbs up: only thumb extended
            thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp -> HandGesture.THUMBS_UP
            // Pointer: only index extended (no pinky — distinguishes from horns)
            indexUp && !middleUp && !ringUp && !pinkyUp -> HandGesture.POINTER
            // Open palm: 4 fingers extended, thumb not (distinguishes from spread)
            !thumbUp && indexUp && middleUp && ringUp && pinkyUp -> HandGesture.OPEN
            // Closed fist: no fingers extended (upgraded to PUNCH in update if moving fast)
            !thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp -> HandGesture.CLOSE
            else -> HandGesture.NONE
        }
    }

    private fun isThumbExtended(lm: dynamic): Boolean {
        val tipX = lm[4].x as Double
        val ipX = lm[3].x as Double
        val mcpX = lm[2].x as Double
        return abs(tipX - mcpX) > abs(ipX - mcpX) * 1.1
    }

    private fun isFingerExtended(lm: dynamic, pip: Int, tip: Int): Boolean {
        val tipY = lm[tip].y as Double
        val pipY = lm[pip].y as Double
        return tipY < pipY - 0.02
    }
}
