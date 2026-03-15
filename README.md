# squish.space

3D maths you can touch. A hands-on graphing tool and stress toy built for people who think best when they're fidgeting.

**Live demo: [sotonhack.vercel.app](https://sotonhack.vercel.app)**

Built at SotonHack.

---

## What is this

Two modes, one app:

**Maths** — A 3D equation grapher. Plot surfaces like `z = ax² + by²`, rotate them in 3D, and tweak the coefficients with your hands via webcam. Add multiple equations, see them intersect, type exact values or just pinch and drag. Think Desmos, but you can reach in.

**Chill** — A squishy blob. Push it, pull it, punch it, slice it in half with a karate chop. It deforms with real spring physics and volume preservation. When your brain needs a break from the maths.

Hand tracking is via MediaPipe — no gloves, no controllers, just your webcam and your fingers.

## Controls

### Maths tab

| Input | What it does |
|-------|-------------|
| Mouse drag | Rotate the 3D view |
| Scroll | Zoom |
| ← → arrows | Pan left/right |
| ↑ ↓ arrows | Shift surface up/down (coefficient c) |
| E | Cycle equation type |
| R | Reset coefficients |
| a/b/c inputs | Type exact coefficient values |
| Pinch gesture | Drag to adjust a and b |
| Open hand | Gently orbit the view |

Equation types: Paraboloid, Saddle, Wave, Ripple, Gaussian, Plane.

### Chill tab

| Input | What it does |
|-------|-------------|
| Click | Poke the blob |
| Drag | Rotate |
| Scroll | Zoom |
| W/S/A/D/Q/E/F | Stretch, squeeze, twist |
| Space | Pulse |
| R | Reset shape |
| C | Cycle color |
| Hands near blob | Fingers push into the surface |
| Fast swipe | Slice the blob in two |
| Fast fist | Explode |

## How it works

| Component | Tech |
|-----------|------|
| Language | Kotlin/JS (IR backend, Kotlin Multiplatform) |
| 3D | Three.js r160, custom `@JsModule` external declarations |
| Physics | Per-vertex spring simulation with volume preservation and Laplacian smoothing |
| Hand tracking | MediaPipe Hands (browser, webcam) — landmarks to proximity-based contact |
| Audio | Web Audio API — procedural synthesis, no samples |
| Build | Gradle 8.5, webpack |
| UI | Two tabs, dark sidebar panel, monospace coefficient inputs |

No backend. No accounts. Runs entirely in your browser.

## Project structure

```
src/jsMain/kotlin/
  Main.kt                       entry point, animation loop, gesture wiring
  graph/MathGraph.kt             3D surface renderer, multi-equation, coefficient UI
  deformation/
    SpringPhysics.kt             spring sim, volume preservation, smoothing
    DeformationController.kt     poke, slice, explode, pinch, pull
    WaveSystem.kt                spherical harmonic wave propagation
  gesture/GestureEngine.kt       hand tracking, gesture classification
  audio/SoundEngine.kt           procedural ASMR synthesis
  ui/
    HtmlOverlay.kt               tabs, buttons, breathing overlay
    InputHandler.kt              mouse, keyboard, scroll, touch
  three/                         Three.js external declarations

src/jsMain/resources/
  index.html                     page shell, MediaPipe bridge, finger overlay
  style.css                      dark UI, equation bar, graph panel
```

## Run locally

```bash
chmod +x run.sh
./run.sh
```

Needs JDK 11-21 and Node.js. The script auto-detects or installs both.

Or manually:

```bash
./gradlew jsBrowserDevelopmentRun -Dorg.gradle.java.home=/path/to/jdk
```

Open http://localhost:8080

## Who this is for

People who learn maths by touching things. People whose brains won't stop unless their hands are busy. People who want to see what `z = sin(2sqrt(x² + y²))` actually looks like and then squish it.
