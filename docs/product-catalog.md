# Product catalog

The catalog contains 105 entries across 14 categories: Coreflowtech services, manufacturer product families, individual hardware models/configurations, and software platforms. Marketing summaries are original; names and technical specifications come from the linked public manufacturer pages. Reviewed on 7 October 2026.

## Data and maintenance

- `src/data/products.js` preserves the existing categories and product-family URLs, then combines them with the expanded catalog.
- `src/data/manufacturer-products.json` contains 55 hardware models/configurations, specification tables, source URLs, and image provenance. Intel and AMD configurations have separate URLs.
- `src/data/manufacturer-families.js` contains family descriptions, software capabilities, additional solutions, and two GPU platforms documented on the liquid-cooling page.
- `src/data/afs-products.js` contains all eight AFS product families, organised into enclosures, fibre connectivity, and FTTH/distribution. Images are stored locally in `public/product-images/afs/`; each record retains its manufacturer image URL.
- `public/product-images/manufacturers/` contains 49 locally stored manufacturer product images. Records without a confirmed image use a neutral configuration placeholder.

After modifying the data, run:

```sh
node scripts/generate-sitemap.mjs
node scripts/check-catalog.mjs
npm run build
```

The catalog checker verifies unique routes, required content, local images, manufacturer source domains, specification-table structure, Intel/AMD configuration separation, and sitemap coverage.

## Sources

KAYTUS: [rack/tower servers](https://www.kaytus.com/product/server/), [multi-node systems](https://www.kaytus.com/product/multi-node/), [edge systems](https://www.kaytus.com/product/edge-computing/), [storage](https://www.kaytus.com/product/storage/), [datacenter infrastructure](https://www.kaytus.com/product/datacenter/), [KSManage](https://www.kaytus.com/product/management-suite/ksmanage/), [MotusAI](https://www.kaytus.com/product/ai/motusAI.html), [cloud infrastructure](https://www.kaytus.com/product/cloud/), [AI](https://www.kaytus.com/product/ai/), [liquid cooling](https://www.kaytus.com/solutions/liquid-cooling/), and [AI Compute Pod 200](https://www.kaytus.com/product/datacenter/ai-compute-pod/).

CxTEK: [datacentre switching](https://www.cxtek.in/datacentre-switch.php), [enterprise switching](https://www.cxtek.in/enterprise-switch.php), [servers](https://www.cxtek.in/server-hardware.php), [storage](https://www.cxtek.in/network-attached-storage.php), [workstations](https://www.cxtek.in/workstation.php), and the seven solution pages linked from its [homepage](https://www.cxtek.in/). Individual records link to their specific product page.

AFS: [Advanced Fiber Solutions product range](https://afsipl.com/#products). All eight published families are included. Coreflowtech’s authorized distributor status was supplied by the user.

## Source gaps

- AFS product cards link to the manufacturer’s contact section, without individual model pages or downloadable specifications. Entries use original product-family descriptions and request configuration confirmation instead of claiming numeric ratings.
- CxTEK's Industrial Grade Switch menu points to `#`. No individual model specifications are published there.
- CxTEK `/product-details/router` and `/product-details/wlan` returned HTTP 404. Those families link to the available cellular and campus solution pages instead.
- KAYTUS storage detail URLs ending in `26446.html`, `26090.html`, `26077.html`, and `25768.html` returned HTTP 404. Five configurations are retained from the storage category's published specification table, without assigning invented model numbers.
- KAYTUS GPU detail URLs `12100.html` and `12594.html` returned HTTP 404. KR6298V2 and KR6288V2 show only the facts available on the liquid-cooling page.
- CxTEK lists CxD8200-54XS twice, including one broken `product-CxD8200-54XS.php` link. The catalog uses the working `CxD8200-54XS.php` page once.
- Configuration options and descriptive names occasionally differ between manufacturer category and detail pages. Available detail-page specification tables are used for individual models; original table values are retained, including the CxD8500D-32QX identifier within the CxD8500-32QX page.

## Interface

Brand tabs, category navigation, product-family/type filters, text search, and grid/list views are available on `/products`. Search and filter selections are stored in the URL. Detail pages include overview, specifications/capabilities, product-family models, manufacturer resources, and related products. Product quote links prefill the existing contact form.

The existing contact form is a frontend demo: it does not send enquiries to a backend. Connecting delivery remains a separate integration task. No production deployment was performed.
