import { writeFileSync } from 'node:fs';
import { productCategories, getAllProducts } from '../src/data/products.js';
const routes = ['/', '/about', '/products', ...productCategories.map((category) => `/products/${category.slug}`), ...getAllProducts().map((item) => `/products/${item.categorySlug}/${item.slug}`), '/contact'];
writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>https://coreflowtech.in${route}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Generated ${routes.length} sitemap URLs.`);
