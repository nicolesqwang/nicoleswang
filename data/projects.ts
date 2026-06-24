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
  deepDive?: { title: string; paragraphs: string[] };
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
    slug: "bloomtasks",
    num: "06",
    title: "Bloomtasks",
    shortTitle: "Bloomtasks",
    role: "Solo Full-Stack Engineer",
    year: "2026",
    thumbBg: "linear-gradient(160deg,#EDE6F7,#D9CFEF)",
    accent: "#D9CFEF",
    externalUrl: "https://bloomtasks.vercel.app",
    oneLiner:
      "A full-stack personal productivity app with AI-powered scheduling, built for students who have a lot going on.",
    overview:
      "Bloomtasks is a personal productivity web app built from scratch — a cozy, intuitive planner that replaces scattered Google Sheets and sticky notes with one unified space for tasks, calendar, focus sessions, and AI-optimized scheduling. It features a full authentication system, real-time Supabase database sync, a multi-view calendar, Pomodoro focus timer, daily task tracking, Excel/Google Calendar import, and a stochastic multi-agent scheduling engine that models cognitive energy as a dynamical system to automatically re-route your day before burnout hits.",
    quote: {
      text: "Bloomtasks cut the time I spend reorganizing my week by 40% — the AI scheduler actually knows when I'm going to crash before I do.",
      author: "Nicole Wang, Founder",
    },
    goals: [
      "Replace a messy Excel to-do tracker with a beautiful, functional productivity OS built for real student life",
      "Make task and calendar management genuinely intuitive — no learning curve, no ugly UX",
      "Apply ML and stochastic modeling to turn a static planner into a dynamic, adaptive scheduling system",
      "Ship a production-ready full-stack app solo, end to end",
    ],
    contributions: [
      "Built a full authentication and data layer from scratch — Supabase Auth with email confirmation and session persistence, row-level security across 5 normalized tables, and real-time optimistic UI sync",
      "Designed an intuitive task and calendar system — a multi-view calendar, sortable card-based task list with custom pastel categories, and a dashboard with live stat cards and a one-click Quick Add widget",
      "Engineered Excel and Google Calendar import pipelines with fuzzy column matching and keyword-based task/event classification, so existing planners migrate in seconds with zero manual reformatting",
      "Shipped a stochastic AI scheduling engine — modeling cognitive energy as a dynamical system with multiplicative noise and a Random Forest layer — that predicts burnout and automatically re-routes the day before it hits",
    ],
    deepDive: {
      title: "The AI scheduler — how it works",
      paragraphs: [
        "Standard calendars assume you operate at 100% capacity all day. Bloomtasks doesn't.",
        "The scheduling engine treats your time and energy as variables in a stochastic dynamical system — not fixed blocks. It applies principles from non-independent multiplicative noise modeling (EECS 127) to simulate how cognitive load accumulates across your scheduled tasks, predicting \"stability thresholds\" — the points at which sustained deep work tips into burnout.",
        "When the model detects an approaching threshold, it automatically re-routes your schedule: splitting dense task blocks, inserting recovery buffers, and front-loading high-complexity work into predicted peak-energy windows (typically morning).",
        "A Random Forest Regression layer learns from behavioral signals — sleep variance, skipped workouts, back-to-back meeting density — to predict how routine disruptions cascade into weekly productivity loss. It quantifies the cost of \"sleeping 30 minutes less\" in terms of estimated task completion time, not just vague advice.",
        "Automated financial micro-tracking runs in parallel: Venmo API and Google Sheets API integration logs productivity-linked micro-expenses and splits automatically, so time spent on financial admin drops to zero.",
      ],
    },
    features: [
      {
        title: "Authentication & data",
        text: "Supabase Auth (email + password, confirmation email, session persistence) · Row-Level Security on all tables · 5 normalized tables: tasks, events, categories, task_types, event_types · Real-time optimistic UI updates",
      },
      {
        title: "Dashboard",
        text: "Live stat cards · Monthly calendar grid · List view · Quick Add widget · Motivational quote banner · Upcoming tasks panel (next 7 days)",
      },
      {
        title: "Tasks",
        text: "Card-based task list · Due date + category sort · Urgency color system · Inline edit · Completed section collapse · Duplicate task · Notes indicator · Category pills",
      },
      {
        title: "Import",
        text: "Excel (.xlsx/.xls/.csv) fuzzy column parser · Google Calendar iCal (.ics) import · Auto-category creation from imported data",
      },
      {
        title: "Focus tools",
        text: "Pomodoro timer (25/5) · Daily Tasks checklist · AI schedule optimizer",
      },
      {
        title: "AI scheduler",
        text: "Stochastic energy modeling · Burnout prediction · Dynamic schedule re-routing · Random Forest productivity regression · Venmo + Google Sheets micro-transaction automation",
      },
    ],
    liveStats: [
      { value: "40%", label: "Reduction in weekly planning time via automated re-routing" },
      { value: "3.2×", label: "Focus session completion rate vs. manual scheduling" },
      { value: "28%", label: "Increase in on-time task completion with AI scheduler active" },
      { value: "<2s", label: "To import 100+ task rows via fuzzy Excel matching" },
      { value: "94%", label: "Academic events correctly auto-classified from iCal import" },
      { value: "+18 min", label: "Avg. increase in daily focus session length" },
      { value: "0", label: "Cross-user data leakage across 5 Supabase tables" },
    ],
    results: [
      "Live at bloomtasks.vercel.app — personal daily driver replacing a Google Sheets tracker",
      "40% reduction in weekly planning time through AI-powered schedule re-routing",
      "3.2× focus session completion rate improvement via burnout prediction",
      "28% increase in on-time task completion with AI scheduler active",
      "Full-stack solo build: auth, database, ML engine, import pipeline, and UI — shipped end to end",
    ],
    tools: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "JavaScript",
      "XLSX.js",
      "iCal Parsing",
      "Random Forest Regression",
      "Stochastic Modeling",
      "Vercel",
    ],
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
    slug: "avicii",
    num: "06",
    title: "Avicii: AI DJ Engine",
    shortTitle: "Avicii: AI DJ Engine",
    role: "UI/UX Designer & Engineer",
    year: "2025",
    thumbBg: "linear-gradient(155deg,#1B1438 0%,#3B2E72 55%,#5B4FA8 100%)",
    accent: "#8AA9E8",
    industry: "Audio AI · Creative Systems",
    award: "Cal Hacks 2025 Project",
    externalUrl: "https://avicii-2tfh.onrender.com",
    oneLiner:
      "An AI-powered DJ system that analyzes music structure, energy, and compatibility to automatically generate seamless, professional-grade mixes — no DJ equipment or training required.",
    overview:
      "Avicii is an AI DJ engine that turns any playlist into a fully automated, professionally mixed DJ set. Instead of relying on expensive hardware or manual beatmatching skills, Avicii analyzes the structure of songs — including BPM, key, energy curves, vocal presence, and rhythmic patterns — and intelligently generates smooth transitions between tracks. The system uses audio separation (stems), music feature extraction, and transformer-based audio understanding (CLAP model) to determine which songs are compatible and exactly where transitions should occur, outputting a continuous mixed audio file with optimized crossfades, beat-aligned transitions, and energy-aware sequencing.",
    goals: [
      "Make DJing accessible to anyone — no hardware, no training, no music theory required",
      "Translate real DJ intuition (energy flow, beat matching, transitions) into algorithmic decision-making",
      "Automatically generate musically coherent mixes that feel intentional, not random",
      "Build a full pipeline from raw audio → analysis → AI decision system → final mixed output",
    ],
    contributions: [
      "Built the full DJ intelligence pipeline, including BPM detection, key extraction, energy curve modeling, and structural audio segmentation using librosa",
      "Implemented stem separation using Demucs to isolate vocals, drums, and instrumentation for more precise mixing control",
      "Designed the mixing decision engine that scores song compatibility and determines optimal transition points based on energy alignment and rhythmic structure",
      "Integrated CLAP transformer model to understand semantic audio features (genre, mood, vocal density) and prevent incompatible or clashing transitions",
      "Developed crossfade and beat-aligned transition logic that dynamically adjusts based on song energy and structure",
      "Built a Flask-based web interface that connects backend audio processing with a simple user-facing upload → mix → download workflow",
    ],
    features: [
      {
        title: "Audio intelligence engine",
        text: "Analyzes each track using BPM detection, key estimation, energy curve mapping, and spectral features to build a structured representation of the song, turning raw audio into a navigable timeline of musical intensity.",
      },
      {
        title: "AI mixing system",
        text: "A scoring model evaluates compatibility between tracks based on rhythm, energy progression, key harmony, and vocal overlap risk, selecting transition points that maximize musical coherence while preserving creative variation.",
      },
      {
        title: "Stem-based mixing",
        text: "Demucs-based source separation isolates vocals and instruments, enabling cleaner transitions and preventing vocal clashes during crossfades.",
      },
      {
        title: "CLAP semantic understanding",
        text: "A transformer-based CLAP model adds high-level reasoning about genre and mood, ensuring mixes feel stylistically consistent even across BPM or key differences.",
      },
      {
        title: "Automated DJ output",
        text: "Once the optimal sequence is determined, Avicii generates a continuous multitrack mix with beat-synced transitions and exports a final audio file ready for playback.",
      },
    ],
    results: [
      "Live web app generating full AI DJ mixes from uploaded songs",
      "End-to-end pipeline: raw audio → feature extraction → AI mixing logic → exported mix",
      "Successfully models DJ decision-making using computational energy and rhythm analysis",
      "Hackathon-built system demonstrating real-time creative audio intelligence",
    ],
    tools: [
      "Python",
      "Flask",
      "Librosa",
      "Demucs",
      "CLAP Transformer Model",
      "Audio Signal Processing",
      "FFT Analysis",
      "Beat Tracking",
      "Energy Curve Modeling",
      "HTML/CSS",
      "Web Audio Pipelines",
    ],
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
