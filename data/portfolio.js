// All site content lives here. Edit this file to update the portfolio;
// the components only handle layout and styling.

export const profile = {
  name: "Vanshika Shah",
  firstName: "Vanshika",
  lastName: "Shah",
  tagline: "Software Engineer · AI Systems · Full Stack",
  kicker: "Building polished products and intelligent systems",
  subtitle: "Software Engineer crafting AI-driven systems with strong product thinking",
  description:
    "I build elegant, reliable software across full-stack engineering, backend systems, and applied AI. I care deeply about clean architecture, practical impact, and creating products that feel both powerful and intuitive.",
  location: "College Park, MD",
  email: "vanshika3108@gmail.com",
  // Set to a string like "240-726-2303" to show a phone pill in the hero.
  phone: null,
  photo: {
    src: "/images/vanshika-headshot.webp",
    alt: "Headshot of Vanshika Shah",
    width: 640,
    height: 640,
  },
  // Any URL works: a Google Drive link, or "/resume.pdf" after adding the file to public/.
  resumeUrl: "https://drive.google.com/file/d/1se2Yvhl6mKWOTA1TBmgxdmpCHRxvCeJ7/view?usp=sharing",
  links: {
    linkedin: "https://www.linkedin.com/in/vshah3/",
    github: "https://github.com/Vanshikashah318",
  },
};

export const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/experience/", label: "Experience" },
  { href: "/projects/", label: "Projects" },
];

export const highlights = [
  { value: "15+", label: "Projects" },
  { value: "4+", label: "Key Roles" },
  { value: "900+", label: "Students Impacted" },
  { value: "85%", label: "CTR Improvement" },
];

export const coreFocus = [
  "Backend Engineering",
  "AI Integration",
  "Full Stack Development",
  "Scalable APIs",
  "Data-Driven Products",
  "High-Performance Computing",
];

export const about = {
  bio: [
    "I graduated from the University of Maryland, College Park in May 2025 with a B.S. in Computer Science, a minor in Business Analytics, and a 3.9 GPA. I am now a full stack engineer at JuumeAI, where I own compliance and audit modules end-to-end across a Go and PostgreSQL backend and a React and Next.js front end, and where I build retrieval and evaluation systems on top of LLMs.",
    "Before that I worked on backend and data problems at Tyloones, AiVantage, and LeoTechnosoft, researched breathing analytics at UMD's MIND Lab, and spent two years teaching programming languages and systems to over 900 students. I care most about shipping software that holds up in production.",
    "Increasingly, I am drawn to high-performance computing. Parallel programming with MPI and OpenMP, and GPU work like a CUDA video-convolution engine that runs 8x faster than its baseline, showed me how much I enjoy making code fast at scale, and it is an area I am actively pursuing.",
  ],
};

export const education = [
  {
    badge: "University of Maryland",
    degree: "B.S. Computer Science",
    minor: "Minor in Business Analytics",
    school: "University of Maryland, College Park",
    dates: "August 2021 — May 2025",
    gpa: "3.9",
    focus: ["Algorithms", "Parallel Programming", "Data Science", "Databases"],
  },
  {
    school: "St Mary's School, Pune",
    url: "https://www.smspune.com/",
  },
];

export const awards = [
  {
    name: "Dean's List",
    detail: "University of Maryland · Fall 2021 – Spring 2025",
    url: "https://ischool.umd.edu/academics/bachelors-programs/deans-list/",
  },
  {
    name: "OMSE Academic Excellence Award",
    detail: "Awarded to students with a cumulative 3.5+ GPA",
    url: "https://omse.umd.edu/academy-of-academic-excellence-awards/",
  },
];

export const coursework = [
  {
    area: "Systems",
    courses: ["CMSC416 Parallel Programming", "CMSC430 Compilers", "CMSC414 Networks & Security", "CMSC216 Computer Systems", "CMSC330 Programming Languages"],
  },
  {
    area: "Algorithms & Theory",
    courses: ["CMSC351 Algorithms", "CMSC420 Data Structures", "CMSC433 Algorithm Design", "CMSC250 Discrete Structures"],
  },
  {
    area: "Data Science",
    courses: ["CMSC320 Intro to Data Science", "BMGT430 Linear Regression", "BMGT431 Logistic Regression"],
  },
];

