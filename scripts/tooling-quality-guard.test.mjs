import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));

test("eslint ignores generated deployment output", async () => {
  const eslintConfig = await readFile(resolve(projectRoot, "eslint.config.mjs"), "utf8");

  assert.match(
    eslintConfig,
    /"\.vercel\/\*\*"/,
    "ESLint should ignore generated .vercel output so lint reports source problems only.",
  );
});

test("script tests only reference files that exist", async () => {
  const scriptsDir = resolve(projectRoot, "scripts");
  const scriptNames = await readdir(scriptsDir);
  const missingTargets = [];

  for (const scriptName of scriptNames) {
    if (!scriptName.endsWith(".test.mjs") || scriptName === "tooling-quality-guard.test.mjs") {
      continue;
    }

    const scriptPath = resolve(scriptsDir, scriptName);
    const source = await readFile(scriptPath, "utf8");

    for (const match of source.matchAll(/new URL\("([^"]+)",\s*import\.meta\.url\)/g)) {
      const target = resolve(dirname(scriptPath), match[1]);
      if (!existsSync(target)) {
        missingTargets.push(`${scriptName} -> ${match[1]}`);
      }
    }

    for (const match of source.matchAll(/readFileSync\("([^"]+)"/g)) {
      const target = resolve(projectRoot, match[1]);
      if (!existsSync(target)) {
        missingTargets.push(`${scriptName} -> ${match[1]}`);
      }
    }
  }

  assert.deepEqual(missingTargets, []);
});
