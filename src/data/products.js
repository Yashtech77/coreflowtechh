import manufacturerProducts from "./manufacturer-products.json" with { type: "json" };
import { manufacturerFamilies, additionalSolutions, additionalPlatforms } from "./manufacturer-families.js";
import { afsCategories } from "./afs-products.js";

export const productGroups = [
  {
    id: "coreflowtech",
    label: "Coreflowtech",
    title: "Coreflowtech solutions",
    summary:
      "Our own AI software, servers, storage, networking, and data centre solutions — designed, supplied, and supported across India.",
    highlights: ["AI software", "Servers", "Data centre"],
  },
  {
    id: "kaytus",
    label: "KAYTUS",
    title: "Authorized KAYTUS portfolio",
    summary:
      "Official KAYTUS servers, storage, AI platforms, and liquid cooling — supplied in India by Coreflowtech as authorized distributor.",
    highlights: ["Authorized distributor", "KAYTUS", "India"],
    website: "https://www.kaytus.com/",
    websiteLabel: "kaytus.com",
  },
  {
    id: "cxtek",
    label: "CxTEK",
    title: "Authorized CxTEK portfolio",
    summary:
      "Official CxTEK switches, servers, storage, routing, wireless, and network solutions — supplied in India by Coreflowtech as authorized distributor.",
    highlights: ["Authorized distributor", "CxTEK", "India"],
    website: "https://www.cxtek.in/",
    websiteLabel: "cxtek.in",
  },
  {
    id: "afs",
    label: "AFS",
    title: "Authorized AFS portfolio",
    summary: "Advanced Fiber Solutions (AFS) enclosures, cable assemblies, adapters, attenuators, FTTH products, and splitters — supplied in India by Coreflowtech as an authorized distributor.",
    highlights: ["Authorized distributor", "Fiber optics", "India"],
    website: "https://afsipl.com/",
    websiteLabel: "afsipl.com",
  },
];

const kaytusItem = (slug, image, name, short, tag) => ({
  slug,
  image,
  name,
  short,
  description: `${short} Supplied in India by Coreflowtech as an authorized KAYTUS distributor. See kaytus.com for the full product range.`,
  specs: [
    "Official KAYTUS product",
    "Supplied in India by Coreflowtech",
    "Sizing and BOM support",
    "Installation and AMC options",
  ],
  highlights: ["KAYTUS", tag],
});

const cxtekItem = (slug, image, name, short, tag) => ({
  slug,
  image,
  name,
  short,
  description: `${short} Supplied in India by Coreflowtech as an authorized CxTEK distributor. See cxtek.in for the full product range.`,
  specs: [
    "Official CxTEK product",
    "Supplied in India by Coreflowtech",
    "Sizing and BOM support",
    "Installation and AMC options",
  ],
  highlights: ["CxTEK", tag],
});

