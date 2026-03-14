import audio.SoundEngine
import deformation.DeformationController
import deformation.SpringPhysics
import gesture.GestureEngine
import gesture.HandGesture
import kotlinx.browser.document
import kotlinx.browser.window
import org.khronos.webgl.Float32Array
import org.khronos.webgl.get
import org.khronos.webgl.set
import three.*
import ui.HtmlOverlay
import ui.InputHandler
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.floor
import kotlin.math.sin
import kotlin.math.sqrt

data class BallColor(val name: String, val r: Double, val g: Double, val b: Double)

val BALL_COLORS = arrayOf(
    BallColor("Lavender",   0.58, 0.48, 0.82),
    BallColor("Soft Blue",  0.42, 0.62, 0.88),
    BallColor("Teal",       0.35, 0.75, 0.72),
    BallColor("Rose",       0.85, 0.48, 0.58),
    BallColor("Peach",      0.92, 0.68, 0.52),
    BallColor("Sage",       0.55, 0.75, 0.55),
    BallColor("Sky",        0.52, 0.72, 0.92),
    BallColor("Coral",      0.90, 0.52, 0.45),
    BallColor("Sand",       0.82, 0.76, 0.62)
)

val THEMES = arrayOf("", "theme-night", "theme-day")
val SCALE_MODES = arrayOf("", "scale-large", "scale-xl")
val SCALE_LABELS = arrayOf("Normal", "Large", "Extra Large")

// Reordered: calm jelly is the recommended default
val STYLE_NAMES = arrayOf("Calm Jelly", "Soft Silicone", "Pearl Dream", "Cloud Foam")

// Poke ripple tracking
data class PokeEvent(val x: Double, val y: Double, val z: Double, val time: Double)

