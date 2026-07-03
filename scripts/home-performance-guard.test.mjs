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

test("home avoids forcing below-the-fold media into the initial payload", () => {
  const showreelImage = imageBlockFor("/figma/hemsida-1/showreel-bg.png");

  assert.doesNotMatch(
    showreelImage,
    /loading="eager"/,
    "Showreel image is below the first viewport and must not load eagerly.",
  );
  assert.doesNotMatch(
    showreelImage,
    /\bunoptimized\b/,
    "Showreel image should use the Next image pipeline instead of bypassing optimization.",
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
    /<Image[\s\S]*?src=\{project\.image\}[\s\S]*?loading="lazy"[\s\S]*?\/>/,
    "Project images should be rendered through next/image with lazy loading.",
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
