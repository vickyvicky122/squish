package deformation

import org.khronos.webgl.Float32Array
import org.khronos.webgl.get
import org.khronos.webgl.set
import three.BufferAttribute
import three.BufferGeometry
import kotlin.math.abs
import kotlin.math.sqrt

class SpringPhysics(private val geometry: BufferGeometry) {

    private val posAttr: BufferAttribute = geometry.getAttribute("position") as BufferAttribute
    val vertexCount: Int = posAttr.count

    val originalPositions: Float32Array = Float32Array(vertexCount * 3)
    val velocities: Float32Array = Float32Array(vertexCount * 3)
    val targetOffsets: Float32Array = Float32Array(vertexCount * 3)
    val deformationMagnitudes: Float32Array = Float32Array(vertexCount)

    var totalEnergy: Double = 0.0
        private set

    // Very soft, yielding — easy to dent, slow satisfying spring-back
    private val springConstant = 1.8
    private val dampingCoeff = 1.0
    var maxOffset = 2.5
    var maxVelocity = 10.0

    // Volume preservation
    private val originalAvgRadius: Double
    var volumePreservation = 0.7  // 0 = off, 1 = rigid volume

    // Neighbor adjacency for Laplacian smoothing
    private val neighbors: Array<IntArray>

    init {
        val posArray = posAttr.array
        var radSum = 0.0
        for (i in 0 until vertexCount * 3) {
            originalPositions[i] = posArray[i]
        }
        for (v in 0 until vertexCount) {
            val ox = originalPositions[v * 3].toDouble()
            val oy = originalPositions[v * 3 + 1].toDouble()
            val oz = originalPositions[v * 3 + 2].toDouble()
            radSum += sqrt(ox * ox + oy * oy + oz * oz)
        }
        originalAvgRadius = radSum / vertexCount

        // Build neighbor list from original positions (connect vertices within threshold distance)
        neighbors = buildNeighbors()
    }

    private fun buildNeighbors(): Array<IntArray> {
        // For a SphereGeometry, adjacent vertices are very close on the surface.
        // Use distance threshold based on average edge length.
        val threshold = originalAvgRadius * 0.18 // ~edge length for 64-segment sphere
        val threshSq = threshold * threshold
        val result = Array(vertexCount) { v ->
            val ox = originalPositions[v * 3].toDouble()
            val oy = originalPositions[v * 3 + 1].toDouble()
            val oz = originalPositions[v * 3 + 2].toDouble()
            val nbrs = mutableListOf<Int>()
            for (u in 0 until vertexCount) {
                if (u == v) continue
                val dx = originalPositions[u * 3].toDouble() - ox
                val dy = originalPositions[u * 3 + 1].toDouble() - oy
                val dz = originalPositions[u * 3 + 2].toDouble() - oz
                if (dx * dx + dy * dy + dz * dz < threshSq) {
                    nbrs.add(u)
                }
            }
            nbrs.toIntArray()
        }
        return result
    }

    fun update(rawDt: Double) {
        val dt = rawDt.coerceAtMost(1.0 / 30.0)
        val posArray = posAttr.array
        var energy = 0.0

        for (v in 0 until vertexCount) {
            var localDeform = 0.0
            for (c in 0 until 3) {
                val i = v * 3 + c
                val clampedTarget = targetOffsets[i].toDouble().coerceIn(-maxOffset, maxOffset)
                targetOffsets[i] = clampedTarget.toFloat()

                val orig = originalPositions[i].toDouble()
                val target = orig + clampedTarget
                val current = posArray[i].toDouble()
                val vel = velocities[i].toDouble()

                val force = -springConstant * (current - target) - dampingCoeff * vel
                var newVel = vel + force * dt
                newVel = newVel.coerceIn(-maxVelocity, maxVelocity)
                val newPos = current + newVel * dt

                velocities[i] = newVel.toFloat()
                posArray[i] = newPos.toFloat()

                val displacement = abs(newPos - orig)
                localDeform += displacement * displacement
                energy += newVel * newVel
            }
            deformationMagnitudes[v] = sqrt(localDeform).toFloat()
        }

        totalEnergy = sqrt(energy / vertexCount)

        // Volume preservation: if average radius changed, nudge vertices to compensate
        if (volumePreservation > 0.0) {
            var currentAvgRadius = 0.0
            for (v in 0 until vertexCount) {
                val cx = posArray[v * 3].toDouble()
                val cy = posArray[v * 3 + 1].toDouble()
                val cz = posArray[v * 3 + 2].toDouble()
                currentAvgRadius += sqrt(cx * cx + cy * cy + cz * cz)
            }
            currentAvgRadius /= vertexCount
            if (currentAvgRadius > 0.001) {
                val ratio = originalAvgRadius / currentAvgRadius
                val correction = 1.0 + (ratio - 1.0) * volumePreservation
                if (abs(correction - 1.0) > 0.001) {
                    for (i in 0 until vertexCount * 3) {
                        posArray[i] = (posArray[i] * correction).toFloat()
                    }
                }
            }
        }

        // Laplacian smoothing — blend each vertex toward its neighbors' average
        val smoothStrength = 0.3
        val tempPos = Float32Array(vertexCount * 3)
        for (i in 0 until vertexCount * 3) {
            tempPos[i] = posArray[i]
        }
        for (v in 0 until vertexCount) {
            val nbrs = neighbors[v]
            if (nbrs.isEmpty()) continue
            var ax = 0.0; var ay = 0.0; var az = 0.0
            for (n in nbrs) {
                ax += tempPos[n * 3].toDouble()
                ay += tempPos[n * 3 + 1].toDouble()
                az += tempPos[n * 3 + 2].toDouble()
            }
            ax /= nbrs.size; ay /= nbrs.size; az /= nbrs.size
            posArray[v * 3] = (posArray[v * 3] + (ax - posArray[v * 3]) * smoothStrength).toFloat()
            posArray[v * 3 + 1] = (posArray[v * 3 + 1] + (ay - posArray[v * 3 + 1]) * smoothStrength).toFloat()
            posArray[v * 3 + 2] = (posArray[v * 3 + 2] + (az - posArray[v * 3 + 2]) * smoothStrength).toFloat()
        }

        posAttr.needsUpdate = true
        geometry.computeVertexNormals()
    }

    fun reset() {
        for (i in 0 until vertexCount * 3) {
            targetOffsets[i] = 0f
            velocities[i] = 0f
        }
    }

    fun decayTargets(rate: Double, dt: Double) {
        // Slow decay — foam rubber holds its shape briefly then puffs back
        val factor = (1.0 - rate * dt).coerceIn(0.0, 1.0).toFloat()
        for (i in 0 until vertexCount * 3) {
            targetOffsets[i] = targetOffsets[i] * factor
        }
    }

    fun getOriginalX(index: Int): Double = originalPositions[index * 3].toDouble()
    fun getOriginalY(index: Int): Double = originalPositions[index * 3 + 1].toDouble()
    fun getOriginalZ(index: Int): Double = originalPositions[index * 3 + 2].toDouble()
}
