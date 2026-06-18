import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const logoMarquee = readFileSync("src/components/LogoMarquee.tsx", "utf8");
const showreel = readFileSync("src/components/sections/Showreel.tsx", "utf8");
const portfolio = readFileSync("src/components/sections/Portfolio.tsx", "utf8");

assert.match(
  logoMarquee,
  /border border-\[#0612181f\]/,
  "Logo cards should have the subtle Nori reference border."
);
assert.match(
  logoMarquee,
  /loading=\{copy === 0 \? "eager" : "lazy"\}/,
  "First logo loop should be eager to avoid local LCP warnings."
);

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
  /Browse our best projects showcasing bold design/,
  "Showreel mobile description should match the reference mobile copy."
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

assert.match(portfolio, /\/\/03 Portfolio/, "Section 3 portfolio label should remain present.");
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
