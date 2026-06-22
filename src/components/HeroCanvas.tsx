"use client";

import { useEffect, useRef } from "react";

const VERT = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
  v_uv = a_texCoord;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

// Wave-gradient shader controls based on the selected external design reference.
const FRAG = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_blendAmount;
uniform vec4 u_colors[4];
uniform int u_colors_length;
uniform float u_maskSoftness;
uniform float u_seed;
uniform float u_waveAmplitude;
uniform float u_waveAngle;
uniform float u_waveFreqX;
uniform float u_waveFreqY;
uniform float u_waveSpeed;

#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
  float s = u_seed;
  vec2 k1 = vec2(2127.1 + s * 13.37, 81.17 + s * 7.31);
  vec2 k2 = vec2(1269.5 + s * 11.13, 283.37 + s * 5.79);
  p = vec2(dot(p, k1), dot(p, k2));
  return fract(sin(p) * (43758.5453 + s * 1.618));
}

float noise(in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float n = mix(
    mix(dot(-1.0 + 2.0 * hash(i), f),
        dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
        dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
    u.y
  );
  return 0.5 + 0.5 * n;
}

vec3 getColor(int idx) {
  if (u_colors_length < 1) return vec3(0.0);
  int safeIdx = clamp(idx, 0, u_colors_length - 1);
  return u_colors[safeIdx].rgb;
}

float seedF(float base) {
  return base * (1.0 + 0.5 * sin(u_seed * 3.17 + base));
}

vec2 warpUV(vec2 uv) {
  float t = u_time * u_waveSpeed;

  float angleOffset = sin(u_seed * 2.73) * 30.0;
  mat2 dirRot = Rot(radians(u_waveAngle + angleOffset));
  vec2 ruv = dirRot * uv;

  float fxMod = seedF(u_waveFreqX);
  float fyMod = seedF(u_waveFreqY);

  float phaseX = fract(sin(u_seed * 7.19) * 437.58) * 6.2832;
  float phaseY = fract(cos(u_seed * 3.41) * 291.37) * 6.2832;

  float harmonic = sin(u_seed * 1.23) * 0.5;
  float a = fyMod * ruv.y - sin(ruv.x * fxMod + ruv.y - t + phaseX);
  a += harmonic * sin(ruv.x * fxMod * 2.0 + ruv.y * 0.5 + t * 0.7 + phaseY);

  a = smoothstep(
    cos(a) * u_maskSoftness,
    sin(a) * u_maskSoftness + 3.0,
    cos(a - fyMod * ruv.y) - sin(a - fxMod * ruv.x)
  );

  a *= u_waveAmplitude;

  uv = cos(a) * uv + sin(a) * vec2(-uv.y, uv.x);
  return uv;
}

void main() {
  vec2 fragCoord = v_uv * u_resolution;
  vec2 uv = fragCoord / u_resolution.xy;
  float ratio = u_resolution.x / u_resolution.y;
  float t = u_time * u_waveSpeed;

  vec2 tuv = uv - 0.5;

  vec2 seedShift = vec2(sin(u_seed * 4.37), cos(u_seed * 5.91)) * 100.0;
  float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) + seedShift);
  tuv.y *= 1.0 / ratio;
  tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
  tuv.y *= ratio;

  vec2 uv2 = (fragCoord * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0;
  float preRotAngle = fract(sin(u_seed * 5.63) * 173.29) * 6.2832;
  uv2 *= Rot(preRotAngle);
  vec2 warped = warpUV(uv2) * 0.5 + 0.5;

  vec2 blendUV = mix(tuv, warped - 0.5, u_blendAmount);

  float layerRot1 = -5.0 + sin(u_seed * 1.83) * 20.0;
  float layerRot2 = 10.0 + cos(u_seed * 2.47) * 20.0;

  vec3 c0 = getColor(0);
  vec3 c1 = getColor(1);
  vec3 c2 = getColor(2);
  vec3 c3 = getColor(3);

  vec3 layer1 = mix(c0, c2, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot1))).x));
  vec3 layer2 = mix(c3, c1, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot2))).x));
  vec3 col = mix(layer1, layer2, S(0.3, -0.3, blendUV.y));

  col = mix(col, col * col + 0.5 * sqrt(col), 0.3);

  fragColor = vec4(col, 1.0);
}`;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      powerPreference: "default",
      premultipliedAlpha: false,
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compile(gl.VERTEX_SHADER, VERT);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vertexShader || !fragmentShader || !program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
      gl.STATIC_DRAW
    );
    const texCoordLoc = gl.getAttribLocation(program, "a_texCoord");
    gl.enableVertexAttribArray(texCoordLoc);
    gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uBlendAmount = gl.getUniformLocation(program, "u_blendAmount");
    const uColors = gl.getUniformLocation(program, "u_colors[0]");
    const uColorsLength = gl.getUniformLocation(program, "u_colors_length");
    const uMaskSoftness = gl.getUniformLocation(program, "u_maskSoftness");
    const uSeed = gl.getUniformLocation(program, "u_seed");
    const uWaveAmplitude = gl.getUniformLocation(program, "u_waveAmplitude");
    const uWaveAngle = gl.getUniformLocation(program, "u_waveAngle");
    const uWaveFreqX = gl.getUniformLocation(program, "u_waveFreqX");
    const uWaveFreqY = gl.getUniformLocation(program, "u_waveFreqY");
    const uWaveSpeed = gl.getUniformLocation(program, "u_waveSpeed");

    gl.uniform1f(uBlendAmount, 0.5);
    gl.uniform4fv(
      uColors,
      new Float32Array([
        27 / 255, 103 / 255, 157 / 255, 1.0,
        31 / 255, 117 / 255, 178 / 255, 1.0,
        33 / 255, 125 / 255, 192 / 255, 1.0,
        18 / 255, 68 / 255, 105 / 255, 1.0,
      ])
    );
    gl.uniform1i(uColorsLength, 4);
    gl.uniform1f(uMaskSoftness, 1.5);
    gl.uniform1f(uSeed, 26.0);
    gl.uniform1f(uWaveAmplitude, 1.6);
    gl.uniform1f(uWaveAngle, 105.0);
    gl.uniform1f(uWaveFreqX, 0.9);
    gl.uniform1f(uWaveFreqY, 6.0);
    gl.uniform1f(uWaveSpeed, 1.8);

    const resize = () => {
      const dpr = Math.min(Math.max(window.devicePixelRatio, 1), 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now() * 0.001;
    const render = () => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, performance.now() * 0.001 - start);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (!reduceMotion) raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(positionBuffer);
      gl.deleteBuffer(texCoordBuffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
