"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

// Rörligt Framer-liknande silk-lager ovanpå statiska hero-bilden.
// Canvasen är normal blend men shadern har alpha, så bildlagret under lever kvar.
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.05 + vec2(13.7, 7.3);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0);
  float portrait = smoothstep(0.9, 0.48, u_res.x / u_res.y);
  float settledMotionScale = smoothstep(1.25, 3.1, u_time);
  float foldTravel = u_time * settledMotionScale;
  float u_silkSweep = (
    sin(foldTravel * 0.58) * 0.34 +
    sin(foldTravel * 0.24 + 1.7) * 0.17
  ) * mix(0.8, 1.1, portrait);
  float t = u_time * mix(0.075, 0.24, settledMotionScale);

  vec2 u_warp = vec2(
    fbm(p * 0.72 + vec2(-t * 0.9, t * 0.22)),
    fbm(p * 0.88 + vec2(t * 0.34, -t * 0.68) + 4.0)
  );
  vec2 u_flow = p + (u_warp - 0.5) * mix(0.5, 0.74, settledMotionScale);
  u_flow += vec2(-foldTravel * 0.055, foldTravel * 0.022) * settledMotionScale;
  float field = fbm(u_flow * 1.18 + vec2(t * 0.5, -t * 0.26));

  float diagonal = uv.x - uv.y * mix(0.84, 1.05, portrait);
  diagonal += (u_warp.x - 0.5) * 0.22;
  float foldOffset = mix(0.22, 0.07, portrait);
  float foldA = smoothstep(
    mix(0.28, 0.2, portrait),
    0.0,
    abs(diagonal - foldOffset + u_silkSweep + field * 0.2)
  );
  float foldB = smoothstep(
    mix(0.4, 0.25, portrait),
    0.0,
    abs((uv.x * 1.08 + uv.y * 0.32) - (0.98 - u_silkSweep * 0.72 + cos(u_time * 0.26) * 0.07) + field * 0.19)
  );
  float foldC = smoothstep(
    mix(0.34, 0.22, portrait),
    0.0,
    abs((uv.x * 0.68 - uv.y * 0.98) - (-0.12 + u_silkSweep * 0.62 + sin(u_time * 0.24 + 1.8) * 0.08) - field * 0.16)
  );
  float u_silk = clamp(foldA * 0.74 + foldB * 0.62 + foldC * 0.44, 0.0, 1.0);
  float u_ridge = smoothstep(0.22, 0.0, abs(diagonal - foldOffset + field * 0.14));
  float shadow = smoothstep(0.22, 0.9, diagonal + field * 0.12 - portrait * 0.1);
  float topShade = smoothstep(0.86, 0.22, uv.y + field * 0.08);

  vec3 deep = vec3(0.045, 0.190, 0.310);
  vec3 mid  = vec3(0.105, 0.390, 0.610);
  vec3 lite = vec3(0.360, 0.640, 0.880);

  vec3 col = mix(mid, lite, smoothstep(0.18, 0.9, field));
  col = mix(col, deep, max(shadow * 0.58, u_silk * 0.62));
  col = mix(col, lite, (foldA + u_ridge) * 0.2);
  col *= mix(0.78, 1.05, topShade);

  float baseAlpha = 0.08 + settledMotionScale * 0.04;
  float foldAlpha = u_silk * mix(0.46, 0.38, portrait);
  float alpha = baseAlpha + foldAlpha + shadow * mix(0.12, 0.1, portrait);

  gl_FragColor = vec4(col, alpha);
}`;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) return; // CSS-gradient bakom canvasen blir fallback

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now();
    const render = () => {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
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
