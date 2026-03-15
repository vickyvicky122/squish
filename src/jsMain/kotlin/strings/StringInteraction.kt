package strings

import gesture.GestureEngine
import gesture.HandGesture
import three.PerspectiveCamera
import three.Vector3
import ui.InputHandler
import kotlin.math.sqrt

/**
 * Maps mouse, keyboard, and gesture inputs to string physics actions.
 * Mouse drag and PINCH gesture pin the string point in place (like holding
 * a guitar string with your fingertip). Releasing lets it snap back.
 */
class StringInteraction(
    private val physics: StringSystem,
    private val camera: PerspectiveCamera,
    private val inputHandler: InputHandler,
    private val gestureEngine: GestureEngine
) {
    private var grabbedPoint = -1
    private var isGrabbing = false

    // Gesture hold state
    private var gestureHeldPoint = -1

    fun update(dt: Double) {
        handleKeyboard(dt)

        // While mouse is holding a point, pin it firmly each frame
        if (isGrabbing && grabbedPoint >= 0) {
            val mx = inputHandler.mouseX
            val my = inputHandler.mouseY
            val worldPos = ndcToWorld(mx, my) ?: return
            val p = physics.strings[0].points.getOrNull(grabbedPoint) ?: return
            if (!p.pinned) {
                // Pin: set position AND previous position so velocity stays zero
                p.x = worldPos.x
                p.y = worldPos.y
                p.prevX = worldPos.x
                p.prevY = worldPos.y
            }
        }
    }

    fun handleMouseDown(ndcX: Double, ndcY: Double) {
        val worldPos = ndcToWorld(ndcX, ndcY) ?: return
        val nearest = physics.findNearest(worldPos.x, worldPos.y, worldPos.z, maxDist = 2.0) ?: return
        grabbedPoint = nearest.second
        isGrabbing = true
    }

    fun handleMouseDrag(ndcX: Double, ndcY: Double) {
        // Pinning is handled in update() each frame
    }

    fun handleMouseUp() {
        isGrabbing = false
        grabbedPoint = -1
    }

    fun handleGesture(dt: Double): StringGestureResult {
        var plucked = false
        var strummed = false

        val (ndcX, ndcY) = gestureEngine.getFingerNDC()
        val fingerWorld = ndcToWorld(ndcX, ndcY)
        val (palmNx, palmNy) = gestureEngine.getPalmNDC()
        val palmWorld = ndcToWorld(palmNx, palmNy)

        when (gestureEngine.currentGesture) {
            HandGesture.POINTER -> {
                // Finger tip holds the string point in place
                if (fingerWorld != null) {
                    val nearest = physics.findNearest(fingerWorld.x, fingerWorld.y, fingerWorld.z, maxDist = 2.0)
                    if (nearest != null) {
                        gestureHeldPoint = nearest.second
                        val p = physics.strings[0].points[nearest.second]
                        if (!p.pinned) {
                            p.x = fingerWorld.x
                            p.y = fingerWorld.y
                            p.prevX = fingerWorld.x
                            p.prevY = fingerWorld.y
                        }
                    }
                }
            }
            HandGesture.PINCH -> {
                // Pinch holds the string firmly (like pressing against a fret)
                if (fingerWorld != null && gestureEngine.pinchAmount > 0.3) {
                    val nearest = physics.findNearest(fingerWorld.x, fingerWorld.y, fingerWorld.z, maxDist = 2.0)
                    if (nearest != null) {
                        gestureHeldPoint = nearest.second
                        val p = physics.strings[0].points[nearest.second]
                        if (!p.pinned) {
                            p.x = fingerWorld.x
                            p.y = fingerWorld.y
                            p.prevX = fingerWorld.x
                            p.prevY = fingerWorld.y
                        }
                    }
                } else {
                    gestureHeldPoint = -1
                }
            }
            HandGesture.OPEN -> {
                gestureHeldPoint = -1
                if (palmWorld != null) {
                    val s = physics.strings[0]
                    for (p in s.points) {
                        if (p.pinned) continue
                        val dx = p.x - palmWorld.x
                        val dy = p.y - palmWorld.y
                        val dist = sqrt(dx * dx + dy * dy)
                        if (dist < 2.5 && dist > 0.01) {
                            val push = 0.02 * dt * 60.0 / (dist * dist)
                            p.y += dy * push
                        }
                    }
                }
            }
            HandGesture.SPREAD -> {
                gestureHeldPoint = -1
                val mid = physics.strings[0].numPoints / 2
                physics.pluck(0, mid, 0.0, 0.15, 0.0)
                plucked = true
            }
            HandGesture.VICTORY -> {
                gestureHeldPoint = -1
                if (gestureEngine.handVelocity > 0.01) {
                    val force = -gestureEngine.handDeltaY * 0.3
                    val mid = physics.strings[0].numPoints / 2
                    physics.pluck(0, mid, 0.0, force, 0.0)
                    strummed = true
                }
            }
            HandGesture.CLOSE -> {
                gestureHeldPoint = -1
                if (palmWorld != null) {
                    val nearest = physics.findNearest(palmWorld.x, palmWorld.y, palmWorld.z, maxDist = 1.5)
                    if (nearest != null) {
                        val s = physics.strings[0]
                        val radius = 8
                        for (i in (nearest.second - radius).coerceAtLeast(1) until (nearest.second + radius).coerceAtMost(s.numPoints - 1)) {
                            val p = s.points[i]
                            if (p.pinned) continue
                            p.prevX += (p.x - p.prevX) * 0.3
                            p.prevY += (p.y - p.prevY) * 0.3
                            p.prevZ += (p.z - p.prevZ) * 0.3
                        }
                    }
                }
            }
            else -> {
                gestureHeldPoint = -1
            }
        }
        return StringGestureResult(plucked, strummed)
    }

    private fun handleKeyboard(dt: Double) {
        val keys = inputHandler.pressedKeys

        // Space: pluck the center
        if (" " in keys) {
            val mid = physics.strings[0].numPoints / 2
            physics.pluck(0, mid, 0.0, 0.15, 0.0)
            keys.remove(" ")
        }

        // R: reset
        if ("r" in keys || "R" in keys) {
            physics.reset()
            keys.remove("r"); keys.remove("R")
        }

        // Arrow up/down push the line vertically
        val pushStrength = 2.0 * dt
        if ("ArrowUp" in keys) {
            for (p in physics.strings[0].points) if (!p.pinned) p.y += pushStrength
        }
        if ("ArrowDown" in keys) {
            for (p in physics.strings[0].points) if (!p.pinned) p.y -= pushStrength
        }
    }

    private fun ndcToWorld(ndcX: Double, ndcY: Double): Vector3? {
        val nearPt = Vector3(ndcX, ndcY, 0.0).unproject(camera)
        val farPt = Vector3(ndcX, ndcY, 1.0).unproject(camera)
        val dx = farPt.x - nearPt.x
        val dy = farPt.y - nearPt.y
        val dz = farPt.z - nearPt.z
        if (kotlin.math.abs(dz) < 0.001) return null
        val t = -nearPt.z / dz
        return Vector3(nearPt.x + dx * t, nearPt.y + dy * t, 0.0)
    }
}

data class StringGestureResult(val plucked: Boolean, val strummed: Boolean)
