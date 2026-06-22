import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const logoMarquee = readFileSync("src/components/LogoMarquee.tsx", "utf8");
const showreel = readFileSync("src/components/sections/Showreel.tsx", "utf8");
const portfolio = readFileSync("src/components/sections/Portfolio.tsx", "utf8");

assert.match(
  logoMarquee,
  /border border-\[#0612181f\]/,
  "Client cards should keep the subtle reference border."
);
assert.match(logoMarquee, /Visionsfastigheter/, "Client row should include real Moderna Sidor clients.");
assert.match(logoMarquee, /Glasklart/, "Client row should include Glasklart.");
assert.match(logoMarquee, /Balko\.ai/, "Client row should include Balko.ai.");
assert.match(logoMarquee, /Bolagslista/, "Client row should include Bolagslista.");
assert.match(logoMarquee, /ANLAB/, "Client row should include ANLAB.");

assert.match(
  showreel,
  /sm:max-w-\[380px\]/,
  "Showreel description should match the wider reference text block."
);
assert.match(
  showreel,
  /sm:text-\[20px\]/,
  "Showreel description should use the reference desktop text size."
);
assert.match(
  showreel,
  /Eftersom varje företag arbetar på sitt sätt/,
  "Showreel description should extend the hero positioning with the operating model."
);
assert.match(
  showreel,
  /mt-5 aspect-\[1\.508\]/,
  "Showreel mobile media should match the measured reference aspect and spacing."
);
assert.match(
  showreel,
  /sm:mt-\[76px\]/,
  "Showreel media should start at the measured reference offset."
);
assert.match(
  showreel,
  /rounded-\[12px\]/,
  "Showreel media card should use the reference corner radius."
);
assert.match(
  showreel,
  /sm:aspect-\[1\.753\]/,
  "Showreel media card should use the measured reference desktop aspect ratio."
);

assert.match(portfolio, /\/\/03 System/, "Section 3 system label should remain present.");
assert.match(portfolio, /System i/, "Portfolio heading should use the warmer real-world system framing.");
assert.match(portfolio, /Visionsfastigheter/, "Portfolio should include Visionsfastigheter.");
assert.match(portfolio, /Glasklart/, "Portfolio should include Glasklart.");
assert.match(portfolio, /Balko\.ai/, "Portfolio should include Balko.ai.");
assert.match(portfolio, /ANLAB/, "Portfolio should include ANLAB.");
assert.match(portfolio, /\/cases\/vision\/vision-06-contact-detail\.png/, "Vision should use a manually captured system screenshot.");
assert.match(portfolio, /\/cases\/glasklart\/glasklart-06-planning-map\.png/, "Glasklart should use a manually captured planning/map screenshot.");
assert.match(portfolio, /\/cases\/balko\/balko-02-sadeltak-calculator\.png/, "Balko should use a manually captured calculator view.");
assert.match(portfolio, /\/cases\/anlab\/anlab-03-offert-editor\.png/, "ANLAB should use a manually captured offer workflow screenshot.");
assert.doesNotMatch(
  portfolio,
  /balko-(rakna-byggmaterial|materialspecifikation|offert-faktura|3d-takmodell)\.png/,
  "Portfolio should not use the old generated Balko showcase images."
);
assert.match(portfolio, /sm:max-w-\[332px\]/, "Portfolio description should keep the measured reference width.");
assert.match(
  portfolio,
  /text-\[#4d585e\]/,
  "Portfolio description should use the darker reference gray instead of muted/black extremes."
);
assert.match(
  portfolio,
  /<p className="[^"]*">\s*\{project\.year\}\s*<\/p>\s*<\/div>\s*<p className="[^"]*">\s*\{project\.category\}/s,
  "Portfolio cards should match the reference metadata order: title/year first row, category below."
);
assert.doesNotMatch(
  portfolio,
  /\{project\.category\}\s*<\/p>\s*<\/div>\s*<p className="[^"]*">\s*\{project\.year\}/s,
  "Portfolio category should not sit on the first row with the title."
);