const baseCategories = [
  // ---- Coreflowtech own range ----
  {
    slug: "ai-software",
    group: "coreflowtech",
    name: "AI Software Solutions",
    headline: "AI software for business operations, hiring, and customer conversations",
    summary:
      "Coreflowtech AI Native ERP, AI Interview Bot, and AI Telebot help teams simplify business operations, streamline interviews, and manage customer conversations.",
    highlights: ["AI", "Software", "India delivery"],
    items: [
      {
        slug: "ai-native-erp",
        image: "/product-images/inference-appliance.png",
        name: "AI Native ERP",
        short: "Bring business operations together with AI-assisted workflows, reporting, and insights.",
        description:
          "Coreflowtech AI Native ERP brings everyday business processes into one connected workspace. From sales and inventory to finance and team operations, it helps reduce repetitive work, organise business information, and turn operational data into useful insights for your team.",
        specs: [
          "Connected business workflows",
          "Sales and customer management",
          "Inventory and procurement workflows",
          "Finance and operational reporting",
          "AI-assisted insights and routine tasks",
          "Processes tailored to your business",
        ],
        highlights: ["ERP", "Business automation"],
      },
      {
        slug: "ai-interview-bot",
        image: "/product-images/cluster-manager.png",
        name: "AI Interview Bot",
        short: "Streamline initial interviews with role-based questions and clear summaries for your hiring team.",
        description:
          "Coreflowtech AI Interview Bot helps hiring teams conduct structured initial interviews and organise candidate responses. Questions tailored to the role and concise interview summaries give recruiters a clearer starting point for follow-up conversations, while hiring decisions remain with your team.",
        specs: [
          "Role-based interview questions",
          "Structured candidate conversations",
          "Organised interview responses",
          "Interview summaries for recruiters",
          "Follow-up question preparation",
          "Human review and hiring decisions",
        ],
        highlights: ["Hiring", "Interview automation"],
      },
      {
        slug: "ai-telebot",
        image: "/product-images/aiops-dcim.png",
        name: "AI Telebot",
        short: "Handle routine customer calls, capture enquiries, and simplify follow-ups with an AI calling assistant.",
        description:
          "Coreflowtech AI Telebot helps teams manage routine phone conversations for customer enquiries, lead follow-ups, and appointment coordination. It captures the key details from each conversation and helps route requests to the right people, giving your team more time for customers who need personal attention.",
        specs: [
          "AI-assisted customer calls",
          "Enquiry and lead capture",
          "Routine question handling",
          "Appointment coordination",
          "Conversation summaries and follow-ups",
          "Routing requests to your team",
        ],
        highlights: ["Voice AI", "Customer engagement"],
      },
    ],
  },
  {
    slug: "servers-storage",
    group: "coreflowtech",
    name: "Servers & Storage",
    headline: "Enterprise servers and storage for everyday workloads",
    summary:
      "General purpose rack and tower servers plus NAS, SAN, and backup storage, supplied and supported across India.",
    highlights: ["Servers", "Storage", "Backup"],
    items: [
      {
        slug: "enterprise-servers",
        image: "/product-images/enterprise-servers.png",
        name: "Enterprise Servers",
        short: "General purpose rack and tower servers for business workloads.",
        description:
          "Standard enterprise servers for applications, virtualisation, files, and databases, sized to your workload.",
        specs: [
          "Rack and tower form factors",
          "Single or dual socket",
          "SAS / SATA / NVMe options",
          "Standard Ethernet NICs",
          "Warranty and AMC options",
          "India delivery",
        ],
        highlights: ["Servers", "Enterprise"],
      },
      {
        slug: "storage-backup",
        image: "/product-images/storage-backup.png",
        name: "Storage & Backup",
        short: "SAN, NAS, and backup storage for everyday enterprise data.",
        description:
          "Storage and backup infrastructure for files, VMs, and archives, sized to your capacity.",
        specs: [
          "NAS and SAN options",
          "Backup and archive targets",
          "Snapshot / replication options",
          "Hybrid disk + flash",
          "Standard protocols",
          "Support and spares",
        ],
        highlights: ["Storage", "Backup"],
      },
    ],
  },
  {
    slug: "networking-cabling",
    group: "coreflowtech",
    name: "Networking & Cabling",
    headline: "Campus and data centre networks, cabled and certified",
    summary:
      "Switching, wireless, security appliances, and structured cabling for offices, campuses, and data halls.",
    highlights: ["Network", "Security", "Cabling"],
    items: [
      {
        slug: "network-security",
        image: "/product-images/network-security.png",
        name: "Networking & Security",
        short: "Switches, routers, wireless, and network security appliances.",
        description:
          "Campus and data-centre networking plus standard security appliances for Indian offices and plants.",
        specs: [
          "Access and aggregation switching",
          "WAN / SD-WAN options",
          "Wireless LAN",
          "Firewall / UTM",
          "VPN and segmentation",
          "Installation and AMC",
        ],
        highlights: ["Network", "Security"],
      },
      {
        slug: "structured-cabling",
        image: "/product-images/structured-cabling.png",
        name: "Structured Cabling",
        short: "Copper, fibre, and certified campus / hall cabling.",
        description:
          "Structured cabling for buildings and data halls — copper, fibre, patching, and certification.",
        specs: [
          "Cat6 / Cat6A copper",
          "Single and multimode fibre",
          "Patch panels and trays",
          "Testing and certification",
          "Labelling standards",
          "Campus and DC pathways",
        ],
        highlights: ["Cabling"],
      },
    ],
  },
  {
    slug: "data-centre-solutions",
    group: "coreflowtech",
    name: "Data Centre Solutions",
    headline: "Data centre design, build, and operations",
    summary:
      "Site design, power, cooling, containment, racks, fit-out, and DC operations across India.",
    highlights: ["Design & build", "Power & cooling", "India delivery"],
    items: [
      {
        slug: "dc-design-build",
        image: "/product-images/dc-design-build.png",
        name: "Data Centre Design & Build",
        short: "From site survey to a commissioned IT hall.",
        description:
          "Coreflowtech data centre design and build: layout, power, cooling, fire, and structured IT spaces sized for your load.",
        specs: [
          "Site and load survey",
          "Hall layout and containment",
          "Electrical and mechanical design",
          "Fire and BMS coordination",
          "Commissioning and SAT",
          "Documentation and handover",
        ],
        highlights: ["DC build", "Turnkey"],
      },
      {
        slug: "dc-power-cooling",
        image: "/product-images/dc-power-cooling.png",
        name: "Power, Cooling & Containment",
        short: "UPS, PDU, precision cooling, and aisle containment.",
        description:
          "Coreflowtech supplies and integrates hall power, precision cooling, and hot/cold aisle containment for reliable IT operations.",
        specs: [
          "UPS and PDU design",
          "Precision / in-row cooling",
          "Hot / cold aisle containment",
          "Environmental monitoring",
          "Redundancy planning",
          "Retrofit of live halls",
        ],
        highlights: ["Power", "Cooling"],
      },
      {
        slug: "racks-power",
        image: "/product-images/racks-power.png",
        name: "Racks, PDU & UPS",
        short: "Cabinets, intelligent PDUs, and UPS for rooms and halls.",
        description:
          "Racks, PDUs, and UPS for server rooms and small halls — power and physical infrastructure.",
        specs: [
          "Server and network racks",
          "Metered / switched PDUs",
          "UPS and battery options",
          "Cable management",
          "Environmental sensors",
          "Installation support",
        ],
        highlights: ["Racks", "Power"],
      },
      {
        slug: "dc-fitout",
        image: "/product-images/dc-fitout.png",
        name: "Hall Fit-out & Cabling",
        short: "Racks, trays, fibre, copper, and labelled pathways.",
        description:
          "Physical fit-out of the data hall — racks, pathways, copper and fibre, grounding, and as-built labelling.",
        specs: [
          "Rack and cabinet layout",
          "Copper and fibre pathways",
          "Grounding and bonding",
          "Cable management",
          "As-built documentation",
          "Testing and certification",
        ],
        highlights: ["Fit-out", "Cabling"],
      },
      {
        slug: "dc-operations",
        image: "/product-images/dc-operations.png",
        name: "DC Operations & DCIM",
        short: "Monitoring, capacity, and day-2 operations support.",
        description:
          "Operate the hall after go-live: DCIM views, alerting, capacity tracking, and coordinated AMC.",
        specs: [
          "DCIM and environmental views",
          "Capacity tracking",
          "Alerting and escalation",
          "Vendor AMC coordination",
          "Change windows",
          "India on-site support",
        ],
        highlights: ["DCIM", "AMC"],
      },
    ],
  },

  // ---- KAYTUS (catalogue per kaytus.com) ----
  {
    slug: "kaytus-server-storage",
    group: "kaytus",
    name: "KAYTUS Server & Storage",
    headline: "Rack, multi-node, edge servers and storage",
    summary: "KAYTUS servers and storage from edge to core — supplied in India by Coreflowtech.",
    highlights: ["KAYTUS", "Servers", "Storage"],
    items: [
      kaytusItem(
        "rack-tower-servers",
        "/product-images/enterprise-cpu-server.png",
        "KAYTUS Rack and Tower Servers",
        "Versatile general-purpose servers for cloud, virtualization, and enterprise workloads.",
        "Rack / Tower"
      ),
      kaytusItem(
        "datacenter-infrastructure",
        "/product-images/high-density-gpu-rack.png",
        "KAYTUS Datacenter Infrastructure",
        "Rack-scale systems for high-density AI workloads and hyperscale data centers.",
        "Rack-scale"
      ),
      kaytusItem(
        "multi-node-servers",
        "/product-images/hgx-training-server.png",
        "KAYTUS Multi-Node Servers",
        "High-density multi-node architecture that maximizes compute per rack and lowers TCO.",
        "Multi-node"
      ),
      kaytusItem(
        "edge-servers",
        "/product-images/edge-micro-dc.png",
        "KAYTUS Edge Servers",
        "Compact, wide-temperature servers for edge deployments and real-time processing.",
        "Edge"
      ),
      kaytusItem(
        "kaytus-storage",
        "/product-images/all-flash-ai-array.png",
        "KAYTUS Storage",
        "Enterprise storage solutions scaling from edge to core infrastructure for large-scale data management.",
        "Storage"
      ),
    ],
  },
  {
    slug: "kaytus-software",
    group: "kaytus",
    name: "KAYTUS Software & Platform",
    headline: "Server management, AI platform, and cloud infrastructure",
    summary: "KAYTUS management, AI, and cloud platforms — supplied in India by Coreflowtech.",
    highlights: ["KAYTUS", "AI platform", "Cloud"],
    items: [
      kaytusItem(
        "ksmanage",
        "/product-images/cluster-manager.png",
        "KAYTUS KSManage",
        "Intelligent server management for monitoring, deployment, and maintenance.",
        "Management"
      ),
      kaytusItem(
        "motusai",
        "/product-images/aiops-dcim.png",
        "KAYTUS MotusAI",
        "Enterprise AI platform spanning model development, training, and deployment.",
        "AI platform"
      ),
      kaytusItem(
        "cloud-infrastructure",
        "/product-images/ai-data-hall.png",
        "KAYTUS Cloud Infrastructure",
        "Turnkey platform to build and operate private and hybrid clouds.",
        "Cloud"
      ),
    ],
  },
  {
    slug: "kaytus-solutions",
    group: "kaytus",
    name: "KAYTUS Solutions",
    headline: "Full-stack AI, liquid cooling, and modular AI pods",
    summary: "End-to-end KAYTUS solutions for AI infrastructure — supplied in India by Coreflowtech.",
    highlights: ["KAYTUS", "Full-stack AI", "Liquid cooling"],
    items: [
      kaytusItem(
        "full-stack-ai",
        "/product-images/inference-appliance.png",
        "KAYTUS Full Stack AI",
        "End-to-end AI infrastructure spanning LLM training, inference, and AI for Science.",
        "AI"
      ),
      kaytusItem(
        "liquid-cooling-solution",
        "/product-images/cold-plate-loop.png",
        "KAYTUS Liquid Cooling Solution",
        "100% liquid cooling with no air conditioning, for annual PUE as low as 1.1.",
        "Liquid cooling"
      ),
      kaytusItem(
        "ai-compute-pod-200",
        "/product-images/ai-data-hall.png",
        "KAYTUS AI Compute Pod 200",
        "A modular AI data center pod that integrates compute, storage, and networking.",
        "Modular pod"
      ),
    ],
  },

  // ---- CxTEK (catalogue per cxtek.in) ----
  {
    slug: "cxtek-switches",
    group: "cxtek",
    name: "CxTEK Switches",
    headline: "Data centre, enterprise, and industrial switching",
    summary: "CxTEK switches for data centre, enterprise, and industrial networks — supplied in India by Coreflowtech.",
    highlights: ["CxTEK", "Switching"],
    items: [
      cxtekItem(
        "datacentre-switch",
        "/product-images/400g-ethernet.png",
        "CxTEK Datacentre Switch",
        "High-performance switching for data center environments.",
        "Data centre"
      ),
      cxtekItem(
        "enterprise-switch",
        "/product-images/network-security.png",
        "CxTEK Enterprise Switch",
        "High-performance switching for enterprise environments.",
        "Enterprise"
      ),
      cxtekItem(
        "industrial-grade-switch",
        "/product-images/edge-micro-dc.png",
        "CxTEK Industrial Grade Switch",
        "Ruggedised switching for industrial networks.",
        "Industrial"
      ),
    ],
  },
  {
    slug: "cxtek-servers-storage",
    group: "cxtek",
    name: "CxTEK Servers & Storage",
    headline: "Server hardware, NAS, and workstations",
    summary: "CxTEK server hardware, network attached storage, and PC workstations — supplied in India by Coreflowtech.",
    highlights: ["CxTEK", "Servers", "Storage"],
    items: [
      cxtekItem(
        "server-hardware",
        "/product-images/enterprise-servers.png",
        "CxTEK Server Hardware",
        "Versatile server hardware for VMS and VA applications.",
        "Servers"
      ),
      cxtekItem(
        "network-attached-storage",
        "/product-images/storage-backup.png",
        "CxTEK Network Attached Storage",
        "Enterprise-grade unified storage that integrates block and file protocols on a single platform.",
        "NAS"
      ),
      cxtekItem(
        "pc-workstation",
        "/product-images/enterprise-cpu-server.png",
        "CxTEK PC Workstation",
        "For small offices through to enterprise control rooms and design labs.",
        "Workstation"
      ),
    ],
  },
  {
    slug: "cxtek-routing-wireless",
    group: "cxtek",
    name: "CxTEK Routing & Wireless",
    headline: "Routers, 5G, and Wi-Fi 6 access points",
    summary: "CxTEK routers, 5G connectivity, and Wi-Fi 6 — supplied in India by Coreflowtech.",
    highlights: ["CxTEK", "Routing", "Wi-Fi 6"],
    items: [
      cxtekItem(
        "routers-5g",
        "/product-images/network-security.png",
        "CxTEK Routers & 5G",
        "Dual SIM aggregation and MPLS capabilities for seamless connectivity.",
        "Routers"
      ),
      cxtekItem(
        "wifi-6-access-points",
        "/product-images/structured-cabling.png",
        "CxTEK Wi-Fi 6 Access Points",
        "Next-gen wireless access points for high density environments.",
        "Wi-Fi 6"
      ),
    ],
  },
  {
    slug: "cxtek-solutions",
    group: "cxtek",
    name: "CxTEK Solutions",
    headline: "4G/5G, 100G, AI network, and IoT",
    summary: "CxTEK network solutions for mobile, data centre, AI, and industrial IoT — supplied in India by Coreflowtech.",
    highlights: ["CxTEK", "100G", "AI network"],
    items: [
      cxtekItem(
        "4g-5g-network",
        "/product-images/network-security.png",
        "CxTEK 4G-5G Network",
        "Dual SIM aggregation and bandwidth bonding for mobile connectivity.",
        "4G / 5G"
      ),
      cxtekItem(
        "100g-network",
        "/product-images/400g-ethernet.png",
        "CxTEK 100G Network",
        "Ultra-high speed switching for data centers and core networks.",
        "100G"
      ),
      cxtekItem(
        "ai-network",
        "/product-images/infiniband-fabric.png",
        "CxTEK AI Network",
        "Low-latency infrastructure optimized for AI workloads.",
        "AI"
      ),
      cxtekItem(
        "iot-solution",
        "/product-images/edge-micro-dc.png",
        "CxTEK IoT Solution",
        "Scalable connectivity platforms for industrial and smart IoT deployments.",
        "IoT"
      ),
    ],
  },
];

