import assert from "node:assert/strict";
import test from "node:test";
import { execFileSync } from "node:child_process";

// Run against a production build: SEO_TEST_URL=http://127.0.0.1:3198 node --test scripts/seo.test.mjs
const base = process.env.SEO_TEST_URL;
if (!base) throw new Error("Set SEO_TEST_URL to a running production build.");

const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
function tags(html, tagName) {
  return [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "g"))].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), decode(value)])),
  );
}
function meta(html, name) {
  return tags(html, "meta").find((tag) => tag.name === name || tag.property === name)?.content;
}
async function page(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  return response.text();
}

for (const path of ["/", "/contact", "/privacy", "/terms"]) {
  test(`${path} has consistent, page-specific search and sharing metadata`, async () => {
    const html = await page(path);
    assert.equal(tags(html, "html")[0].lang, "sv");
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "");
    assert.match(title, /Moderna Sidor/);
    assert.doesNotMatch(title, /opus|framer/i);
    assert.ok(meta(html, "description")?.length > 40);
    const canonical = tags(html, "link").filter((tag) => tag.rel === "canonical");
    assert.equal(canonical.length, 1);
    // Next normalizes the origin's trailing slash; compare URL identity.
    assert.equal(new URL(canonical[0].href).href, `https://modernasidor.se${path}`);
    assert.equal(meta(html, "og:url"), canonical[0].href);
    assert.equal(meta(html, "og:title"), title);
    assert.equal(meta(html, "twitter:title"), title);
    assert.equal(meta(html, "og:description"), meta(html, "description"));
    assert.equal(meta(html, "twitter:description"), meta(html, "description"));
    assert.equal(meta(html, "og:locale"), "sv_SE");
    assert.doesNotMatch(meta(html, "robots") ?? "", /noindex/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  });
}

test("home and contact publish matching, valid structured identities", async () => {
  for (const [path, type] of [["/", "WebPage"], ["/contact", "ContactPage"]]) {
    const html = await page(path);
    const graphs = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
      .flatMap(([, json]) => JSON.parse(json)["@graph"] ?? []);
    const webPage = graphs.find((entry) => entry["@type"] === type);
    assert.ok(webPage, `${path}: ${type}`);
    assert.equal(new URL(webPage.url).href, new URL(meta(html, "og:url")).href);
    assert.equal(webPage.description, meta(html, "description"));
    const organization = graphs.find((entry) => entry["@type"] === "Organization");
    assert.equal(organization.name, "Moderna Sidor");
    assert.equal(organization.email, "business@modernasidor.se");
  }
});

test("unfinished pages and design previews are unavailable in production", async () => {
  for (const path of ["/examples", "/opus-original", "/blog", "/blog/custom-vs-off-the-shelf-choose-wisely", "/about", "/projects", "/projects/not-a-project", "/not-a-page"]) {
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 404, path);
    assert.match(await response.text(), /noindex/, path);
  }
});

for (const [name, env, expected] of [
  ["production", { NODE_ENV: "production" }, true],
  ["Vercel production", { NODE_ENV: "production", VERCEL_ENV: "production" }, true],
  ["preview", { NODE_ENV: "production", VERCEL_ENV: "preview" }, false],
  ["staging", { NODE_ENV: "production", SITE_NOINDEX: "true" }, false],
  ["development", { NODE_ENV: "development" }, false],
]) {
  test(`${name} uses the correct indexing policy on every public page`, () => {
    const moduleUrl = new URL("../src/lib/seo.ts", import.meta.url).href;
    const result = execFileSync(process.execPath, ["--no-warnings", "--experimental-strip-types", "--input-type=module", "-e", `
      const { publicPages, createPageMetadata } = await import(${JSON.stringify(moduleUrl)});
      console.log(JSON.stringify(Object.keys(publicPages).map(key => createPageMetadata(key).robots.index)));
    `], { encoding: "utf8", env: { ...process.env, VERCEL_ENV: "", SITE_NOINDEX: "", ...env } });
    assert.deepEqual(JSON.parse(result), [expected, expected, expected, expected]);
  });
}

test("sitemap only advertises canonical, indexable production pages", async () => {
  const xml = await page("/sitemap.xml");
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
  assert.deepEqual(urls.sort(), ["https://modernasidor.se/", "https://modernasidor.se/contact", "https://modernasidor.se/privacy", "https://modernasidor.se/terms"]);
  const robots = await page("/robots.txt");
  assert.match(robots, /Allow: \/\s/);
  assert.match(robots, /Sitemap: https:\/\/modernasidor.se\/sitemap.xml/);
  assert.doesNotMatch(robots, /Disallow: \/\s/);
});

test("sharing images and the brand icon resolve to real image responses", async () => {
  const html = await page("/");
  const imageUrl = meta(html, "og:image");
  assert.ok(imageUrl);
  assert.equal(meta(html, "twitter:image"), imageUrl);
  const icon = tags(html, "link").find((tag) => tag.rel === "icon");
  assert.ok(icon);
  for (const url of [imageUrl, icon.href]) {
    const response = await fetch(new URL(new URL(url, base).pathname, base));
    assert.equal(response.status, 200, url);
    assert.match(response.headers.get("content-type"), /^image\//);
    assert.ok((await response.arrayBuffer()).byteLength > 100);
  }
});


test("project covers use responsive images and immutable, versioned caching", async () => {
  const html = await page("/");
  const images = tags(html, "img").filter(image => image.src?.includes("q=90"));
  assert.equal(images.length, 6);
  for (const image of images) {
    assert.match(image.srcset, /750w/);
    assert.match(image.sizes, /max-width: 809px/);
    assert.equal(image.loading, "lazy");
    const imageUrl = new URL(image.src, base);
    assert.match(imageUrl.searchParams.get("url"), /^\/_next\/static\/(?:immutable\/)?media\/[^/]+\.[^.]+\.webp$/);
    imageUrl.searchParams.set("w", "750");
    const response = await fetch(imageUrl, { headers: { Accept: "image/webp" } });
    assert.equal(response.status, 200);
    assert.match(response.headers.get("cache-control"), /immutable/);
    assert.match(response.headers.get("content-type"), /image\/webp/);
  }
});
