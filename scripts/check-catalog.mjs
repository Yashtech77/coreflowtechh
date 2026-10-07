import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { productCategories, productGroups, getAllProducts, getProduct } from '../src/data/products.js';

const products = getAllProducts();
const categories = new Set();
const routes = new Set();
for (const category of productCategories) {
  assert(!categories.has(category.slug), `Duplicate category: ${category.slug}`);
  categories.add(category.slug);
  assert(productGroups.some((group) => group.id === category.group), `Unknown brand: ${category.group}`);
}
for (const item of products) {
  const route = `/products/${item.categorySlug}/${item.slug}`;
  assert(!routes.has(route), `Duplicate product route: ${route}`);
  routes.add(route);
  assert.equal(getProduct(item.categorySlug, item.slug).product.name, item.name);
  assert(item.name && item.short && item.description && item.specs.length, `Missing content: ${route}`);
  if (item.image) assert(existsSync(`public${item.image}`), `Missing image: ${item.image}`);
  if (item.kind) {
    const source = new URL(item.sourceUrl);
    assert(['www.kaytus.com', 'www.cxtek.in', 'afsipl.com'].includes(source.hostname), `Unexpected source: ${item.sourceUrl}`);
    assert.equal(source.protocol, 'https:');
  }
  for (const resource of item.resources || []) assert.equal(new URL(resource.url).protocol, 'https:');
  for (const table of item.specTables || []) {
    assert(table.length > 1, `Empty specification table: ${route}`);
    assert(table.every((row) => row.length > 1 && row.every((cell) => typeof cell === 'string')), `Malformed specification table: ${route}`);
  }
  if (item.variant) assert(JSON.stringify(item.specTables).includes(item.variant), `Processor variant mismatched: ${route}`);
}
// Same-name platforms must remain independently addressable by processor vendor.
for (const model of ['kr2190v3', 'kr1180v3', 'kr1280v3', 'kr2280v3', 'kr2280v2', 'k24v3']) {
  for (const vendor of ['intel', 'amd']) assert(routes.has(`/products/kaytus-server-storage/${model}-${vendor}`), `Missing ${vendor} variant of ${model}`);
}
const sitemap = readFileSync('public/sitemap.xml', 'utf8');
for (const route of routes) assert(sitemap.includes(`https://coreflowtech.in${route}</loc>`), `Missing sitemap route: ${route}`);
console.log(`Catalog passed: ${products.length} entries, ${categories.size} categories, unique routes, local images, source links, specifications, processor variants, and sitemap coverage.`);
