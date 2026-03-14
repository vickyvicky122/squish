(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'three', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('three'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof three === 'undefined') {
      throw new Error("Error loading module 'squishy-blob'. Its dependency 'three' was not found. Please, check whether 'three' is loaded prior to 'squishy-blob'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'squishy-blob'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'squishy-blob'.");
    }
    root['squishy-blob'] = factory(typeof this['squishy-blob'] === 'undefined' ? {} : this['squishy-blob'], three, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, $module$three, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Scene = $module$three.Scene;
  var PerspectiveCamera = $module$three.PerspectiveCamera;
  var WebGLRenderer = $module$three.WebGLRenderer;
  var Color = $module$three.Color;
  var SphereGeometry = $module$three.SphereGeometry;
  var MeshStandardMaterial = $module$three.MeshStandardMaterial;
  var Mesh = $module$three.Mesh;
  var PMREMGenerator = $module$three.PMREMGenerator;
  var HemisphereLight = $module$three.HemisphereLight;
  var PointLight = $module$three.PointLight;
  var DirectionalLight = $module$three.DirectionalLight;
  var BufferAttribute = $module$three.BufferAttribute;
  var CanvasTexture = $module$three.CanvasTexture;
  var RepeatWrapping = $module$three.RepeatWrapping;
  var MeshPhysicalMaterial = $module$three.MeshPhysicalMaterial;
  var Raycaster = $module$three.Raycaster;
  var Vector2 = $module$three.Vector2;
  var Clock = $module$three.Clock;
  var Vector3 = $module$three.Vector3;
  var hypot = Math.hypot;
  var protoOf = kotlin_kotlin.$_$.v;
  var VOID = kotlin_kotlin.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.s;
  var getNumberHashCode = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.e1;
  var equals = kotlin_kotlin.$_$.q;
  var classMeta = kotlin_kotlin.$_$.p;
  var setMetadataFor = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.u;
  var coerceIn = kotlin_kotlin.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.o;
  var removeAll = kotlin_kotlin.$_$.l;
  var coerceAtMost = kotlin_kotlin.$_$.z;
  var coerceAtLeast = kotlin_kotlin.$_$.y;
  var mutableSetOf = kotlin_kotlin.$_$.k;
  var get_PI = kotlin_kotlin.$_$.x;
  var coerceIn_0 = kotlin_kotlin.$_$.a1;
  var Default_getInstance = kotlin_kotlin.$_$.f;
  var THROW_IAE = kotlin_kotlin.$_$.f1;
  var enumEntries = kotlin_kotlin.$_$.m;
  var Enum = kotlin_kotlin.$_$.c1;
  var hashCode = kotlin_kotlin.$_$.t;
  var println = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.b;
  var average = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.g1;
  var Pair = kotlin_kotlin.$_$.d1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i;
  var emptyList = kotlin_kotlin.$_$.j;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.e;
  var isNaN_0 = kotlin_kotlin.$_$.h1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BallColor, 'BallColor', classMeta);
  setMetadataFor(PokeEvent, 'PokeEvent', classMeta);
  setMetadataFor(SoundEngine, 'SoundEngine', classMeta, VOID, VOID, SoundEngine);
  setMetadataFor(DeformationController, 'DeformationController', classMeta);
  setMetadataFor(SpringPhysics, 'SpringPhysics', classMeta);
  setMetadataFor(WaveSystem, 'WaveSystem', classMeta, VOID, VOID, WaveSystem);
  setMetadataFor(HandGesture, 'HandGesture', classMeta, Enum);
  setMetadataFor(Finger3D, 'Finger3D', classMeta);
  setMetadataFor(Hand3DState, 'Hand3DState', classMeta);
  setMetadataFor(GestureEngine, 'GestureEngine', classMeta, VOID, VOID, GestureEngine);
  setMetadataFor(HtmlOverlay, 'HtmlOverlay', classMeta);
  setMetadataFor(InputHandler, 'InputHandler', classMeta, VOID, VOID, InputHandler);
  //endregion
  function get_BALL_COLORS() {
    _init_properties_Main_kt__xi25uv();
    return BALL_COLORS;
  }
  var BALL_COLORS;
  function get_THEMES() {
    _init_properties_Main_kt__xi25uv();
    return THEMES;
  }
  var THEMES;
  function get_SCALE_MODES() {
    _init_properties_Main_kt__xi25uv();
    return SCALE_MODES;
  }
  var SCALE_MODES;
  function get_SCALE_LABELS() {
    _init_properties_Main_kt__xi25uv();
    return SCALE_LABELS;
  }
  var SCALE_LABELS;
  function get_STYLE_NAMES() {
    _init_properties_Main_kt__xi25uv();
    return STYLE_NAMES;
  }
  var STYLE_NAMES;
  function BallColor(name, r, g, b) {
    this.name_1 = name;
    this.r_1 = r;
    this.g_1 = g;
    this.b_1 = b;
  }
  protoOf(BallColor).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(BallColor).get_r_1mhr61_k$ = function () {
    return this.r_1;
  };
  protoOf(BallColor).get_g_1mhr5q_k$ = function () {
    return this.g_1;
  };
  protoOf(BallColor).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(BallColor).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(BallColor).component2_7eebsb_k$ = function () {
    return this.r_1;
  };
  protoOf(BallColor).component3_7eebsa_k$ = function () {
    return this.g_1;
  };
  protoOf(BallColor).component4_7eebs9_k$ = function () {
    return this.b_1;
  };
  protoOf(BallColor).copy_pt7br5_k$ = function (name, r, g, b) {
    return new BallColor(name, r, g, b);
  };
  protoOf(BallColor).copy$default_3purka_k$ = function (name, r, g, b, $super) {
    name = name === VOID ? this.name_1 : name;
    r = r === VOID ? this.r_1 : r;
    g = g === VOID ? this.g_1 : g;
    b = b === VOID ? this.b_1 : b;
    return $super === VOID ? this.copy_pt7br5_k$(name, r, g, b) : $super.copy_pt7br5_k$.call(this, name, r, g, b);
  };
  protoOf(BallColor).toString = function () {
    return 'BallColor(name=' + this.name_1 + ', r=' + this.r_1 + ', g=' + this.g_1 + ', b=' + this.b_1 + ')';
  };
  protoOf(BallColor).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + getNumberHashCode(this.r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b_1) | 0;
    return result;
  };
  protoOf(BallColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BallColor))
      return false;
    var tmp0_other_with_cast = other instanceof BallColor ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!equals(this.r_1, tmp0_other_with_cast.r_1))
      return false;
    if (!equals(this.g_1, tmp0_other_with_cast.g_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    return true;
  };
  function PokeEvent(x, y, z, time) {
    this.x_1 = x;
    this.y_1 = y;
    this.z_1 = z;
    this.time_1 = time;
  }
  protoOf(PokeEvent).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(PokeEvent).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(PokeEvent).get_z_1mhr69_k$ = function () {
    return this.z_1;
  };
  protoOf(PokeEvent).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(PokeEvent).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(PokeEvent).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(PokeEvent).component3_7eebsa_k$ = function () {
    return this.z_1;
  };
  protoOf(PokeEvent).component4_7eebs9_k$ = function () {
    return this.time_1;
  };
  protoOf(PokeEvent).copy_afmpo5_k$ = function (x, y, z, time) {
    return new PokeEvent(x, y, z, time);
  };
  protoOf(PokeEvent).copy$default_e7v467_k$ = function (x, y, z, time, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    z = z === VOID ? this.z_1 : z;
    time = time === VOID ? this.time_1 : time;
    return $super === VOID ? this.copy_afmpo5_k$(x, y, z, time) : $super.copy_afmpo5_k$.call(this, x, y, z, time);
  };
  protoOf(PokeEvent).toString = function () {
    return 'PokeEvent(x=' + this.x_1 + ', y=' + this.y_1 + ', z=' + this.z_1 + ', time=' + this.time_1 + ')';
  };
  protoOf(PokeEvent).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.time_1) | 0;
    return result;
  };
  protoOf(PokeEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PokeEvent))
      return false;
    var tmp0_other_with_cast = other instanceof PokeEvent ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    if (!equals(this.z_1, tmp0_other_with_cast.z_1))
      return false;
    if (!equals(this.time_1, tmp0_other_with_cast.time_1))
      return false;
    return true;
  };
  function main() {
    _init_properties_Main_kt__xi25uv();
    var scene = new Scene();
    // Inline function 'kotlin.collections.mutableListOf' call
    var recentPokes = ArrayList_init_$Create$();
    var camera = new PerspectiveCamera(50.0, window.innerWidth / window.innerHeight, 0.1, 100.0);
    camera.position.set(0.0, 0.0, 5.5);
    var renderer = new WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = 0;
    renderer.toneMappingExposure = 1.0;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    var appEl = document.getElementById('app');
    if (!(appEl == null)) {
      appEl.appendChild(renderer.domElement);
    } else {
      var tmp0_safe_receiver = document.body;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.appendChild(renderer.domElement);
    }
    var envScene = new Scene();
    envScene.background = new Color(13161700);
    var envGeo = new SphereGeometry(8.0, 8, 8);
    var warmEnvMat = new MeshStandardMaterial({emissive: 16773341, emissiveIntensity: 0.9, color: 0});
    var warmEnv = new Mesh(envGeo, warmEnvMat);
    warmEnv.position.set(6.0, 10.0, 4.0);
    envScene.add(warmEnv);
    var coolEnvMat = new MeshStandardMaterial({emissive: 13687039, emissiveIntensity: 0.5, color: 0});
    var coolEnv = new Mesh(envGeo, coolEnvMat);
    coolEnv.position.set(-6.0, -8.0, 6.0);
    envScene.add(coolEnv);
    var accentEnvMat = new MeshStandardMaterial({emissive: 16771312, emissiveIntensity: 0.4, color: 0});
    var accentEnv = new Mesh(envGeo, accentEnvMat);
    accentEnv.position.set(-4.0, 4.0, -8.0);
    envScene.add(accentEnv);
    var pmrem = new PMREMGenerator(renderer);
    var envTarget = pmrem.fromScene(envScene);
    scene.environment = envTarget.texture;
    pmrem.dispose();
    var hemiLight = new HemisphereLight(15659775, 4473958, 0.4);
    scene.add(hemiLight);
    var keyLight = new PointLight(16774630, 2.8, 50.0, 1.5);
    keyLight.position.set(3.0, 4.0, 5.0);
    scene.add(keyLight);
    var fillLight = new PointLight(14740735, 0.6, 50.0, 1.5);
    fillLight.position.set(-4.0, -1.0, 3.0);
    scene.add(fillLight);
    var rimLight = new PointLight(16777215, 1.8, 50.0, 1.5);
    rimLight.position.set(0.0, -3.0, -3.0);
    scene.add(rimLight);
    var accentLight = new DirectionalLight(16315647, 0.8);
    accentLight.position.set(1.0, 6.0, 3.0);
    scene.add(accentLight);
    var geometry = new SphereGeometry(2.0, 32, 24);
    var tmp = geometry.getAttribute('position');
    var posAttr = tmp instanceof BufferAttribute ? tmp : THROW_CCE();
    var vertexCount = posAttr.count;
    var colorArray = new Float32Array(imul(vertexCount, 3));
    var colorAttr = new BufferAttribute(colorArray, 3);
    geometry.setAttribute('color', colorAttr);
    geometry.computeVertexNormals();
    var texSize = 256;
    // Inline function 'kotlin.apply' call
    var tmp_0 = document.createElement('canvas');
    var this_0 = tmp_0 instanceof HTMLCanvasElement ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'main.<anonymous>' call
    this_0.width = texSize;
    this_0.height = texSize;
    var bumpCanvas = this_0;
    var tmp_1 = bumpCanvas.getContext('2d');
    var bumpCtx = tmp_1 instanceof CanvasRenderingContext2D ? tmp_1 : THROW_CCE();
    var imageData = bumpCtx.createImageData(texSize, texSize);
    // Inline function 'kotlin.js.asDynamic' call
    var pixels = imageData.data;
    var inductionVariable = 0;
    if (inductionVariable < texSize)
      do {
        var py = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < texSize)
          do {
            var px = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var nx = px;
            var ny = py;
            var v = main$smoothNoise(nx * 0.03, ny * 0.03) * 0.4;
            v = v + main$smoothNoise(nx * 0.08, ny * 0.08) * 0.3;
            v = v + main$smoothNoise(nx * 0.2, ny * 0.2) * 0.2;
            v = v + main$smoothNoise(nx * 0.5, ny * 0.5) * 0.1;
            var b = coerceIn(numberToInt(v * 255.0), 0, 255);
            var idx = imul(imul(py, texSize) + px | 0, 4);
            pixels[idx] = b;
            pixels[idx + 1 | 0] = b;
            pixels[idx + 2 | 0] = b;
            pixels[idx + 3 | 0] = 255;
          }
           while (inductionVariable_0 < texSize);
      }
       while (inductionVariable < texSize);
    bumpCtx.putImageData(imageData, 0.0, 0.0);
    var foamBumpTex = new CanvasTexture(bumpCanvas);
    foamBumpTex.wrapS = RepeatWrapping;
    foamBumpTex.wrapT = RepeatWrapping;
    foamBumpTex.repeat.set(3.0, 3.0);
    // Inline function 'kotlin.apply' call
    var tmp_2 = document.createElement('canvas');
    var this_1 = tmp_2 instanceof HTMLCanvasElement ? tmp_2 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'main.<anonymous>' call
    this_1.width = texSize;
    this_1.height = texSize;
    var roughCanvas = this_1;
    var tmp_3 = roughCanvas.getContext('2d');
    var roughCtx = tmp_3 instanceof CanvasRenderingContext2D ? tmp_3 : THROW_CCE();
    var roughData = roughCtx.createImageData(texSize, texSize);
    // Inline function 'kotlin.js.asDynamic' call
    var rPx = roughData.data;
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < texSize)
      do {
        var py_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var inductionVariable_2 = 0;
        if (inductionVariable_2 < texSize)
          do {
            var px_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var v_0 = 0.5 + (main$smoothNoise(px_0 + 100.0, py_0 + 100.0) - 0.5) * 0.3;
            v_0 = v_0 + (main$smoothNoise(px_0 * 0.15 + 200.0, py_0 * 0.15 + 200.0) - 0.5) * 0.15;
            var b_0 = coerceIn(numberToInt(v_0 * 255.0), 0, 255);
            var idx_0 = imul(imul(py_0, texSize) + px_0 | 0, 4);
            rPx[idx_0] = b_0;
            rPx[idx_0 + 1 | 0] = b_0;
            rPx[idx_0 + 2 | 0] = b_0;
            rPx[idx_0 + 3 | 0] = 255;
          }
           while (inductionVariable_2 < texSize);
      }
       while (inductionVariable_1 < texSize);
    roughCtx.putImageData(roughData, 0.0, 0.0);
    var foamRoughTex = new CanvasTexture(roughCanvas);
    foamRoughTex.wrapS = RepeatWrapping;
    foamRoughTex.wrapT = RepeatWrapping;
    foamRoughTex.repeat.set(3.0, 3.0);
    var material = new MeshPhysicalMaterial({color: 16777215, vertexColors: true, roughness: 0.02, metalness: 0.0, clearcoat: 1.0, clearcoatRoughness: 0.01, sheen: 0.0, sheenRoughness: 0.0, sheenColor: 16777215, iridescence: 0.15, iridescenceIOR: 1.33, transmission: 0.85, thickness: 1.5, ior: 1.33, transparent: true, opacity: 0.95, envMapIntensity: 2.0});
    var blob = new Mesh(geometry, material);
    scene.add(blob);
    var shadowGeo = new SphereGeometry(2.4, 16, 12);
    var shadowMat = new MeshStandardMaterial({color: 0, transparent: true, opacity: 0.08, roughness: 1.0, metalness: 0.0});
    var shadow = new Mesh(shadowGeo, shadowMat);
    shadow.position.set(0.0, -2.2, 0.0);
    shadow.scale.set(1.0, 0.02, 1.0);
    scene.add(shadow);
    var springPhysics = new SpringPhysics(geometry);
    var deformController = new DeformationController(springPhysics);
    var waveSystem = new WaveSystem();
    var sound = new SoundEngine();
    var soundEnabled = {_v: false};
    var gestureEngine = new GestureEngine();
    var gesturePokeCooldown = {_v: 0.0};
    var inputHandler = new InputHandler();
    inputHandler.setup_2u6ser_k$();
    var currentColorIndex = {_v: 0};
    var currentColor = {_v: get_BALL_COLORS()[0]};
    var currentThemeIndex = {_v: 0};
    var currentScaleIndex = {_v: 0};
    var currentStyleIndex = {_v: 0};
    var overlayRef = {_v: null};
    var tmp_4 = main$lambda(deformController, waveSystem, soundEnabled, sound);
    var tmp_5 = main$lambda_0(soundEnabled, sound, overlayRef);
    var tmp_6 = main$lambda_1(currentThemeIndex);
    var tmp_7 = main$lambda_2(currentScaleIndex, overlayRef);
    var tmp_8 = main$lambda_3(currentStyleIndex, overlayRef, material, foamBumpTex);
    var overlay = new HtmlOverlay(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, main$lambda_4(gestureEngine, overlayRef));
    overlayRef._v = overlay;
    overlay.setup_2u6ser_k$();
    var raycaster = new Raycaster();
    var mouseVec = new Vector2();
    var clock = new Clock();
    var squishSoundCooldown = {_v: 0.0};
    var quoteTimer = {_v: 0.0};
    var quoteInterval = 180.0;
    var quoteDisplayDuration = 10.0;
    var quoteDisplayTimer = {_v: 0.0};
    var lastWasIdle = {_v: true};
    var tmp_9 = window;
    tmp_9.addEventListener('resize', main$lambda_5(camera, renderer));
    main$handleResize(camera, renderer);
    var tmp_10 = document;
    tmp_10.addEventListener('click', main$lambda_6(sound), {once: true});
    var tmp_11 = document;
    tmp_11.addEventListener('keydown', main$lambda_7(sound), {once: true});
    var tmp_12 = document;
    tmp_12.addEventListener('touchstart', main$lambda_8(sound, mouseVec, raycaster, camera, blob, deformController, waveSystem, recentPokes, clock, soundEnabled));
    main$applyBallColor(currentColor, currentColorIndex);
    main$applyTheme(currentThemeIndex);
    main$applyScale(currentScaleIndex);
    main$applyStyle(currentStyleIndex, material, foamBumpTex);
    main$animate(clock, overlay, recentPokes, rimLight, quoteTimer, inputHandler, quoteInterval, lastWasIdle, quoteDisplayTimer, quoteDisplayDuration, deformController, waveSystem, soundEnabled, sound, currentColorIndex, squishSoundCooldown, springPhysics, gestureEngine, gesturePokeCooldown, mouseVec, raycaster, camera, blob, currentThemeIndex, vertexCount, posAttr, geometry, currentStyleIndex, colorAttr, currentColor, shadow, renderer, scene);
  }
  function main$hash(ix, iy) {
    var n = imul(ix, 374761393) + imul(iy, 668265263) | 0;
    var h = imul(n ^ n >> 13, 1274126177);
    return (h & 2147483647) / 2.147483647E9;
  }
  function main$smoothNoise(x, y) {
    // Inline function 'kotlin.math.floor' call
    var tmp$ret$0 = Math.floor(x);
    var ix = numberToInt(tmp$ret$0);
    // Inline function 'kotlin.math.floor' call
    var tmp$ret$1 = Math.floor(y);
    var iy = numberToInt(tmp$ret$1);
    // Inline function 'kotlin.math.floor' call
    var fx = x - Math.floor(x);
    // Inline function 'kotlin.math.floor' call
    var fy = y - Math.floor(y);
    var sx = fx * fx * (3.0 - 2.0 * fx);
    var sy = fy * fy * (3.0 - 2.0 * fy);
    var n00 = main$hash(ix, iy);
    var n10 = main$hash(ix + 1 | 0, iy);
    var n01 = main$hash(ix, iy + 1 | 0);
    var n11 = main$hash(ix + 1 | 0, iy + 1 | 0);
    return n00 + (n10 - n00) * sx + (n01 + (n11 - n01) * sx - (n00 + (n10 - n00) * sx)) * sy;
  }
  function main$applyBallColor(currentColor, currentColorIndex) {
    currentColor._v = get_BALL_COLORS()[currentColorIndex._v];
  }
  function main$applyTheme(currentThemeIndex) {
    var tmp0_elvis_lhs = document.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var body = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = get_THEMES();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'main.applyTheme.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(element) > 0) {
        body.classList.remove(element);
      }
    }
    var theme = get_THEMES()[currentThemeIndex._v];
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(theme) > 0) {
      body.classList.add(theme);
    }
  }
  function main$applyScale(currentScaleIndex) {
    var tmp0_elvis_lhs = document.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var body = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = get_SCALE_MODES();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'main.applyScale.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(element) > 0) {
        body.classList.remove(element);
      }
    }
    var scale = get_SCALE_MODES()[currentScaleIndex._v];
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(scale) > 0) {
      body.classList.add(scale);
    }
  }
  function main$applyStyle(currentStyleIndex, material, foamBumpTex) {
    switch (currentStyleIndex._v) {
      case 0:
        material.roughness = 0.02;
        material.metalness = 0.0;
        material.clearcoat = 1.0;
        material.clearcoatRoughness = 0.01;
        material.sheen = 0.0;
        material.sheenRoughness = 0.0;
        material.iridescence = 0.15;
        material.iridescenceIOR = 1.33;
        material.transmission = 0.85;
        material.thickness = 1.5;
        material.ior = 1.33;
        material.transparent = true;
        material.opacity = 0.95;
        material.bumpMap = null;
        material.bumpScale = 0.0;
        material.roughnessMap = null;
        material.envMapIntensity = 2.0;
        break;
      case 1:
        material.roughness = 0.15;
        material.metalness = 0.0;
        material.clearcoat = 0.8;
        material.clearcoatRoughness = 0.1;
        material.sheen = 0.2;
        material.sheenRoughness = 0.4;
        material.iridescence = 0.0;
        material.iridescenceIOR = 1.5;
        material.transmission = 0.6;
        material.thickness = 2.5;
        material.ior = 1.45;
        material.transparent = true;
        material.opacity = 0.9;
        material.bumpMap = foamBumpTex;
        material.bumpScale = 0.04;
        material.roughnessMap = null;
        material.envMapIntensity = 1.2;
        break;
      case 2:
        material.roughness = 0.0;
        material.metalness = 0.0;
        material.clearcoat = 1.0;
        material.clearcoatRoughness = 0.0;
        material.sheen = 0.0;
        material.sheenRoughness = 0.0;
        material.iridescence = 0.8;
        material.iridescenceIOR = 2.0;
        material.transmission = 0.95;
        material.thickness = 0.5;
        material.ior = 1.8;
        material.transparent = true;
        material.opacity = 0.98;
        material.bumpMap = null;
        material.bumpScale = 0.0;
        material.roughnessMap = null;
        material.envMapIntensity = 2.5;
        break;
      case 3:
        material.roughness = 0.0;
        material.metalness = 0.0;
        material.clearcoat = 1.0;
        material.clearcoatRoughness = 0.0;
        material.sheen = 0.0;
        material.sheenRoughness = 0.0;
        material.iridescence = 1.0;
        material.iridescenceIOR = 1.8;
        material.transmission = 0.92;
        material.thickness = 0.1;
        material.ior = 1.3;
        material.transparent = true;
        material.opacity = 0.5;
        material.bumpMap = null;
        material.bumpScale = 0.0;
        material.roughnessMap = null;
        material.envMapIntensity = 3.0;
        break;
    }
    material.needsUpdate = true;
  }
  function main$handleResize(camera, renderer) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    var tmp = camera.position;
    var tmp_0;
    // Inline function 'kotlin.math.min' call
    if (Math.min(w, h) < 500.0) {
      tmp_0 = 7.5;
    } else {
      tmp_0 = 5.5;
    }
    tmp.z = tmp_0;
  }
  function main$animate(clock, overlay, recentPokes, rimLight, quoteTimer, inputHandler, quoteInterval, lastWasIdle, quoteDisplayTimer, quoteDisplayDuration, deformController, waveSystem, soundEnabled, sound, currentColorIndex, squishSoundCooldown, springPhysics, gestureEngine, gesturePokeCooldown, mouseVec, raycaster, camera, blob, currentThemeIndex, vertexCount, posAttr, geometry, currentStyleIndex, colorAttr, currentColor, shadow, renderer, scene) {
    var tmp = window;
    tmp.requestAnimationFrame(main$animate$lambda(clock, overlay, recentPokes, rimLight, quoteTimer, inputHandler, quoteInterval, lastWasIdle, quoteDisplayTimer, quoteDisplayDuration, deformController, waveSystem, soundEnabled, sound, currentColorIndex, squishSoundCooldown, springPhysics, gestureEngine, gesturePokeCooldown, mouseVec, raycaster, camera, blob, currentThemeIndex, vertexCount, posAttr, geometry, currentStyleIndex, colorAttr, currentColor, shadow, renderer, scene));
    var dt = clock.getDelta();
    var elapsed = clock.getElapsedTime();
    overlay.updateBreathing_s8fab_k$(dt);
    var currentSection = overlay.getCurrentSection_1gl44i_k$();
    removeAll(recentPokes, main$animate$lambda_0(elapsed));
    var tmp_0 = rimLight.position;
    // Inline function 'kotlin.math.sin' call
    var x = elapsed * 0.25;
    var tmp_1 = Math.sin(x) * 3.5;
    // Inline function 'kotlin.math.sin' call
    var x_0 = elapsed * 0.4;
    var tmp_2 = -2.5 + Math.sin(x_0) * 1.0;
    // Inline function 'kotlin.math.cos' call
    var x_1 = elapsed * 0.25;
    var tmp$ret$2 = Math.cos(x_1);
    tmp_0.set(tmp_1, tmp_2, -2.5 + tmp$ret$2 * 2.0);
    if (currentSection === 'deform' ? true : currentSection === 'calm') {
      quoteTimer._v = quoteTimer._v + dt;
      var qt = inputHandler.timeSinceLastInteraction_mmcakx_k$();
      var idle = qt > 5.0;
      if (quoteTimer._v > quoteInterval ? true : (idle ? !lastWasIdle._v : false) ? qt > 3.0 : false) {
        overlay.showQuote_1u79zl_k$();
        quoteDisplayTimer._v = 0.0;
        quoteTimer._v = 0.0;
      }
      lastWasIdle._v = idle;
      if (overlay.isQuoteVisible_agobc0_k$()) {
        quoteDisplayTimer._v = quoteDisplayTimer._v + dt;
        if (quoteDisplayTimer._v > quoteDisplayDuration) {
          overlay.hideQuote_q58wvq_k$();
        }
      }
    }
    if (currentSection === 'deform') {
      if (inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$(' ')) {
        deformController.applyPulse_36v9qd_k$();
        waveSystem.excite_wki8fu_k$(0.0, 0.5, 0.0, 1.0);
        if (soundEnabled._v) {
          sound.playPulse_95m7zp_k$();
        }
        inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$(' ');
      }
      if (inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('r') ? true : inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('R')) {
        deformController.reset_5u6xz3_k$();
        waveSystem.reset_5u6xz3_k$();
        if (soundEnabled._v) {
          sound.playReset_ow4azv_k$();
        }
        inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('r');
        inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('R');
      }
      if (inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('c') ? true : inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('C')) {
        currentColorIndex._v = (currentColorIndex._v + 1 | 0) % get_BALL_COLORS().length | 0;
        main$applyBallColor(currentColor, currentColorIndex);
        if (soundEnabled._v) {
          sound.playClick_wml34s_k$();
        }
        inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('c');
        inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('C');
      }
      deformController.applyKeyboardDeformation_dwnh8f_k$(inputHandler.get_pressedKeys_ih6nn7_k$(), dt);
      squishSoundCooldown._v = squishSoundCooldown._v - dt;
      if ((soundEnabled._v ? deformController.isDeforming_189jhv_k$() : false) ? squishSoundCooldown._v <= 0.0 : false) {
        sound.playSquish_xx8su3_k$(coerceAtMost(springPhysics.get_totalEnergy_4zve65_k$(), 1.0));
        squishSoundCooldown._v = 0.15;
      }
      if (!deformController.isDeforming_189jhv_k$()) {
        springPhysics.decayTargets_x935js_k$(1.0, dt);
      }
    } else {
      springPhysics.decayTargets_x935js_k$(1.0, dt);
    }
    gestureEngine.update_1d1qib_k$(dt);
    if (gestureEngine.get_enabled_pcr8o8_k$() ? gestureEngine.get_handDetected_ht26cm_k$() : false) {
      if (currentSection === 'deform') {
        gesturePokeCooldown._v = coerceAtLeast(gesturePokeCooldown._v - dt, 0.0);
        switch (gestureEngine.get_currentGesture_5tp4t5_k$().get_ordinal_ip24qg_k$()) {
          case 1:
            var gestureKeys = mutableSetOf(['w', 'd']);
            deformController.applyKeyboardDeformation_dwnh8f_k$(gestureKeys, dt * 0.7);
            if (soundEnabled._v ? squishSoundCooldown._v <= 0.0 : false) {
              sound.playExpand_9241lq_k$();
              squishSoundCooldown._v = 0.15;
            }

            break;
          case 2:
            var gestureKeys_0 = mutableSetOf(['f']);
            deformController.applyKeyboardDeformation_dwnh8f_k$(gestureKeys_0, dt);
            if (soundEnabled._v ? squishSoundCooldown._v <= 0.0 : false) {
              sound.playSqueeze_97c1vm_k$();
              squishSoundCooldown._v = 0.15;
            }

            break;
          case 3:
            if (gesturePokeCooldown._v <= 0.0) {
              var tmp1_container = gestureEngine.getFingerNDC_8gqdfy_k$();
              var ndcX = tmp1_container.component1_7eebsc_k$();
              var ndcY = tmp1_container.component2_7eebsb_k$();
              mouseVec.set(ndcX, ndcY);
              raycaster.setFromCamera(mouseVec, camera);
              var intersects = raycaster.intersectObject(blob);
              // Inline function 'kotlin.collections.isNotEmpty' call
              // Inline function 'kotlin.collections.isEmpty' call
              if (!(intersects.length === 0)) {
                var tmp_3 = intersects[0].point;
                var pt = tmp_3 instanceof Vector3 ? tmp_3 : THROW_CCE();
                deformController.applyPoke_o7qqd_k$(pt, 0.8, -0.3);
                waveSystem.excite_wki8fu_k$(-pt.x * 0.1, -pt.y * 0.1, -pt.z * 0.1, 0.4);
                recentPokes.add_utx5q5_k$(new PokeEvent(pt.x, pt.y, pt.z, elapsed));
                if (recentPokes.get_size_woubt6_k$() > 8) {
                  recentPokes.removeAt_6niowx_k$(0);
                }
                if (soundEnabled._v) {
                  sound.playPoke_r6la77_k$();
                }
              }
              gesturePokeCooldown._v = 0.15;
            }

            break;
          case 5:
            var gestureKeys_1 = mutableSetOf(['w']);
            deformController.applyKeyboardDeformation_dwnh8f_k$(gestureKeys_1, dt);
            if (soundEnabled._v ? squishSoundCooldown._v <= 0.0 : false) {
              sound.playStretch_py8gpr_k$();
              squishSoundCooldown._v = 0.15;
            }

            break;
          case 4:
            if (gestureEngine.shouldReset_7lex7o_k$()) {
              deformController.reset_5u6xz3_k$();
              waveSystem.reset_5u6xz3_k$();
              if (soundEnabled._v) {
                sound.playReset_ow4azv_k$();
              }
            }

            break;
          case 6:
            if (gestureEngine.shouldCycleColor_qmzrjk_k$()) {
              currentColorIndex._v = (currentColorIndex._v + 1 | 0) % get_BALL_COLORS().length | 0;
              main$applyBallColor(currentColor, currentColorIndex);
              if (soundEnabled._v) {
                sound.playBubble_mncp3k_k$();
              }
            }

            break;
          case 7:
            if (gestureEngine.shouldExplode_m9cnrm_k$()) {
              deformController.applyExplode_n114xp_k$();
              waveSystem.excite_wki8fu_k$(0.5, 0.8, 0.3, 3.0);
              if (soundEnabled._v) {
                sound.playExplode_jvw69v_k$();
              }
            }

            break;
          case 8:
            if (gestureEngine.shouldScramble_pql5r4_k$()) {
              deformController.applyScramble_8ro9sb_k$();
              if (soundEnabled._v) {
                sound.playScramble_z5u2c1_k$();
              }
            }

            break;
          case 9:
            if (gestureEngine.shouldPunch_7m8edh_k$()) {
              deformController.applyPunch_uqw8g_k$(-gestureEngine.get_handDeltaX_68bc7c_k$() * 20.0, -gestureEngine.get_handDeltaY_68bc7b_k$() * 20.0);
              waveSystem.excite_wki8fu_k$(-gestureEngine.get_handDeltaX_68bc7c_k$(), -gestureEngine.get_handDeltaY_68bc7b_k$(), -0.3, 2.0);
              if (soundEnabled._v) {
                sound.playPunch_s2vzbe_k$();
              }
            }

            break;
          case 10:
            if (gesturePokeCooldown._v <= 0.0 ? gestureEngine.get_pinchAmount_pmvww9_k$() > 0.3 : false) {
              var tmp2_container = gestureEngine.getFingerNDC_8gqdfy_k$();
              var ndcX_0 = tmp2_container.component1_7eebsc_k$();
              var ndcY_0 = tmp2_container.component2_7eebsb_k$();
              mouseVec.set(ndcX_0, ndcY_0);
              raycaster.setFromCamera(mouseVec, camera);
              var intersects_0 = raycaster.intersectObject(blob);
              // Inline function 'kotlin.collections.isNotEmpty' call
              // Inline function 'kotlin.collections.isEmpty' call
              if (!(intersects_0.length === 0)) {
                var tmp_4 = intersects_0[0].point;
                var pt_0 = tmp_4 instanceof Vector3 ? tmp_4 : THROW_CCE();
                deformController.applyPinch$default_i6nkjs_k$(pt_0, gestureEngine.get_pinchAmount_pmvww9_k$());
                recentPokes.add_utx5q5_k$(new PokeEvent(pt_0.x, pt_0.y, pt_0.z, elapsed));
                if (recentPokes.get_size_woubt6_k$() > 8) {
                  recentPokes.removeAt_6niowx_k$(0);
                }
              }
              if (soundEnabled._v ? squishSoundCooldown._v <= 0.0 : false) {
                sound.playPinch_ujf980_k$(gestureEngine.get_pinchAmount_pmvww9_k$());
                squishSoundCooldown._v = 0.1;
              }
              gesturePokeCooldown._v = 0.08;
            }

            break;
          case 11:
            if (gestureEngine.shouldPull_4ttkdk_k$()) {
              var tmp3_container = gestureEngine.getFingerNDC_8gqdfy_k$();
              var ndcX_1 = tmp3_container.component1_7eebsc_k$();
              var ndcY_1 = tmp3_container.component2_7eebsb_k$();
              mouseVec.set(ndcX_1, ndcY_1);
              raycaster.setFromCamera(mouseVec, camera);
              var intersects_1 = raycaster.intersectObject(blob);
              // Inline function 'kotlin.collections.isNotEmpty' call
              // Inline function 'kotlin.collections.isEmpty' call
              if (!(intersects_1.length === 0)) {
                var tmp_5 = intersects_1[0].point;
                var pt_1 = tmp_5 instanceof Vector3 ? tmp_5 : THROW_CCE();
                deformController.applyPull$default_f0dg99_k$(pt_1, -gestureEngine.get_handDeltaX_68bc7c_k$() * 15.0, -gestureEngine.get_handDeltaY_68bc7b_k$() * 15.0);
                recentPokes.add_utx5q5_k$(new PokeEvent(pt_1.x, pt_1.y, pt_1.z, elapsed));
                if (recentPokes.get_size_woubt6_k$() > 8) {
                  recentPokes.removeAt_6niowx_k$(0);
                }
              }
              if (soundEnabled._v) {
                sound.playPull_t772yx_k$();
              }
            }

            break;
          case 12:
            if (gestureEngine.shouldSlap_4trucl_k$()) {
              deformController.applySlap_58en5m_k$(-gestureEngine.get_handDeltaX_68bc7c_k$() * 15.0, -gestureEngine.get_handDeltaY_68bc7b_k$() * 15.0);
              waveSystem.excite_wki8fu_k$(-gestureEngine.get_handDeltaX_68bc7c_k$(), -gestureEngine.get_handDeltaY_68bc7b_k$(), -0.3, 1.5);
              if (soundEnabled._v) {
                sound.playSlap_knuq0k_k$();
              }
            }

            break;
          case 13:
            deformController.applyKnead_eafvvl_k$(gestureEngine.get_kneadIntensity_csrpe1_k$() * get_PI() * 2.0, 0.8, dt);
            if (soundEnabled._v ? squishSoundCooldown._v <= 0.0 : false) {
              sound.playKnead_ezbs0v_k$();
              squishSoundCooldown._v = 0.3;
            }

            break;
          case 14:
            var resizeDelta = gestureEngine.get_twoHandResizeDelta_jd4hle_k$();
            // Inline function 'kotlin.math.abs' call

            if (Math.abs(resizeDelta) > 0.001) {
              deformController.applyResize_cym5e6_k$(resizeDelta * 8.0, dt);
              if (soundEnabled._v ? squishSoundCooldown._v <= 0.0 : false) {
                sound.playResize_x2q2wj_k$(resizeDelta > 0.0);
                squishSoundCooldown._v = 0.15;
              }
            }

            break;
          case 0:
            break;
        }
      }
    }
    if (inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('m') ? true : inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('M')) {
      soundEnabled._v = !soundEnabled._v;
      if (soundEnabled._v) {
        sound.ensureResumed_h78lih_k$();
      }
      overlay.updateSoundLabel_sbm11j_k$(soundEnabled._v);
      inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('m');
      inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('M');
    }
    if (inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('t') ? true : inputHandler.get_pressedKeys_ih6nn7_k$().contains_aljjnj_k$('T')) {
      currentThemeIndex._v = (currentThemeIndex._v + 1 | 0) % get_THEMES().length | 0;
      main$applyTheme(currentThemeIndex);
      inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('t');
      inputHandler.get_pressedKeys_ih6nn7_k$().remove_cedx0m_k$('T');
    }
    var tmp4_container = inputHandler.updateRotationInertia_b6ha8j_k$(dt);
    var rotX = tmp4_container.component1_7eebsc_k$();
    var rotY = tmp4_container.component2_7eebsb_k$();
    if (!(rotX === 0.0) ? true : !(rotY === 0.0)) {
      var tmp5_this = blob.rotation;
      tmp5_this.x = tmp5_this.x + rotX;
      var tmp6_this = blob.rotation;
      tmp6_this.y = tmp6_this.y + rotY;
    } else if ((gestureEngine.get_enabled_pcr8o8_k$() ? gestureEngine.get_handDetected_ht26cm_k$() : false) ? gestureEngine.get_currentGesture_5tp4t5_k$().equals(HandGesture_NONE_getInstance()) : false) {
      var tmp7_container = gestureEngine.getRotationDelta_ep2l7g_k$();
      var gRotX = tmp7_container.component1_7eebsc_k$();
      var gRotY = tmp7_container.component2_7eebsb_k$();
      var tmp8_this = blob.rotation;
      tmp8_this.x = tmp8_this.x + gRotX;
      var tmp9_this = blob.rotation;
      tmp9_this.y = tmp9_this.y + gRotY;
    } else if (!inputHandler.get_isMouseDown_ryhimk_k$()) {
      var tmp10_this = blob.rotation;
      tmp10_this.y = tmp10_this.y + (currentSection === 'calm' ? 6.0E-4 : 0.0015);
    }
    // Inline function 'kotlin.math.sin' call
    var x_2 = elapsed * 0.5;
    var breathScale = 1.0 + Math.sin(x_2) * 0.015;
    blob.scale.set(breathScale, breathScale, breathScale);
    var idleTime = inputHandler.timeSinceLastInteraction_mmcakx_k$();
    var isIdle = idleTime > 5.0 ? !(gestureEngine.get_enabled_pcr8o8_k$() ? gestureEngine.get_handDetected_ht26cm_k$() : false) : false;
    if (isIdle ? true : currentSection === 'calm') {
      var tmp_6 = blob.position;
      // Inline function 'kotlin.math.sin' call
      var x_3 = elapsed * 0.8;
      tmp_6.y = Math.sin(x_3) * 0.04;
    } else {
      var tmp11_this = blob.position;
      tmp11_this.y = tmp11_this.y + (0.0 - blob.position.y) * 0.05;
    }
    var scroll = inputHandler.consumeScrollDelta_2ma375_k$();
    if (!(scroll === 0.0)) {
      camera.position.z = coerceIn_0(camera.position.z + scroll * 0.003, 3.0, 10.0);
    }
    if (currentSection === 'deform') {
      var click = inputHandler.consumeClick_em1q8k_k$();
      if (!(click == null)) {
        mouseVec.set(click.get_first_irdx8n_k$(), click.get_second_jf7fjx_k$());
        raycaster.setFromCamera(mouseVec, camera);
        var intersects_2 = raycaster.intersectObject(blob);
        // Inline function 'kotlin.collections.isNotEmpty' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (!(intersects_2.length === 0)) {
          var tmp_7 = intersects_2[0].point;
          var pt_2 = tmp_7 instanceof Vector3 ? tmp_7 : THROW_CCE();
          deformController.applyPoke$default_vza19u_k$(pt_2);
          waveSystem.excite_wki8fu_k$(-pt_2.x * 0.15, -pt_2.y * 0.15, -pt_2.z * 0.15, 0.6);
          recentPokes.add_utx5q5_k$(new PokeEvent(pt_2.x, pt_2.y, pt_2.z, elapsed));
          if (recentPokes.get_size_woubt6_k$() > 8) {
            recentPokes.removeAt_6niowx_k$(0);
          }
          if (soundEnabled._v) {
            sound.playPoke_r6la77_k$();
          }
        }
      }
    } else {
      inputHandler.consumeClick_em1q8k_k$();
    }
    springPhysics.update_1d1qib_k$(dt);
    waveSystem.update_1d1qib_k$(dt);
    if (waveSystem.get_totalEnergy_4zve65_k$() > 0.001) {
      var inductionVariable = 0;
      if (inductionVariable < vertexCount)
        do {
          var v = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var wox = springPhysics.getOriginalX_7i9a61_k$(v);
          var woy = springPhysics.getOriginalY_765dqy_k$(v);
          var woz = springPhysics.getOriginalZ_6u1hbv_k$(v);
          // Inline function 'kotlin.math.sqrt' call
          var x_4 = wox * wox + woy * woy + woz * woz;
          var wlen = Math.sqrt(x_4);
          if (wlen > 0.001) {
            var wnx = wox / wlen;
            var wny = woy / wlen;
            var wnz = woz / wlen;
            var wr = waveSystem.getRadialOffset_hh3rni_k$(wnx, wny, wnz);
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            posAttr.array[imul(v, 3)] = posAttr.array[imul(v, 3)] + wnx * wr;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            posAttr.array[imul(v, 3) + 1 | 0] = posAttr.array[imul(v, 3) + 1 | 0] + wny * wr;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            posAttr.array[imul(v, 3) + 2 | 0] = posAttr.array[imul(v, 3) + 2 | 0] + wnz * wr;
          }
        }
         while (inductionVariable < vertexCount);
      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();
    }
    if (springPhysics.get_maxOffset_353uky_k$() > 2.0) {
      springPhysics.set_maxOffset_v40oe4_k$(coerceAtLeast(springPhysics.get_maxOffset_353uky_k$() - dt * 1.5, 2.0));
    }
    if (springPhysics.get_maxVelocity_brqzug_k$() > 10.0) {
      springPhysics.set_maxVelocity_9qwoc2_k$(coerceAtLeast(springPhysics.get_maxVelocity_brqzug_k$() - dt * 7.0, 10.0));
    }
    if (soundEnabled._v) {
      sound.updateDrone_vo5709_k$(coerceAtMost(springPhysics.get_totalEnergy_4zve65_k$(), 2.0) / 2.0);
    }
    var fresnelStr;
    var subsurfaceStr;
    var rippleStr;
    var shimmerAmp;
    var compressStr;
    var stretchStr;
    var driftAmp;
    var causticStr;
    var frTintR;
    var frTintG;
    var frTintB;
    var pearlescent;
    switch (currentStyleIndex._v) {
      case 0:
        fresnelStr = 0.5;
        subsurfaceStr = 0.06;
        rippleStr = 0.4;
        shimmerAmp = 0.03;
        compressStr = 0.2;
        stretchStr = 0.3;
        driftAmp = 0.04;
        causticStr = 0.25;
        frTintR = 0.7;
        frTintG = 0.85;
        frTintB = 1.0;
        pearlescent = false;
        break;
      case 1:
        fresnelStr = 0.2;
        subsurfaceStr = 0.15;
        rippleStr = 0.25;
        shimmerAmp = 0.04;
        compressStr = 0.25;
        stretchStr = 0.15;
        driftAmp = 0.05;
        causticStr = 0.12;
        frTintR = 0.85;
        frTintG = 0.9;
        frTintB = 0.8;
        pearlescent = false;
        break;
      case 2:
        fresnelStr = 0.6;
        subsurfaceStr = 0.04;
        rippleStr = 0.5;
        shimmerAmp = 0.06;
        compressStr = 0.1;
        stretchStr = 0.25;
        driftAmp = 0.05;
        causticStr = 0.35;
        frTintR = 0.8;
        frTintG = 0.75;
        frTintB = 1.0;
        pearlescent = true;
        break;
      default:
        fresnelStr = 0.7;
        subsurfaceStr = 0.02;
        rippleStr = 0.3;
        shimmerAmp = 0.08;
        compressStr = 0.05;
        stretchStr = 0.15;
        driftAmp = 0.06;
        causticStr = 0.15;
        frTintR = 0.9;
        frTintG = 0.85;
        frTintB = 1.0;
        pearlescent = true;
        break;
    }
    var colors = colorAttr.array;
    var baseR = currentColor._v.r_1;
    var baseG = currentColor._v.g_1;
    var baseB = currentColor._v.b_1;
    var tmp_8 = geometry.getAttribute('normal');
    var normalAttr = tmp_8 instanceof BufferAttribute ? tmp_8 : THROW_CCE();
    var camZ = camera.position.z;
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < vertexCount)
      do {
        var v_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var px = posAttr.array[imul(v_0, 3)];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var py = posAttr.array[imul(v_0, 3) + 1 | 0];
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var pz = posAttr.array[imul(v_0, 3) + 2 | 0];
        var nx = normalAttr.getX(v_0);
        var ny = normalAttr.getY(v_0);
        var nz = normalAttr.getZ(v_0);
        var vdx = -px;
        var vdy = -py;
        var vdz = camZ - pz;
        // Inline function 'kotlin.math.sqrt' call
        var x_5 = vdx * vdx + vdy * vdy + vdz * vdz;
        var vdLen = Math.sqrt(x_5);
        var dotNV = vdLen > 0.001 ? (nx * vdx + ny * vdy + nz * vdz) / vdLen : 1.0;
        // Inline function 'kotlin.math.abs' call
        var tmp$ret$31 = Math.abs(dotNV);
        var fresnelRaw = coerceIn_0(1.0 - tmp$ret$31, 0.0, 1.0);
        var fresnel = fresnelRaw * fresnelRaw * fresnelStr;
        var fgR;
        var fgG;
        var fgB;
        if (pearlescent) {
          var ox = springPhysics.getOriginalX_7i9a61_k$(v_0);
          var tmp_9 = fresnelRaw * 3.0;
          // Inline function 'kotlin.math.sin' call
          var tmp_10 = elapsed * 0.2;
          // Inline function 'kotlin.math.sqrt' call
          var x_6 = ox * ox + py * py;
          var x_7 = tmp_10 + Math.sqrt(x_6) * 2.0;
          var hueAngle = tmp_9 + Math.sin(x_7);
          // Inline function 'kotlin.math.sin' call
          fgR = (Math.sin(hueAngle) * 0.5 + 0.5) * fresnel;
          // Inline function 'kotlin.math.sin' call
          var x_8 = hueAngle + 2.094;
          fgG = (Math.sin(x_8) * 0.5 + 0.5) * fresnel;
          // Inline function 'kotlin.math.sin' call
          var x_9 = hueAngle + 4.189;
          fgB = (Math.sin(x_9) * 0.5 + 0.5) * fresnel;
        } else {
          fgR = fresnel * frTintR;
          fgG = fresnel * frTintG;
          fgB = fresnel * frTintB;
        }
        // Inline function 'kotlin.math.abs' call
        var tmp$ret$37 = Math.abs(dotNV);
        var sss = coerceIn_0(tmp$ret$37, 0.0, 1.0) * subsurfaceStr;
        var sssR = sss * 1.1;
        var sssG = sss * 0.7;
        var sssB = sss * 0.4;
        var ox_0 = springPhysics.getOriginalX_7i9a61_k$(v_0);
        var oy = springPhysics.getOriginalY_765dqy_k$(v_0);
        var oz = springPhysics.getOriginalZ_6u1hbv_k$(v_0);
        // Inline function 'kotlin.math.sqrt' call
        var x_10 = ox_0 * ox_0 + oy * oy + oz * oz;
        var dist = Math.sqrt(x_10);
        var radial = 1.0 - coerceIn_0(dist / 2.2, 0.0, 1.0) * 0.25;
        var vertical = 1.0 + coerceIn_0(oy / 2.5, -1.0, 1.0) * 0.14;
        // Inline function 'kotlin.math.sin' call
        var x_11 = elapsed * 0.25 + dist * 1.2 + oy * 0.8;
        var drift1 = Math.sin(x_11) * driftAmp;
        // Inline function 'kotlin.math.cos' call
        var x_12 = elapsed * 0.18 + ox_0 * 1.5;
        var drift2 = Math.cos(x_12) * driftAmp * 0.7;
        var shimX = ox_0 * 2.0 + elapsed * 0.12;
        var shimY = oz * 2.0 + elapsed * 0.1;
        var shimmer = (main$smoothNoise(shimX, shimY) - 0.5) * shimmerAmp;
        var caustScale = 3.0;
        var c1 = main$smoothNoise(ox_0 * caustScale + elapsed * 0.3, oz * caustScale + elapsed * 0.2);
        var c2 = main$smoothNoise(oy * caustScale * 1.5 - elapsed * 0.25, oz * caustScale * 1.5 + elapsed * 0.15);
        var caustic = coerceIn_0((c1 + c2 - 0.8) * 3.0, 0.0, 1.0) * causticStr;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var deform = springPhysics.get_deformationMagnitudes_2o74bu_k$()[v_0];
        var stretchGlow = coerceIn_0(deform / 1.0, 0.0, 1.0) * stretchStr;
        var compressFade = 1.0 - coerceIn_0(deform / 1.5, 0.0, 1.0) * compressStr;
        var rippleGlow = 0.0;
        var tmp15_iterator = recentPokes.iterator_jk1svi_k$();
        $l$loop: while (tmp15_iterator.hasNext_bitz1p_k$()) {
          var poke = tmp15_iterator.next_20eer_k$();
          var age = elapsed - poke.time_1;
          if (age < 0.0 ? true : age > 1.5)
            continue $l$loop;
          var dx = px - poke.x_1;
          var dy = py - poke.y_1;
          var dz2 = pz - poke.z_1;
          // Inline function 'kotlin.math.sqrt' call
          var x_13 = dx * dx + dy * dy + dz2 * dz2;
          var pokeDist = Math.sqrt(x_13);
          var ringRadius = age * 2.5;
          // Inline function 'kotlin.math.abs' call
          var x_14 = pokeDist - ringRadius;
          var ringDist = Math.abs(x_14);
          var ringFalloff = coerceIn_0(1.0 - ringDist / 0.4, 0.0, 1.0);
          var fade = coerceIn_0(1.0 - age / 1.5, 0.0, 1.0);
          rippleGlow = rippleGlow + ringFalloff * fade * rippleStr;
        }
        rippleGlow = coerceAtMost(rippleGlow, 0.5);
        var baseFactor = radial * vertical * compressFade;
        var r = baseR * baseFactor + drift1 + shimmer;
        var g = baseG * baseFactor + drift2 + shimmer * 0.7;
        var b = baseB * baseFactor - drift1 * 0.3 + shimmer * 0.5;
        r = r + stretchGlow * 0.25;
        g = g + stretchGlow * 0.15;
        b = b + stretchGlow * 0.1;
        r = r + fgR;
        g = g + fgG;
        b = b + fgB;
        r = r + sssR;
        g = g + sssG;
        b = b + sssB;
        r = r + rippleGlow * 0.9;
        g = g + rippleGlow * 0.92;
        b = b + rippleGlow * 0.95;
        r = r + caustic * 0.85;
        g = g + caustic * 0.92;
        b = b + caustic * 1.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        colors[imul(v_0, 3)] = coerceIn_0(r, 0.0, 1.0);
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        colors[imul(v_0, 3) + 1 | 0] = coerceIn_0(g, 0.0, 1.0);
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        colors[imul(v_0, 3) + 2 | 0] = coerceIn_0(b, 0.0, 1.0);
      }
       while (inductionVariable_0 < vertexCount);
    colorAttr.needsUpdate = true;
    var energy = springPhysics.get_totalEnergy_4zve65_k$();
    shadow.scale.set(1.0 + energy * 0.08, 0.02, 1.0 + energy * 0.08);
    renderer.render(scene, camera);
  }
  function main$lambda($deformController, $waveSystem, $soundEnabled, $sound) {
    return function () {
      $deformController.reset_5u6xz3_k$();
      $waveSystem.reset_5u6xz3_k$();
      var tmp;
      if ($soundEnabled._v) {
        $sound.playReset_ow4azv_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function main$lambda_0($soundEnabled, $sound, $overlayRef) {
    return function () {
      $soundEnabled._v = !$soundEnabled._v;
      var tmp;
      if ($soundEnabled._v) {
        $sound.ensureResumed_h78lih_k$();
        tmp = Unit_getInstance();
      }
      var tmp0_safe_receiver = $overlayRef._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.updateSoundLabel_sbm11j_k$($soundEnabled._v);
      }
      return Unit_getInstance();
    };
  }
  function main$lambda_1($currentThemeIndex) {
    return function () {
      $currentThemeIndex._v = ($currentThemeIndex._v + 1 | 0) % get_THEMES().length | 0;
      main$applyTheme($currentThemeIndex);
      return Unit_getInstance();
    };
  }
  function main$lambda_2($currentScaleIndex, $overlayRef) {
    return function () {
      $currentScaleIndex._v = ($currentScaleIndex._v + 1 | 0) % get_SCALE_MODES().length | 0;
      main$applyScale($currentScaleIndex);
      var tmp0_safe_receiver = $overlayRef._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.updateScaleLabel_rjtcix_k$(get_SCALE_LABELS()[$currentScaleIndex._v]);
      }
      return Unit_getInstance();
    };
  }
  function main$lambda_3($currentStyleIndex, $overlayRef, $material, $foamBumpTex) {
    return function () {
      $currentStyleIndex._v = ($currentStyleIndex._v + 1 | 0) % get_STYLE_NAMES().length | 0;
      main$applyStyle($currentStyleIndex, $material, $foamBumpTex);
      var tmp0_safe_receiver = $overlayRef._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.updateStyleLabel_9i5s5a_k$(get_STYLE_NAMES()[$currentStyleIndex._v]);
      }
      return Unit_getInstance();
    };
  }
  function main$lambda_4($gestureEngine, $overlayRef) {
    return function () {
      var on = $gestureEngine.toggle_ecyros_k$();
      var tmp0_safe_receiver = $overlayRef._v;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.updateGestureLabel_41kerl_k$(on);
      }
      return Unit_getInstance();
    };
  }
  function main$lambda_5($camera, $renderer) {
    return function (it) {
      main$handleResize($camera, $renderer);
      return Unit_getInstance();
    };
  }
  function main$lambda_6($sound) {
    return function (it) {
      $sound.ensureResumed_h78lih_k$();
      return Unit_getInstance();
    };
  }
  function main$lambda_7($sound) {
    return function (it) {
      $sound.ensureResumed_h78lih_k$();
      return Unit_getInstance();
    };
  }
  function main$lambda_8($sound, $mouseVec, $raycaster, $camera, $blob, $deformController, $waveSystem, $recentPokes, $clock, $soundEnabled) {
    return function (_anonymous_parameter_0__qggqh8) {
      $sound.ensureResumed_h78lih_k$();
      var touch = event.touches[0];
      var tmp;
      if (touch != null) {
        var tmp_0 = touch.clientX;
        var tx = ((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE()) / window.innerWidth * 2.0 - 1.0;
        var tmp_1 = touch.clientY;
        var ty = -(((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()) / window.innerHeight) * 2.0 + 1.0;
        $mouseVec.set(tx, ty);
        $raycaster.setFromCamera($mouseVec, $camera);
        var intersects = $raycaster.intersectObject($blob);
        var tmp_2;
        // Inline function 'kotlin.collections.isNotEmpty' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (!(intersects.length === 0)) {
          var tmp_3 = intersects[0].point;
          var pt = tmp_3 instanceof Vector3 ? tmp_3 : THROW_CCE();
          $deformController.applyPoke$default_vza19u_k$(pt);
          $waveSystem.excite_wki8fu_k$(-pt.x * 0.15, -pt.y * 0.15, -pt.z * 0.15, 0.6);
          $recentPokes.add_utx5q5_k$(new PokeEvent(pt.x, pt.y, pt.z, $clock.getElapsedTime()));
          if ($recentPokes.get_size_woubt6_k$() > 8) {
            $recentPokes.removeAt_6niowx_k$(0);
          }
          var tmp_4;
          if ($soundEnabled._v) {
            $sound.playPoke_r6la77_k$();
            tmp_4 = Unit_getInstance();
          }
          tmp_2 = tmp_4;
        }
        tmp = tmp_2;
      }
      return Unit_getInstance();
    };
  }
  function main$animate$lambda($clock, $overlay, $recentPokes, $rimLight, $quoteTimer, $inputHandler, $quoteInterval, $lastWasIdle, $quoteDisplayTimer, $quoteDisplayDuration, $deformController, $waveSystem, $soundEnabled, $sound, $currentColorIndex, $squishSoundCooldown, $springPhysics, $gestureEngine, $gesturePokeCooldown, $mouseVec, $raycaster, $camera, $blob, $currentThemeIndex, $vertexCount, $posAttr, $geometry, $currentStyleIndex, $colorAttr, $currentColor, $shadow, $renderer, $scene) {
    return function (it) {
      main$animate($clock, $overlay, $recentPokes, $rimLight, $quoteTimer, $inputHandler, $quoteInterval, $lastWasIdle, $quoteDisplayTimer, $quoteDisplayDuration, $deformController, $waveSystem, $soundEnabled, $sound, $currentColorIndex, $squishSoundCooldown, $springPhysics, $gestureEngine, $gesturePokeCooldown, $mouseVec, $raycaster, $camera, $blob, $currentThemeIndex, $vertexCount, $posAttr, $geometry, $currentStyleIndex, $colorAttr, $currentColor, $shadow, $renderer, $scene);
      return Unit_getInstance();
    };
  }
  function main$animate$lambda_0($elapsed) {
    return function (it) {
      return $elapsed - it.time_1 > 1.5;
    };
  }
  var properties_initialized_Main_kt_gqj46d;
  function _init_properties_Main_kt__xi25uv() {
    if (!properties_initialized_Main_kt_gqj46d) {
      properties_initialized_Main_kt_gqj46d = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      BALL_COLORS = [new BallColor('Clear', 0.82, 0.9, 0.96), new BallColor('Aqua', 0.4, 0.8, 0.92), new BallColor('Ocean', 0.22, 0.52, 0.88), new BallColor('Rose', 0.92, 0.55, 0.65), new BallColor('Lime', 0.5, 0.88, 0.45), new BallColor('Sunset', 0.95, 0.62, 0.35), new BallColor('Grape', 0.58, 0.38, 0.85), new BallColor('Crystal', 0.9, 0.9, 0.95), new BallColor('Teal', 0.3, 0.78, 0.72)];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      THEMES = ['', 'theme-night', 'theme-day'];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      SCALE_MODES = ['', 'scale-large', 'scale-xl'];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      SCALE_LABELS = ['Normal', 'Large', 'Extra Large'];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      STYLE_NAMES = ['Water Balloon', 'Gel Ball', 'Crystal Drop', 'Soap Bubble'];
    }
  }
  function _get_ctx__e66oga($this) {
    return $this.ctx_1;
  }
  function _set_droneOsc__rxzils($this, _set____db54di) {
    $this.droneOsc_1 = _set____db54di;
  }
  function _get_droneOsc__f53750($this) {
    return $this.droneOsc_1;
  }
  function _set_droneGain__drio6m($this, _set____db54di) {
    $this.droneGain_1 = _set____db54di;
  }
  function _get_droneGain__ryqxdy($this) {
    return $this.droneGain_1;
  }
  function _set_isDroneActive__e62z2p($this, _set____db54di) {
    $this.isDroneActive_1 = _set____db54di;
  }
  function _get_isDroneActive__11ojfn($this) {
    return $this.isDroneActive_1;
  }
  function startDrone($this) {
    var tmp = $this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    $this.droneOsc_1 = $this.ctx_1.createOscillator();
    $this.droneGain_1 = $this.ctx_1.createGain();
    var filter = $this.ctx_1.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    $this.droneOsc_1.type = 'sine';
    $this.droneOsc_1.frequency.setValueAtTime(50, now);
    $this.droneGain_1.gain.setValueAtTime(0.0, now);
    $this.droneOsc_1.connect(filter);
    filter.connect($this.droneGain_1);
    $this.droneGain_1.connect($this.ctx_1.destination);
    $this.droneOsc_1.start(now);
    $this.isDroneActive_1 = true;
  }
  function SoundEngine() {
    this.ctx_1 = new (window.AudioContext || window.webkitAudioContext)();
    this.droneOsc_1 = null;
    this.droneGain_1 = null;
    this.isDroneActive_1 = false;
  }
  protoOf(SoundEngine).ensureResumed_h78lih_k$ = function () {
    if (this.ctx_1.state == 'suspended') {
      this.ctx_1.resume();
    }
  };
  protoOf(SoundEngine).playPoke_r6la77_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var osc = this.ctx_1.createOscillator();
    var gain = this.ctx_1.createGain();
    var filter = this.ctx_1.createBiquadFilter();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.2);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(100, now + 0.25);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  };
  protoOf(SoundEngine).playPulse_95m7zp_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var bufferSize = numberToInt(((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE()) * 0.25);
    var buffer = this.ctx_1.createBuffer(1, bufferSize, this.ctx_1.sampleRate);
    var data = buffer.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        data[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.2;
      }
       while (inductionVariable < bufferSize);
    var noise = this.ctx_1.createBufferSource();
    noise.buffer = buffer;
    var filter = this.ctx_1.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(150, now + 0.2);
    var gain = this.ctx_1.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    var osc = this.ctx_1.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.2);
    var oscGain = this.ctx_1.createGain();
    oscGain.gain.setValueAtTime(0.15, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    osc.connect(oscGain);
    oscGain.connect(this.ctx_1.destination);
    noise.start(now);
    noise.stop(now + 0.25);
    osc.start(now);
    osc.stop(now + 0.28);
  };
  protoOf(SoundEngine).playReset_ow4azv_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var bufferSize = numberToInt(((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE()) * 0.5);
    var buffer = this.ctx_1.createBuffer(1, bufferSize, this.ctx_1.sampleRate);
    var data = buffer.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        data[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.15;
      }
       while (inductionVariable < bufferSize);
    var noise = this.ctx_1.createBufferSource();
    noise.buffer = buffer;
    var filter = this.ctx_1.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(150, now + 0.4);
    filter.Q.setValueAtTime(1, now);
    var gain = this.ctx_1.createGain();
    gain.gain.setValueAtTime(0.0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    noise.start(now);
    noise.stop(now + 0.5);
  };
  protoOf(SoundEngine).updateDrone_vo5709_k$ = function (energy) {
    this.ensureResumed_h78lih_k$();
    if (!this.isDroneActive_1) {
      startDrone(this);
    }
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var freq = 50.0 + energy * 80.0;
    var vol = coerceAtMost(energy * 0.07, 0.07);
    this.droneOsc_1.frequency.setTargetAtTime(freq, now, 0.15);
    this.droneGain_1.gain.setTargetAtTime(vol, now, 0.08);
  };
  protoOf(SoundEngine).playSquish_xx8su3_k$ = function (intensity) {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var bufferSize = numberToInt(((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE()) * 0.1);
    var buffer = this.ctx_1.createBuffer(1, bufferSize, this.ctx_1.sampleRate);
    var data = buffer.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < bufferSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        data[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.15;
      }
       while (inductionVariable < bufferSize);
    var noise = this.ctx_1.createBufferSource();
    noise.buffer = buffer;
    var filter = this.ctx_1.createBiquadFilter();
    filter.type = 'lowpass';
    var cutoff = 300.0 + intensity * 400.0;
    filter.frequency.setValueAtTime(cutoff, now);
    filter.frequency.exponentialRampToValueAtTime(80, now + 0.1);
    var gain = this.ctx_1.createGain();
    var vol = coerceIn_0(intensity * 0.06, 0.01, 0.06);
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    noise.start(now);
    noise.stop(now + 0.12);
  };
  protoOf(SoundEngine).playClick_wml34s_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var osc = this.ctx_1.createOscillator();
    var gain = this.ctx_1.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.03);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  };
  protoOf(SoundEngine).playExplode_jvw69v_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var popSize = numberToInt(sr * 0.08);
    var popBuf = this.ctx_1.createBuffer(1, popSize, this.ctx_1.sampleRate);
    var popData = popBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < popSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        popData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.4;
      }
       while (inductionVariable < popSize);
    var pop = this.ctx_1.createBufferSource();
    pop.buffer = popBuf;
    var popFilter = this.ctx_1.createBiquadFilter();
    popFilter.type = 'bandpass';
    popFilter.frequency.setValueAtTime(2500, now);
    popFilter.frequency.exponentialRampToValueAtTime(500, now + 0.07);
    popFilter.Q.setValueAtTime(2, now);
    var popGain = this.ctx_1.createGain();
    popGain.gain.setValueAtTime(0.3, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    pop.connect(popFilter);
    popFilter.connect(popGain);
    popGain.connect(this.ctx_1.destination);
    pop.start(now);
    pop.stop(now + 0.12);
    var sparkleSize = numberToInt(sr * 0.8);
    var sparkleBuf = this.ctx_1.createBuffer(1, sparkleSize, this.ctx_1.sampleRate);
    var sparkleData = sparkleBuf.getChannelData(0);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < sparkleSize)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var grain = Default_getInstance().nextDouble_s2xvfg_k$() > 0.7 ? 1.0 : 0.08;
        sparkleData[i_0] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.12 * grain;
      }
       while (inductionVariable_0 < sparkleSize);
    var sparkle = this.ctx_1.createBufferSource();
    sparkle.buffer = sparkleBuf;
    var sparkleFilter = this.ctx_1.createBiquadFilter();
    sparkleFilter.type = 'highpass';
    sparkleFilter.frequency.setValueAtTime(3000, now);
    sparkleFilter.frequency.exponentialRampToValueAtTime(800, now + 0.6);
    var sparkleGain = this.ctx_1.createGain();
    sparkleGain.gain.setValueAtTime(0.0, now);
    sparkleGain.gain.linearRampToValueAtTime(0.14, now + 0.04);
    sparkleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    sparkle.connect(sparkleFilter);
    sparkleFilter.connect(sparkleGain);
    sparkleGain.connect(this.ctx_1.destination);
    sparkle.start(now);
    sparkle.stop(now + 0.8);
    var bass = this.ctx_1.createOscillator();
    bass.type = 'sine';
    bass.frequency.setValueAtTime(100, now);
    bass.frequency.exponentialRampToValueAtTime(35, now + 0.2);
    var bassGain = this.ctx_1.createGain();
    bassGain.gain.setValueAtTime(0.25, now);
    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    bass.connect(bassGain);
    bassGain.connect(this.ctx_1.destination);
    bass.start(now);
    bass.stop(now + 0.35);
  };
  protoOf(SoundEngine).playScramble_z5u2c1_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var crinkleSize = numberToInt(sr * 0.7);
    var crinkleBuf = this.ctx_1.createBuffer(1, crinkleSize, this.ctx_1.sampleRate);
    var crinkleData = crinkleBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < crinkleSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var grain = Default_getInstance().nextDouble_s2xvfg_k$() > 0.6 ? 1.0 : 0.04;
        crinkleData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.18 * grain;
      }
       while (inductionVariable < crinkleSize);
    var crinkle = this.ctx_1.createBufferSource();
    crinkle.buffer = crinkleBuf;
    var crinkleFilter = this.ctx_1.createBiquadFilter();
    crinkleFilter.type = 'bandpass';
    crinkleFilter.frequency.setValueAtTime(2500, now);
    crinkleFilter.frequency.setTargetAtTime(800.0, now, 0.2);
    crinkleFilter.Q.setValueAtTime(3, now);
    crinkleFilter.Q.setTargetAtTime(1.0, now + 0.3, 0.1);
    var crinkleGain = this.ctx_1.createGain();
    crinkleGain.gain.setValueAtTime(0.0, now);
    crinkleGain.gain.linearRampToValueAtTime(0.18, now + 0.03);
    crinkleGain.gain.setTargetAtTime(0.1, now + 0.1, 0.15);
    crinkleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    crinkle.connect(crinkleFilter);
    crinkleFilter.connect(crinkleGain);
    crinkleGain.connect(this.ctx_1.destination);
    crinkle.start(now);
    crinkle.stop(now + 0.65);
    var warble = this.ctx_1.createOscillator();
    warble.type = 'triangle';
    warble.frequency.setValueAtTime(200, now);
    warble.frequency.setTargetAtTime(140.0, now + 0.1, 0.08);
    warble.frequency.setTargetAtTime(260.0, now + 0.25, 0.06);
    warble.frequency.setTargetAtTime(110.0, now + 0.4, 0.08);
    var warbleGain = this.ctx_1.createGain();
    warbleGain.gain.setValueAtTime(0.06, now);
    warbleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    warble.connect(warbleGain);
    warbleGain.connect(this.ctx_1.destination);
    warble.start(now);
    warble.stop(now + 0.55);
    var shimmer = this.ctx_1.createOscillator();
    shimmer.type = 'sine';
    shimmer.frequency.setValueAtTime(1800, now);
    shimmer.frequency.exponentialRampToValueAtTime(600, now + 0.4);
    var shimGain = this.ctx_1.createGain();
    shimGain.gain.setValueAtTime(0.03, now);
    shimGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    shimmer.connect(shimGain);
    shimGain.connect(this.ctx_1.destination);
    shimmer.start(now);
    shimmer.stop(now + 0.4);
  };
  protoOf(SoundEngine).playPunch_s2vzbe_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var thud = this.ctx_1.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(120, now);
    thud.frequency.exponentialRampToValueAtTime(28, now + 0.15);
    var thudGain = this.ctx_1.createGain();
    thudGain.gain.setValueAtTime(0.4, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    thud.connect(thudGain);
    thudGain.connect(this.ctx_1.destination);
    thud.start(now);
    thud.stop(now + 0.3);
    var smackSize = numberToInt(sr * 0.12);
    var smackBuf = this.ctx_1.createBuffer(1, smackSize, this.ctx_1.sampleRate);
    var smackData = smackBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < smackSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        smackData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.3;
      }
       while (inductionVariable < smackSize);
    var smack = this.ctx_1.createBufferSource();
    smack.buffer = smackBuf;
    var smackFilter = this.ctx_1.createBiquadFilter();
    smackFilter.type = 'lowpass';
    smackFilter.frequency.setValueAtTime(1400, now);
    smackFilter.frequency.exponentialRampToValueAtTime(80, now + 0.1);
    var smackGain = this.ctx_1.createGain();
    smackGain.gain.setValueAtTime(0.22, now);
    smackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    smack.connect(smackFilter);
    smackFilter.connect(smackGain);
    smackGain.connect(this.ctx_1.destination);
    smack.start(now);
    smack.stop(now + 0.15);
    var boing = this.ctx_1.createOscillator();
    boing.type = 'sine';
    boing.frequency.setValueAtTime(220, now + 0.04);
    boing.frequency.exponentialRampToValueAtTime(70, now + 0.45);
    var boingGain = this.ctx_1.createGain();
    boingGain.gain.setValueAtTime(0.0, now);
    boingGain.gain.linearRampToValueAtTime(0.08, now + 0.05);
    boingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    boing.connect(boingGain);
    boingGain.connect(this.ctx_1.destination);
    boing.start(now);
    boing.stop(now + 0.55);
  };
  protoOf(SoundEngine).playExpand_9241lq_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var whooshSize = numberToInt(sr * 0.5);
    var whooshBuf = this.ctx_1.createBuffer(1, whooshSize, this.ctx_1.sampleRate);
    var whooshData = whooshBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < whooshSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        whooshData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.1;
      }
       while (inductionVariable < whooshSize);
    var whoosh = this.ctx_1.createBufferSource();
    whoosh.buffer = whooshBuf;
    var whooshFilter = this.ctx_1.createBiquadFilter();
    whooshFilter.type = 'bandpass';
    whooshFilter.frequency.setValueAtTime(200, now);
    whooshFilter.frequency.linearRampToValueAtTime(1200, now + 0.18);
    whooshFilter.frequency.exponentialRampToValueAtTime(300, now + 0.4);
    whooshFilter.Q.setValueAtTime(1.5, now);
    var whooshGain = this.ctx_1.createGain();
    whooshGain.gain.setValueAtTime(0.0, now);
    whooshGain.gain.linearRampToValueAtTime(0.15, now + 0.07);
    whooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    whoosh.connect(whooshFilter);
    whooshFilter.connect(whooshGain);
    whooshGain.connect(this.ctx_1.destination);
    whoosh.start(now);
    whoosh.stop(now + 0.5);
    var pad = this.ctx_1.createOscillator();
    pad.type = 'triangle';
    pad.frequency.setValueAtTime(80, now);
    pad.frequency.linearRampToValueAtTime(130, now + 0.3);
    var padGain = this.ctx_1.createGain();
    padGain.gain.setValueAtTime(0.06, now);
    padGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    pad.connect(padGain);
    padGain.connect(this.ctx_1.destination);
    pad.start(now);
    pad.stop(now + 0.45);
  };
  protoOf(SoundEngine).playSqueeze_97c1vm_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var osc = this.ctx_1.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.3);
    var oscGain = this.ctx_1.createGain();
    oscGain.gain.setValueAtTime(0.12, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(oscGain);
    oscGain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.38);
    var sqSize = numberToInt(sr * 0.3);
    var sqBuf = this.ctx_1.createBuffer(1, sqSize, this.ctx_1.sampleRate);
    var sqData = sqBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < sqSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sqData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.12;
      }
       while (inductionVariable < sqSize);
    var sqNoise = this.ctx_1.createBufferSource();
    sqNoise.buffer = sqBuf;
    var sqFilter = this.ctx_1.createBiquadFilter();
    sqFilter.type = 'lowpass';
    sqFilter.frequency.setValueAtTime(500, now);
    sqFilter.frequency.exponentialRampToValueAtTime(70, now + 0.25);
    var sqGain = this.ctx_1.createGain();
    sqGain.gain.setValueAtTime(0.1, now);
    sqGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    sqNoise.connect(sqFilter);
    sqFilter.connect(sqGain);
    sqGain.connect(this.ctx_1.destination);
    sqNoise.start(now);
    sqNoise.stop(now + 0.3);
  };
  protoOf(SoundEngine).playStretch_py8gpr_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var osc = this.ctx_1.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(100, now);
    osc.frequency.linearRampToValueAtTime(300, now + 0.3);
    var oscGain = this.ctx_1.createGain();
    oscGain.gain.setValueAtTime(0.08, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.connect(oscGain);
    oscGain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.38);
    var brSize = numberToInt(sr * 0.35);
    var brBuf = this.ctx_1.createBuffer(1, brSize, this.ctx_1.sampleRate);
    var brData = brBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < brSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        brData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.06;
      }
       while (inductionVariable < brSize);
    var br = this.ctx_1.createBufferSource();
    br.buffer = brBuf;
    var brFilter = this.ctx_1.createBiquadFilter();
    brFilter.type = 'bandpass';
    brFilter.frequency.setValueAtTime(300, now);
    brFilter.frequency.linearRampToValueAtTime(700, now + 0.3);
    brFilter.Q.setValueAtTime(2, now);
    var brGain = this.ctx_1.createGain();
    brGain.gain.setValueAtTime(0.1, now);
    brGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    br.connect(brFilter);
    brFilter.connect(brGain);
    brGain.connect(this.ctx_1.destination);
    br.start(now);
    br.stop(now + 0.35);
  };
  protoOf(SoundEngine).playBubble_mncp3k_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var ping = this.ctx_1.createOscillator();
    ping.type = 'sine';
    ping.frequency.setValueAtTime(900, now);
    ping.frequency.exponentialRampToValueAtTime(500, now + 0.08);
    var pingGain = this.ctx_1.createGain();
    pingGain.gain.setValueAtTime(0.1, now);
    pingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    ping.connect(pingGain);
    pingGain.connect(this.ctx_1.destination);
    ping.start(now);
    ping.stop(now + 0.15);
    var popSize = numberToInt(sr * 0.04);
    var popBuf = this.ctx_1.createBuffer(1, popSize, this.ctx_1.sampleRate);
    var popData = popBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < popSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        popData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.15;
      }
       while (inductionVariable < popSize);
    var pop = this.ctx_1.createBufferSource();
    pop.buffer = popBuf;
    var popFilter = this.ctx_1.createBiquadFilter();
    popFilter.type = 'highpass';
    popFilter.frequency.setValueAtTime(2000, now);
    var popGain = this.ctx_1.createGain();
    popGain.gain.setValueAtTime(0.12, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    pop.connect(popFilter);
    popFilter.connect(popGain);
    popGain.connect(this.ctx_1.destination);
    pop.start(now);
    pop.stop(now + 0.06);
  };
  protoOf(SoundEngine).playPinch_ujf980_k$ = function (intensity) {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var freq = 300.0 + intensity * 400.0;
    var osc = this.ctx_1.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
    var gain = this.ctx_1.createGain();
    gain.gain.setValueAtTime(0.08 * intensity, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    var filter = this.ctx_1.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.25);
  };
  protoOf(SoundEngine).playSlap_knuq0k_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var crackSize = numberToInt(sr * 0.02);
    var crackBuf = this.ctx_1.createBuffer(1, crackSize, this.ctx_1.sampleRate);
    var crackData = crackBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < crackSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        crackData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.4;
      }
       while (inductionVariable < crackSize);
    var crack = this.ctx_1.createBufferSource();
    crack.buffer = crackBuf;
    var crackFilter = this.ctx_1.createBiquadFilter();
    crackFilter.type = 'bandpass';
    crackFilter.frequency.setValueAtTime(2500, now);
    crackFilter.Q.setValueAtTime(2.0, now);
    var crackGain = this.ctx_1.createGain();
    crackGain.gain.setValueAtTime(0.2, now);
    crackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    crack.connect(crackFilter);
    crackFilter.connect(crackGain);
    crackGain.connect(this.ctx_1.destination);
    crack.start(now);
    crack.stop(now + 0.08);
    var ring = this.ctx_1.createOscillator();
    ring.type = 'sine';
    ring.frequency.setValueAtTime(400, now);
    ring.frequency.exponentialRampToValueAtTime(200, now + 0.2);
    var ringGain = this.ctx_1.createGain();
    ringGain.gain.setValueAtTime(0.06, now);
    ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    ring.connect(ringGain);
    ringGain.connect(this.ctx_1.destination);
    ring.start(now);
    ring.stop(now + 0.3);
  };
  protoOf(SoundEngine).playKnead_ezbs0v_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var osc = this.ctx_1.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.15);
    osc.frequency.linearRampToValueAtTime(80, now + 0.3);
    var gain = this.ctx_1.createGain();
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    var filter = this.ctx_1.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  };
  protoOf(SoundEngine).playResize_x2q2wj_k$ = function (expanding) {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = this.ctx_1.sampleRate;
    var sr = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var noiseSize = numberToInt(sr * 0.15);
    var noiseBuf = this.ctx_1.createBuffer(1, noiseSize, this.ctx_1.sampleRate);
    var noiseData = noiseBuf.getChannelData(0);
    var inductionVariable = 0;
    if (inductionVariable < noiseSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        noiseData[i] = (Default_getInstance().nextDouble_s2xvfg_k$() * 2.0 - 1.0) * 0.1;
      }
       while (inductionVariable < noiseSize);
    var noise = this.ctx_1.createBufferSource();
    noise.buffer = noiseBuf;
    var filter = this.ctx_1.createBiquadFilter();
    filter.type = 'bandpass';
    if (expanding) {
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(1200, now + 0.15);
    } else {
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.linearRampToValueAtTime(400, now + 0.15);
    }
    filter.Q.setValueAtTime(1.5, now);
    var gain = this.ctx_1.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx_1.destination);
    noise.start(now);
    noise.stop(now + 0.25);
  };
  protoOf(SoundEngine).playPull_t772yx_k$ = function () {
    this.ensureResumed_h78lih_k$();
    var tmp = this.ctx_1.currentTime;
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var osc = this.ctx_1.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.2);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.4);
    var gain = this.ctx_1.createGain();
    gain.gain.setValueAtTime(0.07, now);
    gain.gain.linearRampToValueAtTime(0.1, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(this.ctx_1.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  };
  function _get_spring__4s3m3i($this) {
    return $this.spring_1;
  }
  function _get_vertexCount__7jbisa($this) {
    return $this.vertexCount_1;
  }
  function _get_deformRate__y4mu56($this) {
    return $this.deformRate_1;
  }
  function _get_twistRate__xg8n0q($this) {
    return $this.twistRate_1;
  }
  function _get_pulseStrength__ahdbzd($this) {
    return $this.pulseStrength_1;
  }
  function _get_squeezeRate__szp3dd($this) {
    return $this.squeezeRate_1;
  }
  function _set_activeKeys__xu05s3($this, _set____db54di) {
    $this.activeKeys_1 = _set____db54di;
  }
  function _get_activeKeys__m4vb1t($this) {
    return $this.activeKeys_1;
  }
  function DeformationController(spring) {
    this.spring_1 = spring;
    this.vertexCount_1 = this.spring_1.get_originalPositions_fo6a5s_k$().length / 3 | 0;
    this.deformRate_1 = 3.0;
    this.twistRate_1 = 2.5;
    this.pulseStrength_1 = 0.5;
    this.squeezeRate_1 = 2.5;
    this.activeKeys_1 = 0;
  }
  protoOf(DeformationController).applyKeyboardDeformation_dwnh8f_k$ = function (pressedKeys, dt) {
    this.activeKeys_1 = 0;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x = ox * ox + oy * oy + oz * oz;
        var origLen = Math.sqrt(x);
        if (pressedKeys.contains_aljjnj_k$('w') ? true : pressedKeys.contains_aljjnj_k$('W')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          var sign = oy >= 0.0 ? 1.0 : -1.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + this.deformRate_1 * sign * dt;
        }
        if (pressedKeys.contains_aljjnj_k$('s') ? true : pressedKeys.contains_aljjnj_k$('S')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          var sign_0 = oy >= 0.0 ? 1.0 : -1.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] - this.deformRate_1 * sign_0 * dt;
        }
        if (pressedKeys.contains_aljjnj_k$('d') ? true : pressedKeys.contains_aljjnj_k$('D')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          var sign_1 = ox >= 0.0 ? 1.0 : -1.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + this.deformRate_1 * sign_1 * dt;
        }
        if (pressedKeys.contains_aljjnj_k$('a') ? true : pressedKeys.contains_aljjnj_k$('A')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          var sign_2 = ox >= 0.0 ? 1.0 : -1.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] - this.deformRate_1 * sign_2 * dt;
        }
        if (pressedKeys.contains_aljjnj_k$('q') ? true : pressedKeys.contains_aljjnj_k$('Q')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          var angle = -this.twistRate_1 * oy * dt * 0.3;
          // Inline function 'kotlin.math.cos' call
          var cosA = Math.cos(angle);
          // Inline function 'kotlin.math.sin' call
          var sinA = Math.sin(angle);
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + (ox * cosA - oz * sinA - ox);
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + (ox * sinA + oz * cosA - oz);
        }
        if (pressedKeys.contains_aljjnj_k$('e') ? true : pressedKeys.contains_aljjnj_k$('E')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          var angle_0 = this.twistRate_1 * oy * dt * 0.3;
          // Inline function 'kotlin.math.cos' call
          var cosA_0 = Math.cos(angle_0);
          // Inline function 'kotlin.math.sin' call
          var sinA_0 = Math.sin(angle_0);
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + (ox * cosA_0 - oz * sinA_0 - ox);
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + (ox * sinA_0 + oz * cosA_0 - oz);
        }
        if (pressedKeys.contains_aljjnj_k$('f') ? true : pressedKeys.contains_aljjnj_k$('F')) {
          this.activeKeys_1 = this.activeKeys_1 + 1 | 0;
          if (origLen > 0.001) {
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] - this.squeezeRate_1 * ox / origLen * dt;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] - this.squeezeRate_1 * oy / origLen * dt;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] - this.squeezeRate_1 * oz / origLen * dt;
          }
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).isDeforming_189jhv_k$ = function () {
    return this.activeKeys_1 > 0;
  };
  protoOf(DeformationController).applyPulse_36v9qd_k$ = function () {
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x = ox * ox + oy * oy + oz * oz;
        var len = Math.sqrt(x);
        if (len > 0.001) {
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + this.pulseStrength_1 * ox / len;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + this.pulseStrength_1 * oy / len;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + this.pulseStrength_1 * oz / len;
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyPoke_o7qqd_k$ = function (intersectPoint, radius, strength) {
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.spring_1.getOriginalX_7i9a61_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var ox = tmp + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)];
        var tmp_0 = this.spring_1.getOriginalY_765dqy_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var oy = tmp_0 + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0];
        var tmp_1 = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var oz = tmp_1 + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0];
        var dx = ox - intersectPoint.x;
        var dy = oy - intersectPoint.y;
        var dz = oz - intersectPoint.z;
        // Inline function 'kotlin.math.sqrt' call
        var x = dx * dx + dy * dy + dz * dz;
        var dist = Math.sqrt(x);
        if (dist < radius) {
          // Inline function 'kotlin.math.exp' call
          var x_0 = -(dist * dist) / (radius * radius * 0.4);
          var falloff = Math.exp(x_0);
          // Inline function 'kotlin.math.sqrt' call
          var x_1 = this.spring_1.getOriginalX_7i9a61_k$(i) * this.spring_1.getOriginalX_7i9a61_k$(i) + this.spring_1.getOriginalY_765dqy_k$(i) * this.spring_1.getOriginalY_765dqy_k$(i) + this.spring_1.getOriginalZ_6u1hbv_k$(i) * this.spring_1.getOriginalZ_6u1hbv_k$(i);
          var origLen = Math.sqrt(x_1);
          if (origLen > 0.001) {
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + strength * falloff * this.spring_1.getOriginalX_7i9a61_k$(i) / origLen;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + strength * falloff * this.spring_1.getOriginalY_765dqy_k$(i) / origLen;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + strength * falloff * this.spring_1.getOriginalZ_6u1hbv_k$(i) / origLen;
          }
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyPoke$default_vza19u_k$ = function (intersectPoint, radius, strength, $super) {
    radius = radius === VOID ? 1.2 : radius;
    strength = strength === VOID ? -0.5 : strength;
    var tmp;
    if ($super === VOID) {
      this.applyPoke_o7qqd_k$(intersectPoint, radius, strength);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.applyPoke_o7qqd_k$.call(this, intersectPoint, radius, strength);
    }
    return tmp;
  };
  protoOf(DeformationController).applyExplode_n114xp_k$ = function () {
    this.spring_1.set_maxOffset_v40oe4_k$(3.0);
    this.spring_1.set_maxVelocity_9qwoc2_k$(15.0);
    var strength = 2.5;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x = ox * ox + oy * oy + oz * oz;
        var len = Math.sqrt(x);
        if (len > 0.001) {
          var rx = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * 1.2;
          var ry = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * 1.2;
          var rz = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * 1.2;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = strength * ox / len + rx;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = strength * oy / len + ry;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = strength * oz / len + rz;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] = strength * 2.5 * ox / len + rx * 3.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] = strength * 2.5 * oy / len + ry * 3.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 2 | 0] = strength * 2.5 * oz / len + rz * 3.0;
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyScramble_8ro9sb_k$ = function () {
    this.spring_1.set_maxOffset_v40oe4_k$(2.5);
    this.spring_1.set_maxVelocity_9qwoc2_k$(12.0);
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var rx = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * 3.0;
        var ry = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * 3.0;
        var rz = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * 3.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = rx;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = ry;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = rz;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] = rx * 4.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] = ry * 4.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 2 | 0] = rz * 4.0;
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyPunch_uqw8g_k$ = function (dirX, dirY) {
    this.spring_1.set_maxOffset_v40oe4_k$(2.5);
    this.spring_1.set_maxVelocity_9qwoc2_k$(15.0);
    // Inline function 'kotlin.math.sqrt' call
    var x = dirX * dirX + dirY * dirY + 0.25;
    var dLen = Math.sqrt(x);
    var ndx = dirX / dLen;
    var ndy = dirY / dLen;
    var ndz = -0.5 / dLen;
    var strength = 2.2;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x_0 = ox * ox + oy * oy + oz * oz;
        var origLen = Math.sqrt(x_0);
        if (origLen < 0.001)
          continue $l$loop;
        var dot = (ox * ndx + oy * ndy + oz * ndz) / origLen;
        if (dot > 0.0) {
          var push = strength * dot * dot;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] - push * ox / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] - push * oy / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] - push * oz / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] + ndx * push * 3.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] + ndy * push * 3.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 2 | 0] + ndz * push * 3.0;
        } else {
          var bulge = strength * 0.4 * dot * dot;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + bulge * ox / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + bulge * oy / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + bulge * oz / origLen;
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyPinch_fgwop2_k$ = function (point, pinchAmount, radius) {
    var strength = -0.8 * pinchAmount;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.spring_1.getOriginalX_7i9a61_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var ox = tmp + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)];
        var tmp_0 = this.spring_1.getOriginalY_765dqy_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var oy = tmp_0 + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0];
        var tmp_1 = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var oz = tmp_1 + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0];
        var dx = ox - point.x;
        var dy = oy - point.y;
        var dz = oz - point.z;
        // Inline function 'kotlin.math.sqrt' call
        var x = dx * dx + dy * dy + dz * dz;
        var dist = Math.sqrt(x);
        if (dist < radius) {
          // Inline function 'kotlin.math.exp' call
          var x_0 = -(dist * dist) / (radius * radius * 0.2);
          var falloff = Math.exp(x_0);
          // Inline function 'kotlin.math.sqrt' call
          var x_1 = this.spring_1.getOriginalX_7i9a61_k$(i) * this.spring_1.getOriginalX_7i9a61_k$(i) + this.spring_1.getOriginalY_765dqy_k$(i) * this.spring_1.getOriginalY_765dqy_k$(i) + this.spring_1.getOriginalZ_6u1hbv_k$(i) * this.spring_1.getOriginalZ_6u1hbv_k$(i);
          var origLen = Math.sqrt(x_1);
          if (origLen > 0.001) {
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + strength * falloff * this.spring_1.getOriginalX_7i9a61_k$(i) / origLen;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + strength * falloff * this.spring_1.getOriginalY_765dqy_k$(i) / origLen;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + strength * falloff * this.spring_1.getOriginalZ_6u1hbv_k$(i) / origLen;
          }
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyPinch$default_i6nkjs_k$ = function (point, pinchAmount, radius, $super) {
    radius = radius === VOID ? 0.6 : radius;
    var tmp;
    if ($super === VOID) {
      this.applyPinch_fgwop2_k$(point, pinchAmount, radius);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.applyPinch_fgwop2_k$.call(this, point, pinchAmount, radius);
    }
    return tmp;
  };
  protoOf(DeformationController).applyPull_jmchaf_k$ = function (point, pullDirX, pullDirY, strength) {
    var radius = 1.5;
    // Inline function 'kotlin.math.sqrt' call
    var x = pullDirX * pullDirX + pullDirY * pullDirY + 0.01;
    var pLen = Math.sqrt(x);
    var pdx = pullDirX / pLen;
    var pdy = pullDirY / pLen;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.spring_1.getOriginalX_7i9a61_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var ox = tmp + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)];
        var tmp_0 = this.spring_1.getOriginalY_765dqy_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var oy = tmp_0 + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0];
        var tmp_1 = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var oz = tmp_1 + this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0];
        var dx = ox - point.x;
        var dy = oy - point.y;
        var dz = oz - point.z;
        // Inline function 'kotlin.math.sqrt' call
        var x_0 = dx * dx + dy * dy + dz * dz;
        var dist = Math.sqrt(x_0);
        if (dist < radius) {
          // Inline function 'kotlin.math.exp' call
          var x_1 = -(dist * dist) / (radius * radius * 0.5);
          var falloff = Math.exp(x_1);
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + strength * falloff * pdx;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + strength * falloff * pdy;
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyPull$default_f0dg99_k$ = function (point, pullDirX, pullDirY, strength, $super) {
    strength = strength === VOID ? 1.2 : strength;
    var tmp;
    if ($super === VOID) {
      this.applyPull_jmchaf_k$(point, pullDirX, pullDirY, strength);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.applyPull_jmchaf_k$.call(this, point, pullDirX, pullDirY, strength);
    }
    return tmp;
  };
  protoOf(DeformationController).applySlap_58en5m_k$ = function (dirX, dirY) {
    this.spring_1.set_maxOffset_v40oe4_k$(2.0);
    this.spring_1.set_maxVelocity_9qwoc2_k$(12.0);
    // Inline function 'kotlin.math.sqrt' call
    var x = dirX * dirX + dirY * dirY + 0.25;
    var dLen = Math.sqrt(x);
    var ndx = dirX / dLen;
    var ndy = dirY / dLen;
    var ndz = -0.5 / dLen;
    var strength = 1.8;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x_0 = ox * ox + oy * oy + oz * oz;
        var origLen = Math.sqrt(x_0);
        if (origLen < 0.001)
          continue $l$loop;
        var dot = (ox * ndx + oy * ndy + oz * ndz) / origLen;
        if (dot > 0.0) {
          var push = strength * dot;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] - push * ox / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] - push * oy / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] - push * oz / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] + ndx * push * 2.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] + ndy * push * 2.0;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 2 | 0] + ndz * push * 2.0;
          var wobble = (Default_getInstance().nextDouble_s2xvfg_k$() - 0.5) * push * 0.5;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3)] + ndy * wobble;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_velocities_ia7mbo_k$()[imul(i, 3) + 1 | 0] - ndx * wobble;
        } else {
          var jiggle = strength * 0.3 * dot * dot;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + jiggle * ox / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + jiggle * oy / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + jiggle * oz / origLen;
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyKnead_eafvvl_k$ = function (phase, intensity, dt) {
    var kneadStrength = 1.5 * intensity;
    // Inline function 'kotlin.math.cos' call
    var xFactor = Math.cos(phase) * kneadStrength;
    // Inline function 'kotlin.math.sin' call
    var yFactor = Math.sin(phase) * kneadStrength;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x = ox * ox + oy * oy + oz * oz;
        var origLen = Math.sqrt(x);
        if (origLen < 0.001)
          continue $l$loop;
        var xDisp = -xFactor * (ox / origLen) * dt;
        var yDisp = yFactor * (oy / origLen) * dt;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + xDisp;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + yDisp;
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyResize_cym5e6_k$ = function (scaleDelta, dt) {
    var resizeRate = 4.0;
    var amount = scaleDelta * resizeRate * dt;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ox = this.spring_1.getOriginalX_7i9a61_k$(i);
        var oy = this.spring_1.getOriginalY_765dqy_k$(i);
        var oz = this.spring_1.getOriginalZ_6u1hbv_k$(i);
        // Inline function 'kotlin.math.sqrt' call
        var x = ox * ox + oy * oy + oz * oz;
        var origLen = Math.sqrt(x);
        if (origLen > 0.001) {
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3)] + amount * ox / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 1 | 0] + amount * oy / origLen;
          // Inline function 'org.khronos.webgl.set' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          // Inline function 'kotlin.js.asDynamic' call
          this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] = this.spring_1.get_targetOffsets_ba2ypy_k$()[imul(i, 3) + 2 | 0] + amount * oz / origLen;
        }
      }
       while (inductionVariable < last);
  };
  protoOf(DeformationController).applyMultiFingerPoke_3z39f_k$ = function (points, radius, strength) {
    var tmp0_iterator = points.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var point = tmp0_iterator.next_20eer_k$();
      this.applyPoke_o7qqd_k$(point, radius, strength);
    }
  };
  protoOf(DeformationController).applyMultiFingerPoke$default_j2no4e_k$ = function (points, radius, strength, $super) {
    radius = radius === VOID ? 0.6 : radius;
    strength = strength === VOID ? -0.25 : strength;
    var tmp;
    if ($super === VOID) {
      this.applyMultiFingerPoke_3z39f_k$(points, radius, strength);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.applyMultiFingerPoke_3z39f_k$.call(this, points, radius, strength);
    }
    return tmp;
  };
  protoOf(DeformationController).reset_5u6xz3_k$ = function () {
    this.spring_1.reset_5u6xz3_k$();
    this.spring_1.set_maxOffset_v40oe4_k$(2.0);
    this.spring_1.set_maxVelocity_9qwoc2_k$(10.0);
  };
  function _get_geometry__ni2p9j($this) {
    return $this.geometry_1;
  }
  function _get_posAttr__o43qus($this) {
    return $this.posAttr_1;
  }
  function _set_totalEnergy__kawtwn($this, _set____db54di) {
    $this.totalEnergy_1 = _set____db54di;
  }
  function _get_springConstant__1sf0km($this) {
    return $this.springConstant_1;
  }
  function _get_dampingCoeff__zeb8yc($this) {
    return $this.dampingCoeff_1;
  }
  function SpringPhysics(geometry) {
    this.geometry_1 = geometry;
    var tmp = this;
    var tmp_0 = this.geometry_1.getAttribute('position');
    tmp.posAttr_1 = tmp_0 instanceof BufferAttribute ? tmp_0 : THROW_CCE();
    this.vertexCount_1 = this.posAttr_1.count;
    this.originalPositions_1 = new Float32Array(imul(this.vertexCount_1, 3));
    this.velocities_1 = new Float32Array(imul(this.vertexCount_1, 3));
    this.targetOffsets_1 = new Float32Array(imul(this.vertexCount_1, 3));
    this.deformationMagnitudes_1 = new Float32Array(this.vertexCount_1);
    this.totalEnergy_1 = 0.0;
    this.springConstant_1 = 3.0;
    this.dampingCoeff_1 = 1.2;
    this.maxOffset_1 = 2.0;
    this.maxVelocity_1 = 10.0;
    var posArray = this.posAttr_1.array;
    var inductionVariable = 0;
    var last = imul(this.vertexCount_1, 3);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.originalPositions_1[i] = posArray[i];
      }
       while (inductionVariable < last);
  }
  protoOf(SpringPhysics).get_vertexCount_z8u5a_k$ = function () {
    return this.vertexCount_1;
  };
  protoOf(SpringPhysics).get_originalPositions_fo6a5s_k$ = function () {
    return this.originalPositions_1;
  };
  protoOf(SpringPhysics).get_velocities_ia7mbo_k$ = function () {
    return this.velocities_1;
  };
  protoOf(SpringPhysics).get_targetOffsets_ba2ypy_k$ = function () {
    return this.targetOffsets_1;
  };
  protoOf(SpringPhysics).get_deformationMagnitudes_2o74bu_k$ = function () {
    return this.deformationMagnitudes_1;
  };
  protoOf(SpringPhysics).get_totalEnergy_4zve65_k$ = function () {
    return this.totalEnergy_1;
  };
  protoOf(SpringPhysics).set_maxOffset_v40oe4_k$ = function (_set____db54di) {
    this.maxOffset_1 = _set____db54di;
  };
  protoOf(SpringPhysics).get_maxOffset_353uky_k$ = function () {
    return this.maxOffset_1;
  };
  protoOf(SpringPhysics).set_maxVelocity_9qwoc2_k$ = function (_set____db54di) {
    this.maxVelocity_1 = _set____db54di;
  };
  protoOf(SpringPhysics).get_maxVelocity_brqzug_k$ = function () {
    return this.maxVelocity_1;
  };
  protoOf(SpringPhysics).update_1d1qib_k$ = function (rawDt) {
    var dt = coerceAtMost(rawDt, 0.03333333333333333);
    var posArray = this.posAttr_1.array;
    var energy = 0.0;
    var inductionVariable = 0;
    var last = this.vertexCount_1;
    if (inductionVariable < last)
      do {
        var v = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var localDeform = 0.0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 3)
          do {
            var c = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var i = imul(v, 3) + c | 0;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$1 = this.targetOffsets_1[i];
            var clampedTarget = coerceIn_0(tmp$ret$1, -this.maxOffset_1, this.maxOffset_1);
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'kotlin.js.asDynamic' call
            this.targetOffsets_1[i] = clampedTarget;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var orig = this.originalPositions_1[i];
            var target = orig + clampedTarget;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var current = posArray[i];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var vel = this.velocities_1[i];
            var force = -this.springConstant_1 * (current - target) - this.dampingCoeff_1 * vel;
            var newVel = vel + force * dt;
            newVel = coerceIn_0(newVel, -this.maxVelocity_1, this.maxVelocity_1);
            var newPos = current + newVel * dt;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'kotlin.js.asDynamic' call
            this.velocities_1[i] = newVel;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'kotlin.js.asDynamic' call
            posArray[i] = newPos;
            // Inline function 'kotlin.math.abs' call
            var x = newPos - orig;
            var displacement = Math.abs(x);
            localDeform = localDeform + displacement * displacement;
            energy = energy + newVel * newVel;
          }
           while (inductionVariable_0 < 3);
        // Inline function 'org.khronos.webgl.set' call
        var this_0 = this.deformationMagnitudes_1;
        // Inline function 'kotlin.math.sqrt' call
        var x_0 = localDeform;
        // Inline function 'kotlin.js.asDynamic' call
        this_0[v] = Math.sqrt(x_0);
      }
       while (inductionVariable < last);
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    var x_1 = energy / this.vertexCount_1;
    tmp.totalEnergy_1 = Math.sqrt(x_1);
    this.posAttr_1.needsUpdate = true;
    this.geometry_1.computeVertexNormals();
  };
  protoOf(SpringPhysics).reset_5u6xz3_k$ = function () {
    var inductionVariable = 0;
    var last = imul(this.vertexCount_1, 3);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.targetOffsets_1[i] = 0.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.velocities_1[i] = 0.0;
      }
       while (inductionVariable < last);
  };
  protoOf(SpringPhysics).decayTargets_x935js_k$ = function (rate, dt) {
    var factor = coerceIn_0(1.0 - rate * dt, 0.0, 1.0);
    var inductionVariable = 0;
    var last = imul(this.vertexCount_1, 3);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.asDynamic' call
        this.targetOffsets_1[i] = this.targetOffsets_1[i] * factor;
      }
       while (inductionVariable < last);
  };
  protoOf(SpringPhysics).getOriginalX_7i9a61_k$ = function (index) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.originalPositions_1[imul(index, 3)];
  };
  protoOf(SpringPhysics).getOriginalY_765dqy_k$ = function (index) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.originalPositions_1[imul(index, 3) + 1 | 0];
  };
  protoOf(SpringPhysics).getOriginalZ_6u1hbv_k$ = function (index) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.originalPositions_1[imul(index, 3) + 2 | 0];
  };
  function _get_amp__e6593h($this) {
    return $this.amp_1;
  }
  function _get_vel__e6ihsk($this) {
    return $this.vel_1;
  }
  function _get_freq__d6oh5f($this) {
    return $this.freq_1;
  }
  function _get_damp__d5a73f($this) {
    return $this.damp_1;
  }
  function WaveSystem() {
    this.amp_1 = new Float64Array(5);
    this.vel_1 = new Float64Array(5);
    var tmp = this;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp.freq_1 = new Float64Array([3.5, 3.5, 3.5, 5.5, 3.8]);
    var tmp_0 = this;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp_0.damp_1 = new Float64Array([0.7, 0.7, 0.7, 1.0, 0.8]);
  }
  protoOf(WaveSystem).excite_wki8fu_k$ = function (dirX, dirY, dirZ, strength) {
    var tmp0_array = this.vel_1;
    tmp0_array[0] = tmp0_array[0] + dirY * strength;
    var tmp2_array = this.vel_1;
    tmp2_array[1] = tmp2_array[1] + dirX * strength;
    var tmp4_array = this.vel_1;
    tmp4_array[2] = tmp4_array[2] + dirZ * strength;
    var tmp6_array = this.vel_1;
    tmp6_array[3] = tmp6_array[3] + strength * 0.3;
    var yBias = dirY * dirY - 0.5 * (dirX * dirX + dirZ * dirZ);
    var tmp8_array = this.vel_1;
    tmp8_array[4] = tmp8_array[4] + yBias * strength * 0.5;
  };
  protoOf(WaveSystem).update_1d1qib_k$ = function (dt) {
    var inductionVariable = 0;
    if (inductionVariable < 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var force = -this.freq_1[i] * this.freq_1[i] * this.amp_1[i] - this.damp_1[i] * this.vel_1[i];
        var tmp1_array = this.vel_1;
        tmp1_array[i] = tmp1_array[i] + force * dt;
        var tmp3_array = this.amp_1;
        tmp3_array[i] = tmp3_array[i] + this.vel_1[i] * dt;
        this.amp_1[i] = coerceIn_0(this.amp_1[i], -1.5, 1.5);
        this.vel_1[i] = coerceIn_0(this.vel_1[i], -8.0, 8.0);
      }
       while (inductionVariable < 5);
  };
  protoOf(WaveSystem).getRadialOffset_hh3rni_k$ = function (nx, ny, nz) {
    return this.amp_1[0] * ny + this.amp_1[1] * nx + this.amp_1[2] * nz + this.amp_1[3] + this.amp_1[4] * (3.0 * ny * ny - 1.0) * 0.25;
  };
  protoOf(WaveSystem).get_totalEnergy_4zve65_k$ = function () {
    var e = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        e = e + (this.vel_1[i] * this.vel_1[i] + this.freq_1[i] * this.freq_1[i] * this.amp_1[i] * this.amp_1[i]);
      }
       while (inductionVariable < 5);
    return e;
  };
  protoOf(WaveSystem).reset_5u6xz3_k$ = function () {
    var inductionVariable = 0;
    if (inductionVariable < 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.amp_1[i] = 0.0;
        this.vel_1[i] = 0.0;
      }
       while (inductionVariable < 5);
  };
  var HandGesture_NONE_instance;
  var HandGesture_OPEN_instance;
  var HandGesture_CLOSE_instance;
  var HandGesture_POINTER_instance;
  var HandGesture_OK_instance;
  var HandGesture_VICTORY_instance;
  var HandGesture_THUMBS_UP_instance;
  var HandGesture_SPREAD_instance;
  var HandGesture_HORNS_instance;
  var HandGesture_PUNCH_instance;
  var HandGesture_PINCH_instance;
  var HandGesture_PULL_instance;
  var HandGesture_SLAP_instance;
  var HandGesture_KNEAD_instance;
  var HandGesture_TWO_HAND_RESIZE_instance;
  function values() {
    return [HandGesture_NONE_getInstance(), HandGesture_OPEN_getInstance(), HandGesture_CLOSE_getInstance(), HandGesture_POINTER_getInstance(), HandGesture_OK_getInstance(), HandGesture_VICTORY_getInstance(), HandGesture_THUMBS_UP_getInstance(), HandGesture_SPREAD_getInstance(), HandGesture_HORNS_getInstance(), HandGesture_PUNCH_getInstance(), HandGesture_PINCH_getInstance(), HandGesture_PULL_getInstance(), HandGesture_SLAP_getInstance(), HandGesture_KNEAD_getInstance(), HandGesture_TWO_HAND_RESIZE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NONE':
        return HandGesture_NONE_getInstance();
      case 'OPEN':
        return HandGesture_OPEN_getInstance();
      case 'CLOSE':
        return HandGesture_CLOSE_getInstance();
      case 'POINTER':
        return HandGesture_POINTER_getInstance();
      case 'OK':
        return HandGesture_OK_getInstance();
      case 'VICTORY':
        return HandGesture_VICTORY_getInstance();
      case 'THUMBS_UP':
        return HandGesture_THUMBS_UP_getInstance();
      case 'SPREAD':
        return HandGesture_SPREAD_getInstance();
      case 'HORNS':
        return HandGesture_HORNS_getInstance();
      case 'PUNCH':
        return HandGesture_PUNCH_getInstance();
      case 'PINCH':
        return HandGesture_PINCH_getInstance();
      case 'PULL':
        return HandGesture_PULL_getInstance();
      case 'SLAP':
        return HandGesture_SLAP_getInstance();
      case 'KNEAD':
        return HandGesture_KNEAD_getInstance();
      case 'TWO_HAND_RESIZE':
        return HandGesture_TWO_HAND_RESIZE_getInstance();
      default:
        HandGesture_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var HandGesture_entriesInitialized;
  function HandGesture_initEntries() {
    if (HandGesture_entriesInitialized)
      return Unit_getInstance();
    HandGesture_entriesInitialized = true;
    HandGesture_NONE_instance = new HandGesture('NONE', 0, 'No hand');
    HandGesture_OPEN_instance = new HandGesture('OPEN', 1, 'Open Palm');
    HandGesture_CLOSE_instance = new HandGesture('CLOSE', 2, 'Fist');
    HandGesture_POINTER_instance = new HandGesture('POINTER', 3, 'Pointer');
    HandGesture_OK_instance = new HandGesture('OK', 4, 'OK');
    HandGesture_VICTORY_instance = new HandGesture('VICTORY', 5, 'Victory');
    HandGesture_THUMBS_UP_instance = new HandGesture('THUMBS_UP', 6, 'Thumbs Up');
    HandGesture_SPREAD_instance = new HandGesture('SPREAD', 7, 'Explode!');
    HandGesture_HORNS_instance = new HandGesture('HORNS', 8, 'Scramble!');
    HandGesture_PUNCH_instance = new HandGesture('PUNCH', 9, 'Punch!');
    HandGesture_PINCH_instance = new HandGesture('PINCH', 10, 'Pinch');
    HandGesture_PULL_instance = new HandGesture('PULL', 11, 'Pull');
    HandGesture_SLAP_instance = new HandGesture('SLAP', 12, 'Slap!');
    HandGesture_KNEAD_instance = new HandGesture('KNEAD', 13, 'Knead');
    HandGesture_TWO_HAND_RESIZE_instance = new HandGesture('TWO_HAND_RESIZE', 14, 'Resize');
  }
  var $ENTRIES;
  function HandGesture(name, ordinal, label) {
    Enum.call(this, name, ordinal);
    this.label_1 = label;
  }
  protoOf(HandGesture).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  function Finger3D(x, y, z, ndcX, ndcY) {
    this.x_1 = x;
    this.y_1 = y;
    this.z_1 = z;
    this.ndcX_1 = ndcX;
    this.ndcY_1 = ndcY;
  }
  protoOf(Finger3D).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(Finger3D).get_y_1mhr68_k$ = function () {
    return this.y_1;
  };
  protoOf(Finger3D).get_z_1mhr69_k$ = function () {
    return this.z_1;
  };
  protoOf(Finger3D).get_ndcX_wor0lw_k$ = function () {
    return this.ndcX_1;
  };
  protoOf(Finger3D).get_ndcY_wor0lx_k$ = function () {
    return this.ndcY_1;
  };
  protoOf(Finger3D).component1_7eebsc_k$ = function () {
    return this.x_1;
  };
  protoOf(Finger3D).component2_7eebsb_k$ = function () {
    return this.y_1;
  };
  protoOf(Finger3D).component3_7eebsa_k$ = function () {
    return this.z_1;
  };
  protoOf(Finger3D).component4_7eebs9_k$ = function () {
    return this.ndcX_1;
  };
  protoOf(Finger3D).component5_7eebs8_k$ = function () {
    return this.ndcY_1;
  };
  protoOf(Finger3D).copy_5flxvz_k$ = function (x, y, z, ndcX, ndcY) {
    return new Finger3D(x, y, z, ndcX, ndcY);
  };
  protoOf(Finger3D).copy$default_95xz78_k$ = function (x, y, z, ndcX, ndcY, $super) {
    x = x === VOID ? this.x_1 : x;
    y = y === VOID ? this.y_1 : y;
    z = z === VOID ? this.z_1 : z;
    ndcX = ndcX === VOID ? this.ndcX_1 : ndcX;
    ndcY = ndcY === VOID ? this.ndcY_1 : ndcY;
    return $super === VOID ? this.copy_5flxvz_k$(x, y, z, ndcX, ndcY) : $super.copy_5flxvz_k$.call(this, x, y, z, ndcX, ndcY);
  };
  protoOf(Finger3D).toString = function () {
    return 'Finger3D(x=' + this.x_1 + ', y=' + this.y_1 + ', z=' + this.z_1 + ', ndcX=' + this.ndcX_1 + ', ndcY=' + this.ndcY_1 + ')';
  };
  protoOf(Finger3D).hashCode = function () {
    var result = getNumberHashCode(this.x_1);
    result = imul(result, 31) + getNumberHashCode(this.y_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ndcX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.ndcY_1) | 0;
    return result;
  };
  protoOf(Finger3D).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Finger3D))
      return false;
    var tmp0_other_with_cast = other instanceof Finger3D ? other : THROW_CCE();
    if (!equals(this.x_1, tmp0_other_with_cast.x_1))
      return false;
    if (!equals(this.y_1, tmp0_other_with_cast.y_1))
      return false;
    if (!equals(this.z_1, tmp0_other_with_cast.z_1))
      return false;
    if (!equals(this.ndcX_1, tmp0_other_with_cast.ndcX_1))
      return false;
    if (!equals(this.ndcY_1, tmp0_other_with_cast.ndcY_1))
      return false;
    return true;
  };
  function Hand3DState(wristX, wristY, wristZ, palmCenterX, palmCenterY, palmCenterZ, fingers, palmSpan, handScale, estimatedDepth) {
    this.wristX_1 = wristX;
    this.wristY_1 = wristY;
    this.wristZ_1 = wristZ;
    this.palmCenterX_1 = palmCenterX;
    this.palmCenterY_1 = palmCenterY;
    this.palmCenterZ_1 = palmCenterZ;
    this.fingers_1 = fingers;
    this.palmSpan_1 = palmSpan;
    this.handScale_1 = handScale;
    this.estimatedDepth_1 = estimatedDepth;
  }
  protoOf(Hand3DState).get_wristX_lin5v6_k$ = function () {
    return this.wristX_1;
  };
  protoOf(Hand3DState).get_wristY_lin5v7_k$ = function () {
    return this.wristY_1;
  };
  protoOf(Hand3DState).get_wristZ_lin5v8_k$ = function () {
    return this.wristZ_1;
  };
  protoOf(Hand3DState).get_palmCenterX_fp531k_k$ = function () {
    return this.palmCenterX_1;
  };
  protoOf(Hand3DState).get_palmCenterY_fp531l_k$ = function () {
    return this.palmCenterY_1;
  };
  protoOf(Hand3DState).get_palmCenterZ_fp531m_k$ = function () {
    return this.palmCenterZ_1;
  };
  protoOf(Hand3DState).get_fingers_cucon3_k$ = function () {
    return this.fingers_1;
  };
  protoOf(Hand3DState).get_palmSpan_f3mly3_k$ = function () {
    return this.palmSpan_1;
  };
  protoOf(Hand3DState).get_handScale_96x3zm_k$ = function () {
    return this.handScale_1;
  };
  protoOf(Hand3DState).get_estimatedDepth_6t0t0w_k$ = function () {
    return this.estimatedDepth_1;
  };
  protoOf(Hand3DState).component1_7eebsc_k$ = function () {
    return this.wristX_1;
  };
  protoOf(Hand3DState).component2_7eebsb_k$ = function () {
    return this.wristY_1;
  };
  protoOf(Hand3DState).component3_7eebsa_k$ = function () {
    return this.wristZ_1;
  };
  protoOf(Hand3DState).component4_7eebs9_k$ = function () {
    return this.palmCenterX_1;
  };
  protoOf(Hand3DState).component5_7eebs8_k$ = function () {
    return this.palmCenterY_1;
  };
  protoOf(Hand3DState).component6_7eebs7_k$ = function () {
    return this.palmCenterZ_1;
  };
  protoOf(Hand3DState).component7_7eebs6_k$ = function () {
    return this.fingers_1;
  };
  protoOf(Hand3DState).component8_7eebs5_k$ = function () {
    return this.palmSpan_1;
  };
  protoOf(Hand3DState).component9_7eebs4_k$ = function () {
    return this.handScale_1;
  };
  protoOf(Hand3DState).component10_gazzfo_k$ = function () {
    return this.estimatedDepth_1;
  };
  protoOf(Hand3DState).copy_bz4ki7_k$ = function (wristX, wristY, wristZ, palmCenterX, palmCenterY, palmCenterZ, fingers, palmSpan, handScale, estimatedDepth) {
    return new Hand3DState(wristX, wristY, wristZ, palmCenterX, palmCenterY, palmCenterZ, fingers, palmSpan, handScale, estimatedDepth);
  };
  protoOf(Hand3DState).copy$default_2y5rx4_k$ = function (wristX, wristY, wristZ, palmCenterX, palmCenterY, palmCenterZ, fingers, palmSpan, handScale, estimatedDepth, $super) {
    wristX = wristX === VOID ? this.wristX_1 : wristX;
    wristY = wristY === VOID ? this.wristY_1 : wristY;
    wristZ = wristZ === VOID ? this.wristZ_1 : wristZ;
    palmCenterX = palmCenterX === VOID ? this.palmCenterX_1 : palmCenterX;
    palmCenterY = palmCenterY === VOID ? this.palmCenterY_1 : palmCenterY;
    palmCenterZ = palmCenterZ === VOID ? this.palmCenterZ_1 : palmCenterZ;
    fingers = fingers === VOID ? this.fingers_1 : fingers;
    palmSpan = palmSpan === VOID ? this.palmSpan_1 : palmSpan;
    handScale = handScale === VOID ? this.handScale_1 : handScale;
    estimatedDepth = estimatedDepth === VOID ? this.estimatedDepth_1 : estimatedDepth;
    return $super === VOID ? this.copy_bz4ki7_k$(wristX, wristY, wristZ, palmCenterX, palmCenterY, palmCenterZ, fingers, palmSpan, handScale, estimatedDepth) : $super.copy_bz4ki7_k$.call(this, wristX, wristY, wristZ, palmCenterX, palmCenterY, palmCenterZ, fingers, palmSpan, handScale, estimatedDepth);
  };
  protoOf(Hand3DState).toString = function () {
    return 'Hand3DState(wristX=' + this.wristX_1 + ', wristY=' + this.wristY_1 + ', wristZ=' + this.wristZ_1 + ', palmCenterX=' + this.palmCenterX_1 + ', palmCenterY=' + this.palmCenterY_1 + ', palmCenterZ=' + this.palmCenterZ_1 + ', fingers=' + this.fingers_1 + ', palmSpan=' + this.palmSpan_1 + ', handScale=' + this.handScale_1 + ', estimatedDepth=' + this.estimatedDepth_1 + ')';
  };
  protoOf(Hand3DState).hashCode = function () {
    var result = getNumberHashCode(this.wristX_1);
    result = imul(result, 31) + getNumberHashCode(this.wristY_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.wristZ_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.palmCenterX_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.palmCenterY_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.palmCenterZ_1) | 0;
    result = imul(result, 31) + hashCode(this.fingers_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.palmSpan_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.handScale_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.estimatedDepth_1) | 0;
    return result;
  };
  protoOf(Hand3DState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Hand3DState))
      return false;
    var tmp0_other_with_cast = other instanceof Hand3DState ? other : THROW_CCE();
    if (!equals(this.wristX_1, tmp0_other_with_cast.wristX_1))
      return false;
    if (!equals(this.wristY_1, tmp0_other_with_cast.wristY_1))
      return false;
    if (!equals(this.wristZ_1, tmp0_other_with_cast.wristZ_1))
      return false;
    if (!equals(this.palmCenterX_1, tmp0_other_with_cast.palmCenterX_1))
      return false;
    if (!equals(this.palmCenterY_1, tmp0_other_with_cast.palmCenterY_1))
      return false;
    if (!equals(this.palmCenterZ_1, tmp0_other_with_cast.palmCenterZ_1))
      return false;
    if (!equals(this.fingers_1, tmp0_other_with_cast.fingers_1))
      return false;
    if (!equals(this.palmSpan_1, tmp0_other_with_cast.palmSpan_1))
      return false;
    if (!equals(this.handScale_1, tmp0_other_with_cast.handScale_1))
      return false;
    if (!equals(this.estimatedDepth_1, tmp0_other_with_cast.estimatedDepth_1))
      return false;
    return true;
  };
  function _set_enabled__gwlwmc($this, _set____db54di) {
    $this.enabled_1 = _set____db54di;
  }
  function _set_currentGesture__th28av($this, _set____db54di) {
    $this.currentGesture_1 = _set____db54di;
  }
  function _set_handDetected__2eus9m($this, _set____db54di) {
    $this.handDetected_1 = _set____db54di;
  }
  function _set_hand2Detected__mohb34($this, _set____db54di) {
    $this.hand2Detected_1 = _set____db54di;
  }
  function _set_handX__faf4ws($this, _set____db54di) {
    $this.handX_1 = _set____db54di;
  }
  function _set_handY__faf4xn($this, _set____db54di) {
    $this.handY_1 = _set____db54di;
  }
  function _set_fingerTipX__vpjqk1($this, _set____db54di) {
    $this.fingerTipX_1 = _set____db54di;
  }
  function _set_fingerTipY__vpjqkw($this, _set____db54di) {
    $this.fingerTipY_1 = _set____db54di;
  }
  function _set_handDeltaX__a3g03c($this, _set____db54di) {
    $this.handDeltaX_1 = _set____db54di;
  }
  function _set_handDeltaY__a3g02h($this, _set____db54di) {
    $this.handDeltaY_1 = _set____db54di;
  }
  function _set_hand3D__n8rwuh($this, _set____db54di) {
    $this.hand3D_1 = _set____db54di;
  }
  function _set_hand2_3D__xjtbme($this, _set____db54di) {
    $this.hand2_3D_1 = _set____db54di;
  }
  function _set_pinchAmount__5w4zgz($this, _set____db54di) {
    $this.pinchAmount_1 = _set____db54di;
  }
  function _set_prevPinchAmount__m4mvvq($this, _set____db54di) {
    $this.prevPinchAmount_1 = _set____db54di;
  }
  function _set_twoHandDistance__igsdqt($this, _set____db54di) {
    $this.twoHandDistance_1 = _set____db54di;
  }
  function _set_prevTwoHandDistance__39z2xk($this, _set____db54di) {
    $this.prevTwoHandDistance_1 = _set____db54di;
  }
  function _set_twoHandResizeDelta__hl7e1e($this, _set____db54di) {
    $this.twoHandResizeDelta_1 = _set____db54di;
  }
  function _set_twoHandCenterX__becdgx($this, _set____db54di) {
    $this.twoHandCenterX_1 = _set____db54di;
  }
  function _set_twoHandCenterY__becdg2($this, _set____db54di) {
    $this.twoHandCenterY_1 = _set____db54di;
  }
  function _set_handVelocity__dvrfrp($this, _set____db54di) {
    $this.handVelocity_1 = _set____db54di;
  }
  function _set_depthDelta__fdzxxe($this, _set____db54di) {
    $this.depthDelta_1 = _set____db54di;
  }
  function _set_prevDepth__1w2ved($this, _set____db54di) {
    $this.prevDepth_1 = _set____db54di;
  }
  function _get_prevDepth__v6xbsx($this) {
    return $this.prevDepth_1;
  }
  function _set_kneadPhase__3ik7hd($this, _set____db54di) {
    $this.kneadPhase_1 = _set____db54di;
  }
  function _get_kneadPhase__bjodnv($this) {
    return $this.kneadPhase_1;
  }
  function _set_kneadIntensity__kdgnxl($this, _set____db54di) {
    $this.kneadIntensity_1 = _set____db54di;
  }
  function _set_prevHandX__3q0kdr($this, _set____db54di) {
    $this.prevHandX_1 = _set____db54di;
  }
  function _get_prevHandX__x0v0sb($this) {
    return $this.prevHandX_1;
  }
  function _set_prevHandY__3q0kem($this, _set____db54di) {
    $this.prevHandY_1 = _set____db54di;
  }
  function _get_prevHandY__x0v0t6($this) {
    return $this.prevHandY_1;
  }
  function _set_rawGesture__2ch5ti($this, _set____db54di) {
    $this.rawGesture_1 = _set____db54di;
  }
  function _get_rawGesture__cprfbq($this) {
    return $this.rawGesture_1;
  }
  function _set_gestureFrames__9tqc46($this, _set____db54di) {
    $this.gestureFrames_1 = _set____db54di;
  }
  function _get_gestureFrames__5e16e6($this) {
    return $this.gestureFrames_1;
  }
  function _get_confirmFrames__f7tz4b($this) {
    return $this.confirmFrames_1;
  }
  function _set_resetCooldown__uvnwkr($this, _set____db54di) {
    $this.resetCooldown_1 = _set____db54di;
  }
  function _get_resetCooldown__fnwe2f($this) {
    return $this.resetCooldown_1;
  }
  function _set_colorCooldown__f8jthz($this, _set____db54di) {
    $this.colorCooldown_1 = _set____db54di;
  }
  function _get_colorCooldown__sazn($this) {
    return $this.colorCooldown_1;
  }
  function _set_explodeCooldown__p0ira1($this, _set____db54di) {
    $this.explodeCooldown_1 = _set____db54di;
  }
  function _get_explodeCooldown__z48ysl($this) {
    return $this.explodeCooldown_1;
  }
  function _set_scrambleCooldown__scg51d($this, _set____db54di) {
    $this.scrambleCooldown_1 = _set____db54di;
  }
  function _get_scrambleCooldown__qo41f($this) {
    return $this.scrambleCooldown_1;
  }
  function _set_punchCooldown__dayrf8($this, _set____db54di) {
    $this.punchCooldown_1 = _set____db54di;
  }
  function _get_punchCooldown__siq9xk($this) {
    return $this.punchCooldown_1;
  }
  function _set_slapCooldown__55kw0s($this, _set____db54di) {
    $this.slapCooldown_1 = _set____db54di;
  }
  function _get_slapCooldown__ae5ujc($this) {
    return $this.slapCooldown_1;
  }
  function _set_pullCooldown__15ulix($this, _set____db54di) {
    $this.pullCooldown_1 = _set____db54di;
  }
  function _get_pullCooldown__edw517($this) {
    return $this.pullCooldown_1;
  }
  function _get_velocityHistory__dlvit6($this) {
    return $this.velocityHistory_1;
  }
  function _set_velocityIdx__ips8kl($this, _set____db54di) {
    $this.velocityIdx_1 = _set____db54di;
  }
  function _get_velocityIdx__m0xn2n($this) {
    return $this.velocityIdx_1;
  }
  function start($this) {
    var tmp = typeof window.Hands !== 'undefined';
    var available = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    if (!available) {
      println('MediaPipe Hands not loaded from CDN');
      return Unit_getInstance();
    }
    $this.enabled_1 = true;
    window.initGesture();
  }
  function stop($this) {
    $this.enabled_1 = false;
    window.stopGesture();
    $this.currentGesture_1 = HandGesture_NONE_getInstance();
    $this.handDetected_1 = false;
    $this.hand2Detected_1 = false;
    $this.handDeltaX_1 = 0.0;
    $this.handDeltaY_1 = 0.0;
    $this.hand3D_1 = null;
    $this.hand2_3D_1 = null;
    $this.pinchAmount_1 = 0.0;
    $this.twoHandDistance_1 = 0.0;
    $this.twoHandResizeDelta_1 = 0.0;
  }
  function build3DState($this, lm) {
    var tmp = lm[0].x;
    var wristX = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = lm[0].y;
    var wristY = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = lm[0].z;
    var tmp0_elvis_lhs = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : null;
    var wristZ = tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
    // Inline function 'kotlin.intArrayOf' call
    var palmIndices = new Int32Array([0, 5, 9, 13, 17]);
    var pcx = 0.0;
    var pcy = 0.0;
    var pcz = 0.0;
    var inductionVariable = 0;
    var last = palmIndices.length;
    while (inductionVariable < last) {
      var idx = palmIndices[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp_2 = pcx;
      var tmp_3 = lm[idx].x;
      pcx = tmp_2 + ((!(tmp_3 == null) ? typeof tmp_3 === 'number' : false) ? tmp_3 : THROW_CCE());
      var tmp_4 = pcy;
      var tmp_5 = lm[idx].y;
      pcy = tmp_4 + ((!(tmp_5 == null) ? typeof tmp_5 === 'number' : false) ? tmp_5 : THROW_CCE());
      var tmp_6 = pcz;
      var tmp_7 = lm[idx].z;
      var tmp2_elvis_lhs = (!(tmp_7 == null) ? typeof tmp_7 === 'number' : false) ? tmp_7 : null;
      pcz = tmp_6 + (tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs);
    }
    pcx = pcx / palmIndices.length;
    pcy = pcy / palmIndices.length;
    pcz = pcz / palmIndices.length;
    // Inline function 'kotlin.intArrayOf' call
    var tipIndices = new Int32Array([4, 8, 12, 16, 20]);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(tipIndices.length);
    var inductionVariable_0 = 0;
    var last_0 = tipIndices.length;
    while (inductionVariable_0 < last_0) {
      var item = tipIndices[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'gesture.GestureEngine.build3DState.<anonymous>' call
      var tmp_8 = lm[item].x;
      var fx = (!(tmp_8 == null) ? typeof tmp_8 === 'number' : false) ? tmp_8 : THROW_CCE();
      var tmp_9 = lm[item].y;
      var fy = (!(tmp_9 == null) ? typeof tmp_9 === 'number' : false) ? tmp_9 : THROW_CCE();
      var tmp_10 = lm[item].z;
      var tmp0_elvis_lhs_0 = (!(tmp_10 == null) ? typeof tmp_10 === 'number' : false) ? tmp_10 : null;
      var fz = tmp0_elvis_lhs_0 == null ? 0.0 : tmp0_elvis_lhs_0;
      var ndcX = 1.0 - 2.0 * fx;
      var ndcY = 1.0 - 2.0 * fy;
      var tmp$ret$2 = new Finger3D(fx, fy, fz, ndcX, ndcY);
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    var fingers = destination;
    var tmp_11 = lm[9].x;
    var midMcpX = (!(tmp_11 == null) ? typeof tmp_11 === 'number' : false) ? tmp_11 : THROW_CCE();
    var tmp_12 = lm[9].y;
    var midMcpY = (!(tmp_12 == null) ? typeof tmp_12 === 'number' : false) ? tmp_12 : THROW_CCE();
    // Inline function 'kotlin.math.hypot' call
    var x = wristX - midMcpX;
    var y = wristY - midMcpY;
    var palmSpan = hypot(x, y);
    var minX = 1.0;
    var maxX = 0.0;
    var minY = 1.0;
    var maxY = 0.0;
    // Inline function 'kotlin.intArrayOf' call
    var allIndices = new Int32Array([0, 4, 8, 12, 16, 20, 5, 9, 13, 17]);
    var inductionVariable_1 = 0;
    var last_1 = allIndices.length;
    while (inductionVariable_1 < last_1) {
      var idx_0 = allIndices[inductionVariable_1];
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      var tmp_13 = lm[idx_0].x;
      var lx = (!(tmp_13 == null) ? typeof tmp_13 === 'number' : false) ? tmp_13 : THROW_CCE();
      var tmp_14 = lm[idx_0].y;
      var ly = (!(tmp_14 == null) ? typeof tmp_14 === 'number' : false) ? tmp_14 : THROW_CCE();
      if (lx < minX)
        minX = lx;
      if (lx > maxX)
        maxX = lx;
      if (ly < minY)
        minY = ly;
      if (ly > maxY)
        maxY = ly;
    }
    // Inline function 'kotlin.math.hypot' call
    var x_0 = maxX - minX;
    var y_0 = maxY - minY;
    var handScale = hypot(x_0, y_0);
    var estimatedDepth = palmSpan / 0.16;
    return new Hand3DState(wristX, wristY, wristZ, pcx, pcy, pcz, fingers, palmSpan, handScale, estimatedDepth);
  }
  function classifyGesture($this, lm, lm2) {
    var thumbUp = isThumbExtended($this, lm);
    var indexUp = isFingerExtended($this, lm, 6, 8);
    var middleUp = isFingerExtended($this, lm, 10, 12);
    var ringUp = isFingerExtended($this, lm, 14, 16);
    var pinkyUp = isFingerExtended($this, lm, 18, 20);
    var tmp = lm[4].x;
    var thumbTipX = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = lm[4].y;
    var thumbTipY = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = lm[8].x;
    var indexTipX = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    var tmp_2 = lm[8].y;
    var indexTipY = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    // Inline function 'kotlin.math.hypot' call
    var x = thumbTipX - indexTipX;
    var y = thumbTipY - indexTipY;
    var okDist = hypot(x, y);
    if (lm2 != null ? $this.hand2Detected_1 : false) {
      var index2Up = isFingerExtended($this, lm2, 6, 8);
      var middle2Up = isFingerExtended($this, lm2, 10, 12);
      var ring2Up = isFingerExtended($this, lm2, 14, 16);
      var bothOpen = ((indexUp ? middleUp : false) ? ringUp : false) ? (index2Up ? middle2Up : false) ? ring2Up : false : false;
      if (bothOpen)
        return HandGesture_TWO_HAND_RESIZE_getInstance();
    }
    return (((okDist < 0.06 ? !middleUp : false) ? !ringUp : false) ? !pinkyUp : false) ? HandGesture_PINCH_getInstance() : (okDist < 0.06 ? $this.depthDelta_1 < -0.003 : false) ? HandGesture_PULL_getInstance() : (okDist < 0.06 ? (middleUp ? true : ringUp) ? true : pinkyUp : false) ? HandGesture_OK_getInstance() : ((((thumbUp ? indexUp : false) ? middleUp : false) ? ringUp : false) ? pinkyUp : false) ? HandGesture_SPREAD_getInstance() : (((indexUp ? !middleUp : false) ? !ringUp : false) ? pinkyUp : false) ? HandGesture_HORNS_getInstance() : (((indexUp ? middleUp : false) ? !ringUp : false) ? !pinkyUp : false) ? HandGesture_VICTORY_getInstance() : ((((thumbUp ? !indexUp : false) ? !middleUp : false) ? !ringUp : false) ? !pinkyUp : false) ? HandGesture_THUMBS_UP_getInstance() : (((indexUp ? !middleUp : false) ? !ringUp : false) ? !pinkyUp : false) ? HandGesture_POINTER_getInstance() : ((((!thumbUp ? !indexUp : false) ? !middleUp : false) ? ringUp : false) ? pinkyUp : false) ? HandGesture_KNEAD_getInstance() : ((((!thumbUp ? indexUp : false) ? middleUp : false) ? ringUp : false) ? pinkyUp : false) ? HandGesture_OPEN_getInstance() : ((((!thumbUp ? !indexUp : false) ? !middleUp : false) ? !ringUp : false) ? !pinkyUp : false) ? HandGesture_CLOSE_getInstance() : HandGesture_NONE_getInstance();
  }
  function isThumbExtended($this, lm) {
    var tmp = lm[4].x;
    var tipX = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = lm[3].x;
    var ipX = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = lm[2].x;
    var mcpX = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
    // Inline function 'kotlin.math.abs' call
    var x = tipX - mcpX;
    var tmp_2 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = ipX - mcpX;
    return tmp_2 > Math.abs(x_0) * 1.1;
  }
  function isFingerExtended($this, lm, pip, tip) {
    var tmp = lm[tip].y;
    var tipY = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp_0 = lm[pip].y;
    var pipY = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
    return tipY < pipY - 0.02;
  }
  function GestureEngine() {
    this.enabled_1 = false;
    this.currentGesture_1 = HandGesture_NONE_getInstance();
    this.handDetected_1 = false;
    this.hand2Detected_1 = false;
    this.handX_1 = 0.5;
    this.handY_1 = 0.5;
    this.fingerTipX_1 = 0.5;
    this.fingerTipY_1 = 0.5;
    this.handDeltaX_1 = 0.0;
    this.handDeltaY_1 = 0.0;
    this.hand3D_1 = null;
    this.hand2_3D_1 = null;
    this.pinchAmount_1 = 0.0;
    this.prevPinchAmount_1 = 0.0;
    this.twoHandDistance_1 = 0.0;
    this.prevTwoHandDistance_1 = 0.0;
    this.twoHandResizeDelta_1 = 0.0;
    this.twoHandCenterX_1 = 0.5;
    this.twoHandCenterY_1 = 0.5;
    this.handVelocity_1 = 0.0;
    this.depthDelta_1 = 0.0;
    this.prevDepth_1 = 0.0;
    this.kneadPhase_1 = 0.0;
    this.kneadIntensity_1 = 0.0;
    this.prevHandX_1 = 0.5;
    this.prevHandY_1 = 0.5;
    this.rawGesture_1 = HandGesture_NONE_getInstance();
    this.gestureFrames_1 = 0;
    this.confirmFrames_1 = 3;
    this.resetCooldown_1 = 0.0;
    this.colorCooldown_1 = 0.0;
    this.explodeCooldown_1 = 0.0;
    this.scrambleCooldown_1 = 0.0;
    this.punchCooldown_1 = 0.0;
    this.slapCooldown_1 = 0.0;
    this.pullCooldown_1 = 0.0;
    this.velocityHistory_1 = new Float64Array(5);
    this.velocityIdx_1 = 0;
  }
  protoOf(GestureEngine).get_enabled_pcr8o8_k$ = function () {
    return this.enabled_1;
  };
  protoOf(GestureEngine).get_currentGesture_5tp4t5_k$ = function () {
    return this.currentGesture_1;
  };
  protoOf(GestureEngine).get_handDetected_ht26cm_k$ = function () {
    return this.handDetected_1;
  };
  protoOf(GestureEngine).get_hand2Detected_tczc4c_k$ = function () {
    return this.hand2Detected_1;
  };
  protoOf(GestureEngine).get_handX_iscb6o_k$ = function () {
    return this.handX_1;
  };
  protoOf(GestureEngine).get_handY_iscb6p_k$ = function () {
    return this.handY_1;
  };
  protoOf(GestureEngine).get_fingerTipX_y2iqwf_k$ = function () {
    return this.fingerTipX_1;
  };
  protoOf(GestureEngine).get_fingerTipY_y2iqwg_k$ = function () {
    return this.fingerTipY_1;
  };
  protoOf(GestureEngine).get_handDeltaX_68bc7c_k$ = function () {
    return this.handDeltaX_1;
  };
  protoOf(GestureEngine).get_handDeltaY_68bc7b_k$ = function () {
    return this.handDeltaY_1;
  };
  protoOf(GestureEngine).get_hand3D_e5p63t_k$ = function () {
    return this.hand3D_1;
  };
  protoOf(GestureEngine).get_hand2_3D_vsqld6_k$ = function () {
    return this.hand2_3D_1;
  };
  protoOf(GestureEngine).get_pinchAmount_pmvww9_k$ = function () {
    return this.pinchAmount_1;
  };
  protoOf(GestureEngine).get_prevPinchAmount_om9boq_k$ = function () {
    return this.prevPinchAmount_1;
  };
  protoOf(GestureEngine).get_twoHandDistance_gi9gqv_k$ = function () {
    return this.twoHandDistance_1;
  };
  protoOf(GestureEngine).get_prevTwoHandDistance_oc01qs_k$ = function () {
    return this.prevTwoHandDistance_1;
  };
  protoOf(GestureEngine).get_twoHandResizeDelta_jd4hle_k$ = function () {
    return this.twoHandResizeDelta_1;
  };
  protoOf(GestureEngine).get_twoHandCenterX_kjn975_k$ = function () {
    return this.twoHandCenterX_1;
  };
  protoOf(GestureEngine).get_twoHandCenterY_kjn976_k$ = function () {
    return this.twoHandCenterY_1;
  };
  protoOf(GestureEngine).get_handVelocity_5ipx1_k$ = function () {
    return this.handVelocity_1;
  };
  protoOf(GestureEngine).get_depthDelta_gv5o76_k$ = function () {
    return this.depthDelta_1;
  };
  protoOf(GestureEngine).get_kneadIntensity_csrpe1_k$ = function () {
    return this.kneadIntensity_1;
  };
  protoOf(GestureEngine).toggle_ecyros_k$ = function () {
    if (this.enabled_1) {
      stop(this);
    } else {
      start(this);
    }
    return this.enabled_1;
  };
  protoOf(GestureEngine).update_1d1qib_k$ = function (dt) {
    if (!this.enabled_1)
      return Unit_getInstance();
    this.resetCooldown_1 = coerceAtLeast(this.resetCooldown_1 - dt, 0.0);
    this.colorCooldown_1 = coerceAtLeast(this.colorCooldown_1 - dt, 0.0);
    this.explodeCooldown_1 = coerceAtLeast(this.explodeCooldown_1 - dt, 0.0);
    this.scrambleCooldown_1 = coerceAtLeast(this.scrambleCooldown_1 - dt, 0.0);
    this.punchCooldown_1 = coerceAtLeast(this.punchCooldown_1 - dt, 0.0);
    this.slapCooldown_1 = coerceAtLeast(this.slapCooldown_1 - dt, 0.0);
    this.pullCooldown_1 = coerceAtLeast(this.pullCooldown_1 - dt, 0.0);
    var tmp = window._handDetected === true;
    var detected = (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
    if (!detected) {
      this.handDetected_1 = false;
      this.hand2Detected_1 = false;
      this.currentGesture_1 = HandGesture_NONE_getInstance();
      this.handDeltaX_1 = 0.0;
      this.handDeltaY_1 = 0.0;
      this.hand3D_1 = null;
      this.hand2_3D_1 = null;
      this.depthDelta_1 = 0.0;
      var label = document.getElementById('gestureLabel');
      if (label != null) {
        label.textContent = 'No hand';
      }
      return Unit_getInstance();
    }
    this.handDetected_1 = true;
    var lm = window._handLandmarks;
    if (lm == null)
      return Unit_getInstance();
    var tmp_0 = window._hand2Detected === true;
    var h2detected = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    this.hand2Detected_1 = h2detected;
    var lm2 = h2detected ? window._hand2Landmarks : null;
    this.prevHandX_1 = this.handX_1;
    this.prevHandY_1 = this.handY_1;
    var tmp_1 = this;
    var tmp_2 = lm[0].x;
    tmp_1.handX_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE();
    var tmp_3 = this;
    var tmp_4 = lm[0].y;
    tmp_3.handY_1 = (!(tmp_4 == null) ? typeof tmp_4 === 'number' : false) ? tmp_4 : THROW_CCE();
    this.handDeltaX_1 = this.handX_1 - this.prevHandX_1;
    this.handDeltaY_1 = this.handY_1 - this.prevHandY_1;
    var tmp_5 = this;
    var tmp_6 = lm[8].x;
    tmp_5.fingerTipX_1 = (!(tmp_6 == null) ? typeof tmp_6 === 'number' : false) ? tmp_6 : THROW_CCE();
    var tmp_7 = this;
    var tmp_8 = lm[8].y;
    tmp_7.fingerTipY_1 = (!(tmp_8 == null) ? typeof tmp_8 === 'number' : false) ? tmp_8 : THROW_CCE();
    this.hand3D_1 = build3DState(this, lm);
    this.hand2_3D_1 = lm2 != null ? build3DState(this, lm2) : null;
    var tmp0_safe_receiver = this.hand3D_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.estimatedDepth_1;
    var currentDepth = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    this.depthDelta_1 = currentDepth - this.prevDepth_1;
    this.prevDepth_1 = currentDepth;
    // Inline function 'kotlin.math.hypot' call
    var x = this.handDeltaX_1;
    var y = this.handDeltaY_1;
    var rawVel = hypot(x, y);
    this.velocityHistory_1[this.velocityIdx_1 % 5 | 0] = rawVel;
    this.velocityIdx_1 = this.velocityIdx_1 + 1 | 0;
    this.handVelocity_1 = average(this.velocityHistory_1);
    var tmp_9 = lm[4].x;
    var thumbTipX = (!(tmp_9 == null) ? typeof tmp_9 === 'number' : false) ? tmp_9 : THROW_CCE();
    var tmp_10 = lm[4].y;
    var thumbTipY = (!(tmp_10 == null) ? typeof tmp_10 === 'number' : false) ? tmp_10 : THROW_CCE();
    var tmp_11 = lm[4].z;
    var tmp4_elvis_lhs = (!(tmp_11 == null) ? typeof tmp_11 === 'number' : false) ? tmp_11 : null;
    var thumbTipZ = tmp4_elvis_lhs == null ? 0.0 : tmp4_elvis_lhs;
    var tmp_12 = lm[8].x;
    var indexTipX = (!(tmp_12 == null) ? typeof tmp_12 === 'number' : false) ? tmp_12 : THROW_CCE();
    var tmp_13 = lm[8].y;
    var indexTipY = (!(tmp_13 == null) ? typeof tmp_13 === 'number' : false) ? tmp_13 : THROW_CCE();
    var tmp_14 = lm[8].z;
    var tmp5_elvis_lhs = (!(tmp_14 == null) ? typeof tmp_14 === 'number' : false) ? tmp_14 : null;
    var indexTipZ = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = (thumbTipX - indexTipX) * (thumbTipX - indexTipX) + (thumbTipY - indexTipY) * (thumbTipY - indexTipY) + (thumbTipZ - indexTipZ) * (thumbTipZ - indexTipZ);
    var pinchDist = Math.sqrt(x_0);
    this.prevPinchAmount_1 = this.pinchAmount_1;
    this.pinchAmount_1 = 1.0 - coerceIn_0((pinchDist - 0.03) / 0.12, 0.0, 1.0);
    if (this.hand2Detected_1 ? !(this.hand2_3D_1 == null) : false) {
      this.prevTwoHandDistance_1 = this.twoHandDistance_1;
      var h1 = ensureNotNull(this.hand3D_1);
      var h2 = ensureNotNull(this.hand2_3D_1);
      var tmp_15 = this;
      // Inline function 'kotlin.math.hypot' call
      var x_1 = h1.palmCenterX_1 - h2.palmCenterX_1;
      var y_0 = h1.palmCenterY_1 - h2.palmCenterY_1;
      tmp_15.twoHandDistance_1 = hypot(x_1, y_0);
      this.twoHandResizeDelta_1 = this.twoHandDistance_1 - this.prevTwoHandDistance_1;
      this.twoHandCenterX_1 = (h1.palmCenterX_1 + h2.palmCenterX_1) / 2.0;
      this.twoHandCenterY_1 = (h1.palmCenterY_1 + h2.palmCenterY_1) / 2.0;
    } else {
      this.twoHandResizeDelta_1 = 0.0;
    }
    if (this.currentGesture_1.equals(HandGesture_KNEAD_getInstance())) {
      this.kneadPhase_1 = this.kneadPhase_1 + dt * 3.0;
      var tmp_16 = this;
      // Inline function 'kotlin.math.sin' call
      var x_2 = this.kneadPhase_1;
      tmp_16.kneadIntensity_1 = (Math.sin(x_2) + 1.0) / 2.0;
    } else {
      this.kneadPhase_1 = 0.0;
      this.kneadIntensity_1 = 0.0;
    }
    var detectedGesture = classifyGesture(this, lm, lm2);
    if (detectedGesture.equals(this.rawGesture_1)) {
      this.gestureFrames_1 = this.gestureFrames_1 + 1 | 0;
    } else {
      this.rawGesture_1 = detectedGesture;
      this.gestureFrames_1 = 1;
    }
    if (this.gestureFrames_1 >= this.confirmFrames_1) {
      this.currentGesture_1 = this.rawGesture_1;
    }
    if (this.currentGesture_1.equals(HandGesture_CLOSE_getInstance())) {
      if (this.handVelocity_1 > 0.025) {
        this.currentGesture_1 = HandGesture_PUNCH_getInstance();
      }
    }
    if (this.currentGesture_1.equals(HandGesture_OPEN_getInstance())) {
      if (this.handVelocity_1 > 0.04) {
        this.currentGesture_1 = HandGesture_SLAP_getInstance();
      }
    }
    var label_0 = document.getElementById('gestureLabel');
    if (label_0 != null) {
      label_0.textContent = this.currentGesture_1.label_1;
    }
  };
  protoOf(GestureEngine).shouldReset_7lex7o_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_OK_getInstance()) ? this.resetCooldown_1 <= 0.0 : false) {
      this.resetCooldown_1 = 1.5;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).shouldCycleColor_qmzrjk_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_THUMBS_UP_getInstance()) ? this.colorCooldown_1 <= 0.0 : false) {
      this.colorCooldown_1 = 1.0;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).shouldExplode_m9cnrm_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_SPREAD_getInstance()) ? this.explodeCooldown_1 <= 0.0 : false) {
      this.explodeCooldown_1 = 1.5;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).shouldScramble_pql5r4_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_HORNS_getInstance()) ? this.scrambleCooldown_1 <= 0.0 : false) {
      this.scrambleCooldown_1 = 1.2;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).shouldPunch_7m8edh_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_PUNCH_getInstance()) ? this.punchCooldown_1 <= 0.0 : false) {
      this.punchCooldown_1 = 0.6;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).shouldSlap_4trucl_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_SLAP_getInstance()) ? this.slapCooldown_1 <= 0.0 : false) {
      this.slapCooldown_1 = 0.5;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).shouldPull_4ttkdk_k$ = function () {
    if (this.currentGesture_1.equals(HandGesture_PULL_getInstance()) ? this.pullCooldown_1 <= 0.0 : false) {
      this.pullCooldown_1 = 0.3;
      return true;
    }
    return false;
  };
  protoOf(GestureEngine).getFingerNDC_8gqdfy_k$ = function () {
    var ndcX = 1.0 - 2.0 * this.fingerTipX_1;
    var ndcY = 1.0 - 2.0 * this.fingerTipY_1;
    return new Pair(ndcX, ndcY);
  };
  protoOf(GestureEngine).getAllFingerNDC_hesi5j_k$ = function () {
    var tmp0_safe_receiver = this.hand3D_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fingers_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var tmp0_iterator = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'gesture.GestureEngine.getAllFingerNDC.<anonymous>' call
        var tmp$ret$0 = new Pair(item.ndcX_1, item.ndcY_1);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(GestureEngine).getRotationDelta_ep2l7g_k$ = function () {
    if (!this.handDetected_1)
      return new Pair(0.0, 0.0);
    return new Pair(this.handDeltaY_1 * 4.0, -this.handDeltaX_1 * 4.0);
  };
  function HandGesture_NONE_getInstance() {
    HandGesture_initEntries();
    return HandGesture_NONE_instance;
  }
  function HandGesture_OPEN_getInstance() {
    HandGesture_initEntries();
    return HandGesture_OPEN_instance;
  }
  function HandGesture_CLOSE_getInstance() {
    HandGesture_initEntries();
    return HandGesture_CLOSE_instance;
  }
  function HandGesture_POINTER_getInstance() {
    HandGesture_initEntries();
    return HandGesture_POINTER_instance;
  }
  function HandGesture_OK_getInstance() {
    HandGesture_initEntries();
    return HandGesture_OK_instance;
  }
  function HandGesture_VICTORY_getInstance() {
    HandGesture_initEntries();
    return HandGesture_VICTORY_instance;
  }
  function HandGesture_THUMBS_UP_getInstance() {
    HandGesture_initEntries();
    return HandGesture_THUMBS_UP_instance;
  }
  function HandGesture_SPREAD_getInstance() {
    HandGesture_initEntries();
    return HandGesture_SPREAD_instance;
  }
  function HandGesture_HORNS_getInstance() {
    HandGesture_initEntries();
    return HandGesture_HORNS_instance;
  }
  function HandGesture_PUNCH_getInstance() {
    HandGesture_initEntries();
    return HandGesture_PUNCH_instance;
  }
  function HandGesture_PINCH_getInstance() {
    HandGesture_initEntries();
    return HandGesture_PINCH_instance;
  }
  function HandGesture_PULL_getInstance() {
    HandGesture_initEntries();
    return HandGesture_PULL_instance;
  }
  function HandGesture_SLAP_getInstance() {
    HandGesture_initEntries();
    return HandGesture_SLAP_instance;
  }
  function HandGesture_KNEAD_getInstance() {
    HandGesture_initEntries();
    return HandGesture_KNEAD_instance;
  }
  function HandGesture_TWO_HAND_RESIZE_getInstance() {
    HandGesture_initEntries();
    return HandGesture_TWO_HAND_RESIZE_instance;
  }
  function _get_onReset__bnqbvj($this) {
    return $this.onReset_1;
  }
  function _get_onToggleSound__bcjmuj($this) {
    return $this.onToggleSound_1;
  }
  function _get_onCycleTheme__klnv3r($this) {
    return $this.onCycleTheme_1;
  }
  function _get_onCycleScale__l5j15k($this) {
    return $this.onCycleScale_1;
  }
  function _get_onCycleStyle__kvr7dr($this) {
    return $this.onCycleStyle_1;
  }
  function _get_onToggleGesture__yg159h($this) {
    return $this.onToggleGesture_1;
  }
  function _set_quoteEl__osix5q($this, _set____db54di) {
    $this.quoteEl_1 = _set____db54di;
  }
  function _get_quoteEl__kmcuge($this) {
    return $this.quoteEl_1;
  }
  function _set_soundBtn__7bpqcq($this, _set____db54di) {
    $this.soundBtn_1 = _set____db54di;
  }
  function _get_soundBtn__5h6l42($this) {
    return $this.soundBtn_1;
  }
  function _set_currentSection__cm1yzv($this, _set____db54di) {
    $this.currentSection_1 = _set____db54di;
  }
  function _get_currentSection__wvymxt($this) {
    return $this.currentSection_1;
  }
  function _set_sectionDeform__ew5e9n($this, _set____db54di) {
    $this.sectionDeform_1 = _set____db54di;
  }
  function _get_sectionDeform__bm48p($this) {
    return $this.sectionDeform_1;
  }
  function _set_sectionFocus__hm8vd0($this, _set____db54di) {
    $this.sectionFocus_1 = _set____db54di;
  }
  function _get_sectionFocus__x5zlx4($this) {
    return $this.sectionFocus_1;
  }
  function _set_sectionMotivation__7r8com($this, _set____db54di) {
    $this.sectionMotivation_1 = _set____db54di;
  }
  function _get_sectionMotivation__th18yy($this) {
    return $this.sectionMotivation_1;
  }
  function _set_sectionCalm__7e11up($this, _set____db54di) {
    $this.sectionCalm_1 = _set____db54di;
  }
  function _get_sectionCalm__xcotsj($this) {
    return $this.sectionCalm_1;
  }
  function _set_breathingActive__2r7tjx($this, _set____db54di) {
    $this.breathingActive_1 = _set____db54di;
  }
  function _get_breathingActive__cuy12h($this) {
    return $this.breathingActive_1;
  }
  function _set_breathingPhase__u66332($this, _set____db54di) {
    $this.breathingPhase_1 = _set____db54di;
  }
  function _get_breathingPhase__fbuium($this) {
    return $this.breathingPhase_1;
  }
  function _set_breathingTimer__w33r10($this, _set____db54di) {
    $this.breathingTimer_1 = _set____db54di;
  }
  function _get_breathingTimer__dewuwo($this) {
    return $this.breathingTimer_1;
  }
  function _set_breathingCircle__yx2hub($this, _set____db54di) {
    $this.breathingCircle_1 = _set____db54di;
  }
  function _get_breathingCircle__q0bcm9($this) {
    return $this.breathingCircle_1;
  }
  function _set_breathingLabel__s65e4l($this, _set____db54di) {
    $this.breathingLabel_1 = _set____db54di;
  }
  function _get_breathingLabel__hbv7t3($this) {
    return $this.breathingLabel_1;
  }
  function _set_breathingBtn__ssuuoz($this, _set____db54di) {
    $this.breathingBtn_1 = _set____db54di;
  }
  function _get_breathingBtn__d9444v($this) {
    return $this.breathingBtn_1;
  }
  function _set_motivationQuoteEl__8ca108($this, _set____db54di) {
    $this.motivationQuoteEl_1 = _set____db54di;
  }
  function _get_motivationQuoteEl__ddiva4($this) {
    return $this.motivationQuoteEl_1;
  }
  function _set_motivationIndex__n5s8q1($this, _set____db54di) {
    $this.motivationIndex_1 = _set____db54di;
  }
  function _get_motivationIndex__x9ig8l($this) {
    return $this.motivationIndex_1;
  }
  function _get_quotes__m8xdos($this) {
    return $this.quotes_1;
  }
  function _set_quoteVisible__ox0pj3($this, _set____db54di) {
    $this.quoteVisible_1 = _set____db54di;
  }
  function _get_quoteVisible__9d9yyz($this) {
    return $this.quoteVisible_1;
  }
  function createSection($this, id, html) {
    // Inline function 'kotlin.apply' call
    var tmp = document.createElement('div');
    var this_0 = tmp instanceof HTMLDivElement ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ui.HtmlOverlay.createSection.<anonymous>' call
    this_0.id = id;
    this_0.className = 'section';
    this_0.innerHTML = html;
    return this_0;
  }
  function _set_cameraPreviewOn__hcddpf($this, _set____db54di) {
    $this.cameraPreviewOn_1 = _set____db54di;
  }
  function _get_cameraPreviewOn__rg3l7z($this) {
    return $this.cameraPreviewOn_1;
  }
  function toggleCameraPreview($this) {
    $this.cameraPreviewOn_1 = !$this.cameraPreviewOn_1;
    var tmp = document.getElementById('btnCamPreview');
    var tmp0_safe_receiver = tmp instanceof HTMLElement ? tmp : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = $this.cameraPreviewOn_1 ? 'Camera On' : 'Camera Off';
    }
    if ($this.cameraPreviewOn_1) {
      window._cameraPreviewOn = true;
      if (!document.getElementById('cameraPreview')) {
        var c = document.createElement('canvas');
        c.id = 'cameraPreview';
        c.className = 'camera-preview';
        c.width = 320;
        c.height = 240;
        document.body.appendChild(c);
      }
      document.getElementById('cameraPreview').style.display = '';
    } else {
      window._cameraPreviewOn = false;
      var cp = document.getElementById('cameraPreview');
      if (cp)
        cp.style.display = 'none';
    }
  }
  function nextMotivationQuote($this) {
    $this.motivationIndex_1 = ($this.motivationIndex_1 + 1 | 0) % $this.quotes_1.length | 0;
    var tmp0_safe_receiver = $this.motivationQuoteEl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ui.HtmlOverlay.nextMotivationQuote.<anonymous>' call
      tmp0_safe_receiver.classList.remove('fade-in');
      var tmp = window;
      tmp.requestAnimationFrame(HtmlOverlay$nextMotivationQuote$lambda(tmp0_safe_receiver, $this));
    }
  }
  function toggleBreathing($this) {
    if ($this.breathingActive_1) {
      stopBreathing($this);
    } else {
      startBreathing($this);
    }
  }
  function startBreathing($this) {
    $this.breathingActive_1 = true;
    $this.breathingPhase_1 = 'inhale';
    $this.breathingTimer_1 = 0.0;
    var tmp0_safe_receiver = $this.breathingBtn_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = 'Stop';
    }
    var tmp1_safe_receiver = $this.breathingCircle_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.classList;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.add('inhale');
    }
    var tmp3_safe_receiver = $this.breathingLabel_1;
    if (tmp3_safe_receiver != null) {
      tmp3_safe_receiver.textContent = 'Breathe in...';
    }
  }
  function stopBreathing($this) {
    $this.breathingActive_1 = false;
    $this.breathingPhase_1 = 'idle';
    $this.breathingTimer_1 = 0.0;
    var tmp0_safe_receiver = $this.breathingBtn_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = 'Start Breathing';
    }
    var tmp1_safe_receiver = $this.breathingCircle_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.classList;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.remove('inhale', 'hold', 'exhale');
    }
    var tmp3_safe_receiver = $this.breathingLabel_1;
    if (tmp3_safe_receiver != null) {
      tmp3_safe_receiver.textContent = 'Ready';
    }
  }
  function HtmlOverlay$_init_$lambda_xh36sm() {
    return Unit_getInstance();
  }
  function HtmlOverlay$_init_$lambda_xh36sm_0() {
    return Unit_getInstance();
  }
  function HtmlOverlay$_init_$lambda_xh36sm_1() {
    return Unit_getInstance();
  }
  function HtmlOverlay$setup$lambda(this$0) {
    return function (it) {
      this$0.onReset_1();
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_0(this$0) {
    return function (it) {
      this$0.onToggleSound_1();
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_1(this$0) {
    return function (it) {
      this$0.onCycleTheme_1();
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_2(it) {
    document.dispatchEvent(new KeyboardEvent('keydown', {key: 'c'}));
    return Unit_getInstance();
  }
  function HtmlOverlay$setup$lambda_3(this$0) {
    return function (it) {
      this$0.onCycleStyle_1();
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_4(this$0) {
    return function (it) {
      this$0.onCycleScale_1();
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_5(this$0) {
    return function (it) {
      this$0.onToggleGesture_1();
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_6(this$0) {
    return function (it) {
      toggleCameraPreview(this$0);
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_7(this$0) {
    return function (it) {
      toggleBreathing(this$0);
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_8(this$0) {
    return function (it) {
      nextMotivationQuote(this$0);
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda$lambda($btn, this$0) {
    return function (it) {
      var tmp = $btn.getAttribute('data-section');
      var section = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
      this$0.switchSection_whxpfr_k$(section);
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$setup$lambda_9(this$0) {
    return function (btn) {
      var tmp = btn instanceof HTMLElement ? btn : THROW_CCE();
      tmp.addEventListener('click', HtmlOverlay$setup$lambda$lambda(btn, this$0));
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$switchSection$lambda($name) {
    return function (btn) {
      var el = btn instanceof HTMLElement ? btn : THROW_CCE();
      var tmp;
      if (el.getAttribute('data-section') === $name) {
        el.classList.add('active');
        tmp = Unit_getInstance();
      } else {
        el.classList.remove('active');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HtmlOverlay$nextMotivationQuote$lambda($el, this$0) {
    return function (it) {
      $el.textContent = '"' + this$0.quotes_1[this$0.motivationIndex_1] + '"';
      $el.classList.add('fade-in');
      return Unit_getInstance();
    };
  }
  function HtmlOverlay(onReset, onToggleSound, onCycleTheme, onCycleScale, onCycleStyle, onToggleGesture) {
    var tmp;
    if (onCycleScale === VOID) {
      tmp = HtmlOverlay$_init_$lambda_xh36sm;
    } else {
      tmp = onCycleScale;
    }
    onCycleScale = tmp;
    var tmp_0;
    if (onCycleStyle === VOID) {
      tmp_0 = HtmlOverlay$_init_$lambda_xh36sm_0;
    } else {
      tmp_0 = onCycleStyle;
    }
    onCycleStyle = tmp_0;
    var tmp_1;
    if (onToggleGesture === VOID) {
      tmp_1 = HtmlOverlay$_init_$lambda_xh36sm_1;
    } else {
      tmp_1 = onToggleGesture;
    }
    onToggleGesture = tmp_1;
    this.onReset_1 = onReset;
    this.onToggleSound_1 = onToggleSound;
    this.onCycleTheme_1 = onCycleTheme;
    this.onCycleScale_1 = onCycleScale;
    this.onCycleStyle_1 = onCycleStyle;
    this.onToggleGesture_1 = onToggleGesture;
    this.quoteEl_1 = null;
    this.soundBtn_1 = null;
    this.currentSection_1 = 'deform';
    this.sectionDeform_1 = null;
    this.sectionFocus_1 = null;
    this.sectionMotivation_1 = null;
    this.sectionCalm_1 = null;
    this.breathingActive_1 = false;
    this.breathingPhase_1 = 'idle';
    this.breathingTimer_1 = 0.0;
    this.breathingCircle_1 = null;
    this.breathingLabel_1 = null;
    this.breathingBtn_1 = null;
    this.motivationQuoteEl_1 = null;
    this.motivationIndex_1 = 0;
    var tmp_2 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_2.quotes_1 = ["Take a breath. You're doing well.", 'Small progress is still progress.', "You don't have to rush.", "You've solved harder problems before.", 'Be kind to yourself today.', 'This moment is yours.', "Let go of what you can't control.", 'One step at a time.', "You're exactly where you need to be.", 'Rest is productive too.', 'Breathe in calm, breathe out tension.', 'Your best is enough.', "It's okay to take a break.", 'You are more capable than you think.', "Slow down. There's no hurry.", 'Trust the process.', "You're making it happen.", 'Consistency beats intensity.', 'Give yourself permission to pause.', 'Every expert was once a beginner.'];
    this.quoteVisible_1 = false;
    this.cameraPreviewOn_1 = false;
  }
  protoOf(HtmlOverlay).setup_2u6ser_k$ = function () {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp_0 = document.createElement('div');
    var this_0 = tmp_0 instanceof HTMLDivElement ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ui.HtmlOverlay.setup.<anonymous>' call
    this_0.id = 'quote';
    this_0.textContent = this.quotes_1[0];
    tmp.quoteEl_1 = this_0;
    var tmp0_safe_receiver = document.body;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.appendChild(ensureNotNull(this.quoteEl_1));
    this.sectionDeform_1 = createSection(this, 'section-deform', '<div class="section-hint">\n    drag to rotate \xB7 scroll to zoom \xB7 keys to deform\n<\/div>\n<div class="deform-controls">\n    <button class="pill-btn" id="btnReset">Reset<\/button>\n    <button class="pill-btn" id="btnSound">Sound Off<\/button>\n    <button class="pill-btn" id="btnTheme">Theme<\/button>\n    <button class="pill-btn" id="btnColor">Color<\/button>\n    <button class="pill-btn" id="btnStyle">Calm Jelly<\/button>\n    <button class="pill-btn" id="btnScale">Normal<\/button>\n    <button class="pill-btn" id="btnGesture">Gesture Off<\/button>\n    <button class="pill-btn" id="btnCamPreview">Camera Off<\/button>\n<\/div>');
    var tmp1_safe_receiver = document.body;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.appendChild(ensureNotNull(this.sectionDeform_1));
    var tmp2_safe_receiver = document.getElementById('btnReset');
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda(this));
    }
    var tmp_1 = this;
    var tmp_2 = document.getElementById('btnSound');
    tmp_1.soundBtn_1 = tmp_2 instanceof HTMLElement ? tmp_2 : null;
    var tmp3_safe_receiver = this.soundBtn_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_0(this));
    }
    var tmp4_safe_receiver = document.getElementById('btnTheme');
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_1(this));
    }
    var tmp5_safe_receiver = document.getElementById('btnColor');
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_2);
    }
    var tmp6_safe_receiver = document.getElementById('btnStyle');
    if (tmp6_safe_receiver == null)
      null;
    else {
      tmp6_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_3(this));
    }
    var tmp7_safe_receiver = document.getElementById('btnScale');
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_4(this));
    }
    var tmp8_safe_receiver = document.getElementById('btnGesture');
    if (tmp8_safe_receiver == null)
      null;
    else {
      tmp8_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_5(this));
    }
    var tmp9_safe_receiver = document.getElementById('btnCamPreview');
    if (tmp9_safe_receiver == null)
      null;
    else {
      tmp9_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_6(this));
    }
    this.sectionFocus_1 = createSection(this, 'section-focus', '<div class="focus-content">\n    <div class="breathing-ring" id="breathRing">\n        <div class="breathing-circle" id="breathCircle"><\/div>\n    <\/div>\n    <div class="breathing-label" id="breathLabel">Ready<\/div>\n    <button class="pill-btn breath-btn" id="btnBreath">Start Breathing<\/button>\n    <div class="focus-desc">4 seconds inhale \xB7 4 seconds hold \xB7 4 seconds exhale<\/div>\n<\/div>');
    var tmp10_safe_receiver = this.sectionFocus_1;
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.style;
    if (tmp11_safe_receiver != null) {
      tmp11_safe_receiver.display = 'none';
    }
    var tmp12_safe_receiver = document.body;
    if (tmp12_safe_receiver == null)
      null;
    else
      tmp12_safe_receiver.appendChild(ensureNotNull(this.sectionFocus_1));
    var tmp_3 = this;
    var tmp_4 = document.getElementById('breathCircle');
    tmp_3.breathingCircle_1 = tmp_4 instanceof HTMLElement ? tmp_4 : null;
    var tmp_5 = this;
    var tmp_6 = document.getElementById('breathLabel');
    tmp_5.breathingLabel_1 = tmp_6 instanceof HTMLElement ? tmp_6 : null;
    var tmp_7 = this;
    var tmp_8 = document.getElementById('btnBreath');
    tmp_7.breathingBtn_1 = tmp_8 instanceof HTMLElement ? tmp_8 : null;
    var tmp13_safe_receiver = this.breathingBtn_1;
    if (tmp13_safe_receiver == null)
      null;
    else {
      tmp13_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_7(this));
    }
    this.sectionMotivation_1 = createSection(this, 'section-motivation', '<div class="motivation-content">\n    <div class="motivation-quote" id="motivQuote">"Small progress is still progress."<\/div>\n    <div class="motivation-actions">\n        <button class="pill-btn" id="btnNextQuote">Next Quote<\/button>\n    <\/div>\n<\/div>');
    var tmp14_safe_receiver = this.sectionMotivation_1;
    var tmp15_safe_receiver = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.style;
    if (tmp15_safe_receiver != null) {
      tmp15_safe_receiver.display = 'none';
    }
    var tmp16_safe_receiver = document.body;
    if (tmp16_safe_receiver == null)
      null;
    else
      tmp16_safe_receiver.appendChild(ensureNotNull(this.sectionMotivation_1));
    var tmp_9 = this;
    var tmp_10 = document.getElementById('motivQuote');
    tmp_9.motivationQuoteEl_1 = tmp_10 instanceof HTMLElement ? tmp_10 : null;
    var tmp17_safe_receiver = document.getElementById('btnNextQuote');
    if (tmp17_safe_receiver == null)
      null;
    else {
      tmp17_safe_receiver.addEventListener('click', HtmlOverlay$setup$lambda_8(this));
    }
    this.sectionCalm_1 = createSection(this, 'section-calm', '<div class="calm-content">\n    <div class="calm-text">Let your mind drift.<\/div>\n    <div class="calm-subtext">The blob floats gently. Just watch.<\/div>\n<\/div>');
    var tmp18_safe_receiver = this.sectionCalm_1;
    var tmp19_safe_receiver = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.style;
    if (tmp19_safe_receiver != null) {
      tmp19_safe_receiver.display = 'none';
    }
    var tmp20_safe_receiver = document.body;
    if (tmp20_safe_receiver == null)
      null;
    else
      tmp20_safe_receiver.appendChild(ensureNotNull(this.sectionCalm_1));
    // Inline function 'kotlin.apply' call
    var tmp_11 = document.createElement('nav');
    var this_1 = tmp_11 instanceof HTMLElement ? tmp_11 : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ui.HtmlOverlay.setup.<anonymous>' call
    this_1.id = 'nav';
    this_1.innerHTML = '<button class="nav-btn active" data-section="deform">\n    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8c-2 0-3.5 1.5-3.5 4s1.5 4 3.5 4 3.5-1.5 3.5-4-1.5-4-3.5-4z"/><\/svg>\n    <span>Deform<\/span>\n<\/button>\n<button class="nav-btn" data-section="focus">\n    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><\/svg>\n    <span>Focus<\/span>\n<\/button>\n<button class="nav-btn" data-section="motivation">\n    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/><\/svg>\n    <span>Motivation<\/span>\n<\/button>\n<button class="nav-btn" data-section="calm">\n    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 110-14h.5"/><path d="M17.5 19a4.5 4.5 0 100-9h-1.8"/><\/svg>\n    <span>Calm<\/span>\n<\/button>';
    var nav = this_1;
    var tmp21_safe_receiver = document.body;
    if (tmp21_safe_receiver == null)
      null;
    else
      tmp21_safe_receiver.appendChild(nav);
    // Inline function 'kotlin.js.asDynamic' call
    nav.querySelectorAll('.nav-btn').forEach(HtmlOverlay$setup$lambda_9(this));
    this.showQuote_1u79zl_k$();
  };
  protoOf(HtmlOverlay).switchSection_whxpfr_k$ = function (name) {
    this.currentSection_1 = name;
    var tmp0_safe_receiver = this.sectionDeform_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.style;
    if (tmp1_safe_receiver != null) {
      tmp1_safe_receiver.display = name === 'deform' ? '' : 'none';
    }
    var tmp2_safe_receiver = this.sectionFocus_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.style;
    if (tmp3_safe_receiver != null) {
      tmp3_safe_receiver.display = name === 'focus' ? '' : 'none';
    }
    var tmp4_safe_receiver = this.sectionMotivation_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.style;
    if (tmp5_safe_receiver != null) {
      tmp5_safe_receiver.display = name === 'motivation' ? '' : 'none';
    }
    var tmp6_safe_receiver = this.sectionCalm_1;
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.style;
    if (tmp7_safe_receiver != null) {
      tmp7_safe_receiver.display = name === 'calm' ? '' : 'none';
    }
    // Inline function 'kotlin.js.asDynamic' call
    document.querySelectorAll('.nav-btn').forEach(HtmlOverlay$switchSection$lambda(name));
    switch (name) {
      case 'deform':
      case 'calm':
        var tmp8_safe_receiver = this.quoteEl_1;
        var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.style;
        if (tmp9_safe_receiver != null) {
          tmp9_safe_receiver.display = '';
        }

        break;
      default:
        var tmp10_safe_receiver = this.quoteEl_1;
        var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.style;
        if (tmp11_safe_receiver != null) {
          tmp11_safe_receiver.display = 'none';
        }

        break;
    }
    if (!(name === 'focus') ? this.breathingActive_1 : false) {
      stopBreathing(this);
    }
  };
  protoOf(HtmlOverlay).getCurrentSection_1gl44i_k$ = function () {
    return this.currentSection_1;
  };
  protoOf(HtmlOverlay).showQuote_1u79zl_k$ = function () {
    var tmp0_safe_receiver = this.quoteEl_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.textContent = this.quotes_1[Default_getInstance().nextInt_kn2qxo_k$(this.quotes_1.length)];
      tmp0_safe_receiver.classList.add('visible');
      this.quoteVisible_1 = true;
    }
  };
  protoOf(HtmlOverlay).hideQuote_q58wvq_k$ = function () {
    var tmp0_safe_receiver = this.quoteEl_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.classList;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.remove('visible');
    }
    this.quoteVisible_1 = false;
  };
  protoOf(HtmlOverlay).isQuoteVisible_agobc0_k$ = function () {
    return this.quoteVisible_1;
  };
  protoOf(HtmlOverlay).updateSoundLabel_sbm11j_k$ = function (on) {
    var tmp0_safe_receiver = this.soundBtn_1;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = on ? 'Sound On' : 'Sound Off';
    }
  };
  protoOf(HtmlOverlay).updateScaleLabel_rjtcix_k$ = function (label) {
    var tmp = document.getElementById('btnScale');
    var tmp0_safe_receiver = tmp instanceof HTMLElement ? tmp : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = label;
    }
  };
  protoOf(HtmlOverlay).updateStyleLabel_9i5s5a_k$ = function (label) {
    var tmp = document.getElementById('btnStyle');
    var tmp0_safe_receiver = tmp instanceof HTMLElement ? tmp : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = label;
    }
  };
  protoOf(HtmlOverlay).updateGestureLabel_41kerl_k$ = function (on) {
    var tmp = document.getElementById('btnGesture');
    var tmp0_safe_receiver = tmp instanceof HTMLElement ? tmp : null;
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.textContent = on ? 'Gesture On' : 'Gesture Off';
    }
    if (!on) {
      this.cameraPreviewOn_1 = false;
      var tmp_0 = document.getElementById('btnCamPreview');
      var tmp1_safe_receiver = tmp_0 instanceof HTMLElement ? tmp_0 : null;
      if (tmp1_safe_receiver != null) {
        tmp1_safe_receiver.textContent = 'Camera Off';
      }
      window._cameraPreviewOn = false;
      var cp = document.getElementById('cameraPreview');
      if (cp)
        cp.style.display = 'none';
    }
  };
  protoOf(HtmlOverlay).updateBreathing_s8fab_k$ = function (dt) {
    if (!this.breathingActive_1)
      return Unit_getInstance();
    this.breathingTimer_1 = this.breathingTimer_1 + dt;
    switch (this.breathingPhase_1) {
      case 'inhale':
        if (this.breathingTimer_1 >= 4.0) {
          this.breathingPhase_1 = 'hold';
          this.breathingTimer_1 = 0.0;
          var tmp2_safe_receiver = this.breathingCircle_1;
          var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.classList;
          if (tmp3_safe_receiver == null)
            null;
          else {
            tmp3_safe_receiver.remove('inhale');
          }
          var tmp4_safe_receiver = this.breathingCircle_1;
          var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.classList;
          if (tmp5_safe_receiver == null)
            null;
          else {
            tmp5_safe_receiver.add('hold');
          }
          var tmp6_safe_receiver = this.breathingLabel_1;
          if (tmp6_safe_receiver != null) {
            tmp6_safe_receiver.textContent = 'Hold...';
          }
        }

        break;
      case 'hold':
        if (this.breathingTimer_1 >= 4.0) {
          this.breathingPhase_1 = 'exhale';
          this.breathingTimer_1 = 0.0;
          var tmp7_safe_receiver = this.breathingCircle_1;
          var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.classList;
          if (tmp8_safe_receiver == null)
            null;
          else {
            tmp8_safe_receiver.remove('hold');
          }
          var tmp9_safe_receiver = this.breathingCircle_1;
          var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.classList;
          if (tmp10_safe_receiver == null)
            null;
          else {
            tmp10_safe_receiver.add('exhale');
          }
          var tmp11_safe_receiver = this.breathingLabel_1;
          if (tmp11_safe_receiver != null) {
            tmp11_safe_receiver.textContent = 'Breathe out...';
          }
        }

        break;
      case 'exhale':
        if (this.breathingTimer_1 >= 4.0) {
          this.breathingPhase_1 = 'inhale';
          this.breathingTimer_1 = 0.0;
          var tmp12_safe_receiver = this.breathingCircle_1;
          var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.classList;
          if (tmp13_safe_receiver == null)
            null;
          else {
            tmp13_safe_receiver.remove('exhale');
          }
          var tmp14_safe_receiver = this.breathingCircle_1;
          var tmp15_safe_receiver = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.classList;
          if (tmp15_safe_receiver == null)
            null;
          else {
            tmp15_safe_receiver.add('inhale');
          }
          var tmp16_safe_receiver = this.breathingLabel_1;
          if (tmp16_safe_receiver != null) {
            tmp16_safe_receiver.textContent = 'Breathe in...';
          }
        }

        break;
    }
  };
  protoOf(HtmlOverlay).isBreathingActive_5a550e_k$ = function () {
    return this.breathingActive_1;
  };
  function _set_isMouseDown__lsu4ag($this, _set____db54di) {
    $this.isMouseDown_1 = _set____db54di;
  }
  function _set_scrollDelta__mhc29y($this, _set____db54di) {
    $this.scrollDelta_1 = _set____db54di;
  }
  function _set_clickX__kgvvll($this, _set____db54di) {
    $this.clickX_1 = _set____db54di;
  }
  function _set_clickY__kgvvkq($this, _set____db54di) {
    $this.clickY_1 = _set____db54di;
  }
  function _set_rotVelX__b3f0ul($this, _set____db54di) {
    $this.rotVelX_1 = _set____db54di;
  }
  function _set_rotVelY__b3f0tq($this, _set____db54di) {
    $this.rotVelY_1 = _set____db54di;
  }
  function _set_lastMouseX__zg21ua($this, _set____db54di) {
    $this.lastMouseX_1 = _set____db54di;
  }
  function _get_lastMouseX__kitezm($this) {
    return $this.lastMouseX_1;
  }
  function _set_lastMouseY__zg21tf($this, _set____db54di) {
    $this.lastMouseY_1 = _set____db54di;
  }
  function _get_lastMouseY__kitf0h($this) {
    return $this.lastMouseY_1;
  }
  function _set_wasDragging__63ghil($this, _set____db54di) {
    $this.wasDragging_1 = _set____db54di;
  }
  function _get_wasDragging__yn9e4n($this) {
    return $this.wasDragging_1;
  }
  function _set_lastInteractionTime__lgpe3g($this, _set____db54di) {
    $this.lastInteractionTime_1 = _set____db54di;
  }
  function InputHandler$setup$lambda(this$0) {
    return function (event) {
      var e = event instanceof KeyboardEvent ? event : THROW_CCE();
      this$0.pressedKeys_1.add_utx5q5_k$(e.key);
      var tmp = this$0;
      var tmp_0 = performance.now();
      tmp.lastInteractionTime_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
      return Unit_getInstance();
    };
  }
  function InputHandler$setup$lambda_0(this$0) {
    return function (event) {
      var e = event instanceof KeyboardEvent ? event : THROW_CCE();
      this$0.pressedKeys_1.remove_cedx0m_k$(e.key);
      return Unit_getInstance();
    };
  }
  function InputHandler$setup$lambda_1(this$0) {
    return function (event) {
      var e = event instanceof MouseEvent ? event : THROW_CCE();
      this$0.isMouseDown_1 = true;
      this$0.lastMouseX_1 = e.clientX;
      this$0.lastMouseY_1 = e.clientY;
      this$0.wasDragging_1 = false;
      var tmp = this$0;
      var tmp_0 = performance.now();
      tmp.lastInteractionTime_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
      return Unit_getInstance();
    };
  }
  function InputHandler$setup$lambda_2(this$0) {
    return function (event) {
      var e = event instanceof MouseEvent ? event : THROW_CCE();
      var tmp;
      if (this$0.isMouseDown_1) {
        var dx = e.clientX - this$0.lastMouseX_1;
        var dy = e.clientY - this$0.lastMouseY_1;
        this$0.rotVelX_1 = dy * 0.005;
        this$0.rotVelY_1 = dx * 0.005;
        this$0.lastMouseX_1 = e.clientX;
        this$0.lastMouseY_1 = e.clientY;
        this$0.wasDragging_1 = true;
        var tmp_0 = this$0;
        var tmp_1 = performance.now();
        tmp_0.lastInteractionTime_1 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function InputHandler$setup$lambda_3(this$0) {
    return function (event) {
      var e = event instanceof MouseEvent ? event : THROW_CCE();
      this$0.isMouseDown_1 = false;
      var tmp;
      if (!this$0.wasDragging_1) {
        this$0.clickX_1 = e.clientX / window.innerWidth * 2.0 - 1.0;
        this$0.clickY_1 = -(e.clientY / window.innerHeight) * 2.0 + 1.0;
        var tmp_0 = this$0;
        var tmp_1 = performance.now();
        tmp_0.lastInteractionTime_1 = (!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function InputHandler$setup$lambda_4(this$0) {
    return function (event) {
      var e = event instanceof WheelEvent ? event : THROW_CCE();
      var tmp0_this = this$0;
      tmp0_this.scrollDelta_1 = tmp0_this.scrollDelta_1 + e.deltaY;
      var tmp = this$0;
      var tmp_0 = performance.now();
      tmp.lastInteractionTime_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE();
      return Unit_getInstance();
    };
  }
  function InputHandler() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.pressedKeys_1 = LinkedHashSet_init_$Create$();
    this.isMouseDown_1 = false;
    this.scrollDelta_1 = 0.0;
    this.clickX_1 = DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
    this.clickY_1 = DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
    this.rotVelX_1 = 0.0;
    this.rotVelY_1 = 0.0;
    this.lastMouseX_1 = 0.0;
    this.lastMouseY_1 = 0.0;
    this.wasDragging_1 = false;
    this.lastInteractionTime_1 = 0.0;
  }
  protoOf(InputHandler).get_pressedKeys_ih6nn7_k$ = function () {
    return this.pressedKeys_1;
  };
  protoOf(InputHandler).get_isMouseDown_ryhimk_k$ = function () {
    return this.isMouseDown_1;
  };
  protoOf(InputHandler).get_scrollDelta_neav7i_k$ = function () {
    return this.scrollDelta_1;
  };
  protoOf(InputHandler).get_clickX_byfmc9_k$ = function () {
    return this.clickX_1;
  };
  protoOf(InputHandler).get_clickY_byfmca_k$ = function () {
    return this.clickY_1;
  };
  protoOf(InputHandler).get_rotVelX_o5g92h_k$ = function () {
    return this.rotVelX_1;
  };
  protoOf(InputHandler).get_rotVelY_o5g92i_k$ = function () {
    return this.rotVelY_1;
  };
  protoOf(InputHandler).get_lastInteractionTime_dtjysg_k$ = function () {
    return this.lastInteractionTime_1;
  };
  protoOf(InputHandler).setup_2u6ser_k$ = function () {
    var tmp = document;
    tmp.addEventListener('keydown', InputHandler$setup$lambda(this));
    var tmp_0 = document;
    tmp_0.addEventListener('keyup', InputHandler$setup$lambda_0(this));
    var tmp_1 = document;
    tmp_1.addEventListener('mousedown', InputHandler$setup$lambda_1(this));
    var tmp_2 = document;
    tmp_2.addEventListener('mousemove', InputHandler$setup$lambda_2(this));
    var tmp_3 = document;
    tmp_3.addEventListener('mouseup', InputHandler$setup$lambda_3(this));
    var tmp_4 = document;
    tmp_4.addEventListener('wheel', InputHandler$setup$lambda_4(this), {passive: true});
  };
  protoOf(InputHandler).updateRotationInertia_b6ha8j_k$ = function (dt) {
    if (!this.isMouseDown_1) {
      var decay = 0.95;
      this.rotVelX_1 = this.rotVelX_1 * decay;
      this.rotVelY_1 = this.rotVelY_1 * decay;
      // Inline function 'kotlin.math.abs' call
      var x = this.rotVelX_1;
      if (Math.abs(x) < 5.0E-5)
        this.rotVelX_1 = 0.0;
      // Inline function 'kotlin.math.abs' call
      var x_0 = this.rotVelY_1;
      if (Math.abs(x_0) < 5.0E-5)
        this.rotVelY_1 = 0.0;
    }
    return new Pair(this.rotVelX_1, this.rotVelY_1);
  };
  protoOf(InputHandler).consumeScrollDelta_2ma375_k$ = function () {
    var d = this.scrollDelta_1;
    this.scrollDelta_1 = 0.0;
    return d;
  };
  protoOf(InputHandler).consumeClick_em1q8k_k$ = function () {
    if (isNaN_0(this.clickX_1))
      return null;
    var result = new Pair(this.clickX_1, this.clickY_1);
    this.clickX_1 = DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
    this.clickY_1 = DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$();
    return result;
  };
  protoOf(InputHandler).timeSinceLastInteraction_mmcakx_k$ = function () {
    var tmp = performance.now();
    var now = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    return (now - this.lastInteractionTime_1) / 1000.0;
  };
  main();
  return _;
}));

//# sourceMappingURL=squishy-blob.js.map