fun main() {
    val scene = Scene()
    val recentPokes = mutableListOf<PokeEvent>()

    val camera = PerspectiveCamera(
        fov = 50.0,
        aspect = window.innerWidth.toDouble() / window.innerHeight.toDouble(),
        near = 0.1,
        far = 100.0
    )
    camera.position.set(0.0, 0.0, 5.5)

    val renderer = WebGLRenderer(js("{ antialias: true, alpha: true }"))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.toneMapping = 0
    renderer.toneMappingExposure = 1.0
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    val appEl = document.getElementById("app")
    if (appEl != null) {
        appEl.appendChild(renderer.domElement)
    } else {
        document.body?.appendChild(renderer.domElement)
    }

    // === Environment map for realistic reflections ===
    val envScene = Scene()
    envScene.background = Color(0xc8d4e4)
    // Warm upper area — creates warm top reflection
    val envGeo = SphereGeometry(8.0, 8, 8)
    val warmEnvMat = MeshStandardMaterial(js("({emissive: 0xfff0dd, emissiveIntensity: 0.9, color: 0x000000})"))
    val warmEnv = Mesh(envGeo, warmEnvMat)
    warmEnv.position.set(6.0, 10.0, 4.0)
    envScene.add(warmEnv)
    // Cool lower area
    val coolEnvMat = MeshStandardMaterial(js("({emissive: 0xd0d8ff, emissiveIntensity: 0.5, color: 0x000000})"))
    val coolEnv = Mesh(envGeo, coolEnvMat)
    coolEnv.position.set(-6.0, -8.0, 6.0)
    envScene.add(coolEnv)
    // Soft accent
    val accentEnvMat = MeshStandardMaterial(js("({emissive: 0xffe8f0, emissiveIntensity: 0.4, color: 0x000000})"))
    val accentEnv = Mesh(envGeo, accentEnvMat)
    accentEnv.position.set(-4.0, 4.0, -8.0)
    envScene.add(accentEnv)

    val pmrem = PMREMGenerator(renderer)
    val envTarget = pmrem.fromScene(envScene)
    scene.environment = envTarget.texture
    pmrem.dispose()

    // === Lighting rig ===
    // Hemisphere light — sky/ground tint for natural depth (replaces flat ambient)
    val hemiLight = HemisphereLight(0xeef2ff, 0x444466, 0.4)
    scene.add(hemiLight)

    // Key light — warm, strong, upper right
    val keyLight = PointLight(0xfff5e6, 2.8, 50.0, 1.5)
    keyLight.position.set(3.0, 4.0, 5.0)
    scene.add(keyLight)

    // Fill light — cool tint, weaker for contrast
    val fillLight = PointLight(0xe0ecff, 0.6, 50.0, 1.5)
    fillLight.position.set(-4.0, -1.0, 3.0)
    scene.add(fillLight)

    // Rim light — orbits behind for sliding edge highlights
    val rimLight = PointLight(0xffffff, 1.8, 50.0, 1.5)
    rimLight.position.set(0.0, -3.0, -3.0)
    scene.add(rimLight)

    // Top accent — crisp overhead highlight
    val accentLight = DirectionalLight(0xf8f4ff, 0.8)
    accentLight.position.set(1.0, 6.0, 3.0)
    scene.add(accentLight)

    // === Geometry ===
    val geometry = IcosahedronGeometry(2.0, 4)
    val posAttr = geometry.getAttribute("position") as BufferAttribute
    val vertexCount = posAttr.count
    val colorArray = Float32Array(vertexCount * 3)
    val colorAttr = BufferAttribute(colorArray, 3)
    geometry.setAttribute("color", colorAttr)
    // Ensure normals exist for fresnel calc
    geometry.computeVertexNormals()

    // === Procedural textures ===
    val texSize = 512

    fun hash(ix: Int, iy: Int): Double {
        val n = ix * 374761393 + iy * 668265263
        val h = (n xor (n shr 13)) * 1274126177
        return (h and 0x7fffffff).toDouble() / 0x7fffffff.toDouble()
    }
    fun smoothNoise(x: Double, y: Double): Double {
        val ix = floor(x).toInt(); val iy = floor(y).toInt()
        val fx = x - floor(x); val fy = y - floor(y)
        val sx = fx * fx * (3.0 - 2.0 * fx); val sy = fy * fy * (3.0 - 2.0 * fy)
        val n00 = hash(ix, iy); val n10 = hash(ix + 1, iy)
        val n01 = hash(ix, iy + 1); val n11 = hash(ix + 1, iy + 1)
        return (n00 + (n10 - n00) * sx) + ((n01 + (n11 - n01) * sx) - (n00 + (n10 - n00) * sx)) * sy
    }

    // Bump map
    val bumpCanvas = (document.createElement("canvas") as HTMLCanvasElement).apply {
        width = texSize; height = texSize
    }
    val bumpCtx = bumpCanvas.getContext("2d") as CanvasRenderingContext2D
    val imageData = bumpCtx.createImageData(texSize.toDouble(), texSize.toDouble())
    val pixels = imageData.data.asDynamic()
    for (py in 0 until texSize) {
        for (px in 0 until texSize) {
            val nx = px.toDouble(); val ny = py.toDouble()
            var v = smoothNoise(nx * 0.03, ny * 0.03) * 0.4
            v += smoothNoise(nx * 0.08, ny * 0.08) * 0.3
            v += smoothNoise(nx * 0.2, ny * 0.2) * 0.2
            v += smoothNoise(nx * 0.5, ny * 0.5) * 0.1
            val b = (v * 255.0).toInt().coerceIn(0, 255)
            val idx = (py * texSize + px) * 4
            pixels[idx] = b; pixels[idx + 1] = b; pixels[idx + 2] = b; pixels[idx + 3] = 255
        }
    }
    bumpCtx.putImageData(imageData, 0.0, 0.0)
    val foamBumpTex = CanvasTexture(bumpCanvas)
    foamBumpTex.wrapS = RepeatWrapping; foamBumpTex.wrapT = RepeatWrapping
    foamBumpTex.repeat.set(3.0, 3.0)

    // Roughness map
    val roughCanvas = (document.createElement("canvas") as HTMLCanvasElement).apply {
        width = texSize; height = texSize
    }
    val roughCtx = roughCanvas.getContext("2d") as CanvasRenderingContext2D
    val roughData = roughCtx.createImageData(texSize.toDouble(), texSize.toDouble())
    val rPx = roughData.data.asDynamic()
    for (py in 0 until texSize) {
        for (px in 0 until texSize) {
            var v = 0.5 + (smoothNoise(px + 100.0, py + 100.0) - 0.5) * 0.3
            v += (smoothNoise(px * 0.15 + 200.0, py * 0.15 + 200.0) - 0.5) * 0.15
            val b = (v * 255.0).toInt().coerceIn(0, 255)
            val idx = (py * texSize + px) * 4
            rPx[idx] = b; rPx[idx + 1] = b; rPx[idx + 2] = b; rPx[idx + 3] = 255
        }
    }
    roughCtx.putImageData(roughData, 0.0, 0.0)
    val foamRoughTex = CanvasTexture(roughCanvas)
    foamRoughTex.wrapS = RepeatWrapping; foamRoughTex.wrapT = RepeatWrapping
    foamRoughTex.repeat.set(3.0, 3.0)

    // === Material — starts as Calm Jelly (the recommended default) ===
    val material = MeshPhysicalMaterial(js("""({
        color: 0xffffff,
        vertexColors: true,
        roughness: 0.06,
        metalness: 0.02,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        sheen: 0.3,
        sheenRoughness: 0.2,
        sheenColor: 0xffffff,
        iridescence: 0.15,
        iridescenceIOR: 1.5,
        transparent: true,
        opacity: 0.72,
        envMapIntensity: 1.5
    })"""))
    val blob = Mesh(geometry, material)
    scene.add(blob)

    // Soft shadow
    val shadowGeo = IcosahedronGeometry(2.4, 1)
    val shadowMat = MeshStandardMaterial(js("""({
        color: 0x000000, transparent: true, opacity: 0.08, roughness: 1.0, metalness: 0.0
    })"""))
    val shadow = Mesh(shadowGeo, shadowMat)
    shadow.position.set(0.0, -2.2, 0.0)
    shadow.scale.set(1.0, 0.02, 1.0)
    scene.add(shadow)

    // Physics + deformation
    val springPhysics = SpringPhysics(geometry)
    val deformController = DeformationController(springPhysics)

    // Sound
    val sound = SoundEngine()
    var soundEnabled = false

    // Gesture recognition
    val gestureEngine = GestureEngine()
    var gesturePokeCooldown = 0.0

    // Input
    val inputHandler = InputHandler()
    inputHandler.setup()

    // === State ===
    var currentColorIndex = 0
    var currentColor = BALL_COLORS[0]
    var currentThemeIndex = 0
    var currentScaleIndex = 0
    var currentStyleIndex = 0

    fun applyBallColor() { currentColor = BALL_COLORS[currentColorIndex] }

    fun applyTheme() {
        val body = document.body ?: return
        THEMES.forEach { if (it.isNotEmpty()) body.classList.remove(it) }
        val theme = THEMES[currentThemeIndex]
        if (theme.isNotEmpty()) body.classList.add(theme)
    }

    fun applyScale() {
        val body = document.body ?: return
        SCALE_MODES.forEach { if (it.isNotEmpty()) body.classList.remove(it) }
        val scale = SCALE_MODES[currentScaleIndex]
        if (scale.isNotEmpty()) body.classList.add(scale)
    }

    fun applyStyle() {
        when (currentStyleIndex) {
            0 -> { // Calm Jelly — translucent, glossy, soft inner glow
                material.roughness = 0.06
                material.metalness = 0.02
                material.clearcoat = 1.0
                material.clearcoatRoughness = 0.02
                material.sheen = 0.3
                material.sheenRoughness = 0.2
                material.iridescence = 0.15
                material.iridescenceIOR = 1.5
                material.transparent = true
                material.opacity = 0.72
                material.bumpMap = null
                material.bumpScale = 0.0
                material.roughnessMap = null
                material.envMapIntensity = 1.5
            }
            1 -> { // Soft Silicone — matte satin, subtle grain, tactile
                material.roughness = 0.78
                material.metalness = 0.0
                material.clearcoat = 0.15
                material.clearcoatRoughness = 0.7
                material.sheen = 0.5
                material.sheenRoughness = 0.7
                material.iridescence = 0.0
                material.iridescenceIOR = 1.3
                material.transparent = false
                material.opacity = 1.0
                material.bumpMap = foamBumpTex
                material.bumpScale = 0.1
                material.roughnessMap = foamRoughTex
                material.envMapIntensity = 0.4
            }
            2 -> { // Pearl Dream — iridescent, color-shifting, magical
                material.roughness = 0.14
                material.metalness = 0.08
                material.clearcoat = 0.85
                material.clearcoatRoughness = 0.08
                material.sheen = 0.7
                material.sheenRoughness = 0.25
                material.iridescence = 1.0
                material.iridescenceIOR = 1.8
                material.transparent = true
                material.opacity = 0.82
                material.bumpMap = foamBumpTex
                material.bumpScale = 0.03
                material.roughnessMap = null
                material.envMapIntensity = 1.2
            }
            3 -> { // Cloud Foam — fluffy, pillowy, diffuse glow
                material.roughness = 1.0
                material.metalness = 0.0
                material.clearcoat = 0.0
                material.clearcoatRoughness = 1.0
                material.sheen = 1.0
                material.sheenRoughness = 0.85
                material.iridescence = 0.0
                material.iridescenceIOR = 1.3
                material.transparent = false
                material.opacity = 1.0
                material.bumpMap = foamBumpTex
                material.bumpScale = 0.18
                material.roughnessMap = foamRoughTex
                material.envMapIntensity = 0.15
            }
        }
        material.needsUpdate = true
    }

    // === UI Overlay ===
    var overlayRef: HtmlOverlay? = null
    val overlay = HtmlOverlay(
        onReset = {
            deformController.reset()
            if (soundEnabled) sound.playReset()
        },
        onToggleSound = {
            soundEnabled = !soundEnabled
            if (soundEnabled) sound.ensureResumed()
            overlayRef?.updateSoundLabel(soundEnabled)
        },
        onCycleTheme = {
            currentThemeIndex = (currentThemeIndex + 1) % THEMES.size
            applyTheme()
        },
        onCycleScale = {
            currentScaleIndex = (currentScaleIndex + 1) % SCALE_MODES.size
            applyScale()
            overlayRef?.updateScaleLabel(SCALE_LABELS[currentScaleIndex])
        },
        onCycleStyle = {
            currentStyleIndex = (currentStyleIndex + 1) % STYLE_NAMES.size
            applyStyle()
            overlayRef?.updateStyleLabel(STYLE_NAMES[currentStyleIndex])
        },
        onToggleGesture = {
            val on = gestureEngine.toggle()
            overlayRef?.updateGestureLabel(on)
        }
    )
    overlayRef = overlay
    overlay.setup()

    val raycaster = Raycaster()
    val mouseVec = Vector2()
    val clock = Clock()

    var squishSoundCooldown = 0.0
    var quoteTimer = 0.0
    val quoteInterval = 180.0
    val quoteDisplayDuration = 10.0
    var quoteDisplayTimer = 0.0
    var lastWasIdle = true

    // Resize
    fun handleResize() {
        val w = window.innerWidth; val h = window.innerHeight
        camera.aspect = w.toDouble() / h.toDouble()
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
        camera.position.z = if (kotlin.math.min(w, h).toDouble() < 500) 7.5 else 5.5
    }
    window.addEventListener("resize", { handleResize() })
    handleResize()

    document.addEventListener("click", { sound.ensureResumed() }, js("{once: true}"))
    document.addEventListener("keydown", { sound.ensureResumed() }, js("{once: true}"))

    // Touch poke — also records ripple event
    document.addEventListener("touchstart", { _ ->
        sound.ensureResumed()
        val touch = js("event.touches[0]")
        if (touch != null) {
            val tx = (touch.clientX as Double / window.innerWidth) * 2.0 - 1.0
            val ty = -(touch.clientY as Double / window.innerHeight) * 2.0 + 1.0
            mouseVec.set(tx, ty)
            raycaster.setFromCamera(mouseVec, camera)
            val intersects = raycaster.intersectObject(blob)
            if (intersects.isNotEmpty()) {
                val pt = intersects[0].point as Vector3
                deformController.applyPoke(pt)
                recentPokes.add(PokeEvent(pt.x, pt.y, pt.z, clock.getElapsedTime()))
                if (recentPokes.size > 8) recentPokes.removeAt(0)
                if (soundEnabled) sound.playPoke()
            }
        }
    })

    applyBallColor()
    applyTheme()
    applyScale()
    applyStyle()

    // === Animation loop ===
    fun animate() {
        window.requestAnimationFrame { animate() }

        val dt = clock.getDelta()
        val elapsed = clock.getElapsedTime()
        overlay.updateBreathing(dt)
        val currentSection = overlay.getCurrentSection()

        // Expire old poke ripples
        recentPokes.removeAll { elapsed - it.time > 1.5 }

        // --- Dynamic rim light orbit ---
        rimLight.position.set(
            sin(elapsed * 0.25) * 3.5,
            -2.5 + sin(elapsed * 0.4) * 1.0,
            -2.5 + cos(elapsed * 0.25) * 2.0
        )

        // --- Quote system ---
        if (currentSection == "deform" || currentSection == "calm") {
            quoteTimer += dt
            val qt = inputHandler.timeSinceLastInteraction()
            val idle = qt > 5.0
            if (quoteTimer > quoteInterval || (idle && !lastWasIdle && qt > 3.0)) {
                overlay.showQuote(); quoteDisplayTimer = 0.0; quoteTimer = 0.0
            }
            lastWasIdle = idle
            if (overlay.isQuoteVisible()) {
                quoteDisplayTimer += dt
                if (quoteDisplayTimer > quoteDisplayDuration) overlay.hideQuote()
            }
        }

        // --- Input (deform section only) ---
        if (currentSection == "deform") {
            if (" " in inputHandler.pressedKeys) {
                deformController.applyPulse()
                if (soundEnabled) sound.playPulse()
                inputHandler.pressedKeys.remove(" ")
            }
            if ("r" in inputHandler.pressedKeys || "R" in inputHandler.pressedKeys) {
                deformController.reset()
                if (soundEnabled) sound.playReset()
                inputHandler.pressedKeys.remove("r"); inputHandler.pressedKeys.remove("R")
            }
            if ("c" in inputHandler.pressedKeys || "C" in inputHandler.pressedKeys) {
                currentColorIndex = (currentColorIndex + 1) % BALL_COLORS.size
                applyBallColor()
                if (soundEnabled) sound.playClick()
                inputHandler.pressedKeys.remove("c"); inputHandler.pressedKeys.remove("C")
            }
            deformController.applyKeyboardDeformation(inputHandler.pressedKeys, dt)
            squishSoundCooldown -= dt
            if (soundEnabled && deformController.isDeforming() && squishSoundCooldown <= 0.0) {
                sound.playSquish(springPhysics.totalEnergy.coerceAtMost(1.0))
                squishSoundCooldown = 0.15
            }
            if (!deformController.isDeforming()) springPhysics.decayTargets(1.8, dt)
        } else {
            springPhysics.decayTargets(1.8, dt)
        }

        // === Gesture input ===
        gestureEngine.update(dt)
        if (gestureEngine.enabled && gestureEngine.handDetected) {
            if (currentSection == "deform") {
                gesturePokeCooldown = (gesturePokeCooldown - dt).coerceAtLeast(0.0)
                when (gestureEngine.currentGesture) {
                    HandGesture.OPEN -> {
                        // Expand: stretch up + widen
                        val gestureKeys = mutableSetOf("w", "d")
                        deformController.applyKeyboardDeformation(gestureKeys, dt * 0.7)
                        if (soundEnabled && squishSoundCooldown <= 0.0) {
                            sound.playExpand()
                            squishSoundCooldown = 0.15
                        }
                    }
                    HandGesture.CLOSE -> {
                        // Squeeze inward
                        val gestureKeys = mutableSetOf("f")
                        deformController.applyKeyboardDeformation(gestureKeys, dt)
                        if (soundEnabled && squishSoundCooldown <= 0.0) {
                            sound.playSqueeze()
                            squishSoundCooldown = 0.15
                        }
                    }
                    HandGesture.POINTER -> {
                        // Poke at fingertip position (throttled)
                        if (gesturePokeCooldown <= 0.0) {
                            val (ndcX, ndcY) = gestureEngine.getFingerNDC()
                            mouseVec.set(ndcX, ndcY)
                            raycaster.setFromCamera(mouseVec, camera)
                            val intersects = raycaster.intersectObject(blob)
                            if (intersects.isNotEmpty()) {
                                val pt = intersects[0].point as Vector3
                                deformController.applyPoke(pt, radius = 0.8, strength = -0.3)
                                recentPokes.add(PokeEvent(pt.x, pt.y, pt.z, elapsed))
                                if (recentPokes.size > 8) recentPokes.removeAt(0)
                                if (soundEnabled) sound.playPoke()
                            }
                            gesturePokeCooldown = 0.15
                        }
                    }
                    HandGesture.VICTORY -> {
                        // Stretch vertically
                        val gestureKeys = mutableSetOf("w")
                        deformController.applyKeyboardDeformation(gestureKeys, dt)
                        if (soundEnabled && squishSoundCooldown <= 0.0) {
                            sound.playStretch()
                            squishSoundCooldown = 0.15
                        }
                    }
                    HandGesture.OK -> {
                        if (gestureEngine.shouldReset()) {
                            deformController.reset()
                            if (soundEnabled) sound.playReset()
                        }
                    }
                    HandGesture.THUMBS_UP -> {
                        if (gestureEngine.shouldCycleColor()) {
                            currentColorIndex = (currentColorIndex + 1) % BALL_COLORS.size
                            applyBallColor()
                            if (soundEnabled) sound.playBubble()
                        }
                    }
                    HandGesture.SPREAD -> {
                        if (gestureEngine.shouldExplode()) {
                            deformController.applyExplode()
                            if (soundEnabled) sound.playExplode()
                        }
                    }
                    HandGesture.HORNS -> {
                        if (gestureEngine.shouldScramble()) {
                            deformController.applyScramble()
                            if (soundEnabled) sound.playScramble()
                        }
                    }
                    HandGesture.PUNCH -> {
                        if (gestureEngine.shouldPunch()) {
                            // Punch direction from hand movement (mirrored)
                            deformController.applyPunch(
                                -gestureEngine.handDeltaX * 20.0,
                                -gestureEngine.handDeltaY * 20.0
                            )
                            if (soundEnabled) sound.playPunch()
                        }
                    }
                    HandGesture.NONE -> {}
                }
            }
        }

        // Global shortcuts
        if ("m" in inputHandler.pressedKeys || "M" in inputHandler.pressedKeys) {
            soundEnabled = !soundEnabled
            if (soundEnabled) sound.ensureResumed()
            overlay.updateSoundLabel(soundEnabled)
            inputHandler.pressedKeys.remove("m"); inputHandler.pressedKeys.remove("M")
        }
        if ("t" in inputHandler.pressedKeys || "T" in inputHandler.pressedKeys) {
            currentThemeIndex = (currentThemeIndex + 1) % THEMES.size; applyTheme()
            inputHandler.pressedKeys.remove("t"); inputHandler.pressedKeys.remove("T")
        }

        // Rotation (mouse + gesture)
        val (rotX, rotY) = inputHandler.updateRotationInertia(dt)
        if (rotX != 0.0 || rotY != 0.0) {
            blob.rotation.x += rotX; blob.rotation.y += rotY
        } else if (gestureEngine.enabled && gestureEngine.handDetected &&
                   gestureEngine.currentGesture == HandGesture.NONE) {
            // Hand visible but no gesture → use hand movement for rotation
            val (gRotX, gRotY) = gestureEngine.getRotationDelta()
            blob.rotation.x += gRotX
            blob.rotation.y += gRotY
        } else if (!inputHandler.isMouseDown) {
            blob.rotation.y += if (currentSection == "calm") 0.0006 else 0.0015
        }

        // Idle breathing — subtle scale pulse, always alive
        val breathScale = 1.0 + sin(elapsed * 0.5) * 0.015
        blob.scale.set(breathScale, breathScale, breathScale)

        // Idle floating (gesture activity counts as interaction)
        val idleTime = inputHandler.timeSinceLastInteraction()
        val isIdle = idleTime > 5.0 && !(gestureEngine.enabled && gestureEngine.handDetected)
        if (isIdle || currentSection == "calm") {
            blob.position.y = sin(elapsed * 0.8) * 0.04
        } else {
            blob.position.y += (0.0 - blob.position.y) * 0.05
        }

        // Scroll zoom
        val scroll = inputHandler.consumeScrollDelta()
        if (scroll != 0.0) camera.position.z = (camera.position.z + scroll * 0.003).coerceIn(3.0, 10.0)

        // Click poke + ripple tracking
        if (currentSection == "deform") {
            val click = inputHandler.consumeClick()
            if (click != null) {
                mouseVec.set(click.first, click.second)
                raycaster.setFromCamera(mouseVec, camera)
                val intersects = raycaster.intersectObject(blob)
                if (intersects.isNotEmpty()) {
                    val pt = intersects[0].point as Vector3
                    deformController.applyPoke(pt)
                    recentPokes.add(PokeEvent(pt.x, pt.y, pt.z, elapsed))
                    if (recentPokes.size > 8) recentPokes.removeAt(0)
                    if (soundEnabled) sound.playPoke()
                }
            }
        } else {
            inputHandler.consumeClick()
        }

        // Physics
        springPhysics.update(dt)

        // Gradually restore boosted limits after dramatic effects (explode/scramble/punch)
        if (springPhysics.maxOffset > 1.2) {
            springPhysics.maxOffset = (springPhysics.maxOffset - dt * 1.5).coerceAtLeast(1.2)
        }
        if (springPhysics.maxVelocity > 6.0) {
            springPhysics.maxVelocity = (springPhysics.maxVelocity - dt * 7.0).coerceAtLeast(6.0)
        }

        if (soundEnabled) sound.updateDrone(springPhysics.totalEnergy.coerceAtMost(2.0) / 2.0)

        // ============================================
        // === Per-vertex shader-like coloring pass ===
        // ============================================

        // Per-style effect strengths
        val fresnelStr: Double
        val subsurfaceStr: Double
        val rippleStr: Double
        val shimmerAmp: Double
        val compressStr: Double
        val stretchStr: Double
        val driftAmp: Double
        // Fresnel tint (r, g, b) per style
        var frTintR: Double; var frTintG: Double; var frTintB: Double
        val pearlescent: Boolean

        when (currentStyleIndex) {
            0 -> { // Calm Jelly
                fresnelStr = 0.35; subsurfaceStr = 0.12; rippleStr = 0.35
                shimmerAmp = 0.05; compressStr = 0.15; stretchStr = 0.25; driftAmp = 0.06
                frTintR = 0.7; frTintG = 0.82; frTintB = 1.0; pearlescent = false
            }
            1 -> { // Soft Silicone
                fresnelStr = 0.1; subsurfaceStr = 0.03; rippleStr = 0.15
                shimmerAmp = 0.02; compressStr = 0.28; stretchStr = 0.12; driftAmp = 0.03
                frTintR = 0.92; frTintG = 0.88; frTintB = 0.78; pearlescent = false
            }
            2 -> { // Pearl Dream
                fresnelStr = 0.45; subsurfaceStr = 0.08; rippleStr = 0.4
                shimmerAmp = 0.08; compressStr = 0.12; stretchStr = 0.2; driftAmp = 0.07
                frTintR = 0.8; frTintG = 0.7; frTintB = 1.0; pearlescent = true
            }
            else -> { // Cloud Foam
                fresnelStr = 0.08; subsurfaceStr = 0.18; rippleStr = 0.1
                shimmerAmp = 0.025; compressStr = 0.1; stretchStr = 0.08; driftAmp = 0.03
                frTintR = 0.92; frTintG = 0.9; frTintB = 0.84; pearlescent = false
            }
        }

        val colors = colorAttr.array
        val baseR = currentColor.r; val baseG = currentColor.g; val baseB = currentColor.b
        val normalAttr = geometry.getAttribute("normal") as BufferAttribute
        val camZ = camera.position.z

        for (v in 0 until vertexCount) {
            // Current deformed position (for fresnel + ripple distance)
            val px = posAttr.array[v * 3].toDouble()
            val py = posAttr.array[v * 3 + 1].toDouble()
            val pz = posAttr.array[v * 3 + 2].toDouble()

            // Vertex normal (recomputed after physics)
            val nx = normalAttr.getX(v)
            val ny = normalAttr.getY(v)
            val nz = normalAttr.getZ(v)

            // View direction (camera to vertex, unnormalized)
            val vdx = -px; val vdy = -py; val vdz = camZ - pz
            val vdLen = sqrt(vdx * vdx + vdy * vdy + vdz * vdz)
            val dotNV = if (vdLen > 0.001) (nx * vdx + ny * vdy + nz * vdz) / vdLen else 1.0

            // === Fresnel rim glow ===
            val fresnelRaw = (1.0 - abs(dotNV)).coerceIn(0.0, 1.0)
            val fresnel = fresnelRaw * fresnelRaw * fresnelStr

            // For pearlescent: iridescent color-shifting fresnel
            var fgR: Double; var fgG: Double; var fgB: Double
            if (pearlescent) {
                val ox = springPhysics.getOriginalX(v)
                val hueAngle = fresnelRaw * 3.0 + sin(elapsed * 0.2 + sqrt(ox * ox + py * py) * 2.0)
                fgR = (sin(hueAngle) * 0.5 + 0.5) * fresnel
                fgG = (sin(hueAngle + 2.094) * 0.5 + 0.5) * fresnel
                fgB = (sin(hueAngle + 4.189) * 0.5 + 0.5) * fresnel
            } else {
                fgR = fresnel * frTintR
                fgG = fresnel * frTintG
                fgB = fresnel * frTintB
            }

            // === Subsurface glow fake ===
            // Light passing through: center-facing areas get warm glow
            val sss = abs(dotNV).coerceIn(0.0, 1.0) * subsurfaceStr
            val sssR = sss * 1.1  // warm tint
            val sssG = sss * 0.7
            val sssB = sss * 0.4

            // === Spatial effects from original position ===
            val ox = springPhysics.getOriginalX(v)
            val oy = springPhysics.getOriginalY(v)
            val oz = springPhysics.getOriginalZ(v)
            val dist = sqrt(ox * ox + oy * oy + oz * oz)

            // Radial gradient — center brighter, edges deeper (stronger for 3D depth)
            val radial = 1.0 - (dist / 2.2).coerceIn(0.0, 1.0) * 0.25

            // Vertical gradient — top lighter, bottom richer
            val vertical = 1.0 + (oy / 2.5).coerceIn(-1.0, 1.0) * 0.14

            // === Animated gradient drift ===
            val drift1 = sin(elapsed * 0.25 + dist * 1.2 + oy * 0.8) * driftAmp
            val drift2 = cos(elapsed * 0.18 + ox * 1.5) * driftAmp * 0.7

            // === Shimmer — slow noise-based sparkle ===
            val shimX = ox * 2.0 + elapsed * 0.12
            val shimY = oz * 2.0 + elapsed * 0.1
            val shimmer = (smoothNoise(shimX, shimY) - 0.5) * shimmerAmp

            // === Deformation response ===
            val deform = springPhysics.deformationMagnitudes[v].toDouble()
            val stretchGlow = (deform / 1.0).coerceIn(0.0, 1.0) * stretchStr
            val compressFade = 1.0 - (deform / 1.5).coerceIn(0.0, 1.0) * compressStr

            // === Poke ripple highlights ===
            var rippleGlow = 0.0
            for (poke in recentPokes) {
                val age = elapsed - poke.time
                if (age < 0.0 || age > 1.5) continue
                val dx = px - poke.x; val dy = py - poke.y; val dz2 = pz - poke.z
                val pokeDist = sqrt(dx * dx + dy * dy + dz2 * dz2)
                val ringRadius = age * 2.5
                val ringDist = abs(pokeDist - ringRadius)
                val ringFalloff = (1.0 - ringDist / 0.4).coerceIn(0.0, 1.0)
                val fade = (1.0 - age / 1.5).coerceIn(0.0, 1.0)
                rippleGlow += ringFalloff * fade * rippleStr
            }
            rippleGlow = rippleGlow.coerceAtMost(0.5)

            // === Combine all layers ===
            val baseFactor = radial * vertical * compressFade

            var r = baseR * baseFactor + drift1 + shimmer
            var g = baseG * baseFactor + drift2 + shimmer * 0.7
            var b = baseB * baseFactor - drift1 * 0.3 + shimmer * 0.5

            // Add stretch brightening
            r += stretchGlow * 0.25
            g += stretchGlow * 0.15
            b += stretchGlow * 0.1

            // Add fresnel edge glow
            r += fgR; g += fgG; b += fgB

            // Add subsurface warmth
            r += sssR; g += sssG; b += sssB

            // Add poke ripple (white-ish glow)
            r += rippleGlow * 0.9
            g += rippleGlow * 0.92
            b += rippleGlow * 0.95

            colors[v * 3] = r.coerceIn(0.0, 1.0).toFloat()
            colors[v * 3 + 1] = g.coerceIn(0.0, 1.0).toFloat()
            colors[v * 3 + 2] = b.coerceIn(0.0, 1.0).toFloat()
        }
        colorAttr.needsUpdate = true

        // Shadow
        val energy = springPhysics.totalEnergy
        shadow.scale.set(1.0 + energy * 0.08, 0.02, 1.0 + energy * 0.08)

        renderer.render(scene, camera)
    }

    animate()
}
