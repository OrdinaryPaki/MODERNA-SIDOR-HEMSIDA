import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const pageCss = await readFile(
  new URL("../src/app/hemsida-1/page.module.css", import.meta.url),
  "utf8",
);
const homePage = await readFile(
  new URL("../src/app/hemsida-1/HomePage.tsx", import.meta.url),
  "utf8",
);

function ruleBody(selector) {
  const match = pageCss.match(new RegExp(`${selector.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}\\s*\\{([\\s\\S]*?)\\n\\}`));
  assert.ok(match, `Missing CSS rule for ${selector}`);
  return match[1];
}

test("home hero and copy sections use content-safe widths", () => {
  assert.doesNotMatch(
    homePage,
    /Digitala system för organisationer\s*<br\s*\/>\s*som behöver mer sammanhang/,
    "Hero headline must not hard-code a desktop line break.",
  );

  const heroContent = ruleBody(".heroContent");
  assert.match(
    heroContent,
    /width:\s*min\(calc\(100vw - 96px\), 1120px\);/,
    "Hero content should use a responsive max-width instead of a fixed narrow width.",
  );

  const heroHeading = ruleBody(".heroContent h1");
  assert.match(
    heroHeading,
    /width:\s*min\(100%, 1040px\);/,
    "Hero heading should keep a wider readable measure.",
  );
  assert.match(heroHeading, /font-size:\s*clamp\(/, "Hero heading should scale with guard rails.");
});

test("about section grows with longer copy", () => {
  const about = ruleBody(".about");
  assert.doesNotMatch(about, /height:\s*\d/, "About section must not use a fixed height.");
  assert.match(about, /height:\s*auto;/, "About section should grow with its content.");

  const aboutCopy = ruleBody(".aboutCopy");
  assert.match(aboutCopy, /display:\s*grid;/, "About copy should use flow spacing.");
  assert.match(aboutCopy, /gap:\s*32px;/, "About copy should separate paragraphs without margin stacking.");
  assert.match(aboutCopy, /width:\s*min\(100%, 900px\);/, "About copy should keep a readable text measure.");

  const aboutParagraph = ruleBody(".aboutCopy p");
  assert.doesNotMatch(
    aboutParagraph,
    /font-size:\s*36px;/,
    "All about paragraphs must not render as headline-sized text.",
  );

  const aboutLead = ruleBody(".aboutCopy p:first-child");
  assert.match(aboutLead, /font-size:\s*36px;/, "Only the lead about paragraph should be large.");
});

test("solutions intro keeps heading and copy in the right column", () => {
  assert.match(
    homePage,
    /<div className=\{styles\.solutionsIntroCopy\}>[\s\S]*?<h2>Det som gör systemet hållbart\.<\/h2>[\s\S]*?<p>/,
    "Solutions heading and paragraph should be grouped in an explicit right-column wrapper.",
  );

  const solutions = ruleBody(".solutions");
  assert.doesNotMatch(solutions, /height:\s*\d/, "Solutions section must not use a fixed height.");
  assert.match(solutions, /height:\s*auto;/, "Solutions section should grow with its content.");

  const solutionsIntro = ruleBody(".solutionsIntro");
  assert.doesNotMatch(solutionsIntro, /height:\s*\d/, "Solutions intro must not use a fixed height.");
  assert.match(solutionsIntro, /height:\s*auto;/, "Solutions intro should grow with its content.");

  const solutionsIntroCopy = ruleBody(".solutionsIntroCopy");
  assert.match(solutionsIntroCopy, /display:\s*grid;/, "Solutions copy should use flow spacing.");
  assert.match(solutionsIntroCopy, /width:\s*min\(100%, 760px\);/, "Solutions copy should keep a readable right-column measure.");

  const solutionsParagraph = ruleBody(".solutionsIntro p");
  assert.doesNotMatch(
    solutionsParagraph,
    /font-size:\s*36px;/,
    "Solutions paragraph must not render as headline-sized text.",
  );

  const project = ruleBody(".project");
  assert.doesNotMatch(project, /height:\s*\d/, "Project rows must not use fixed heights.");
  assert.match(project, /height:\s*auto;/, "Project rows should grow with their content.");
});
