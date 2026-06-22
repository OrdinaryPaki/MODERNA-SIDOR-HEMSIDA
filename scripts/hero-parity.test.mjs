import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const hero = await readFile(new URL("../src/components/Hero.tsx", import.meta.url), "utf8");
const canvas = await readFile(
  new URL("../src/components/HeroCanvas.tsx", import.meta.url),
  "utf8",
);

test("hero canvas keeps the reference wave shader controls", () => {
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

test("hero foreground presents Moderna Sidor content in the reference layout", () => {
  assert.doesNotMatch(hero, /href="\/contact"/, "hero should not render the removed contact CTA block");
  assert.doesNotMatch(hero, /Byggt för verksamhet|>\s*System\s*</, "hero should not render the removed proof text block");
  assert.doesNotMatch(hero, /★★★★★/, "stars should be SVG icons, not text glyphs");
  assert.match(hero, /Moderna[\s\S]*Sidor/, "hero should use the Moderna Sidor name");
  assert.match(hero, /Since 2024/, "hero should show the founded year");
  assert.match(hero, /font-medium.*Vi utvecklar digitala system för företag med egna arbetssätt, där färdiga verktyg inte räcker till/s, "desktop hero paragraph should use medium text and the product positioning");
  assert.doesNotMatch(hero, /Nori|creative studio from Canada|Since 2019/, "hero should not ship template copy");
});
