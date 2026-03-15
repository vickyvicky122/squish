package ui

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import org.w3c.dom.events.WheelEvent

class InputHandler {

    val pressedKeys: MutableSet<String> = mutableSetOf()

    var isMouseDown: Boolean = false
        private set
    var scrollDelta: Double = 0.0
        private set
    var clickX: Double = Double.NaN
        private set
    var clickY: Double = Double.NaN
        private set

    // Current mouse position in NDC (-1 to +1)
    var mouseX: Double = 0.0
        private set
    var mouseY: Double = 0.0
        private set

    // Rotation with inertia
    var rotVelX: Double = 0.0
        private set
    var rotVelY: Double = 0.0
        private set

    private var lastMouseX: Double = 0.0
    private var lastMouseY: Double = 0.0
    private var wasDragging: Boolean = false

    // Track last interaction time for idle/quote system
    var lastInteractionTime: Double = 0.0
        private set

    fun setup() {
        document.addEventListener("keydown", { event ->
            val e = event as KeyboardEvent
            pressedKeys.add(e.key)
            lastInteractionTime = js("performance.now()") as Double
        })

        document.addEventListener("keyup", { event ->
            val e = event as KeyboardEvent
            pressedKeys.remove(e.key)
        })

        document.addEventListener("mousedown", { event ->
            val e = event as MouseEvent
            isMouseDown = true
            lastMouseX = e.clientX.toDouble()
            lastMouseY = e.clientY.toDouble()
            wasDragging = false
            lastInteractionTime = js("performance.now()") as Double
        })

        document.addEventListener("mousemove", { event ->
            val e = event as MouseEvent
            mouseX = (e.clientX.toDouble() / window.innerWidth) * 2.0 - 1.0
            mouseY = -(e.clientY.toDouble() / window.innerHeight) * 2.0 + 1.0
            if (isMouseDown) {
                val dx = e.clientX.toDouble() - lastMouseX
                val dy = e.clientY.toDouble() - lastMouseY
                rotVelX = dy * 0.005
                rotVelY = dx * 0.005
                lastMouseX = e.clientX.toDouble()
                lastMouseY = e.clientY.toDouble()
                wasDragging = true
                lastInteractionTime = js("performance.now()") as Double
            }
        })

        document.addEventListener("mouseup", { event ->
            val e = event as MouseEvent
            isMouseDown = false
            if (!wasDragging) {
                clickX = (e.clientX.toDouble() / window.innerWidth) * 2.0 - 1.0
                clickY = -(e.clientY.toDouble() / window.innerHeight) * 2.0 + 1.0
                lastInteractionTime = js("performance.now()") as Double
            }
            // Inertia: keep rotVelX/Y, they'll decay in the animation loop
        })

        document.addEventListener("wheel", { event ->
            val e = event as WheelEvent
            scrollDelta += e.deltaY
            lastInteractionTime = js("performance.now()") as Double
        }, js("{passive: true}"))
    }

    /** Apply inertia decay to rotation velocity. Call every frame. Returns (rotX, rotY) to apply. */
    fun updateRotationInertia(dt: Double): Pair<Double, Double> {
        if (!isMouseDown) {
            // Smooth exponential decay
            val decay = 0.95
            rotVelX *= decay
            rotVelY *= decay
            // Kill tiny residual
            if (kotlin.math.abs(rotVelX) < 0.00005) rotVelX = 0.0
            if (kotlin.math.abs(rotVelY) < 0.00005) rotVelY = 0.0
        }
        return Pair(rotVelX, rotVelY)
    }

    fun consumeScrollDelta(): Double {
        val d = scrollDelta
        scrollDelta = 0.0
        return d
    }

    fun consumeClick(): Pair<Double, Double>? {
        if (clickX.isNaN()) return null
        val result = Pair(clickX, clickY)
        clickX = Double.NaN
        clickY = Double.NaN
        return result
    }

    fun timeSinceLastInteraction(): Double {
        val now = js("performance.now()") as Double
        return (now - lastInteractionTime) / 1000.0
    }
}
