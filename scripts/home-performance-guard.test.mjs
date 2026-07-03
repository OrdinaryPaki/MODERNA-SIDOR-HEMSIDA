import { existsSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const homePage = await readFile(
  new URL("../src/app/hemsida-1/HomePage.tsx", import.meta.url),
  "utf8",
);
const pageCss = await readFile(
  new URL("../src/app/hemsida-1/page.module.css", import.meta.url),
  "utf8",
);
const rootLayout = await readFile(
  new URL("../src/app/layout.tsx", import.meta.url),
  "utf8",
);
const publicDir = new URL("../public/", import.meta.url);

function imageBlockFor(src) {
  const match = homePage.match(new RegExp(`<Image[\\s\\S]*?src="${src}"[\\s\\S]*?\\/>`));
  assert.ok(match, `Missing Image block for ${src}`);
  return match[0];
}

function ruleBody(selector) {
  const match = pageCss.match(new RegExp(`${selector.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\s*\\{([\\s\\S]*?)\\n\\}`));
  assert.ok(match, `Missing CSS rule for ${selector}`);
  return match[1];
}

function publicAsset(path) {
  return new URL(`.${path}`, publicDir);
}

test("home ships precompressed critical media instead of relying on runtime optimization", () => {
  for (const [source, optimized] of [
    ["/figma/hemsida-1/hero-bg.png", "/figma/hemsida-1/hero-bg.webp"],
    ["/figma/hemsida-1/showreel-bg.png", "/figma/hemsida-1/showreel-bg.webp"],
    ["/figma/hemsida-1/casper-ai.png", "/figma/hemsida-1/casper-ai.webp"],
    ["/figma/hemsida-1/tune-ai.png", "/figma/hemsida-1/tune-ai.webp"],
    ["/figma/hemsida-1/ring-models.png", "/figma/hemsida-1/ring-models.webp"],
  ]) {
    const sourceAsset = publicAsset(source);
    const optimizedAsset = publicAsset(optimized);

    assert.ok(existsSync(optimizedAsset), `Missing optimized asset ${optimized}`);
    assert.ok(
      statSync(optimizedAsset).size < statSync(sourceAsset).size,
      `${optimized} should be smaller than ${source}`,
    );
  }
});

test("home hero image is an explicit prioritized resource", () => {
  const heroImage = imageBlockFor("/figma/hemsida-1/hero-bg.webp");
  const heroBackdrop = ruleBody(".heroBackdrop");

  assert.match(heroImage, /loading="eager"/, "Hero image should start loading immediately.");
  assert.match(heroImage, /fetchPriority="high"/, "Hero image should get high browser fetch priority.");
  assert.match(heroImage, /\bunoptimized\b/, "Hero image should be served as a precompressed static asset.");
  assert.doesNotMatch(heroBackdrop, /url\(/, "Hero image should not be hidden behind a CSS background request.");
});

test("home scroll media is warmed without runtime optimizer delay", () => {
  const showreelImage = imageBlockFor("/figma/hemsida-1/showreel-bg.webp");

  assert.match(
    showreelImage,
    /loading="eager"/,
    "Showreel image should start loading before the user reaches it or returns to the tab.",
  );
  assert.match(
    showreelImage,
    /\bunoptimized\b/,
    "Showreel image should be served directly as a precompressed static asset.",
  );
  assert.match(
    showreelImage,
    /sizes="\([^"]*max-width:\s*768px\)[^"]+"/,
    "Showreel image should advertise responsive sizes instead of always reserving 100vw.",
  );

  assert.doesNotMatch(
    homePage,
    /style=\{\{\s*backgroundImage:/,
    "Project images should not be inline CSS backgrounds because they bypass image lazy-loading and optimization.",
  );
  assert.match(
    homePage,
    /image:\s*"\/figma\/hemsida-1\/casper-ai\.webp"[\s\S]*image:\s*"\/figma\/hemsida-1\/tune-ai\.webp"[\s\S]*image:\s*"\/figma\/hemsida-1\/ring-models\.webp"/,
    "Project image data should point at precompressed WebP assets.",
  );
  assert.match(
    homePage,
    /<Image[\s\S]*?src=\{project\.image\}[\s\S]*?loading="eager"[\s\S]*?\bunoptimized\b[\s\S]*?\/>/,
    "Project images should be warmed and served directly, not deferred through runtime optimization.",
  );
});

test("home image containers keep optimized images clipped and stable", () => {
  const projectImage = ruleBody(".projectImage");

  assert.match(projectImage, /position:\s*relative;/, "Project image wrapper should anchor the optimized image.");
  assert.match(projectImage, /overflow:\s*hidden;/, "Project image wrapper should clip responsive image edges.");
  assert.match(projectImage, /aspect-ratio:\s*16\s*\/\s*9;/, "Project image wrapper should reserve stable image space.");

  const projectImageElement = ruleBody(".projectImage img");
  assert.match(projectImageElement, /object-fit:\s*cover;/, "Optimized project image should preserve the previous cover crop.");
});

test("root layout registers only the brand fonts used by the site", () => {
  assert.doesNotMatch(rootLayout, /Geist/, "Unused Geist fonts should not be preloaded globally.");
  assert.doesNotMatch(rootLayout, /localFont/, "Unused Switzer local fonts should not be preloaded globally.");
  assert.match(rootLayout, /Inter/, "The base brand font should remain registered.");
  assert.match(rootLayout, /Inter_Tight/, "The display brand font should remain registered.");
  assert.match(rootLayout, /Archivo/, "The logo brand font should remain registered.");
});
