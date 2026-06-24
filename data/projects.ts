export type Project = {
  slug: string;
  num: string;
  title: string;
  shortTitle: string;
  role: string;
  year: string;
  oneLiner: string;
  thumbBg: string;
  accent: string;
  overview: string;
  goals: string[];
  contributions: string[];
  results: string[];
  tools: string[];
  gallery?: string[];
  // Optional, richer case-study fields (currently only used by Kali).
  industry?: string;
  spine?: string;
  award?: string;
  quote?: { text: string; author: string };
  features?: { title: string; text: string }[];
  liveStats?: { label: string; value: string }[];
  stackNote?: string;
  team?: string[];
  externalUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "nasa",
    num: "01",
    title: "NASA: AI Engineering",
    shortTitle: "NASA AI Engineering",
    role: "AI Engineering Intern",
    year: "2026",
    thumbBg: "linear-gradient(160deg,#D9E4E0,#CBDDDF)",
    accent: "#CBDDDF",
    oneLiner:
      "A vetted prompt-engineering DB + RAG pipelines for the Astrophysics Division.",
    overview:
      "Inside NASA's Astrophysics Division I built internal AI tooling to make scientists faster and more consistent, turning scattered prompt knowledge into a single trusted system and making dense documents instantly queryable.",
    goals: [
      "Centralize fragmented prompt knowledge into one trusted source",
      "Make large technical document sets searchable in seconds",
      "Raise the quality + consistency of AI-assisted work across the team",
    ],
    contributions: [
      "Designed and shipped a Prompt Engineering database of 100+ vetted, reusable templates spanning policy summarization, document drafting, data analysis, and panel review workflows",
      "Built RAG pipelines for AI-assisted document querying across division archives, enabling mission-critical document intelligence",
      "Standardized prompting practices so outputs stayed accurate and repeatable across the team",
    ],
    results: [
      "100+ vetted prompt templates in active internal use",
      "Document lookup time cut from hours to seconds",
      "A reusable RAG foundation other teams can build on",
    ],
    tools: ["Python", "RAG", "LLMs", "Prompt Engineering", "Vector Search"],
  },
  {
    slug: "bezero",
    num: "02",
    title: "BeZero Carbon: Strategy",
    shortTitle: "BeZero Carbon Strategy",
    role: "Strategy Consultant, VSS",
    year: "2026",
    thumbBg: "linear-gradient(160deg,#E9ECCF,#C3C7A6)",
    accent: "#C3C7A6",
    oneLiner:
      "Decarbonization market mapping and a 30-slide go-to-market strategy.",
    overview:
      "With Venture Strategy Solutions I helped BeZero Carbon understand a fast-moving decarbonization market and translate that research into a concrete go-to-market plan its leadership could act on.",
    goals: [
      "Map the decarbonization landscape and key buyer segments",
      "Define a sharp ideal-customer profile grounded in evidence",
      "Deliver a board-ready go-to-market strategy",
    ],
    contributions: [
      "Mapped decarbonization market workflows across carbon ratings, power trading, and grid forecasting via 12 primary discovery calls with professionals at Calyx Global and Sylvera",
      "Synthesized 30+ primary and secondary research sources to build ICP frameworks across carbon analysts, ESG teams, and renewable energy underwriters",
      "Delivered a 30-slide midterm strategy deck identifying 4 BeZero integration pathways and a phased GTM playbook across near-, mid-, and long-term expansion tracks",
    ],
    results: [
      "A validated ideal-customer profile with 3 high-priority segments",
      "30-slide GTM roadmap adopted by leadership",
      "Clear prioritization of target segments and expansion tracks",
    ],
    tools: [
      "Market Research",
      "ICP Frameworks",
      "Customer Discovery",
      "GTM Strategy",
      "Keynote",
    ],
  },
  {
    slug: "haas",
    num: "03",
    title: "UC Berkeley Haas: Research",
    shortTitle: "Haas Research",
    role: "Research Assistant",
    year: "2026",
    thumbBg: "linear-gradient(160deg,#F1F0C8,#ECE9BE)",
    accent: "#ECE9BE",
    oneLiner: "Rebuilt Econ4UA.org and deployed online RCTs for Prof. Fedyk.",
    overview:
      "Supporting Professor Fedyk's research, I bridged web development and behavioral economics, rebuilding a public-facing education site and standing up the infrastructure for live online experiments.",
    goals: [
      "Modernize the Econ4UA.org learning experience for 10,000+ users",
      "Make experiment deployment reliable and repeatable",
      "Support clean data collection for academic research",
    ],
    contributions: [
      "Improved policy research accessibility by developing and redesigning 10+ web pages for Econ4UA.org, embedding research papers, donation portals, and campaign content using WordPress, Elementor, JavaScript, and CSS",
      "Designed and deployed online RCTs end to end with custom web interfaces",
      "Built and launched Qualtrics survey instruments supporting real-time participant tracking",
    ],
    results: [
      "10+ pages rebuilt and live, reaching 10,000+ users",
      "RCT + survey pipeline running for active studies",
      "Cleaner, more reliable research data collection",
    ],
    tools: ["WordPress", "Elementor", "JavaScript", "CSS", "Qualtrics", "RCT Design"],
  },
  {
    slug: "storia",
    num: "04",
    title: "Storia AI: Marketing",
    shortTitle: "Storia AI Marketing",
    role: "Marketing Director Intern",
    year: "2024",
    thumbBg: "linear-gradient(160deg,#F0D6DB,#E3AEB8)",
    accent: "#F0D6DB",
    oneLiner: "50+ campaigns across 15+ platforms, +15% engagement.",
    overview:
      "At YC-backed Storia AI I led marketing as an intern, running campaigns across a wide platform mix and feeding consumer insight straight back to the founders to sharpen the product story.",
    goals: [
      "Grow reach and engagement across many channels",
      "Translate audience signal into product + messaging insight",
      "Move fast alongside an early-stage founding team",
    ],
    contributions: [
      "Scaled product visibility across 15+ platforms by launching 50+ social media campaigns spotlighting AI features",
      "Analyzed views, CTR, and engagement to iterate on strategy in real time",
      "Surfaced actionable consumer behavior insights by synthesizing customer communication patterns, collaborating with founders to sharpen product messaging",
    ],
    results: [
      "+15% increase in user engagement across channels",
      "A repeatable multi-platform campaign playbook",
      "Insight loop that shaped product positioning",
    ],
    tools: ["Social Strategy", "Content Creation", "Analytics", "Consumer Insight", "Brand"],
  },
  {
    slug: "sip",
    num: "05",
    title: "SIP: Wildfire VR Research",
    shortTitle: "Wildfire VR Research",
    role: "Research Intern, UCSC OpenLab",
    year: "2024",
    thumbBg: "linear-gradient(160deg,#D9E4E0,#C3C7A6)",
    accent: "#D9E4E0",
    oneLiner:
      "Immersive 3D/VR wildfire-risk worlds; +42% risk awareness (p<0.0001).",
    overview:
      "At UCSC OpenLab I built immersive VR environments to help people viscerally understand wildfire risk, then rigorously measured whether the experience actually changed awareness.",
    goals: [
      "Make abstract wildfire risk feel real and personal",
      "Design an experience grounded in behavioral research",
      "Measure impact with statistical rigor",
    ],
    contributions: [
      "Designed and exhibited immersive 3D/VR environments at UCSC's OpenLab CRC integrating environmental data, AI, and narrative-driven interactive simulations",
      "Designed the study methodology and ran statistical validation across 30+ participants",
      "Validated experimental effectiveness through paired-sample t-tests and Likert-scale analysis",
    ],
    results: [
      "+42% increase in risk awareness (p<0.0001)",
      "Statistically validated experience design",
      "Evidence base for immersive risk communication",
    ],
    tools: ["Unity", "3D / VR", "Study Design", "Statistics", "Likert Analysis"],
  },
  {
    slug: "microfinance",
    num: "06",
    title: "Microfinance: Bakery Strategy",
    shortTitle: "Bakery Data Strategy",
    role: "Project Manager",
    year: "2026",
    thumbBg: "linear-gradient(160deg,#ECE9BE,#D7C59F)",
    accent: "#D7C59F",
    oneLiner: "Data strategy for a home bakery, projected +15% revenue.",
    overview:
      "With Microfinance at Berkeley I managed a data-strategy project for a local home bakery, using its own sales data to recommend smarter promotions and inventory decisions.",
    goals: [
      "Turn raw POS data into actionable decisions",
      "Find achievable levers for revenue growth",
      "Leave the owner with a system she could run herself",
    ],
    contributions: [
      "Synthesized Square and Shopify transaction data to surface seasonal purchasing patterns and customer behavior trends across farmers market, B2B, and online channels",
      "Designed a multi-channel promotions strategy and data-informed inventory recommendations",
      "Delivered 6 weekly strategic deliverables, managing the project end to end",
    ],
    results: [
      "Projected +15% revenue uplift",
      "Data-driven promotion calendar and inventory playbook",
      "Recommendations aligned production with peak sales windows",
    ],
    tools: ["Square", "Shopify", "Data Analysis", "Project Management", "Excel"],
  },
  {
    slug: "kali",
    num: "07",
    title: "Kali: Agent Infra",
    shortTitle: "Kali Agent Infra",
    role: "Founding Engineer",
    year: "2026",
    thumbBg:
      "linear-gradient(180deg, rgba(42,19,32,0.88) 0%, rgba(42,19,32,0.5) 100%), url('/work/kali/hero.jpg')",
    accent: "#C98FB0",
    industry: "Agent infra",
    spine: "Agent infra / unified SaaS / cited retrieval",
    award: "HackDavis 2026: Best Use of Solana",
    externalUrl: "https://kalilabs.ai/",
    oneLiner:
      "One chat unifies 11+ SaaS tools into cited, plain-English answers, live with a $2.4M nonprofit.",
    overview:
      "Kali is the agentic context layer for nonprofits, one chat that sits across Salesforce, Bloomerang, QuickBooks, Zoom, and 11+ disconnected tools, answering in plain English with every claim cited back to its source record. It's live in production with Rivertown Community Foundation, a $2.4M-budget nonprofit, and won Best Use of Solana at HackDavis 2026.",
    quote: {
      text: "In four minutes I knew which 14 lapsed donors to call this week, and why each one. Used to take my dev director half a day.",
      author: "Sarah Chen, Executive Director, Rivertown Community Foundation",
    },
    goals: [
      "Give lean nonprofit teams one place to ask questions across 11+ disconnected systems",
      "Make every answer cited back to its source record, no black boxes",
      "Let agents take real action (drafts, payments) with a human approval step before anything ships",
    ],
    contributions: [
      "Built 11 first-class connectors (Salesforce NPSP, Bloomerang, M365, SharePoint, QuickBooks, Instrumentl, Zoom, Power Automate, Power BI, KnowBe4, Solana), each exposing typed query functions to the agent",
      "Designed cross-tool entity resolution that unifies the same donor across Bloomerang + Salesforce + M365 + Zoom into one canonical Kali ID, so the agent can chain lookups without a manual join",
      "Shipped inline citation chains, every claim resolves to a clickable chip that opens the source record",
      "Built onchain rails: x402 agent-donation endpoints (USDC over HTTP 402) and per-tenant Cause Coins (SPL Token-2022) on Solana",
      "Implemented a persistent chat + immutable audit log (Postgres RLS) recording every tool call and onchain settlement",
    ],
    features: [
      {
        title: "Eleven first-class connectors",
        text: "Each tool exposes typed query functions to the agent plus a real OAuth integration. Cross-tool entity resolution unifies the same donor across Bloomerang + Salesforce + M365 + Zoom into one canonical Kali ID, so the agent can chain getDonor → getRelatedAccount → searchEmail without us writing a join.",
      },
      {
        title: "Citation chains",
        text: "Every claim Kali makes is marked [N] inline. The frontend resolves each [N] to a clickable chip that opens the source record. No black boxes.",
      },
      {
        title: "Onchain rails",
        text: "x402 agent donations: every tenant gets a public HTTP 402 endpoint, any AI agent can pay USDC over the wire to a nonprofit, receipts auto-issued. Cause Coins: a per-tenant SPL Token-2022 mint with onchain metadata, 1B supply to the treasury.",
      },
      {
        title: "Persistent chat + audit log",
        text: "Every conversation, every tool call, every onchain settlement recorded immutably with row-level security in Postgres. Open any thread from a month ago and the source-pulse + receipts replay exactly as they happened.",
      },
    ],
    liveStats: [
      { label: "People resolved", value: "863" },
      { label: "Donations indexed", value: "2,437" },
      { label: "Lifetime giving tracked", value: "$5.2M" },
      { label: "Active grants in pipeline", value: "38" },
      { label: "Zoom meetings + transcripts indexed", value: "60 + 30" },
      { label: "USDC disbursed on Solana (devnet)", value: "$303K" },
      { label: "Tools across 11 connectors", value: "70+" },
      { label: "Avg query latency", value: "2.6s" },
    ],
    stackNote:
      "Next.js 16 (Turbopack) + TypeScript strict + Tailwind 4 on the frontend. Claude Sonnet 4.6 with parallel tool-use and prompt caching (~90% input-token savings) across 70+ tools. Supabase (Postgres + Auth + RLS) for persistence. OpenAI text-embedding-3-small over ~7K record chunks per tenant, hybrid retrieval with top-k=20 reranking. Solana web3.js + SPL Token-2022 with x402 facilitators (PayAI / Coinbase CDP) and Privy delegated signing for tenant treasuries. SOC 2 Type 1 in progress, IRS 990 + AML/sanctions screening on every settlement.",
    team: ["Nicole Wang", "Frank Lin", "Stephen Hung", "Matthew Kim"],
    results: [
      "Live in production with Rivertown Community Foundation ($2.4M budget, 6 active programs)",
      "863 people resolved across systems · 2,437 donations indexed · $5.2M lifetime giving tracked",
      "Best Use of Solana, HackDavis 2026",
    ],
    tools: [
      "Next.js 16",
      "TypeScript",
      "Claude Sonnet 4.6",
      "Supabase",
      "Solana",
      "Tailwind 4",
      "OpenAI Embeddings",
    ],
    gallery: [
      "/work/kali/hero.jpg",
      "/work/kali/cute-backend.jpg",
      "/work/kali/donor-reactivation.jpg",
      "/work/kali/grant-research.jpg",
      "/work/kali/onchain.jpg",
      "/work/kali/hackdavis.jpg",
    ],
  },
];
