/**
 * All site content lives here. Edit this file; components just render it.
 * Anything marked `CONFIRM` is a draft written from your original template.
 * Check it for accuracy before you publish.
 */

export type Link = { label: string; href: string };

export type ImageSlot = {
  /** File inside /public/images */
  file: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  kind: string;
  /** Homepage preview layout (see CaseStudyPreview) */
  previewLayout: "wide" | "split" | "inset";
  summary: string;
  problem: string[];
  built: string[];
  role: string;
  decisions: { title: string; body: string }[];
  stack: string[];
  links: Link[];
  hero: ImageSlot;
  screens: ImageSlot[];
};

export type Station = {
  freq: number;
  name: string;
  description: string;
  stack: string;
  home?: boolean;
  /** If set, a "Read case study" link is added automatically */
  slug?: string;
  links: Link[];
};

export const site = {
  name: "Fowosere Ademola Abraham",
  shortName: "Ademola Abraham",
  jobTitle: "Full-stack and Mobile Software Engineer",
  // TODO: replace with your production domain
  url: "https://example.com",
  email: "zionnaire2018@gmail.com",
  location: "Abuja, Nigeria",
  description:
    "Full-stack and mobile software engineer in Abuja building health tech for Nigeria, with AI integrated where it helps.",
  titleTemplate: "%s | Ademola Abraham",
  defaultTitle: "Ademola Abraham: full-stack and mobile software engineer, AI integration",
  company: "Zionnaire Concepts",
};

