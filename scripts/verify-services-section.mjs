import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const services = readFileSync("src/components/sections/Services.tsx", "utf8");

assert.match(services, /\/\/04 Områden/, "Services label should match the Moderna Sidor section marker.");
assert.match(services, /bg-\[#061218\]/, "Services section should use the reference dark background.");
assert.match(services, /text-\[#f0f5f9\]/, "Service titles should use the reference near-white color.");
assert.match(services, /Affärssystem/, "Services should include business systems.");
assert.match(services, /Portaler/, "Services should include portals.");
assert.match(services, /AI-funktioner/, "Services should include AI functions.");
assert.match(services, /SaaS-produkter/, "Services should include SaaS products.");
assert.match(
  services,
  /mt-8.*sm:mt-12/s,
  "Service list should use the measured reference gaps after the heading: 32px mobile, 48px desktop."
);
assert.match(
  services,
  /sm:grid-cols-\[78px_minmax\(0,1fr\)_320px\]/,
  "Desktop service rows should keep the reference description column position."
);
assert.doesNotMatch(
  services,
  /font-display/,
  "Services heading and titles should use Geist like the reference, not Switzer."
);
assert.match(
  services,
  /<h2 className="[^"]*font-sans[^"]*text-\[77\.97272727272727px\][^"]*leading-\[1\.1\][^"]*tracking-\[-0\.04em\][^"]*sm:leading-\[0\.9\]/,
  "Services heading should match the reference mobile typography and desktop rhythm."
);
assert.match(
  services,
  /sm:text-\[calc\(\(100vw-40px\)\*0\.15143\)\]/,
  "Tablet services heading should use the measured Framer viewBox scaling."
);
assert.match(
  services,
  /\[@media\(min-width:1200px\)\]:text-\[calc\(min\(100vw-64px,1856px\)\*0\.15136\)\]/,
  "Desktop services heading should use the measured Framer viewBox scaling."
);
assert.match(
  services,
  /<span className="block sm:inline">Det vi<\/span>/,
  "Mobile services heading should break into the Moderna Sidor two-line title."
);
assert.doesNotMatch(
  services,
  /sm:-mt-5/,
  "Desktop descriptions should not be lifted above the measured reference baseline."
);
assert.match(
  services,
  /py-\[23\.5px\][^"]*sm:h-\[126px\][^"]*sm:py-6/,
  "Service rows should match the measured mobile row height and 126px desktop row height."
);
assert.match(
  services,
  /pt-\[5\.5px\][^"]*font-sans[^"]*text-\[20px\]/,
  "Mobile service titles should sit on the same baseline as the reference."
);
assert.match(
  services,
  /text-\[#f0f5f9\][^"]*opacity-70/,
  "Services label should use near-white at 70% opacity like the reference."
);
assert.match(
  services,
  /text-\[#f0f5f9\][^"]*opacity-60/,
  "Service numbers and descriptions should use near-white at 60% opacity like the reference."
);
