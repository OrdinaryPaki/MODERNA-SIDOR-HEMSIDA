import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const services = readFileSync("src/components/sections/Services.tsx", "utf8");

assert.match(services, /\/\/04 Our services/, "Services label should match the reference section marker.");
assert.match(services, /bg-\[#061218\]/, "Services section should use the Nori dark background.");
assert.match(services, /text-\[#f0f5f9\]/, "Service titles should use the Nori near-white color.");
assert.match(
  services,
  /text-\[#9aa4a9\]/,
  "Services label, numbers, and descriptions should use the muted gray seen in the reference."
);
assert.match(
  services,
  /mt-\[65px\].*sm:mt-\[42px\]/s,
  "Service list should start at the measured reference offset on mobile and desktop."
);
assert.match(
  services,
  /sm:grid-cols-\[78px_minmax\(0,1fr\)_320px\]/,
  "Desktop service rows should keep the reference description column position."
);
assert.match(services, /font-display/, "Services heading and titles should use the reference display font.");
assert.match(
  services,
  /<span className="block sm:inline">Our<\/span>/,
  "Mobile services heading should break into the reference two-line title."
);
assert.doesNotMatch(
  services,
  /sm:-mt-5/,
  "Desktop descriptions should not be lifted above the measured reference baseline."
);
assert.match(
  services,
  /sm:py-\[23px\]/,
  "Desktop service rows should use the measured reference row rhythm."
);