export const productCategories = [...baseCategories, ...afsCategories].map((category) => ({
  ...category,
  items: [
    ...category.items.map((item) => manufacturerFamilies[item.slug]
      ? { ...item, ...manufacturerFamilies[item.slug], brand: category.group === "kaytus" ? "KAYTUS" : "CxTEK" }
      : item),
    ...manufacturerProducts.filter((item) => item.categorySlug === category.slug),
    ...additionalPlatforms.filter((item) => item.categorySlug === category.slug),
    ...(category.slug === "cxtek-solutions" ? additionalSolutions : []),
  ],
}));

export function getGroup(groupId) {
  return productGroups.find((group) => group.id === groupId);
}

export function getCategory(slug) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(categorySlug, productSlug) {
  const category = getCategory(categorySlug);
  if (!category) return { category: null, product: null };
  const product = category.items.find((item) => item.slug === productSlug);
  return { category, product };
}

export function getAllProducts() {
  return productCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categorySlug: category.slug,
      categoryName: category.name,
      group: category.group,
    }))
  );
}

export function getCategoriesByGroup(groupId) {
  if (!groupId) {
    return productGroups.flatMap((group) =>
      productCategories.filter((category) => category.group === group.id)
    );
  }
  return productCategories.filter((category) => category.group === groupId);
}

export function getFeaturedProducts() {
  return productGroups.flatMap((group) =>
    productCategories
      .filter((category) => category.group === group.id)
      .flatMap((category) => category.items.map((item) => ({ item, category })))
      .sort((a, b) => Number(b.item.kind === "model") - Number(a.item.kind === "model"))
      .slice(0, 2)
  );
}

export function getHomeCatalogue() {
  return productGroups.map((group) => ({
    slug: group.id,
    name: group.title,
    summary: group.summary,
    highlights: group.highlights,
    items: getCategoriesByGroup(group.id).flatMap((category) => category.items),
    href: `/products?group=${group.id}`,
  }));
}
