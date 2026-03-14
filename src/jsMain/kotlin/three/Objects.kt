@file:JsModule("three")
@file:JsNonModule

package three

external class Mesh(
    geometry: BufferGeometry = definedExternally,
    material: dynamic = definedExternally
) : Object3D {
    val geometry: BufferGeometry
    val material: dynamic
}

external class AmbientLight(
    color: dynamic = definedExternally,
    intensity: Double = definedExternally
) : Object3D

external class PointLight(
    color: dynamic = definedExternally,
    intensity: Double = definedExternally,
    distance: Double = definedExternally,
    decay: Double = definedExternally
) : Object3D

external class HemisphereLight(
    skyColor: dynamic = definedExternally,
    groundColor: dynamic = definedExternally,
    intensity: Double = definedExternally
) : Object3D

external class DirectionalLight(
    color: dynamic = definedExternally,
    intensity: Double = definedExternally
) : Object3D