export const experience = [
  {
    group: "industry",
    role: "Full Stack Software Engineer",
    company: "JuumeAI",
    location: "Vienna, Virginia",
    dates: "June 2025 – Present",
    current: true,
    tech: ["Go", "PostgreSQL", "React", "Next.js", "TypeScript", "pgvector", "Pinecone"],
    bullets: [
      "Own the Licensing, Compliance, and Audit modules end-to-end: the customer-facing workflows where users complete framework assessments, attach evidence, manage findings, and track audit history.",
      "Cut document processing time by 90% with a RAG-based evidence-matching agent that extracts structured facts from unstructured documents using embeddings, Pinecone, pgvector, and LLM reasoning.",
      "Built a regulatory-impact system in Go and PostgreSQL with asynchronous pub/sub pipelines, so a single regulation change recalculates readiness across every affected framework and assessment.",
      "Build React and Next.js front ends in TypeScript with TanStack Query, and prototyped an evaluation framework that validates LLM and agent output against a golden dataset.",
    ],
  },
  {
    group: "industry",
    role: "Software Developer Intern",
    company: "Tyloones",
    location: "Delhi, India (Remote)",
    dates: "Jan 2025 – Mar 2025",
    tech: ["Python", "FastAPI", "OpenAI", "Twilio"],
    bullets: [
      "Improved throughput by 80% for a real-time AI call automation platform by designing a FastAPI backend with concurrent request-handling pipelines.",
      "Integrated Vapi, OpenAI, ElevenLabs, and Deepgram for real-time voice workflows, transcription, and automated appointment scheduling.",
      "Reduced end-to-end lead processing time by 75% by automating workflows across CRM, email, and telephony systems.",
    ],
  },
  {
    group: "industry",
    role: "Software Developer & Analyst",
    company: "AiVantage",
    location: "Vienna, Virginia",
    dates: "June 2024 – Jan 2025",
    tech: ["Python", "scikit-learn", "OpenAI API", "LSTM"],
    bullets: [
      "Engineered a hyperpersonalization pipeline using LDA and KMeans clustering to automate email campaigns, improving click-through rate by 85%.",
      "Boosted processing efficiency by 90% using the Knee library and careful prompt engineering with the OpenAI API.",
      "Trained LSTM and RNN models on 30,000+ inputs, reaching 89% sentiment accuracy and cutting manual analysis time by 60%.",
    ],
  },
  {
    group: "industry",
    role: "Software Engineer Intern",
    company: "LeoTechnosoft",
    dates: "May 2024 – Aug 2024",
    tech: ["MySQL"],
    bullets: [
      "Improved database efficiency and quality by writing MySQL queries that eliminated spam-bot data.",
      "Streamlined data categorization with optimized queries, significantly reducing processing time.",
    ],
  },
  {
    group: "academic",
    role: "Undergraduate Research Assistant",
    company: "MIND Lab, University of Maryland",
    dates: "Sep 2024 – May 2025",
    tech: ["C++", "Python"],
    link: { label: "MIND Lab: Breathing Analysis", url: "https://mindlab.cs.umd.edu/breathing-analysis" },
    bullets: [
      "Researched breathing analytics, analyzing data from wearable breathing devices to derive physiological and health indicators for preventative monitoring.",
      "Built C++ and Python pipelines for multi-device sensor telemetry and implemented real-time anomaly detection for continuous monitoring.",
    ],
  },
  {
    group: "academic",
    role: "Teaching Assistant, CMSC330",
    company: "University of Maryland",
    dates: "Aug 2023 – May 2025",
    tech: ["OCaml", "Python", "Rust"],
    bullets: [
      "Supported over 900 students through office hours, improving engagement and course completion.",
      "Designed projects and course materials in Python, OCaml, and Rust, and helped grade exams and quizzes.",
    ],
  },
  {
    group: "academic",
    role: "Computer Science Tutor",
    company: "Iribe Initiative for Diversity and Inclusion",
    dates: "Jan 2022 – Dec 2022",
    tech: ["Java", "C", "Assembly"],
    bullets: [
      "Tutored students in Java, C, and Assembly through clear explanations and hands-on problem solving.",
      "Led small-group study sessions that promoted collaborative learning.",
    ],
  },
];