export const nav: Link[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

/** Items in the slide-out menu, each tuned to a frequency. */
export const menu = {
  title: "Tune in",
  caseStudies: "Case studies",
  items: [
    { label: "Home", href: "/", freq: "88.0" },
    { label: "Work", href: "/#work", freq: "94.1" },
    { label: "About", href: "/#about", freq: "102.5" },
    { label: "Contact", href: "/#contact", freq: "107.1" },
  ],
};

export const hero = {
  greeting: "Hello!",
  /** The role shown under "I'm Ademola,", one string per line. */
  roleLines: ["Full-stack and Mobile", "Software Engineer"],
  highlight: "Ademola",
  stats: [
    { title: "4+ years", note: "Experience" },
    { title: "Abuja", note: "Nigeria" },
    { title: "Health tech", note: "and AI integration" },
  ],
  status: "Open to contract, collaboration and full-time roles",
  headline: "I build web and mobile products, and the AI that runs inside them.",
  sub: "Full-stack and mobile software engineer in Abuja, Nigeria. Most of my work is health tech: reproductive health, vaccine misinformation surveillance, and the platforms that health organisations run on.",
  primary: { label: "View work", href: "/#work" },
  secondary: { label: "Email me", href: `mailto:${site.email}` },
};

export const dialCopy = {
  title: "Tune through my work",
  hint: "Drag the dial, use the arrow keys, or pick a frequency.",
  caption: "On air from Abuja",
  min: 88,
  max: 108,
};

export const stations: Station[] = [
  {
    freq: 88.7,
    slug: "planamwell",
    name: "PlanAmWell",
    description:
      "Reproductive health platform with a multilingual AI assistant, video consultations, health records and a health store.",
    stack: "Expo / React Native · Next.js · Express · MongoDB · Groq",
    links: [
      { label: "Visit site", href: "https://plan-am-well-web.onrender.com" },
      { label: "Code", href: "https://github.com/Zionnaire/PlanAmWell" },
    ],
  },
  {
    freq: 91.3,
    slug: "immuniwatch",
    name: "ImmuniWatch Nigeria",
    description:
      "Spots vaccine misinformation across five Nigerian languages and helps health teams respond with facts.",
    stack: "React · Express · MongoDB · Kafka · Groq",
    links: [
      { label: "Visit site", href: "https://immuniwatch-frontend.onrender.com/" },
      { label: "Code", href: "https://github.com/Zionnaire/ImmuniWatch" },
    ],
  },
  {
    freq: 94.1,
    slug: "efims",
    name: "EFIMS",
    description:
      "Fraud and financial crime case management for banks, with database-level tenant isolation and human-approved actions.",
    stack: "NestJS · Next.js · PostgreSQL · Prisma",
    links: [{ label: "Code", href: "https://github.com/Zionnaire/FMS" }],
  },
  {
    freq: 97.5,
    name: "AI in Health Summit 2026",
    description:
      "AHFID's summit platform: registration, Paystack payments, admin CMS and a passwordless delegate portal.",
    stack: "React · Express · MongoDB · Docker · CI",
    links: [
      { label: "Visit site", href: "https://aiinhealthsummit.org" },
      { label: "Code", href: "https://github.com/Zionnaire/aiinhealthsummit" },
    ],
  },
  {
    freq: 100.3,
    name: "Pact",
    description:
      "A private space for couples to say what's hard to say, revealed only when both partners agree.",
    stack: "Expo / React Native · Express · Groq · Paystack",
    links: [{ label: "Code", href: "https://github.com/Zionnaire/Pact" }],
  },
  {
    freq: 102.5,
    home: true,
    name: "Where it started",
    description:
      "Before I wrote code, I was on air at Radio TNT 102.5 FM. Broadcasting taught me to make complicated things clear, and I still build that way.",
    stack: "Radio TNT 102.5 FM",
    links: [{ label: "Read more about me", href: "/#about" }],
  },
  {
    freq: 104.9,
    name: "Aura Forex",
    description:
      "Trading intelligence: a rule-based signal engine, RAG knowledge base, backtesting and human-approved MT5 execution.",
    stack: "Next.js · Express · WebSockets · Groq",
    links: [{ label: "Code", href: "https://github.com/Zionnaire/FX_backend" }],
  },
  {
    freq: 107.1,
    name: "TheArk",
    description:
      "A church community app with feeds, real-time group chat, and voice and video calls.",
    stack: "Node.js · Express · MongoDB · Socket.IO",
    links: [{ label: "Code", href: "https://github.com/Zionnaire/TheArk" }],
  },
];

export const workCopy = {
  heading: "Selected work",
  intro:
    "Three products I built end to end. Each has a short write-up covering the problem, my role and the decisions that mattered.",
  readMore: "Read the case study",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "planamwell",
    name: "PlanAmWell",
    kind: "Reproductive health platform: mobile, web and admin",
    previewLayout: "wide",
    summary:
      "A health companion for Nigerians: ask questions in your own language, see a doctor by video, and get the products you need.",
    // CONFIRM: problem statement is drafted, not taken from your template
    problem: [
      "Reliable reproductive health information is hard to find in the language people speak at home, and seeing a doctor often means a long trip and a long wait.",
      "PlanAmWell brings questions, consultations, health records and products into one app that works for people who would rather talk than type.",
    ],
    built: [
      "“Ask AmWell”, an assistant that answers in English, Pidgin, Yoruba, Hausa and Igbo, with voice input and plain-language explanations of lab results.",
      "Appointments and WebRTC video calls that ring even when the app is closed.",
      "Health records behind a biometric check, medication reminders, and a store with Paystack and Flutterwave checkout.",
      "A web app and an admin console on the same API as the mobile app.",
    ],
    // CONFIRM: exact scope of your role
    role: "Full-stack and mobile engineer. I built the Expo mobile app, the Next.js web app and admin, and the Express API, and integrated the AI assistant.",
    // CONFIRM: reasoning below is drafted from the feature list
    decisions: [
      {
        title: "Voice and five languages from the start",
        body: "Many users prefer speaking to typing, and not everyone is comfortable in English. Voice input and multilingual answers are core to the assistant, not a later add-on.",
      },
      {
        title: "Calls that ring when the app is closed",
        body: "A consultation only works if the patient can be reached. Push notifications wake the device and hand the call to WebRTC, so a doctor's call behaves like a phone call.",
      },
      {
        title: "Biometric check in front of health records",
        body: "Health data is sensitive and phones are shared or lost. Records open only after a fingerprint or face check on the device.",
      },
    ],
    stack: [
      "Expo / React Native",
      "Next.js",
      "Express",
      "MongoDB",
      "Groq",
      "Firebase",
      "WebRTC",
      "Paystack",
      "Flutterwave",
    ],
    links: [
      { label: "Visit planamwell.com", href: "https://planamwell.com" },
      { label: "Source code", href: "https://github.com/Zionnaire/PlanAmWell" },
    ],
    hero: {
      file: "planamwell-hero.png",
      width: 1600,
      height: 1000,
      alt: "PlanAmWell app screens showing the Ask AmWell assistant, a video consultation and the health store",
    },
    screens: [
      {
        file: "planamwell-mobile-home.png",
        width: 562,
        height: 1280,
        alt: "The PlanAmWell mobile home screen with the Ask AmWell button and shortcuts to doctors, pharmacy and community",
      },
      {
        file: "planamwell-assistant.png",
        width: 900,
        height: 1600,
        alt: "The Ask AmWell assistant answering a question on a phone",
      },
    ],
  },
  {
    slug: "immuniwatch",
    name: "ImmuniWatch Nigeria",
    kind: "Vaccine misinformation surveillance",
    previewLayout: "split",
    summary:
      "Helps health teams spot vaccine misinformation early and answer it with facts, across five Nigerian languages.",
    // CONFIRM: problem statement is drafted
    problem: [
      "Vaccine misinformation spreads quickly on social platforms, in several languages, and health teams usually find out after it has taken hold.",
      "ImmuniWatch gives analysts one place to see what is spreading, where, and what to say back.",
    ],
    built: [
      "A pipeline that collects posts from five social platforms and classifies them with an ML service.",
      "An analyst review queue for posts the classifier is unsure about.",
      "A counter-narrative generator grounded in a verified knowledge base (RAG).",
      "Dashboards for model drift by language and alerts on regional surges.",
    ],
    // CONFIRM
    role: "Full-stack engineer. I built the React dashboard, the Express API and the ingestion pipeline, and integrated the classifier and RAG service.",
    decisions: [
      {
        title: "Humans review what the model is unsure about",
        body: "Low-confidence posts go to an analyst instead of being auto-labelled, so the team's time goes where the model is weakest and its mistakes don't become the record.",
      },
      {
        title: "Counter-narratives come from a verified knowledge base",
        body: "Replies are generated with retrieval over vetted sources, so the response can be traced back to a document rather than the model's memory.",
      },
      {
        title: "Drift is tracked per language",
        body: "A classifier can degrade in Hausa while looking healthy overall. Monitoring by language surfaces that early and feeds alerts when a region surges.",
      },
    ],
    stack: ["React", "TypeScript", "Express", "MongoDB", "Kafka", "Groq"],
    links: [
      {
        label: "Visit the app",
        href: "https://immuniwatch-frontend.onrender.com/",
      },
      { label: "Source code", href: "https://github.com/Zionnaire/ImmuniWatch" },
    ],
    hero: {
      file: "immuniwatch-hero.png",
      width: 1600,
      height: 733,
      alt: "ImmuniWatch dashboard showing misinformation trends by language and region",
    },
    screens: [
      {
        file: "immuniwatch-review.png",
        width: 1200,
        height: 800,
        alt: "The analyst review queue with a flagged post and the model's confidence",
      },
      {
        file: "immuniwatch-drift.png",
        width: 1200,
        height: 800,
        alt: "Model drift chart broken down by language",
      },
    ],
  },
  {
    slug: "efims",
    name: "EFIMS",
    kind: "Fraud and financial crime case management for banks",
    previewLayout: "inset",
    summary:
      "Takes a fraud alert from first signal through investigation, recovery and regulatory reporting, with strict controls on who can see what.",
    // CONFIRM
    problem: [
      "Banks handle fraud, AML, whistleblowing and HR cases side by side but must keep them apart. Mixed-up access is a compliance failure.",
      "EFIMS manages a case from first alert to regulatory report, with access control strict enough for several banks to share one system.",
    ],
    built: [
      "A case workspace for the full path: alert, investigation, recovery and regulatory reporting.",
      "Tenant isolation enforced inside PostgreSQL with row-level security.",
      "A tamper-evident audit trail, and compartments for AML, whistleblowing and HR cases.",
      "Approval flows so no account freeze or write-off happens without a human sign-off.",
    ],
    // CONFIRM
    role: "Full-stack engineer. I designed the data model and access rules and built the NestJS API and the Next.js case workspace.",
    decisions: [
      {
        title: "Tenant isolation in the database, not just the app",
        body: "Row-level security in PostgreSQL means a bug in application code can't leak one bank's data to another. The database refuses the query.",
      },
      {
        title: "An audit trail that can't be quietly edited",
        body: "Every action on a case is recorded in a tamper-evident log, and sensitive case types sit in compartments with their own access rules.",
      },
      {
        title: "Consequential actions need a human",
        body: "Freezing an account or writing off a loss is never automatic. The system prepares the action and waits for an approver.",
      },
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Prisma", "Socket.IO"],
    links: [{ label: "Source code", href: "https://github.com/Zionnaire/FMS" }],
    hero: {
      file: "efims-hero.png",
      width: 1600,
      height: 1000,
      alt: "EFIMS case workspace showing a fraud case timeline and approval panel",
    },
    screens: [
      {
        file: "efims-case.png",
        width: 1200,
        height: 800,
        alt: "An open fraud case with its timeline and linked evidence",
      },
      {
        file: "efims-audit.png",
        width: 1200,
        height: 800,
        alt: "The audit trail view listing actions on a case",
      },
    ],
  },
];

export const moreWork = {
  heading: "More work",
  intro: "Smaller builds and side projects.",
  items: [
    {
      name: "AI in Health Summit 2026",
      stack: "React · Express · MongoDB · Docker · CI",
      description:
        "Registration, payments, admin CMS and a passwordless delegate portal for AHFID's summit.",
      links: [{ label: "Visit", href: "https://aiinhealthsummit.org" }],
      images: [
        {
          file: "aiinhealth.png",
          width: 1600,
          height: 733,
          alt: "AI in Health Summit 2026 website home page with the event dates and venue in Abuja",
        },
      ],
    },
    {
      name: "Pact",
      stack: "Expo / React Native · Express · Groq · Paystack",
      description:
        "Relationship app for couples with sealed entries, consent-based reveals and AI tone-check.",
      links: [{ label: "Code", href: "https://github.com/Zionnaire/Pact" }],
      images: [
        {
          file: "pact2.png",
          width: 540,
          height: 1113,
          alt: "Pact home screen showing the current cycle, a reveal countdown and a sealed partner entry",
        },
        {
          file: "pact1.png",
          width: 540,
          height: 1113,
          alt: "Pact pairing screen reading You are building this together",
        },
      ],
    },
    {
      name: "Aura Forex",
      stack: "Next.js · Express · WebSockets · Groq",
      description:
        "Trading intelligence with a rule-based signal engine, backtesting and human-approved execution.",
      links: [
        { label: "Visit", href: "https://fx-frontend-1ago.onrender.com" },
        { label: "Code", href: "https://github.com/Zionnaire/FX_Frontend" },
      ],
    },
    {
      name: "TheArk",
      stack: "Node.js · Express · MongoDB · Socket.IO",
      description: "Church community app with group chat and voice and video calls.",
      links: [{ label: "Code", href: "https://github.com/Zionnaire/TheArk" }],
    },
  ] as { name: string; stack: string; description: string; links: Link[]; images?: ImageSlot[] }[],
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm Fowosere Ademola Abraham. I build full-stack web and mobile products, and I integrate AI into them: retrieval-augmented generation, NLP classification, and LLM chat assistants that work in Nigerian languages.",
    "I work with the Africa Hub for Innovation & Development (AHFID) and run my own consultancy, Zionnaire Concepts. I care about software that holds up in real conditions: patchy networks, people who prefer voice to typing, and data that has to stay private.",
    "Before software, I was on radio. That's where I learned to explain complicated things simply, which turns out to be most of the job.",
  ],
  pathHeading: "Career path",
  path: [
    { title: "Radio broadcasting", place: "Radio TNT 102.5 FM" },
    {
      title: "Civil and mechanical engineering consulting",
      place: "Mosco Engineering & Associates",
    },
    {
      title: "Full-stack, mobile and AI engineering",
      place: "AHFID and Zionnaire Concepts",
    },
  ],
  photo: {
    file: "ademola.jpg",
    width: 960,
    height: 1280,
    alt: "Portrait of Fowosere Ademola Abraham",
  } as ImageSlot,
  skillsHeading: "Skills",
  skills: [
    {
      group: "Web and mobile",
      items: "React, Next.js, React Native, Expo and EAS, TypeScript, Tailwind",
    },
    {
      group: "Backend",
      items: "Node.js, Express, NestJS, MongoDB, PostgreSQL, Prisma, Socket.IO, Kafka",
    },
    {
      group: "AI integration",
      items: "RAG pipelines, NLP classification, LLM assistants, speech-to-text, Groq",
    },
    {
      group: "Payments and delivery",
      items: "Paystack, Flutterwave, WebRTC, Docker, GitHub Actions, Render, Vercel",
    },
  ],
};

