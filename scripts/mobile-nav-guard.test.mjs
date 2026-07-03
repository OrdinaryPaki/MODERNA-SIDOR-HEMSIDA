import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const mobileNavCss = await readFile(
  new URL("../src/app/hemsida-1/mobile-nav.module.css", import.meta.url),
  "utf8",
);

function ruleBody(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = mobileNavCss.match(new RegExp(`${escapedSelector}\\s*\\{([\\s\\S]*?)\\n\\}`));
  assert.ok(match, `Missing CSS rule for ${selector}`);
  return match[1];
}

test("closed mobile nav panel is fully hidden from visual composition", () => {
  const panel = ruleBody(".panel");

  assert.match(panel, /visibility:\s*hidden;/, "Closed mobile nav panel should not be painted off-canvas.");
  assert.match(panel, /pointer-events:\s*none;/, "Closed mobile nav panel should not capture interaction.");

  const openPanel = ruleBody(".mobileNav[open] .panel");
  assert.match(openPanel, /visibility:\s*visible;/, "Open mobile nav panel should become visible.");
  assert.match(openPanel, /pointer-events:\s*auto;/, "Open mobile nav panel should capture interaction.");
});
