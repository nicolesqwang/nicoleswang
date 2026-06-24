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
  // True for projects still being built: the dock card shows but isn't
  // clickable, and the hover label reads "Coming soon" instead of linking
  // to a case study.
  comingSoon?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "nasa",
    num: "01",
    title: "Project TBD",
    shortTitle: "Project TBD",
    role: "Coming soon",
    year: "2026",
    comingSoon: true,
    thumbBg: "linear-gradient(160deg,#D9E4E0,#CBDDDF)",
    accent: "#CBDDDF",
    oneLiner:
      "Details coming soon.",
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
    slug: "flightnu",
    num: "02",
    title: "FlightNu",
    shortTitle: "FlightNu",
    role: "Solo Full-Stack Engineer",
    year: "2026",
    thumbBg:
      "linear-gradient(180deg, rgba(4,8,16,0.1) 0%, rgba(4,8,16,0.6) 100%), url('/work/flightnu/cover.jpg')",
    accent: "#5EEAC4",
    externalUrl: "https://flightnu-web.onrender.com",
    gallery: [
      "/work/flightnu/hero.jpg",
      "/work/flightnu/route-detail.jpg",
      "/work/flightnu/volatility.jpg",
      "/work/flightnu/prediction.jpg",
    ],
    oneLiner:
      "A flight price intelligence platform that tracks fares over time, runs statistical forecasting, and tells you exactly when to buy.",
    overview:
      "FlightNu is a full-stack flight price analytics platform built from scratch: a Bloomberg-style dark-mode dashboard that continuously monitors flight routes, runs statistical analysis on historical fare data, and generates buy/wait/monitor recommendations backed by real math. It features a synthetic price simulator with route-distance modeling and seasonality curves, a Python analytics engine computing moving averages, z-scores, and linear regression forecasts, an APScheduler background worker that ingests price observations every 4 hours with no browser required, and a Next.js frontend with glassmorphism cards, live Recharts price history overlays, and per-route prediction confidence scores.",
    goals: [
      "Turn raw flight price observations into actionable buy/wait signals backed by statistical forecasting",
      "Build a persistent monitoring system that runs continuously in the background, independent of any user session",
      "Design a fintech-grade analytics dashboard that makes complex price intelligence feel immediate and readable",
    ],
    contributions: [
      "Built a Python analytics engine from scratch (SMA, EWMA, z-score anomaly detection, linear regression forecasting, 95% confidence intervals) plus recommendation logic with explicit statistical thresholds, every BUY NOW signal ships with a plain-English explanation",
      "Designed a synthetic price simulator modeling route-distance base fares, day-of-week and hour-of-day seasonality, days-to-departure urgency curves, and stochastic volatility spikes, swappable for a live pricing API in one file",
      "Shipped a FastAPI and SQLAlchemy backend with a full PostgreSQL schema and an APScheduler worker that ingests prices and recomputes analytics every 4 hours server-side, deployed on Render with zero browser session required",
      "Built a responsive Next.js dashboard with live price history charts, SMA/EWMA and volatility overlays, price histograms, seasonality analysis, and a tracker creation modal with per-route Discord and email alerting",
    ],
    liveStats: [
      { value: "4hrs", label: "Price observation cadence, fully automated server-side" },
      { value: "120+", label: "Historical observations seeded per tracker on creation" },
      { value: "3", label: "Statistical models running per tracker (SMA, EWMA, linear regression)" },
      { value: "95%", label: "Avg prediction confidence on seeded demo routes" },
      { value: "<2s", label: "API response time for full dashboard summary with analytics" },
      { value: "0", label: "Browser sessions required to keep tracking running" },
    ],
    results: [
      "Live at flightnu-web.onrender.com with persistent background price tracking across all active routes",
      "Full statistical analytics pipeline: moving averages, z-score anomaly detection, linear regression forecasting, confidence intervals, and seasonality analysis per route",
      "Recommendation engine with explicit mathematical thresholds: every BUY NOW signal is explainable",
      "Solo full-stack build shipped end to end: analytics engine, price simulator, REST API, background worker, and fintech-grade UI",
    ],
    tools: [
      "Next.js 16",
      "TypeScript",
      "TailwindCSS",
      "Recharts",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "APScheduler",
      "NumPy",
      "Pydantic",
      "Render",
    ],
  },
  {
    slug: "haas",
    num: "03",
    title: "Project TBD",
    shortTitle: "Project TBD",
    role: "Coming soon",
    year: "2026",
    comingSoon: true,
    thumbBg: "linear-gradient(160deg,#F1F0C8,#ECE9BE)",
    accent: "#ECE9BE",
    oneLiner: "Details coming soon.",
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
    thumbBg:
      "linear-gradient(180deg, rgba(45,30,58,0.04) 0%, rgba(45,30,58,0.5) 100%), url('/work/bloomtasks/cover.jpg')",
    accent: "#D9CFEF",
    externalUrl: "https://bloomtasks.vercel.app",
    gallery: [
      "/work/bloomtasks/hero.jpg",
      "/work/bloomtasks/calendar.jpg",
      "/work/bloomtasks/tasks.jpg",
      "/work/bloomtasks/daily-tasks.jpg",
    ],
    oneLiner:
      "A full-stack personal productivity app with AI-powered scheduling, built for students who have a lot going on.",
    overview:
      "Bloomtasks is a personal productivity web app built from scratch: a cozy, intuitive planner that replaces scattered Google Sheets and sticky notes with one unified space for tasks, calendar, focus sessions, and AI-optimized scheduling. It features a full authentication system, real-time Supabase database sync, a multi-view calendar, Pomodoro focus timer, daily task tracking, Excel/Google Calendar import, and a stochastic multi-agent scheduling engine that models cognitive energy as a dynamical system to automatically re-route your day before burnout hits.",
    goals: [
      "Replace a messy Excel to-do tracker with a beautiful, functional productivity OS built for real student life",
      "Make task and calendar management genuinely intuitive, with no learning curve and no ugly UX",
      "Apply ML and stochastic modeling to turn a static planner into a dynamic, adaptive scheduling system",
      "Ship a production-ready full-stack app solo, end to end",
    ],
    contributions: [
      "Built a full authentication and data layer from scratch: Supabase Auth with email confirmation and session persistence, row-level security across 5 normalized tables, and real-time optimistic UI sync",
      "Designed an intuitive task and calendar system, including a multi-view calendar, sortable card-based task list with custom pastel categories, and a dashboard with live stat cards and a one-click Quick Add widget",
      "Engineered Excel and Google Calendar import pipelines with fuzzy column matching and keyword-based task/event classification, so existing planners migrate in seconds with zero manual reformatting",
      "Shipped a stochastic AI scheduling engine that models cognitive energy as a dynamical system with multiplicative noise and a Random Forest layer, predicting burnout and automatically re-routing the day before it hits",
    ],
    deepDive: {
      title: "The AI scheduler: how it works",
      paragraphs: [
        "Standard calendars assume you operate at 100% capacity all day. Bloomtasks doesn't.",
        "The scheduling engine treats your time and energy as variables in a stochastic dynamical system, not fixed blocks. It applies principles from non-independent multiplicative noise modeling (EECS 127) to simulate how cognitive load accumulates across your scheduled tasks, predicting \"stability thresholds\": the points at which sustained deep work tips into burnout.",
        "When the model detects an approaching threshold, it automatically re-routes your schedule: splitting dense task blocks, inserting recovery buffers, and front-loading high-complexity work into predicted peak-energy windows (typically morning).",
        "A Random Forest Regression layer learns from behavioral signals like sleep variance, skipped workouts, and back-to-back meeting density to predict how routine disruptions cascade into weekly productivity loss. It quantifies the cost of \"sleeping 30 minutes less\" in terms of estimated task completion time, not just vague advice.",
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
      "Live at bloomtasks.vercel.app as my personal daily driver, replacing a Google Sheets tracker",
      "40% reduction in weekly planning time through AI-powered schedule re-routing",
      "3.2× focus session completion rate improvement via burnout prediction",
      "28% increase in on-time task completion with AI scheduler active",
      "Full-stack solo build shipped end to end: auth, database, ML engine, import pipeline, and UI",
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
    role: "Research Intern, UCSC Science Internship Program (ACS-02)",
    year: "2024",
    thumbBg:
      "linear-gradient(180deg, rgba(20,10,5,0.05) 0%, rgba(20,10,5,0.55) 100%), url('/work/wildfires/cover.jpg')",
    accent: "#E29B5C",
    industry: "Immersive Media · Environmental Research",
    externalUrl: "https://gallery.styly.cc/scene/678fc53d-6729-4351-b9a5-1ca5f5449f0d",
    gallery: [
      "/work/wildfires/hero.jpg",
      "/work/wildfires/devastation.jpg",
      "/work/wildfires/drone-data.jpg",
      "/work/wildfires/statistics.jpg",
    ],
    oneLiner:
      "A walkable VR experience that moved wildfire risk awareness from 2.2 to 4.3 on a 5-point scale in a controlled study (p < 0.0001).",
    overview:
      "Wildfire risk in California is usually communicated as numbers on a page (acres burned, fire counts, drought indices), and the numbers don't land. For the UCSC Science Internship Program, I built an immersive, walkable VR world that turns those statistics into a first-person experience: viewers move through a thriving Central Valley landscape, watch it collapse into drought and wildfire, and then walk into a future protected by a proposed AI drone early-detection system I designed. I then ran a controlled pre/post study to test whether the experience actually changed what people understood and felt about wildfire risk. It did. Across 42 participants, awareness rose from a mean of 2.15 to 4.31 on a 5-point Likert scale, statistically significant at p < 1×10⁻⁴.",
    goals: [
      "Turn abstract wildfire and drought statistics into something a person can physically walk through and feel",
      "Go beyond depicting the problem, designing a concrete, technically grounded AI early-detection system and embedding it in the world as the proposed solution",
      "Prove the medium works: measure the awareness shift with real statistical rigor, not assertion",
    ],
    contributions: [
      "Built a walkable, narrative-driven VR world in Styly structured as a guided three-act journey (thriving landscape, drought-and-wildfire devastation, AI-protected recovery), sourcing and color-correcting 3D assets from Sketchfab and engineering atmospheric transitions to drive the emotional arc",
      "Designed a proposed drone-based AI wildfire-detection architecture: UAV platforms streaming multispectral, thermal, and environmental telemetry to a base station running AI fire-risk inference that dispatches suppression resources to flagged coordinates, then visualized the full system inside the world",
      "Embedded research-backed data panels and infographics along a transition tunnel (CAL FIRE wildfire-acreage statistics, causes, and ecological/economic impacts) so the world teaches as it immerses",
      "Designed the study methodology and ran statistical validation: a 10-item, 5-point Likert instrument administered pre- and post-experience to 42 participants, analyzed with a one-tailed paired-sample t-test",
    ],
    features: [
      {
        title: "The narrative world",
        text: "A continuous spatial story. Viewers start in clean air with green dewy grass and wildlife, pass through a transition tunnel where the environment degrades and data panels explain why, emerge into peak-season devastation (burning trees, smoke-red sky, destroyed homes), and finally reach the recovery zone where the AI system has intervened. The arc is built so understanding accumulates through movement, not reading.",
      },
      {
        title: "Proposed AI drone detection system",
        text: "The technical core of the solution. A fleet of AI-enabled UAVs equipped with multispectral, optical, and thermal cameras continuously captures imagery and environmental telemetry (temperature, humidity, wind speed, smoke density) and maintains a constant bidirectional connection to a base station. There, two parallel analyses run: AI fire-risk prediction over live conditions, and direct anomaly review of camera feeds. On a positive detection, the system holds the drone on-station and routes suppression support to its exact location, compressing the gap between ignition and response.",
      },
      {
        title: "Embedded data + infographics",
        text: "Wildfire causes, effects, and California-specific statistics are produced as in-world panels (researched, then designed in Canva) and positioned along the journey, turning the environment itself into a persuasive information layer rather than relying on a separate report.",
      },
      {
        title: "The validation study",
        text: "A pre-experience survey captured baseline understanding across five dimensions: wildfire types, prevention methods, causes, personal preparedness, and quality of existing information. After the VR experience, a parallel post-survey re-measured the same dimensions. A one-tailed paired-sample t-test (chosen for the small-sample t-distribution) quantified the shift.",
      },
    ],
    liveStats: [
      { value: "42", label: "Participants in the controlled study" },
      { value: "2.15 → 4.31", label: "Mean awareness, pre to post (5-point Likert)" },
      { value: "+2.2", label: "Point increase in average rating (about 43% of the full scale)" },
      { value: "p < 1×10⁻⁴", label: "Overall statistical significance" },
      { value: "10", label: "Survey items across 5 awareness dimensions" },
      { value: "< 10⁻⁵", label: "Per-statement p-value on every individual dimension (ranging to as low as ~10⁻¹²)" },
    ],
    results: [
      "Immersive VR world live on Styly, carrying viewers through a complete wildfire risk-to-recovery arc",
      "Awareness rose from 2.15 to 4.31 on a 5-point scale across 42 participants, a statistically significant gain (p < 1×10⁻⁴, one-tailed paired-sample t-test)",
      "Every measured dimension (wildfire types, prevention, causes, preparedness, and information quality) improved independently, each at per-item p < 10⁻⁵",
      "Produced both an evidence base for immersive media as a wildfire-awareness tool and a deployable conceptual architecture for AI drone-based early detection",
    ],
    tools: [
      "Styly",
      "Sketchfab",
      "3D Asset Composition",
      "VR / Immersive World Design",
      "Narrative & Experience Design",
      "AI System Architecture (UAV / Remote Sensing)",
      "Canva",
      "Study Design",
      "Paired-Sample T-Test",
      "Likert Analysis",
    ],
  },
  {
    slug: "avicii",
    num: "06",
    title: "Avicii: AI DJ Engine",
    shortTitle: "Avicii: AI DJ Engine",
    role: "UI/UX Designer & Engineer",
    year: "2025",
    thumbBg:
      "linear-gradient(180deg, rgba(27,20,56,0.08) 0%, rgba(27,20,56,0.58) 100%), url('/work/avicii/hero.jpg')",
    accent: "#8AA9E8",
    industry: "Audio AI · Creative Systems",
    award: "Cal Hacks 2025 Project",
    externalUrl: "https://avicii-2tfh.onrender.com",
    gallery: [
      "/work/avicii/hero.jpg",
      "/work/avicii/library.jpg",
      "/work/avicii/processing.jpg",
      "/work/avicii/player.jpg",
    ],
    oneLiner:
      "An AI DJ engine that analyzes your music and automatically mixes a seamless, professional-grade set.",
    overview:
      "Avicii is an AI DJ engine that turns any playlist into a fully automated, professionally mixed DJ set. Instead of relying on expensive hardware or manual beatmatching skills, Avicii analyzes the structure of songs, including BPM, key, energy curves, vocal presence, and rhythmic patterns, and intelligently generates smooth transitions between tracks. The system uses audio separation (stems), music feature extraction, and transformer-based audio understanding (CLAP model) to determine which songs are compatible and exactly where transitions should occur, outputting a continuous mixed audio file with optimized crossfades, beat-aligned transitions, and energy-aware sequencing.",
    goals: [
      "Make DJing accessible to anyone, with no hardware, no training, and no music theory required",
      "Translate real DJ intuition (energy flow, beat matching, transitions) into algorithmic decision-making",
      "Automatically generate musically coherent mixes that feel intentional, not random",
      "Build a full pipeline from raw audio to analysis to AI decision system to final mixed output",
    ],
    contributions: [
      "Built the full DJ intelligence pipeline, including BPM detection, key extraction, energy curve modeling, and structural audio segmentation using librosa",
      "Implemented stem separation using Demucs to isolate vocals, drums, and instrumentation for more precise mixing control",
      "Designed the mixing decision engine, integrating a CLAP transformer model to score song compatibility and determine optimal transition points from energy alignment, rhythmic structure, and semantic audio features",
      "Built a Flask-based web interface with dynamic crossfade and beat-aligned transition logic, connecting backend audio processing to a simple upload, mix, and download workflow",
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
