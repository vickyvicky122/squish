package deformation

import org.khronos.webgl.get
import org.khronos.webgl.set
import kotlin.math.cos
import kotlin.math.exp
import kotlin.math.sin
import kotlin.math.sqrt

class DeformationController(private val spring: SpringPhysics) {

    private val vertexCount: Int = spring.originalPositions.length / 3

    // Foam rubber: generous deformation, feels like squeezing
    private val deformRate = 3.0
    private val twistRate = 2.5
    private val pulseStrength = 0.5
    private val squeezeRate = 2.5

    private var activeKeys = 0

    fun applyKeyboardDeformation(pressedKeys: Set<String>, dt: Double) {
        activeKeys = 0
        for (i in 0 until vertexCount) {
            val ox = spring.getOriginalX(i)
            val oy = spring.getOriginalY(i)
            val oz = spring.getOriginalZ(i)
            val origLen = sqrt(ox * ox + oy * oy + oz * oz)

            // W/S: stretch/compress vertically
            if ("w" in pressedKeys || "W" in pressedKeys) {
                activeKeys++
                val sign = if (oy >= 0) 1.0 else -1.0
                spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] + (deformRate * sign * dt).toFloat())
            }
            if ("s" in pressedKeys || "S" in pressedKeys) {
                activeKeys++
                val sign = if (oy >= 0) 1.0 else -1.0
                spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] - (deformRate * sign * dt).toFloat())
            }

            // A/D: widen/narrow horizontally
            if ("d" in pressedKeys || "D" in pressedKeys) {
                activeKeys++
                val sign = if (ox >= 0) 1.0 else -1.0
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] + (deformRate * sign * dt).toFloat())
            }
            if ("a" in pressedKeys || "A" in pressedKeys) {
                activeKeys++
                val sign = if (ox >= 0) 1.0 else -1.0
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] - (deformRate * sign * dt).toFloat())
            }

            // Q/E: twist
            if ("q" in pressedKeys || "Q" in pressedKeys) {
                activeKeys++
                val angle = -twistRate * oy * dt * 0.3
                val cosA = cos(angle)
                val sinA = sin(angle)
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] + ((ox * cosA - oz * sinA) - ox).toFloat())
                spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] + ((ox * sinA + oz * cosA) - oz).toFloat())
            }
            if ("e" in pressedKeys || "E" in pressedKeys) {
                activeKeys++
                val angle = twistRate * oy * dt * 0.3
                val cosA = cos(angle)
                val sinA = sin(angle)
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] + ((ox * cosA - oz * sinA) - ox).toFloat())
                spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] + ((ox * sinA + oz * cosA) - oz).toFloat())
            }

            // F: whole-ball squeeze (compress uniformly inward — like gripping the ball)
            if ("f" in pressedKeys || "F" in pressedKeys) {
                activeKeys++
                if (origLen > 0.001) {
                    spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] - (squeezeRate * ox / origLen * dt).toFloat())
                    spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] - (squeezeRate * oy / origLen * dt).toFloat())
                    spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] - (squeezeRate * oz / origLen * dt).toFloat())
                }
            }
        }
    }

    fun isDeforming(): Boolean = activeKeys > 0

    fun applyPulse() {
        for (i in 0 until vertexCount) {
            val ox = spring.getOriginalX(i)
            val oy = spring.getOriginalY(i)
            val oz = spring.getOriginalZ(i)
            val len = sqrt(ox * ox + oy * oy + oz * oz)
            if (len > 0.001) {
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] + (pulseStrength * ox / len).toFloat())
                spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] + (pulseStrength * oy / len).toFloat())
                spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] + (pulseStrength * oz / len).toFloat())
            }
        }
    }

    /** Poke — wide radius like pressing a thumb into foam */
    fun applyPoke(intersectPoint: three.Vector3, radius: Double = 1.2, strength: Double = -0.5) {
        for (i in 0 until vertexCount) {
            val ox = spring.getOriginalX(i) + spring.targetOffsets[i * 3].toDouble()
            val oy = spring.getOriginalY(i) + spring.targetOffsets[i * 3 + 1].toDouble()
            val oz = spring.getOriginalZ(i) + spring.targetOffsets[i * 3 + 2].toDouble()

            val dx = ox - intersectPoint.x
            val dy = oy - intersectPoint.y
            val dz = oz - intersectPoint.z
            val dist = sqrt(dx * dx + dy * dy + dz * dz)

            if (dist < radius) {
                // Wide, smooth Gaussian — like a thumb impression
                val falloff = exp(-(dist * dist) / (radius * radius * 0.4))
                val origLen = sqrt(
                    spring.getOriginalX(i) * spring.getOriginalX(i) +
                    spring.getOriginalY(i) * spring.getOriginalY(i) +
                    spring.getOriginalZ(i) * spring.getOriginalZ(i)
                )
                if (origLen > 0.001) {
                    spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] +
                        (strength * falloff * spring.getOriginalX(i) / origLen).toFloat())
                    spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] +
                        (strength * falloff * spring.getOriginalY(i) / origLen).toFloat())
                    spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] +
                        (strength * falloff * spring.getOriginalZ(i) / origLen).toFloat())
                }
            }
        }
    }

    /** Explode — massive radial burst with random scatter, vertices fly apart */
    fun applyExplode() {
        spring.maxOffset = 3.0
        spring.maxVelocity = 15.0
        val strength = 2.5
        for (i in 0 until vertexCount) {
            val ox = spring.getOriginalX(i)
            val oy = spring.getOriginalY(i)
            val oz = spring.getOriginalZ(i)
            val len = sqrt(ox * ox + oy * oy + oz * oz)
            if (len > 0.001) {
                val rx = (kotlin.random.Random.nextDouble() - 0.5) * 1.2
                val ry = (kotlin.random.Random.nextDouble() - 0.5) * 1.2
                val rz = (kotlin.random.Random.nextDouble() - 0.5) * 1.2
                spring.targetOffsets[i * 3] = (strength * ox / len + rx).toFloat()
                spring.targetOffsets[i * 3 + 1] = (strength * oy / len + ry).toFloat()
                spring.targetOffsets[i * 3 + 2] = (strength * oz / len + rz).toFloat()
                // Kick velocities for instant visual impact
                spring.velocities[i * 3] = (strength * 2.5 * ox / len + rx * 3.0).toFloat()
                spring.velocities[i * 3 + 1] = (strength * 2.5 * oy / len + ry * 3.0).toFloat()
                spring.velocities[i * 3 + 2] = (strength * 2.5 * oz / len + rz * 3.0).toFloat()
            }
        }
    }

    /** Scramble — chaotic random displacement, blob becomes a messy blob */
    fun applyScramble() {
        spring.maxOffset = 2.5
        spring.maxVelocity = 12.0
        for (i in 0 until vertexCount) {
            val rx = (kotlin.random.Random.nextDouble() - 0.5) * 3.0
            val ry = (kotlin.random.Random.nextDouble() - 0.5) * 3.0
            val rz = (kotlin.random.Random.nextDouble() - 0.5) * 3.0
            spring.targetOffsets[i * 3] = rx.toFloat()
            spring.targetOffsets[i * 3 + 1] = ry.toFloat()
            spring.targetOffsets[i * 3 + 2] = rz.toFloat()
            spring.velocities[i * 3] = (rx * 4.0).toFloat()
            spring.velocities[i * 3 + 1] = (ry * 4.0).toFloat()
            spring.velocities[i * 3 + 2] = (rz * 4.0).toFloat()
        }
    }

    /** Punch — hard directional impact, dents one side and blows out the other */
    fun applyPunch(dirX: Double, dirY: Double) {
        spring.maxOffset = 2.5
        spring.maxVelocity = 15.0
        // Punch direction (add forward component into screen)
        val dLen = sqrt(dirX * dirX + dirY * dirY + 0.25)
        val ndx = dirX / dLen
        val ndy = dirY / dLen
        val ndz = -0.5 / dLen
        val strength = 2.2

        for (i in 0 until vertexCount) {
            val ox = spring.getOriginalX(i)
            val oy = spring.getOriginalY(i)
            val oz = spring.getOriginalZ(i)
            val origLen = sqrt(ox * ox + oy * oy + oz * oz)
            if (origLen < 0.001) continue

            // How much this vertex faces the punch direction
            val dot = (ox * ndx + oy * ndy + oz * ndz) / origLen

            if (dot > 0.0) {
                // Front-facing: push inward hard (dent)
                val push = strength * dot * dot
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] - (push * ox / origLen).toFloat())
                spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] - (push * oy / origLen).toFloat())
                spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] - (push * oz / origLen).toFloat())
                // Velocity kick
                spring.velocities[i * 3] = (spring.velocities[i * 3] + (ndx * push * 3.0).toFloat())
                spring.velocities[i * 3 + 1] = (spring.velocities[i * 3 + 1] + (ndy * push * 3.0).toFloat())
                spring.velocities[i * 3 + 2] = (spring.velocities[i * 3 + 2] + (ndz * push * 3.0).toFloat())
            } else {
                // Back-facing: push outward (exit bulge)
                val bulge = strength * 0.4 * dot * dot
                spring.targetOffsets[i * 3] = (spring.targetOffsets[i * 3] + (bulge * ox / origLen).toFloat())
                spring.targetOffsets[i * 3 + 1] = (spring.targetOffsets[i * 3 + 1] + (bulge * oy / origLen).toFloat())
                spring.targetOffsets[i * 3 + 2] = (spring.targetOffsets[i * 3 + 2] + (bulge * oz / origLen).toFloat())
            }
        }
    }

    fun reset() {
        spring.reset()
        spring.maxOffset = 1.2
        spring.maxVelocity = 6.0
    }
}
