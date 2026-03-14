@file:JsModule("three")
@file:JsNonModule

package three

external class MeshStandardMaterial(params: dynamic = definedExternally) {
    var color: Color
    var roughness: Double
    var metalness: Double
    var wireframe: Boolean
    var flatShading: Boolean
    var vertexColors: Boolean
}

external class MeshPhysicalMaterial(params: dynamic = definedExternally) {
    var color: Color
    var roughness: Double
    var metalness: Double
    var wireframe: Boolean
    var flatShading: Boolean
    var vertexColors: Boolean
    var clearcoat: Double
    var clearcoatRoughness: Double
    var sheen: Double
    var sheenRoughness: Double
    var sheenColor: Color
    var iridescence: Double
    var iridescenceIOR: Double
    var transmission: Double
    var thickness: Double
    var ior: Double
    var envMapIntensity: Double
    var transparent: Boolean
    var opacity: Double
    var needsUpdate: Boolean
    var bumpMap: Texture?
    var bumpScale: Double
    var normalMap: Texture?
    var normalScale: Vector2
    var roughnessMap: Texture?
}
