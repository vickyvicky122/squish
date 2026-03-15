package strings

import three.*
import kotlin.math.sin

/**
 * Renders a single elastic string as a thin, graph-like line (Desmos style).
 * Uses a thin TubeGeometry for the main line + a subtle glow tube.
 */
class StringRenderer(private val scene: Scene, private val physics: StringSystem) {

    private val mainMeshes = arrayOfNulls<Mesh>(physics.numStrings)
    private val glowMeshes = arrayOfNulls<Mesh>(physics.numStrings)

    // Graph-like color: bright cyan/blue on dark background
    private val lineColor = Triple(0.3, 0.75, 1.0)

    fun setup() {
        for (i in 0 until physics.numStrings) {
            val curve = buildCurve(i)
            // Very thin tube — graph line feel
            val tubeGeo = TubeGeometry(curve, 128, 0.012, 4, false)

            val mat = MeshStandardMaterial(js("""({
                color: 0x4dc0ff,
                emissive: 0x2090dd,
                emissiveIntensity: 0.6,
                roughness: 0.2,
                metalness: 0.0,
                transparent: true,
                opacity: 1.0
            })"""))
            val mainMesh = Mesh(tubeGeo, mat)
            mainMesh.visible = false
            mainMeshes[i] = mainMesh
            scene.add(mainMesh)

            // Subtle glow halo
            val glowGeo = TubeGeometry(curve, 64, 0.04, 4, false)
            val glowMat = MeshStandardMaterial(js("""({
                color: 0x4dc0ff,
                emissive: 0x2090dd,
                emissiveIntensity: 0.3,
                roughness: 1.0,
                metalness: 0.0,
                transparent: true,
                opacity: 0.15
            })"""))
            val glowMesh = Mesh(glowGeo, glowMat)
            glowMesh.visible = false
            glowMeshes[i] = glowMesh
            scene.add(glowMesh)
        }
    }

    fun update(elapsed: Double) {
        for (i in 0 until physics.numStrings) {
            val curve = buildCurve(i)
            val energy = physics.strings[i].getEnergy()

            // Rebuild main tube — stays thin
            val mainMesh = mainMeshes[i] ?: continue
            val oldMainGeo = mainMesh.geometry
            val newMainGeo = TubeGeometry(curve, 128, 0.012, 4, false)
            js("mainMesh.geometry = newMainGeo")
            oldMainGeo.dispose()

            // Color: brighter when active
            val (cr, cg, cb) = lineColor
            val shimmer = sin(elapsed * 0.8) * 0.05
            val activity = (energy * 30.0).coerceAtMost(0.4)
            val mat = mainMesh.material
            mat.color.r = (cr + activity + shimmer).coerceIn(0.0, 1.0)
            mat.color.g = (cg + activity * 0.5 + shimmer * 0.5).coerceIn(0.0, 1.0)
            mat.color.b = (cb + shimmer * 0.3).coerceIn(0.0, 1.0)
            mat.emissive.r = mat.color.r
            mat.emissive.g = mat.color.g
            mat.emissive.b = mat.color.b
            mat.emissiveIntensity = (0.4 + energy * 15.0).coerceAtMost(1.2)

            // Rebuild glow tube
            val glowMesh = glowMeshes[i] ?: continue
            val oldGlowGeo = glowMesh.geometry
            val glowRadius = 0.04 + (energy * 2.0).coerceAtMost(0.08)
            val newGlowGeo = TubeGeometry(curve, 64, glowRadius, 4, false)
            js("glowMesh.geometry = newGlowGeo")
            oldGlowGeo.dispose()

            val glowMat = glowMesh.material
            glowMat.color.r = mat.color.r
            glowMat.color.g = mat.color.g
            glowMat.color.b = mat.color.b
            glowMat.opacity = (0.1 + energy * 8.0).coerceIn(0.1, 0.35)
        }
    }

    fun setVisible(visible: Boolean) {
        for (i in 0 until physics.numStrings) {
            mainMeshes[i]?.visible = visible
            glowMeshes[i]?.visible = visible
        }
    }

    private fun buildCurve(stringIndex: Int): CatmullRomCurve3 {
        val s = physics.strings[stringIndex]
        val points = Array(s.numPoints) { i ->
            Vector3(s.points[i].x, s.points[i].y, s.points[i].z)
        }
        val curve = CatmullRomCurve3(points)
        curve.curveType = "catmullrom"
        curve.tension = 0.5
        return curve
    }
}
