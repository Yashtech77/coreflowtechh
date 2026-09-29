export const productGroups = [
  { id: "data-centre", label: "Data centre" },
  { id: "it-infrastructure", label: "IT infrastructure" },
  { id: "kaytus", label: "Authorized KAYTUS" },
];

export const productCategories = [
  {
    slug: "gpu-compute",
    group: "kaytus",
    name: "KAYTUS GPU & AI Servers",
    headline: "Authorized KAYTUS compute for training and inference",
    summary:
      "KAYTUS GPU and AI servers supplied in India by Coreflowtech as authorized distributor — air or liquid cooled.",
    highlights: ["KAYTUS", "GPU / AI", "Authorized in India"],
    items: [
      {
        slug: "hgx-training-server",
        image: "/product-images/hgx-training-server.png",
        name: "KAYTUS GPU Training Server",
        short: "Dense GPU node for model training and fine-tuning.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Multi-GPU KAYTUS platform for AI training, HPC, and high-throughput inference.",
        specs: [
          "KAYTUS GPU server platform",
          "Multi-GPU configurations",
          "Dual-socket CPU options",
          "High-speed network adapters",
          "Hot-swap NVMe cache",
          "Redundant power, liquid-ready",
        ],
        highlights: ["KAYTUS", "Training", "Authorized"],
      },
      {
        slug: "inference-appliance",
        image: "/product-images/inference-appliance.png",
        name: "KAYTUS Inference Server",
        short: "Optimized GPU density for inference and vision workloads.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Flexible GPU counts for RAG, agents, and enterprise inference.",
        specs: [
          "1–8 GPU configurations",
          "PCIe Gen5 GPU lanes",
          "High-core CPU options",
          "25/100/200Gb networking",
          "Front I/O serviceability",
          "KAYTUS BMC / Redfish",
        ],
        highlights: ["KAYTUS", "Inference", "Authorized"],
      },
      {
        slug: "high-density-gpu-rack",
        image: "/product-images/high-density-gpu-rack.png",
        name: "KAYTUS High-Density GPU Rack",
        short: "Pre-integrated GPU rack with fabric and PDU options.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Factory-integrated GPU racks for faster site deployment.",
        specs: [
          "High GPU density per rack",
          "Air or liquid cooling options",
          "Leaf-spine ready cabling",
          "Metered / switched PDUs",
          "Burn-in ready integration",
          "Spares and BOM support",
        ],
        highlights: ["KAYTUS", "Turnkey rack"],
      },
      {
        slug: "enterprise-cpu-server",
        image: "/product-images/enterprise-cpu-server.png",
        name: "KAYTUS Enterprise Server",
        short: "Dual-socket general purpose servers for enterprise workloads.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Dual-socket platforms for virtualisation, databases, and control-plane hosts.",
        specs: [
          "Dual Intel Xeon or AMD EPYC",
          "DDR5 memory",
          "Flexible NVMe / SAS backplane",
          "OCP NIC options",
          "Dedicated BMC / Redfish",
          "Tool-less service design",
        ],
        highlights: ["KAYTUS", "Enterprise"],
      },
    ],
  },
  {
    slug: "ai-storage",
    group: "kaytus",
    name: "KAYTUS Storage",
    headline: "KAYTUS all-flash, scale-out, and object storage",
    summary:
      "KAYTUS storage platforms for AI, HPC, and enterprise data — supplied in India by Coreflowtech.",
    highlights: ["KAYTUS", "All-flash", "Object"],
    items: [
      {
        slug: "all-flash-ai-array",
        image: "/product-images/all-flash-ai-array.png",
        name: "KAYTUS All-Flash Array",
        short: "NVMe all-flash for hot datasets and checkpoints.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Low-latency flash arrays for performance-sensitive workloads.",
        specs: [
          "NVMe-oF front-end options",
          "All-flash media",
          "Active-active controllers",
          "Snapshots and clones",
          "Multi-tenant QoS",
          "High-availability design",
        ],
        highlights: ["KAYTUS", "NVMe"],
      },
      {
        slug: "parallel-file-system",
        image: "/product-images/parallel-file-system.png",
        name: "KAYTUS Parallel File Platform",
        short: "Scale-out file for shared training and HPC namespaces.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. POSIX-compatible scale-out file for multi-node jobs.",
        specs: [
          "Scale-out metadata and data",
          "NFS / SMB / S3 options",
          "Tiering to capacity storage",
          "Erasure coding",
          "Rack building blocks",
          "HPC-oriented throughput",
        ],
        highlights: ["KAYTUS", "Scale-out"],
      },
      {
        slug: "ai-object-store",
        image: "/product-images/ai-object-store.png",
        name: "KAYTUS Object Storage",
        short: "S3-compatible object for lakes, backups, and archives.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Object storage with erasure coding and lifecycle policies.",
        specs: [
          "S3-compatible API",
          "Erasure coding",
          "Immutable bucket options",
          "Lifecycle to cooler media",
          "Replication options",
          "Identity federation",
        ],
        highlights: ["KAYTUS", "S3"],
      },
    ],
  },
  {
    slug: "networking",
    group: "kaytus",
    name: "KAYTUS Networking",
    headline: "KAYTUS high-speed fabrics for GPU and storage traffic",
    summary:
      "InfiniBand and high-speed Ethernet options from the KAYTUS portfolio, distributed in India by Coreflowtech.",
    highlights: ["KAYTUS", "Ethernet", "InfiniBand"],
    items: [
      {
        slug: "infiniband-fabric",
        image: "/product-images/infiniband-fabric.png",
        name: "KAYTUS InfiniBand Fabric",
        short: "High-speed InfiniBand for GPU clusters.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. InfiniBand leaf-spine options for east-west GPU traffic.",
        specs: [
          "High-speed InfiniBand options",
          "Fat-tree topologies",
          "Redundant leaf / spine",
          "Optical and DAC support",
          "Congestion control",
          "Cluster telemetry",
        ],
        highlights: ["KAYTUS", "InfiniBand"],
      },
      {
        slug: "400g-ethernet",
        image: "/product-images/400g-ethernet.png",
        name: "KAYTUS High-Speed Ethernet",
        short: "100/200/400Gb Ethernet for AI and storage backends.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. High-speed Ethernet for GPU, storage, and data-centre fabrics.",
        specs: [
          "100/200/400GbE options",
          "RoCEv2-capable profiles",
          "DC fabric features",
          "Telemetry support",
          "SmartNIC / DPU options",
          "Automation-ready",
        ],
        highlights: ["KAYTUS", "Ethernet"],
      },
      {
        slug: "dpu-security",
        image: "/product-images/dpu-security.png",
        name: "KAYTUS DPU / Security Edge",
        short: "Offload networking, storage, and isolation at the server edge.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. DPU-class options for secure multi-tenant clusters.",
        specs: [
          "Hardware isolation options",
          "Inline crypto support",
          "Virtual switching offload",
          "Storage initiation",
          "Micro-segmentation",
          "Out-of-band policy",
        ],
        highlights: ["KAYTUS", "DPU"],
      },
    ],
  },
  {
    slug: "liquid-cooling",
    group: "kaytus",
    name: "KAYTUS Liquid Cooling",
    headline: "KAYTUS cold plate, CDU, and immersion options",
    summary:
      "Liquid cooling from the KAYTUS portfolio for dense GPU and CPU platforms — supplied in India by Coreflowtech.",
    highlights: ["KAYTUS", "Cold plate", "CDU"],
    items: [
      {
        slug: "cold-plate-loop",
        image: "/product-images/cold-plate-loop.png",
        name: "KAYTUS Cold Plate Loop",
        short: "Direct-to-chip cooling for dense GPU and CPU trays.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Cold-plate loops with leak detection and service fittings.",
        specs: [
          "GPU + CPU cold plates",
          "Quick-disconnect fittings",
          "Per-rack leak detection",
          "N+1 pump options",
          "BMC thermal telemetry",
          "Retrofit kits where supported",
        ],
        highlights: ["KAYTUS", "D2C"],
      },
      {
        slug: "cdu-plant",
        image: "/product-images/cdu-plant.png",
        name: "KAYTUS Coolant Distribution Unit",
        short: "Row or gallery CDUs between facility water and IT loops.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. CDUs with heat exchangers, filtration, and controls.",
        specs: [
          "Row or gallery form factors",
          "Redundant pumps & PSU",
          "Plate heat exchangers",
          "Particle filtration",
          "Modbus / SNMP / Redfish",
          "Sized to rack TDP",
        ],
        highlights: ["KAYTUS", "CDU"],
      },
      {
        slug: "immersion-pod",
        image: "/product-images/immersion-pod.png",
        name: "KAYTUS Immersion Cooling",
        short: "Single-phase immersion for extreme density.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Immersion tanks and CDU skids for ultra-dense deployments.",
        specs: [
          "Single-phase dielectric",
          "Tank + CDU skid",
          "High-speed cable management",
          "Service tooling",
          "Fluid quality monitoring",
          "Contained spill design",
        ],
        highlights: ["KAYTUS", "Immersion"],
      },
    ],
  },
  {
    slug: "modular-data-centers",
    group: "kaytus",
    name: "KAYTUS Modular Data Centres",
    headline: "KAYTUS prefabricated IT modules and edge cabinets",
    summary:
      "Prefabricated and edge data-centre building blocks from the KAYTUS portfolio, distributed in India by Coreflowtech.",
    highlights: ["KAYTUS", "Prefab", "Edge"],
    items: [
      {
        slug: "ai-data-hall",
        image: "/product-images/ai-data-hall.png",
        name: "KAYTUS Modular Data Hall",
        short: "Prefabricated IT modules for rapid hall expansion.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Factory-tested IT modules with power and cooling stubs.",
        specs: [
          "Modular MW-class blocks",
          "Air or liquid-first layouts",
          "Integrated fire & BMS options",
          "N+1 mechanical / electrical",
          "Factory FAT, site SAT",
          "Expandable bays",
        ],
        highlights: ["KAYTUS", "Modular"],
      },
      {
        slug: "edge-micro-dc",
        image: "/product-images/edge-micro-dc.png",
        name: "KAYTUS Edge Micro Data Centre",
        short: "Self-contained cabinets for edge and campus sites.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. All-in-one cabinets with UPS, cooling, and remote monitoring.",
        specs: [
          "10–50 kW class cabinets",
          "In-row or in-rack cooling",
          "Integrated UPS & PDU",
          "Remote telemetry",
          "Outdoor-rated options",
          "Rapid deployment path",
        ],
        highlights: ["KAYTUS", "Edge"],
      },
    ],
  },
  {
    slug: "ai-management",
    group: "kaytus",
    name: "KAYTUS Management Platforms",
    headline: "KAYTUS cluster and infrastructure operations software",
    summary:
      "Provision, monitor, and operate KAYTUS fleets with manufacturer management platforms — supplied in India by Coreflowtech.",
    highlights: ["KAYTUS", "Cluster ops", "DCIM"],
    items: [
      {
        slug: "cluster-manager",
        image: "/product-images/cluster-manager.png",
        name: "KAYTUS Cluster Manager",
        short: "Provision and manage GPU and server fleets.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Bare-metal provisioning, imaging, and health for KAYTUS nodes.",
        specs: [
          "PXE / Redfish provisioning",
          "Golden-image cloning",
          "Hardware health watch",
          "Firmware baseline lock",
          "Role-based access",
          "API / automation hooks",
        ],
        highlights: ["KAYTUS", "Fleet"],
      },
      {
        slug: "aiops-dcim",
        image: "/product-images/aiops-dcim.png",
        name: "KAYTUS DCIM / Operations",
        short: "Power, thermals, and occupancy in one operations view.",
        description:
          "Supplied in India by Coreflowtech as an authorized KAYTUS distributor. Correlate PDU, CDU, and node telemetry for the hall.",
        specs: [
          "Rack PDU & CDU ingest",
          "Capacity and thermal views",
          "Alerting and runbooks",
          "Ticket adapters",
          "Air-gapped deploy option",
          "Multi-rack dashboards",
        ],
        highlights: ["KAYTUS", "DCIM"],
      },
    ],
  },
  {
    slug: "data-centre-solutions",
    group: "data-centre",
    name: "Data Centre Solutions",
    headline: "Coreflowtech data centre design, build, and operations",
    summary:
      "Data centre solutions from Coreflowtech — site design, modular halls, power, cooling, containment, and DC operations across India.",
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
  {
    slug: "it-infrastructure",
    group: "it-infrastructure",
    name: "IT Infrastructure",
    headline: "General enterprise IT infrastructure — supplied generically",
    summary:
      "Standard IT infrastructure for offices, campuses, and plant sites: servers, storage, networking, cabling, racks, and power.",
    highlights: ["Servers", "Network", "Cabling"],
    items: [
      {
        slug: "enterprise-servers",
        image: "/product-images/enterprise-servers.png",
        name: "Enterprise Servers",
        short: "General purpose rack and tower servers for business workloads.",
        description:
          "Standard enterprise servers for applications, virtualisation, files, and databases. Generic IT supply — not a branded AI SKU.",
        specs: [
          "Rack and tower form factors",
          "Single or dual socket",
          "SAS / SATA / NVMe options",
          "Standard Ethernet NICs",
          "Warranty and AMC options",
          "India delivery",
        ],
        highlights: ["Generic IT", "Servers"],
      },
      {
        slug: "storage-backup",
        image: "/product-images/storage-backup.png",
        name: "Storage & Backup",
        short: "SAN, NAS, and backup storage for everyday enterprise data.",
        description:
          "General storage and backup infrastructure for files, VMs, and archives. Standard IT categories, sized to your capacity.",
        specs: [
          "NAS and SAN options",
          "Backup and archive targets",
          "Snapshot / replication options",
          "Hybrid disk + flash",
          "Standard protocols",
          "Support and spares",
        ],
        highlights: ["Generic IT", "Storage"],
      },
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
        highlights: ["Generic IT", "Network"],
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
        highlights: ["Generic IT", "Cabling"],
      },
      {
        slug: "racks-power",
        image: "/product-images/racks-power.png",
        name: "Racks, PDU & UPS",
        short: "Cabinets, intelligent PDUs, and UPS for rooms and halls.",
        description:
          "Standard racks, PDUs, and UPS for server rooms and small halls — generic power and physical infrastructure.",
        specs: [
          "Server and network racks",
          "Metered / switched PDUs",
          "UPS and battery options",
          "Cable management",
          "Environmental sensors",
          "Installation support",
        ],
        highlights: ["Generic IT", "Power"],
      },
    ],
  },
];

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
  return productGroups.flatMap((group) => {
    const limit = group.id === "kaytus" ? 1 : 2;
    const items = productCategories
      .filter((category) => category.group === group.id)
      .flatMap((category) => category.items.map((item) => ({ item, category })));
    return items.slice(0, limit);
  });
}

export function getHomeCatalogue() {
  const dataCentre = productCategories.find((category) => category.slug === "data-centre-solutions");
  const itInfra = productCategories.find((category) => category.slug === "it-infrastructure");
  const kaytusItems = productCategories
    .filter((category) => category.group === "kaytus")
    .flatMap((category) => category.items);

  return [
    { ...dataCentre, href: `/products/${dataCentre.slug}` },
    { ...itInfra, href: `/products/${itInfra.slug}` },
    {
      slug: "authorized-kaytus",
      name: "Authorized KAYTUS",
      summary:
        "Official KAYTUS compute, storage, networking, cooling, and management — supplied in India by Coreflowtech as authorized distributor.",
      highlights: ["Authorized distributor", "Official range", "India"],
      items: kaytusItems,
      href: "/products?group=kaytus",
    },
  ];
}
