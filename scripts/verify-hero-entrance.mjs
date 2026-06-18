import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const hero = readFileSync("src/components/Hero.tsx", "utf8");
const heroCanvas = readFileSync("src/components/HeroCanvas.tsx", "utf8");
const css = readFileSync("src/app/globals.css", "utf8");

assert.match(hero, /hero-shell/, "Hero section should opt into hero entrance styling.");
assert.match(hero, /hero-bg-enter/, "Hero background layers should reveal after the blue loading frame.");
assert.match(hero, /hero-noise-enter/, "Hero should animate the top noise/image layer like the reference.");
assert.match(hero, /hero-nav-enter/, "Hero nav should be part of the entrance sequence.");
assert.match(hero, /hero-content-enter/, "Hero content should be hidden during the first loading frame.");

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
  /u_warp|u_flow|u_ridge/,
  "Hero canvas shader should include stronger wave/warp uniforms matching the moving reference background."
);
assert.match(
  heroCanvas,
  /u_silk|foldA|foldB|foldC/,
  "Hero canvas shader should use large moving silk folds, not only subtle fbm noise."
);
assert.match(
  heroCanvas,
  /Math\.min\(window\.devicePixelRatio,\s*2\)/,
  "Hero canvas should render at up to 2x device pixel ratio like the Framer reference."
);
assert.match(
  heroCanvas,
  /settledMotionScale/,
  "Hero canvas should ramp into stronger post-loader motion so the settled hero keeps moving visibly."
);
assert.match(
  heroCanvas,
  /foldTravel|u_silkSweep/,
  "Hero canvas should move the large folds across the viewport, not just shimmer them in place."
);
assert.match(
  heroCanvas,
  /baseAlpha|foldAlpha/,
  "Hero canvas should keep the static overlay light while the moving folds carry the visible contrast."
);

assert.match(css, /@keyframes hero-bg-enter/, "Hero CSS should define background reveal animation.");
assert.match(css, /@keyframes hero-noise-enter/, "Hero CSS should define the reference-like noise reveal animation.");
assert.match(css, /@keyframes hero-content-enter/, "Hero CSS should define content reveal animation.");
assert.match(css, /prefers-reduced-motion: reduce/, "Hero entrance should respect reduced-motion preferences.");
