import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const faqSource = readFileSync("src/components/sections/Faq.tsx", "utf8");

test("FAQ is a client-side accordion with accessible toggles", () => {
  assert.match(faqSource, /^"use client";/);
  assert.match(faqSource, /import\s+\{\s*useState\s*\}\s+from\s+"react";/);
  assert.match(faqSource, /<button[\s\S]*onClick=/);
  assert.match(faqSource, /aria-expanded=\{/);
  assert.match(faqSource, /aria-controls=/);
  assert.match(faqSource, /const\s+answerId\s+=\s+`faq-answer-\$\{index\}`;/);
  assert.match(faqSource, /const\s+buttonId\s+=\s+`faq-button-\$\{index\}`;/);
  assert.match(faqSource, /\{faq\.a\}/);
});
