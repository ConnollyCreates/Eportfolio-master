import headshot from "../assets/optimized/headshot-420.webp";
import knightHacksImage from "../assets/knight-hacks.png";
import memorAIImage from "../assets/memor-ai.png";
import strongmanDeadlift720 from "../assets/optimized/strongman-wide-720.webp";
import strongmanDeadlift1200 from "../assets/optimized/strongman-wide-1200.webp";
import strongmanDeadlift1600 from "../assets/optimized/strongman-wide-1600.webp";
import strongmanPress540 from "../assets/optimized/strongman-portrait-540.webp";
import strongmanPress800 from "../assets/optimized/strongman-portrait-800.webp";
import thetaChiImage from "../assets/optimized/theta-chi-640.webp";
import wellsFargoImage from "../assets/optimized/wells-speaking-640.webp";
import resumeUrl from "../assets/gabriel-connolly-resume.pdf";

export const siteMeta = {
  name: "J. Gabriel Connolly",
  shortName: "Gabriel Connolly",
  title: "Gabriel Connolly | Backend, Infrastructure & Full-Stack Engineer",
  description:
    "Gabriel Connolly is a 2027 new grad engineer who builds dependable backend systems and thoughtful full-stack products.",
  roleTargets: ["Backend", "Infrastructure", "Full Stack"],
  graduation: "Expected May 2027",
  university: "University of Central Florida",
};

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/resume", kind: "route" },
];

export const hero = {
  eyebrow: "Hi, I’m Gabriel.",
  name: "Gabriel Connolly",
  role: "Backend, Infrastructure, and Full-Stack Engineer",
  education: "Computer Science at UCF, graduating May 2027",
  statement:
    "I like working on the parts of software people usually notice only when they break. I’ve spent two summers at Wells Fargo, co-founded Salt32, and built StackRoast from scratch.",
  availability: "Open to new-grad conversations for 2027.",
  primaryAction: { label: "See my experience", href: "#experience" },
  resumeAction: {
    label: "Download resume",
    href: resumeUrl,
    kind: "document",
    download: "Gabriel-Connolly-Resume.pdf",
  },
  profileLinks: [
    { label: "Email", href: "mailto:gconnolly0208@gmail.com" },
    { label: "GitHub", href: "https://github.com/ConnollyCreates" },
    { label: "LinkedIn", href: "https://linkedin.com/in/gabriel-connolly" },
  ],
};

export const events = [
  {
    id: "deadlift",
    label: "Deadlift",
    caption: "Start with the deadlift, then load the stories behind the work.",
    image: {
      src: strongmanDeadlift720,
      sources: [
        {
          media: "(max-width: 720px)",
          srcSet: `${strongmanDeadlift720} 720w`,
          type: "image/webp",
        },
      ],
      srcSet: `${strongmanDeadlift720} 720w, ${strongmanDeadlift1200} 1200w, ${strongmanDeadlift1600} 1600w`,
      sizes: "(max-width: 720px) 360px, 62vw",
      alt: "Gabriel Connolly completing a deadlift at a strength competition",
    },
  },
  {
    id: "overhead-press",
    label: "Overhead Press",
    caption: "A different lift, with the same four chapters behind it.",
    image: {
      src: strongmanPress540,
      srcSet: `${strongmanPress540} 540w, ${strongmanPress800} 800w`,
      sizes: "(max-width: 720px) 360px, 42vw",
      alt: "Gabriel Connolly pressing a barbell overhead at a strength competition",
    },
  },
];

export const loadStories = [
  {
    id: "wells-fargo",
    plate: "WF",
    category: "Enterprise engineering",
    title: "Wells Fargo",
    short:
      "At Wells Fargo, I modernized a platform used by more than 20,000 financial advisors while keeping reliability, security, and accessibility in view.",
    detail:
      "Across two internships, I worked on performance, authentication, security, accessibility, and cloud migration planning. The clearest result was cutting internal page loads by 50 to 65%.",
    href: "#experience",
  },
  {
    id: "salt32",
    plate: "S32",
    category: "Co-founder and builder",
    title: "Salt32",
    short:
      "Co-founding Salt32 has meant shaping the product and building the backend that measures how businesses appear across AI assistants.",
    detail:
      "I built the Spring Boot control plane, Python workers, and three-queue AWS workflow, then made scans safe to retry and able to return partial results when providers fail.",
    href: "https://www.salt32.com",
  },
  {
    id: "knight-hacks",
    plate: "KH",
    category: "Community",
    title: "Knight Hacks",
    short:
      "At Knight Hacks, I helped a nine-person outreach team make UCF's software community easier to discover and more welcoming to join.",
    detail:
      "We grew dues-paying membership past 200 and helped deliver Knight Hacks VIII for 1,024 attendees, 188 projects, and $75,000 in prizes.",
    href: "https://2025.knighthacks.org",
  },
  {
    id: "uso",
    plate: "USO",
    category: "Philanthropy",
    title: "Theta Chi + USO",
    short:
      "As Theta Chi's Director of Philanthropy, I led a nine-person campaign that raised $18,594 for the USO.",
    detail:
      "That work, along with serving as Secretary, Risk Manager, and Scholarship Chair, taught me how to organize people around a goal and follow through on the details.",
    href: "https://ucf.crowdchange.co/54768",
  },
];

