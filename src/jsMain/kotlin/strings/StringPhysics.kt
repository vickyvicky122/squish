package strings

import kotlin.math.sqrt

/**
 * Point-mass elastic string simulation using Verlet integration.
 * Each string is a chain of points connected by distance constraints.
 */
class PointMass(
    var x: Double, var y: Double, var z: Double,
    var prevX: Double, var prevY: Double, var prevZ: Double,
    val pinned: Boolean = false
)

class ElasticString(
    val numPoints: Int,
    private val restLength: Double,
    startX: Double, startY: Double, startZ: Double,
    endX: Double, endY: Double, endZ: Double
) {
    val points: Array<PointMass>
    val segmentRest: Double = restLength / (numPoints - 1)

    init {
        points = Array(numPoints) { i ->
            val t = i.toDouble() / (numPoints - 1)
            val x = startX + (endX - startX) * t
            val y = startY + (endY - startY) * t
            val z = startZ + (endZ - startZ) * t
            PointMass(x, y, z, x, y, z, pinned = (i == 0 || i == numPoints - 1))
        }
    }

    fun getTension(): Double {
        var totalStretch = 0.0
        for (i in 0 until numPoints - 1) {
            val a = points[i]; val b = points[i + 1]
            val dx = b.x - a.x; val dy = b.y - a.y; val dz = b.z - a.z
            val dist = sqrt(dx * dx + dy * dy + dz * dz)
            totalStretch += (dist / segmentRest)
        }
        return totalStretch / (numPoints - 1)
    }

    fun getEnergy(): Double {
        var e = 0.0
        for (p in points) {
            if (p.pinned) continue
            val vx = p.x - p.prevX; val vy = p.y - p.prevY; val vz = p.z - p.prevZ
            e += vx * vx + vy * vy + vz * vz
        }
        return e
    }
}

class StringSystem(
    val numStrings: Int = 1,
    val pointsPerString: Int = 128
) {
    val strings: Array<ElasticString>

    private val gravity = -0.005
    private val damping = 0.9998
    private val constraintIterations = 50

    // Gentle endpoint sway
    private var swayPhase = 0.0

    init {
        // Single flat horizontal line like a Desmos graph (y=0, wide x span)
        strings = Array(numStrings) {
            ElasticString(
                pointsPerString, 8.0,
                -4.0, 0.0, 0.0,
                4.0, 0.0, 0.0
            )
        }
    }

    fun update(dt: Double) {
        val clampedDt = dt.coerceAtMost(1.0 / 30.0)
        swayPhase += clampedDt * 0.3

        for (s in strings) {
            // Verlet integration
            for (p in s.points) {
                if (p.pinned) continue

                val vx = (p.x - p.prevX) * damping
                val vy = (p.y - p.prevY) * damping
                val vz = (p.z - p.prevZ) * damping

                p.prevX = p.x
                p.prevY = p.y
                p.prevZ = p.z

                p.x += vx + 0.0
                p.y += vy + gravity * clampedDt * clampedDt
                p.z += vz + 0.0
            }

            // Endpoint gentle sway
            val startPt = s.points[0]
            val endPt = s.points[s.numPoints - 1]
            startPt.y = startPt.prevY + kotlin.math.sin(swayPhase) * 0.0003
            endPt.y = endPt.prevY + kotlin.math.sin(swayPhase + 1.0) * 0.0003

            // Distance constraint relaxation
            for (iter in 0 until constraintIterations) {
                for (i in 0 until s.numPoints - 1) {
                    val a = s.points[i]; val b = s.points[i + 1]
                    val dx = b.x - a.x; val dy = b.y - a.y; val dz = b.z - a.z
                    val dist = sqrt(dx * dx + dy * dy + dz * dz)
                    if (dist < 0.0001) continue
                    val diff = (dist - s.segmentRest) / dist * 0.5

                    if (!a.pinned) {
                        a.x += dx * diff; a.y += dy * diff; a.z += dz * diff
                    }
                    if (!b.pinned) {
                        b.x -= dx * diff; b.y -= dy * diff; b.z -= dz * diff
                    }
                }
            }
        }
    }

    fun pluck(stringIndex: Int, pointIndex: Int, forceX: Double, forceY: Double, forceZ: Double) {
        if (stringIndex < 0 || stringIndex >= numStrings) return
        val s = strings[stringIndex]
        val radius = 10 // affect nearby points

        for (i in (pointIndex - radius).coerceAtLeast(1) until (pointIndex + radius).coerceAtMost(s.numPoints - 1)) {
            val p = s.points[i]
            if (p.pinned) continue
            val dist = kotlin.math.abs(i - pointIndex).toDouble()
            val falloff = 1.0 - dist / radius
            if (falloff <= 0.0) continue
            val f = falloff * falloff
            p.x += forceX * f
            p.y += forceY * f
            p.z += forceZ * f
        }
    }

    fun applyForceAt(stringIndex: Int, pointIndex: Int, fx: Double, fy: Double, fz: Double) {
        if (stringIndex < 0 || stringIndex >= numStrings) return
        val p = strings[stringIndex].points.getOrNull(pointIndex) ?: return
        if (p.pinned) return
        p.x += fx; p.y += fy; p.z += fz
    }

    fun setPointPosition(stringIndex: Int, pointIndex: Int, x: Double, y: Double, z: Double) {
        if (stringIndex < 0 || stringIndex >= numStrings) return
        val p = strings[stringIndex].points.getOrNull(pointIndex) ?: return
        if (p.pinned) return
        p.x = x; p.y = y; p.z = z
    }

    /** Find nearest string point to a world position. Returns (stringIndex, pointIndex) or null. */
    fun findNearest(wx: Double, wy: Double, wz: Double, maxDist: Double = 1.5): Pair<Int, Int>? {
        var bestDist = maxDist
        var bestS = -1; var bestP = -1
        for (si in strings.indices) {
            for (pi in strings[si].points.indices) {
                val p = strings[si].points[pi]
                val dx = p.x - wx; val dy = p.y - wy; val dz = p.z - wz
                val d = sqrt(dx * dx + dy * dy + dz * dz)
                if (d < bestDist) {
                    bestDist = d; bestS = si; bestP = pi
                }
            }
        }
        return if (bestS >= 0) Pair(bestS, bestP) else null
    }

    fun getAverageTension(): Double {
        return strings.sumOf { it.getTension() } / numStrings
    }

    fun getTotalEnergy(): Double {
        return strings.sumOf { it.getEnergy() }
    }

    fun reset() {
        for (si in strings.indices) {
            val s = strings[si]
            for (pi in s.points.indices) {
                val pt = s.points[pi]
                val frac = pi.toDouble() / (s.numPoints - 1)
                val x = -4.0 + 8.0 * frac
                pt.x = x; pt.y = 0.0; pt.z = 0.0
                pt.prevX = x; pt.prevY = 0.0; pt.prevZ = 0.0
            }
        }
    }
}
