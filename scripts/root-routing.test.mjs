import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const navigation = await readFile(
  new URL("../src/app/hemsida-1/navigation.ts", import.meta.url),
  "utf8",
);
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

test("site navigation uses root-level routes as canonical URLs", () => {
  for (const href of ['"/"', '"/about"', '"/solutions"', '"/careers"', '"/contact"']) {
    assert.match(navigation, new RegExp(`href:\\s*${href}`), `Missing canonical nav item ${href}.`);
  }

  assert.match(navigation, /home:\s*"\/"/, "Home helper should point at the root route.");
  assert.match(navigation, /about:\s*"\/about"/, "About helper should point at the root route.");
  assert.match(navigation, /solutions:\s*"\/solutions"/, "Solutions helper should point at the root route.");
  assert.match(navigation, /careers:\s*"\/careers"/, "Careers helper should point at the root route.");
  assert.match(navigation, /contact:\s*"\/contact"/, "Contact helper should point at the root route.");
  assert.match(
    navigation,
    /return `\/solutions\/\$\{slug\}`;/,
    "Solution detail helper should build root-level solution URLs.",
  );

  assert.doesNotMatch(
    navigation,
    /"\/hemsida-1(?:\/|")/,
    "Internal navigation must not make the old /hemsida-1 path canonical.",
  );
});

test("legacy hemsida route redirects to the matching root-level route", () => {
  assert.match(
    nextConfig,
    /source:\s*"\/hemsida-1\/:path\*"/,
    "Old /hemsida-1 nested paths should be redirected centrally.",
  );
  assert.match(
    nextConfig,
    /destination:\s*"\/:path\*"/,
    "Old /hemsida-1 nested paths should preserve the remaining path at root.",
  );
  assert.match(
    nextConfig,
    /source:\s*"\/hemsida-1"/,
    "Old /hemsida-1 homepage should redirect centrally.",
  );
  assert.match(
    nextConfig,
    /destination:\s*"\/"/,
    "Old /hemsida-1 homepage should redirect to root.",
  );
});