export const experience = [
  {
    id: "wells-2026",
    organization: "Wells Fargo",
    role: "Software Engineering Intern, Wealth & Investment Management Technology",
    location: "Charlotte, North Carolina",
    date: "June 2026 to August 2026",
    outcome:
      "Helped move a 20-year-old .NET annuity platform used by more than 20,000 financial advisors to Spring Boot and React with TypeScript.",
    metrics: [
      { value: "50–65%", label: "faster internal page loads" },
      { value: "83", label: "security and WCAG findings fixed" },
      { value: "20,000+", label: "advisors using the platform" },
    ],
    details: [
      "Used server-side pagination and SQL rewrites to cut internal page loads by 50 to 65%.",
      "Designed machine-to-machine authentication and 24-hour entitlement caching, cutting entitlement-service calls from five to two per session and supporting permission-aware React views.",
      "Piloted Devin AI for legacy-code analysis and story planning, then published playbooks to an internal community of more than 2,500 engineers.",
      "Fixed 83 security and WCAG findings through code changes, dependency upgrades, and corrected UI components.",
    ],
    technologies: ["Spring Boot", "React", "TypeScript", ".NET", "SQL", "Devin AI"],
    media: {
      kind: "image",
      src: wellsFargoImage,
      alt: "Gabriel Connolly speaking during a Wells Fargo internship presentation",
      presentation: "portrait",
    },
  },
  {
    id: "salt32",
    organization: "Salt32",
    role: "Co-Founder & Software Engineer",
    location: "Remote",
    date: "April 2026 to present",
    outcome:
      "Co-founded an AI-visibility platform that measures business mention and citation share across four AI assistants.",
    metrics: [
      { value: "4", label: "AI assistants measured" },
      { value: "3", label: "SQS queues" },
      { value: "Partial scans", label: "when providers are unavailable" },
    ],
    details: [
      "Built the Spring Boot control plane and Python workers with PostgreSQL, AWS SQS, and AWS S3.",
      "Made scan processing safe under queue redelivery with deterministic job keys and PostgreSQL conflict handling, then added stale-job recovery and dead-letter queues to isolate repeated failures.",
      "Added token-bucket rate limiting, exponential-backoff retries, provider isolation, and tenant budget checks so an outage can return partial results instead of failing an entire scan.",
    ],
    technologies: ["Spring Boot", "Python", "PostgreSQL", "AWS SQS", "AWS S3"],
    links: [{ label: "Visit Salt32", href: "https://www.salt32.com" }],
  },
  {
    id: "wells-2025",
    organization: "Wells Fargo",
    role: "Software Engineering Intern, Wealth & Investment Management Technology",
    location: "Charlotte, North Carolina",
    date: "June 2025 to July 2025",
    outcome:
      "Turned a comparison of Pivotal Cloud Foundry and Red Hat OpenShift into a 15-page guide presented to engineering leaders.",
    metrics: [
      { value: "15 pages", label: "cloud migration comparison" },
    ],
    details: [
      "Compared scalability, deployment models, and developer workflows to help inform the organization's cloud-platform direction.",
      "Used Postman to study REST endpoints and validate annuity workflows across distributed systems.",
      "Supported a Taproot Foundation pro bono project for the Collective Empowerment Group, a nonprofit working to expand affordable homeownership in Miami's Black communities.",
    ],
    technologies: ["OpenShift", "Pivotal Cloud Foundry", "Postman", "REST APIs", "Agile"],
  },
];

export const earlierEngineering = [
  {
    id: "freelance-java",
    title: "Freelance Java Developer",
    organization: "Commissioned server projects",
    date: "January 2022 to January 2023",
    summary:
      "Built Java and Spigot tools for server owners, including an admin GUI and custom in-game and console commands, and contributed to a four-person plugin team.",
    technologies: ["Java", "Spigot API"],
  },
  {
    id: "the-region",
    title: "Software Developer Apprentice",
    organization: "The Region",
    date: "May 2021 to July 2022",
    summary:
      "Learned the full build, test, release, and support cycle while working on Java plugins for a game server with more than 1,000 concurrent players at its peak.",
    technologies: ["Java", "Spigot API", "Bungee API"],
  },
  {
    id: "java-club",
    title: "Secretary",
    organization: "Java Programming Club",
    date: "January 2021 to February 2022",
    summary:
      "Kept records for more than 60 meetings and helped organize workshops and guest speakers for a 45-member club learning Java and Android Studio.",
    technologies: ["Java", "Android Studio"],
  },
];

