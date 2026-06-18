import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const hero = await readFile(new URL("../src/components/Hero.tsx", import.meta.url), "utf8");
const canvas = await readFile(
  new URL("../src/components/HeroCanvas.tsx", import.meta.url),
  "utf8",
);

test("hero canvas uses the Nori reference wave shader controls", () => {
  for (const token of [
    "u_seed",
    "u_waveSpeed",
    "u_waveFreqX",
    "u_waveFreqY",
    "u_waveAngle",
    "u_waveAmplitude",
    "u_maskSoftness",
    "u_blendAmount",
    "u_colors",
  ]) {
    assert.match(canvas, new RegExp(token), `missing ${token}`);
  }

  for (const exactValue of ["26.0", "1.8", "0.9", "6.0", "105.0", "1.6", "1.5", "0.5"]) {
    assert.match(canvas, new RegExp(exactValue.replace(".", "\\.")), `missing ${exactValue}`);
  }
});

test("hero foreground matches the Nori reference controls", () => {
  assert.match(hero, /rounded-\[2px\]/, "CTA radius should be 2px like Framer");
  assert.match(hero, /text-\[16px\].*leading-\[1\.3\]/s, "CTA text should be 16px/1.3");
  assert.doesNotMatch(hero, /★★★★★/, "stars should be SVG icons, not text glyphs");
  assert.match(hero, /font-medium.*We are a creative studio/s, "desktop hero paragraph should use medium text");
});
