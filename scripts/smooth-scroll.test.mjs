import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const component = readFileSync("src/components/SmoothScroll.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");
const globals = readFileSync("src/app/globals.css", "utf8");
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

test("SmoothScroll mirrors the Nori/Framer inertia settings", () => {
  assert.match(component, /^"use client";/);
  assert.match(component, /import Lenis from "lenis";/);
  assert.equal(packageJson.dependencies.lenis, "1.1.9");
  assert.match(component, /SCROLL_LERP\s*=\s*0\.078/);
  assert.match(component, /new Lenis\(\{/);
  assert.match(component, /lerp:\s*SCROLL_LERP/);
  assert.match(component, /smoothWheel:\s*true/);
  assert.match(component, /syncTouch:\s*false/);
  assert.match(component, /lenis\.raf\(time\)/);
  assert.match(component, /prefers-reduced-motion:\s*reduce/);
  assert.match(component, /data-lenis-prevent/);
  assert.doesNotMatch(component, /SCROLL_DURATION_SECONDS/);
  assert.doesNotMatch(component, /duration:\s*SCROLL_DURATION_SECONDS/);
  assert.doesNotMatch(component, /SCROLL_DURATION_MS/);
  assert.doesNotMatch(component, /window\.scrollTo\(0,\s*nextScroll\)/);
  assert.match(layout, /import SmoothScroll from "@\/components\/SmoothScroll";/);
  assert.match(layout, /<SmoothScroll \/>/);
  assert.match(globals, /html\.lenis/);
  assert.match(globals, /\.lenis\.lenis-smooth/);
  assert.match(globals, /scroll-behavior:\s*auto !important/);
});