export const selectedProjects = [
  {
    id: "stackroast",
    name: "StackRoast",
    date: "June 2026",
    outcome:
      "I designed, built, and shipped a supplement-audit app that keeps its scoring explainable and every verdict tied to a source.",
    metrics: [
      { value: "393", label: "peer-reviewed references" },
      { value: "157", label: "compounds" },
      { value: "60+", label: "research sources ingested" },
    ],
    details: [
      "Built and launched the application around 157 compounds and 393 peer-reviewed references, then ingested and cleaned research data from more than 60 sources with Python workers.",
      "Developed a deterministic rules engine for dose, timing, and interaction analysis, cached identical stack evaluations for seven days, and rechecked paid reports for material new research.",
      "Implemented Stripe checkout and Redis-backed abuse controls with per-IP and per-email caching, rate limits, input validation, and webhook-safe fulfillment.",
      "Built indexable compound pages and scheduled research checks that refresh paid reports when new evidence may change a recommendation.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "PostgreSQL", "Supabase", "Stripe", "Redis"],
    links: [
      { label: "Visit StackRoast", href: "https://trystackroast.com" },
      { label: "View code", href: "https://github.com/ConnollyCreates/stackroast" },
    ],
  },
  {
    id: "memorai",
    name: "MemorAI",
    date: "September 2025",
    outcome:
      "We built a caregiver-focused Alzheimer's prototype that recognizes familiar faces and brings back the memories connected to them.",
    details: [
      "Built a FastAPI facial-recognition service for a caregiver-focused Alzheimer's prototype, using InsightFace and FAISS to match familiar faces and retrieve personalized memory prompts.",
      "Implemented multi-angle face enrollment with reference images in Azure Blob Storage and memories in Firebase, returning personalized text-to-speech memory prompts and photo slideshows to caregivers.",
    ],
    technologies: ["FastAPI", "InsightFace", "FAISS", "React", "Azure Blob", "Firebase"],
    links: [
      { label: "View code", href: "https://github.com/ConnollyCreates/MemorAI" },
      { label: "View on Devpost", href: "https://devpost.com/software/memorai-37h0oa" },
    ],
    media: { kind: "image", src: memorAIImage, alt: "MemorAI application welcome screen" },
  },
  {
    id: "jpm-code-for-good",
    name: "JPMorgan Chase Code for Good",
    date: "October 2025",
    outcome:
      "At Code for Good, our team built and demonstrated a heart-health outreach platform for the Black Heart Association in under 24 hours.",
    metrics: [
      { value: "Under 24h", label: "from brief to demo" },
      { value: "5 people", label: "on the build team" },
    ],
    details: [
      "I was selected for JPMorgan Chase's Code for Good and joined a five-person team building for the Black Heart Association.",
      "We developed a public-health risk heat map, mobile screening-van route planner, and live insurance-policy feed to support outreach planning.",
    ],
    technologies: ["Next.js", "React", "Node.js", "Firebase", "Gemini"],
  },
];

export const archiveProjects = [
  {
    id: "paracosm",
    name: "Paracosm",
    date: "Bitcamp 2025",
    summary:
      "A Unity world-building experiment where a spoken request can place and move objects in a 3D scene.",
    technologies: ["C#", "Unity", "OpenAI Whisper"],
    links: [{ label: "View on Devpost", href: "https://devpost.com/software/paracosm" }],
  },
  {
    id: "hurricane-gis",
    name: "HurricaneGIS",
    date: "Hackathon project",
    summary:
      "A real-time map for exploring hurricane hazards, backed by MongoDB and shown through Google Maps.",
    technologies: ["React", "MongoDB", "Google Maps API"],
    links: [{ label: "View code", href: "https://github.com/dylanmc1ntee/Hurricane-GIS" }],
  },
  {
    id: "cs1",
    name: "CS1 Coursework",
    date: "University coursework",
    summary:
      "A practical collection of linked lists, stacks, queues, trees, sorting algorithms, and other data structures written in C.",
    technologies: ["C", "Data Structures", "Algorithms"],
    links: [{ label: "View code", href: "https://github.com/ConnollyCreates/CS1/tree/main" }],
  },
  {
    id: "original-portfolio",
    name: "Original Portfolio",
    date: "Earlier build",
    summary:
      "My earlier portfolio, built while I was learning React, Tailwind CSS, and Three.js.",
    technologies: ["React", "Three.js", "Tailwind CSS"],
    links: [
      {
        label: "View the archive",
        href: "https://github.com/ConnollyCreates/Eportfolio-master/tree/cce03c1e9c76d6d72c9deb687246e9cfdc1edf21",
      },
    ],
  },
];

export const skills = [
  { label: "Languages", items: ["Java", "Python", "C# / .NET", "TypeScript / JavaScript", "SQL", "C", "Bash"] },
  {
    label: "Backend and data",
    items: ["Spring Boot", "Node.js", "FastAPI", "PostgreSQL", "pgvector", "Redis", "JUnit", "FAISS", "OpenCV"],
  },
  { label: "Frontend and product", items: ["React", "Next.js", "Stripe", "Anthropic", "Supabase", "Firebase"] },
  { label: "Cloud and delivery", items: ["AWS SQS", "AWS S3", "Azure", "Docker", "Kubernetes", "Linux", "Git", "GitHub Actions", "Postman", "Splunk"] },
  { label: "Team tools", items: ["Devin AI", "Jira", "Confluence"] },
];

export const about = {
  heading: "When I’m not coding, I’m usually training.",
  body:
    "Strongman gives me a challenge outside software and a community I care about. Training rarely goes exactly to plan, which has taught me to adjust quickly, take feedback, and keep working when the answer is not obvious. I bring that same curiosity and steadiness to engineering: I like untangling messy problems with other people and turning them into something useful.",
  education: {
    institution: "University of Central Florida",
    location: "Orlando, Florida",
    degree: "Bachelor of Science in Computer Science",
    graduation: "Expected May 2027",
    distinctions: ["Dean's List", "Bright Futures Florida Academic Scholarship"],
  },
  media: {
    src: headshot,
    alt: "Portrait of Gabriel Connolly wearing a dark suit and red tie",
  },
};

export const leadership = [
  {
    id: "knight-hacks",
    organization: "Knight Hacks",
    role: "Director of Outreach",
    date: "December 2024 to January 2026",
    summary:
      "Led a nine-person outreach team across UCF's computer science and computer engineering departments, grew dues-paying membership past 200, and helped deliver Knight Hacks VIII for 1,024 attendees, 188 projects, and $75,000 in prizes.",
    links: [{ label: "See Knight Hacks VIII", href: "https://2025.knighthacks.org" }],
    media: { src: knightHacksImage, alt: "Knight Hacks helmet, sword, and flame mark" },
  },
  {
    id: "theta-chi",
    organization: "Theta Chi",
    role: "Director of Philanthropy, Secretary, Risk Manager, Scholarship Chair",
    date: "November 2023 to present",
    summary:
      "Led a nine-person philanthropy campaign that raised $18,594 for the USO, served in four elected roles, and received Theta Chi's international Resolute Man Award.",
    highlights: [
      "Selected as 1 of 10 students nationally for the Resolute Man Commercial Banking Experience at Fifth Third Bank's headquarters in Cincinnati.",
      "Received the Victor Simon Memorial Scholarship and Janet Blue Scholarship for leadership and academic achievement.",
    ],
    links: [{ label: "View the USO fundraiser", href: "https://ucf.crowdchange.co/54768" }],
    media: { src: thetaChiImage, alt: "Theta Chi students gathered in Cincinnati with a chapter flag" },
  },
];

export const contact = {
  heading: "Let's talk.",
  body:
    "I'm looking for backend, infrastructure, and full-stack new grad roles for 2027. If you have one in mind, I'd be glad to hear from you.",
  email: { label: "gconnolly0208@gmail.com", href: "mailto:gconnolly0208@gmail.com" },
  phone: { label: "(904) 377-8382", href: "tel:+19043778382" },
  links: [
    {
      label: "Resume",
      href: resumeUrl,
      kind: "document",
      download: "Gabriel-Connolly-Resume.pdf",
    },
    { label: "GitHub", href: "https://github.com/ConnollyCreates" },
    { label: "LinkedIn", href: "https://linkedin.com/in/gabriel-connolly" },
  ],
};

export const interfaceCopy = {
  skipToContent: "Skip to content",
  openMenu: "Open navigation",
  closeMenu: "Close navigation",
  runLoadTest: "Load Wells Fargo",
  replayLoadTest: "Start over",
  loadingEvidence: "Adding the next plate",
  evidenceLoaded: "All four chapters are on the bar",
  eventSelectorLabel: "Choose a lift",
  chapterLabel: "Four chapters behind the lift",
  technicalDetails: "How I built it",
  earlierEngineering: "Earlier experience",
  projectArchive: "More projects",
  copyEmail: "Copy email",
  emailCopied: "Email copied",
};

export const portfolio = {
  siteMeta,
  hero,
  events,
  loadStories,
  experience,
  earlierEngineering,
  selectedProjects,
  archiveProjects,
  skills,
  about,
  leadership,
  contact,
  nav,
  interfaceCopy,
};

export default portfolio;