/** Hero portrait. A cut-out PNG with a transparent background looks best; the About photo is the fallback. */
export const heroPortrait = {
  slot: {
    file: "ademola-hero.png",
    width: 1000,
    height: 1200,
    alt: "Portrait of Fowosere Ademola Abraham",
  } as ImageSlot,
  fallback: about.photo,
};

export const contact = {
  heading: "Work with me",
  body: "I'm open to contract, collaboration and full-time roles, especially in health tech and AI-integrated products.",
  social: [
    { label: "GitHub", href: "https://github.com/Zionnaire" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ademola-abraham-488557120/",
    },
    { label: "X", href: "https://twitter.com/zionnaire1" },
  ] as Link[],
};

export const caseStudyCopy = {
  problem: "The problem",
  built: "What I built",
  role: "My role",
  decisions: "Key technical decisions",
  screens: "Screenshots",
  facts: { stack: "Stack", links: "Links" },
  back: "All work",
  next: "Next case study",
};

export const capabilities = {
  heading: "What I do",
  items: [
    {
      title: "Web and mobile products",
      body: "React, Next.js and Expo apps that work across web, iOS and Android, built for patchy networks and shared phones.",
    },
    {
      title: "AI integration",
      body: "Retrieval-augmented generation, NLP classification and LLM assistants that work in Nigerian languages, with a human in the loop where it matters.",
    },
    {
      title: "Backend and delivery",
      body: "Node, NestJS, PostgreSQL and MongoDB services with payments, real-time chat, video calls and CI/CD.",
    },
  ],
};