// `highlights` render as orange chips, `tech` as grey tags. Add `href` for a GitHub or demo link.
export const projects = [
  {
    slug: "gpu-convolution",
    title: "GPU-Accelerated Video Convolution Engine",
    category: "Systems · GPU",
    date: "Sep 2024",
    cover: "/images/projects/gpu-convolution.svg",
    description:
      "A real-time video effects pipeline on CUDA and OpenCV. Convolution kernels tuned around shared memory and deliberate thread mapping, with CUDA streams keeping the GPU fed while frames decode.",
    highlights: ["8x speedup", "CUDA streams", "Real-time"],
    tech: ["C++", "CUDA", "OpenCV"],
    featured: true,
  },
  {
    slug: "collab-editor",
    title: "Collaborative Document Editor",
    category: "Full Stack · Real-time",
    date: "Sep 2024",
    cover: "/images/projects/collab-editor.svg",
    description:
      "Multiple users edit the same document at once. Yjs handles CRDT-based conflict resolution over Socket.IO, backed by Node.js, Express, and MongoDB.",
    highlights: ["CRDT sync", "Multi-user"],
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Yjs"],
    href: "https://github.com/Vanshikashah318/Collaborative-Document-editor-",
    featured: true,
  },
  {
    slug: "spending-suggestor",
    title: "Spending Suggestor",
    category: "Cloud · Applied AI",
    cover: "/images/projects/spending-suggestor.svg",
    description:
      "Analyzes transaction history from CSV files and uses the OpenAI API to deliver personalized financial recommendations, on a serverless AWS Lambda backend with S3 storage.",
    highlights: ["Serverless", "LLM insights"],
    tech: ["Python", "AWS Lambda", "AWS S3", "OpenAI API"],
    featured: true,
  },
  {
    slug: "image-classification",
    title: "Image Classification with CNNs",
    category: "Machine Learning",
    cover: "/images/projects/image-classification.svg",
    description:
      "A convolutional neural network in Keras and TensorFlow that classifies images across object categories like animals, vehicles, and clothing, tuned with the Adam optimizer.",
    highlights: ["Deep learning", "Multi-class"],
    tech: ["Python", "TensorFlow", "Keras", "NumPy"],
    href: "https://github.com/Vanshikashah318/ImageClassification_CNN",
  },
  {
    slug: "shell-junior",
    title: "Shell Junior",
    category: "Systems Programming",
    date: "Oct 2022",
    cover: "/images/projects/shell-junior.svg",
    description:
      "A Linux shell in C supporting sequential execution, logical operators, piping, and subshell creation, with an emphasis on systems programming fundamentals.",
    highlights: ["Pipes", "Subshells"],
    tech: ["C", "Linux"],
  },
  {
    slug: "microcaml",
    title: "MicroCaml Interpreter",
    category: "Programming Languages",
    date: "Apr 2022",
    cover: "/images/projects/microcaml.svg",
    description:
      "An interpreter for a subset of OCaml, written in OCaml: lexer, parser, and evaluator covering roughly 80% of the language, including closures and recursive bindings.",
    highlights: ["~80% of OCaml", "Closures"],
    tech: ["OCaml"],
  },
];

export const skills = [
  {
    title: "Languages",
    accent: "green",
    items: ["Go", "Python", "TypeScript", "JavaScript", "C/C++", "Java", "SQL", "OCaml", "Rust", "Ruby", "Racket"],
  },
  {
    title: "Frameworks & Tools",
    accent: "rust",
    items: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "AWS", "GCP", "Terraform", "Git", "MPI", "OpenMP"],
  },
  {
    title: "AI & Data",
    accent: "gold",
    items: ["LLM Agents", "RAG", "pgvector", "Pinecone", "TensorFlow", "PyTorch", "Hugging Face", "Pandas", "NumPy", "CUDA"],
  },
];

// Newest first. `url` adds a "View credential" link (a PDF in public/certificates/ or an external URL).
export const certifications = [
  {
    name: "Intermediate Cybersecurity (CYB102)",
    issuer: "CodePath",
    date: "Summer 2026",
    honors: true,
    description:
      "Hands-on course in real-world security tools and attacks, with a focus on blue-team defense: detecting, analyzing, and responding to threats.",
    url: "https://certificates.codepath.org/6df35df7-46f8-4d1d-9fc4-f41f0e391d6d.pdf",
  },
  {
    name: "Applications of AI Engineering",
    issuer: "CodePath",
    date: "July 2026",
    honors: true,
    description:
      "Covered LLM integration, RAG, prompt engineering, agentic workflows, and AI application design through hands-on projects.",
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise · Forage",
    date: "October 2024",
    honors: false,
    description:
      "Built a RESTful web server in Java Spring Boot handling HTTP requests and JSON data uploads, with unit tests validating application performance.",
    url: "/certificates/hpe-software-engineering-forage.pdf",
  },
  {
    name: "Cloud Platform Job Simulation",
    issuer: "Verizon · Forage",
    date: "October 2024",
    honors: false,
    description:
      "Designed a hypothetical VPN product for Verizon’s Cloud Computing team, used command-line Python to test it for cloud-native traits (redundancy, resiliency, least privilege), and presented application-security research.",
    url: "/certificates/verizon-cloud-platform-forage.pdf",
  },
];

export const contact = {
  title: "Let’s build something",
  accent: "remarkable",
  text: "I’m interested in software engineering roles and impactful technical work across full-stack systems, backend development, AI-enabled products, and high-performance computing.",
  availability: "Open to software engineering roles",
  timezone: "Eastern Time (ET)",
  interests: [
    {
      title: "Full-Stack Systems",
      text: "Owning features end-to-end, from Go or Python services and PostgreSQL to React and Next.js front ends.",
    },
    {
      title: "Backend Development",
      text: "APIs, pub/sub pipelines, and data workflows that stay fast and correct as they scale.",
    },
    {
      title: "AI-Enabled Products",
      text: "Retrieval, agents, and LLM evaluation, shipped as features that hold up in production.",
    },
    {
      title: "High-Performance Computing",
      text: "Parallel and GPU programming with MPI, OpenMP, and CUDA: squeezing real speedups out of compute-heavy workloads.",
    },
  ],
};
