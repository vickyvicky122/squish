@file:JsModule("three")
@file:JsNonModule

package three

external class PerspectiveCamera(
    fov: Double = definedExternally,
    aspect: Double = definedExternally,
    near: Double = definedExternally,
    far: Double = definedExternally
) : Object3D {
    var aspect: Double
    fun updateProjectionMatrix()
}
