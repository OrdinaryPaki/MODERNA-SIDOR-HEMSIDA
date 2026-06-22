import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const hero = readFileSync("src/components/Hero.tsx", "utf8");
const heroCanvas = readFileSync("src/components/HeroCanvas.tsx", "utf8");
const css = readFileSync("src/app/globals.css", "utf8");

assert.match(hero, /hero-shell/, "Hero section should opt into hero entrance styling.");
assert.match(
  hero,
  /style=\{\{ backgroundColor: "#1F75B2" \}\}[\s\S]*bg-\[#1F75B2\]/,
  "Hero should keep a non-animated blue fallback behind all animated layers."
);
assert.match(hero, /hero-bg-enter/, "Hero background layers should reveal after the blue loading frame.");
assert.match(hero, /hero-noise-enter/, "Hero should animate the top noise/image layer like the reference.");
assert.match(hero, /hero-nav-enter/, "Hero nav should be part of the entrance sequence.");
assert.match(hero, /hero-content-enter/, "Hero content should be hidden during the first loading frame.");
assert.doesNotMatch(
  hero,
  /Z9CrRqnCTARlA5DxyfNo67pwF4|mzTZXyUqwi6w4yHY89NUGc7Rvg/,
  "Hero should not render opaque light reference images that can cover the blue fallback when WebGL remounts."
);

assert.match(
  heroCanvas,
  /className="absolute inset-0 h-full w-full"/,
  "Hero canvas should render as a full-strength normal layer, not a faint soft-light overlay."
);
assert.doesNotMatch(
  heroCanvas,
  /opacity-\[0\.18\]|mix-blend-soft-light/,
  "Hero canvas should not be muted; the reference canvas is visible at full opacity."
);
assert.match(
  heroCanvas,
  /u_waveAmplitude|u_waveAngle|u_waveFreqX|u_waveFreqY|u_waveSpeed/,
  "Hero canvas shader should include wave uniforms matching the moving reference background."
);
assert.match(
  heroCanvas,
  /warpUV|blendUV/,
  "Hero canvas shader should warp the gradient rather than rendering a static image."
);
assert.match(
  heroCanvas,
  /Math\.min\(Math\.max\(window\.devicePixelRatio,\s*1\),\s*2\)/,
  "Hero canvas should cap rendering at 2x device pixel ratio for production performance."
);
assert.match(
  heroCanvas,
  /requestAnimationFrame\(render\)/,
  "Hero canvas should keep moving after the first render."
);
assert.match(
  heroCanvas,
  /prefers-reduced-motion: reduce/,
  "Hero canvas should respect reduced motion."
);
assert.doesNotMatch(
  heroCanvas,
  /WEBGL_lose_context|loseContext/,
  "Hero canvas should not force WebGL context loss during route navigation."
);
assert.match(
  heroCanvas,
  /u_blendAmount|u_maskSoftness/,
  "Hero canvas should keep visible contrast controls for the wave blend."
);

assert.match(css, /@keyframes hero-bg-enter/, "Hero CSS should define background reveal animation.");
assert.match(css, /@keyframes hero-noise-enter/, "Hero CSS should define the reference-like noise reveal animation.");
assert.match(css, /@keyframes hero-content-enter/, "Hero CSS should define content reveal animation.");
assert.match(css, /prefers-reduced-motion: reduce/, "Hero entrance should respect reduced-motion preferences.");
