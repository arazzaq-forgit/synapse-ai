export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  detail: string;
  tag: string;
  size: "large" | "medium" | "small";
  accent: string;
}

// Accent colors sourced from the provided colorPallet.pdf:
// Forsythia #FFC801, Deep Saffron #FF9932, Mystic Mint #D9E8E2,
// Arctic Powder #F1F6F4, Nocturnal Expedition #114C5A

export const FEATURES: Feature[] = [
  {
    id: 0,
    icon: "cog-8-tooth",
    title: "Neural Orchestration Engine",
    description: "Self-healing pipelines that adapt in real-time",
    detail:
      "Our proprietary orchestration layer uses transformer-based decision models to dynamically reroute data flows, auto-recover from failures, and optimize throughput—all without human intervention. Achieves 99.99% pipeline uptime.",
    tag: "Core AI",
    size: "large",
    accent: "#FFC801",
  },
  {
    id: 1,
    icon: "link",
    title: "Universal Connector Hub",
    description: "50+ native integrations across every major data source",
    detail:
      "Plug into warehouses, SaaS APIs, message queues, and event streams with pre-built, fully managed connectors. No custom auth flows, no brittle scripts—just configure and sync.",
    tag: "Integrations",
    size: "medium",
    accent: "#D9E8E2",
  },
  {
    id: 2,
    icon: "cube-16-solid",
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II compliant, end-to-end encrypted",
    detail:
      "Every byte in transit and at rest is encrypted with AES-256. Role-based access control, audit logging, and private VPC peering keep your data isolated and compliant.",
    tag: "Trust & Safety",
    size: "small",
    accent: "#FF9932",
  },
  {
    id: 3,
    icon: "chart-pie",
    title: "Real-Time Analytics",
    description: "Live observability into every pipeline run",
    detail:
      "Track throughput, latency, and error rates as they happen with sub-second dashboard refreshes. Drill into individual events without leaving the console.",
    tag: "Observability",
    size: "small",
    accent: "#FFC801",
  },
  {
    id: 4,
    icon: "arrow-trending-up",
    title: "Sub-10ms Execution",
    description: "Engineered for high-velocity, low-latency workloads",
    detail:
      "A distributed execution layer built on Rust-based workers processes events at the edge, keeping P99 latency under 10 milliseconds even at 10M+ events/sec.",
    tag: "Performance",
    size: "medium",
    accent: "#FF9932",
  },
  {
    id: 5,
    icon: "arrow-path",
    title: "Developer-First API",
    description: "Typed SDKs, webhooks, and granular API control",
    detail:
      "Ship integrations in minutes with strongly-typed client libraries, idempotent webhook delivery, and a fully documented REST and GraphQL surface.",
    tag: "Developer Experience",
    size: "small",
    accent: "#D9E8E2",
  },
];
