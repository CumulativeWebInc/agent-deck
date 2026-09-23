/* Agent Deck OS-fit test suite.
 * Guards: honest SKU counts, no invented prices, machine-readable consistency,
 * every live SKU has a live URL, storefront pages exist on disk.
 * Run: node --test tests/storefront.test.js
 */
"use strict";
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");
const products = JSON.parse(fs.readFileSync(path.join(ROOT, "products.json"), "utf8"));
const indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const productsHtml = fs.readFileSync(path.join(ROOT, "products", "index.html"), "utf8");

test("products.json shape", () => {
  assert.equal(products.brand, "Agent Deck");
  assert.equal(products.owner, "Cumulative Web Inc");
  assert.ok(Array.isArray(products.skus) && products.skus.length > 0);
  for (const s of products.skus) {
    assert.ok(s.name && s.slug, `sku missing name/slug: ${JSON.stringify(s)}`);
    assert.ok(["LIVE", "IN THE WORKSHOP"].includes(s.status), `bad status on ${s.slug}`);
    assert.ok(["LIVE", "SAMPLE", "MIXED"].includes(s.data_truth), `bad data_truth on ${s.slug}`);
  }
});

test("honest SKU counts on index + products pages match products.json", () => {
  const live = products.skus.filter((s) => s.status === "LIVE").length;
  const workshop = products.skus.filter((s) => s.status === "IN THE WORKSHOP").length;
  assert.match(indexHtml, new RegExp(`<b>${live}</b>`), "index hero live-SKU count");
  assert.match(indexHtml, new RegExp(`<b>${workshop}</b>`), "index hero workshop count");
  assert.ok(productsHtml.includes(`${live} live, ${workshop} in the workshop`), "products page counts");
});

test("no invented prices: pricing is null on every SKU until Black sets it", () => {
  for (const s of products.skus) {
    assert.equal(s.pricing, null, `price invented on ${s.slug}`);
  }
  assert.match(indexHtml, /DRAFT/, "index carries DRAFT license flag");
});

test("every LIVE sku has a live_url and a storefront page on disk", () => {
  for (const s of products.skus) {
    if (s.status === "LIVE") {
      assert.ok(s.live_url && s.live_url.startsWith("https://"), `live_url missing on ${s.slug}`);
    }
    const page = path.join(ROOT, "products", s.slug, "index.html");
    assert.ok(fs.existsSync(page), `storefront page missing: ${page}`);
  }
});

test("license page keeps DRAFT honesty banner", () => {
  const lic = fs.readFileSync(path.join(ROOT, "license", "index.html"), "utf8");
  assert.match(lic, /DRAFT/, "license page marks DRAFT");
  assert.match(lic, /No license is granted, issued, or implied/, "license page honesty line");
});

test("metadata stack present", () => {
  assert.ok(fs.existsSync(path.join(ROOT, "llms.txt")), "llms.txt");
  assert.ok(fs.existsSync(path.join(ROOT, ".well-known", "agent-card.json")), "agent-card.json");
  assert.ok(fs.existsSync(path.join(ROOT, ".nojekyll")), ".nojekyll");
  const card = JSON.parse(fs.readFileSync(path.join(ROOT, ".well-known", "agent-card.json"), "utf8"));
  assert.equal(card.pricing_status.slice(0, 8), "not set ");
  assert.match(indexHtml, /application\/ld\+json/, "JSON-LD on index");
  assert.match(indexHtml, /og:title/, "Open Graph tags on index");
  assert.match(indexHtml, /twitter:card/, "Twitter tags on index");
});

test("logo is the official CWI logo (md5 of brand asset)", () => {
  const crypto = require("node:crypto");
  const official = "d03d884a3e7a6426e5a8022433781448"; // fan-network/assets/cwi-logo.jpg
  const ours = crypto.createHash("md5").update(fs.readFileSync(path.join(ROOT, "logo.jpg"))).digest("hex");
  assert.equal(ours, official, "logo.jpg must be the official CWI logo");
});
