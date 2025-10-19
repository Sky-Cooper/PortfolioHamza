import {
  qreeblikmedicalScreenshot3,
  qreeblikmedicalScreenshot4,
  qreeblikmobilscreesnshot1,
  qreeblikmobileScreenshot4,
  qreeblikmarketplace1,
  qreeblikmarketplace3,
  xreduction1,
  xreducation3,
  autoposting1,
  movieApp1,
  movieApp2,
  movieApp3,
  qreeblikmobileScreenshot5,
  qreeblikmobileScresenshot6,
} from "../assets/images/index";

export const projects = [
  {
    title: "Qreeblik Medical SaaS",
    images: [qreeblikmedicalScreenshot3, qreeblikmedicalScreenshot4],
    role: "Full-Stack / DevOps / Branding",
    description:
      "A next-generation healthcare SaaS connecting doctors and patients with smart dashboards, secure record management, and advanced automation. I led the full cycle — branding, UI/UX, backend (Django GraphQL, PostgreSQL, Redis, Celery, Docker, Nginx, Gunicorn), and CI/CD with Jenkins and Kubernetes on Digital Ocean.",
    tech: [
      "Django",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Jenkins",
      "React",
      "Tailwind",
    ],
    links: {
      demo: "https://www.qreeblik.com/",
      github: "https://www.qreeblik.com/",
      live: "https://www.qreeblik.com/",
    },
  },
  {
    title: "Qreeblik Medical Mobile App",
    images: [
      qreeblikmobileScresenshot6,
      qreeblikmobilscreesnshot1,
      qreeblikmobileScreenshot4,
      qreeblikmobileScreenshot5,
    ],
    role: "Mobile Engineer / UI-UX / Branding",
    description:
      "The mobile extension of Qreeblik Medical built with React Native. Enables patients to find doctors, book appointments, track metrics, manage payments, and view health analytics. Fully integrated with Brevo for email verification and reward point systems.",
    tech: ["React Native", "NativeWind", "Redux", "TypeScript", "Figma"],
    links: {
      demo: "https://www.qreeblik.com/",
      github: "https://www.qreeblik.com/",
      live: "https://www.qreeblik.com/",
    },
  },
  {
    title: "Qreeblik Marketplace",
    images: [qreeblikmarketplace1, qreeblikmarketplace3, qreeblikmarketplace1],
    role: "Full-Stack Engineer / AI Integration",
    description:
      "A multi-sector Moroccan marketplace uniting vendors, clients, and delivery agents. Built with Django REST, PostgreSQL, Redis, React, Redux, and TypeScript. Features AI voice assistant (Darija/English) powered by Whisper API, vendor analytics dashboards, and fraud detection mechanisms.",
    tech: [
      "Django REST",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "Redux",
      "Tailwind",
      "Whisper AI",
    ],
    links: {
      demo: "https://github.com/Sky-Cooper/Qreeblik-Marketplace-frontend",
      github: "https://github.com/Sky-Cooper/Qreeblik-Marketplace-frontend",
      live: "https://github.com/Sky-Cooper/Market-place-multi-vendors",
    },
  },
  {
    title: "Xreducation Dashboard",
    images: [xreduction1, xreducation3],
    role: "Frontend Engineer / Branding / UI-UX",
    description:
      "An innovative 3D-based educational platform developed in collaboration with EMSI. Features multi-role dashboards (student, teacher, admin) and immersive learning experiences designed with modern UX principles.",
    tech: ["React", "TypeScript", "Tailwind", "Figma", "Three.js"],
    links: {
      demo: "https://github.com/Sky-Cooper/XreduFrontend",
      github: "https://github.com/Sky-Cooper/XreduFrontend",
      live: "https://github.com/Sky-Cooper/XreduFrontend",
    },
  },
  {
    title: "Movie Mobile App",
    images: [movieApp1, movieApp2, movieApp3],
    role: "Mobile Engineer / UI-UX",
    description:
      "A minimalist and visually elegant mobile movie app that fetches real-time data and recommendations via REST API. Includes search, trending movies, and detailed pages with cast info. Designed for smooth UX and vibrant orange-accented visuals.",
    tech: ["React Native", "JavaScript", "REST API", "TMDb API"],
    links: {
      demo: "https://github.com/Sky-Cooper/Movie-mobile-App",
      github: "https://github.com/Sky-Cooper/Movie-mobile-App",
      live: "https://github.com/Sky-Cooper/Movie-mobile-App",
    },
  },
  {
    title: "Instagram Auto-Posting Library",
    images: [autoposting1],
    role: "Python Developer / Automation Engineer",
    description:
      "A Python-based library that scrapes target Instagram pages, processes media, and reposts automatically to a personal account. Designed for social media growth automation with integrated content processing and scheduling.",
    tech: ["Python", "Django", "Requests", "BeautifulSoup", "Automation"],
    links: {
      demo: "https://www.instagram.com/cutekittensheaven/",
      github: "https://github.com/Sky-Cooper/Social-Autoposting-saas",
      live: "https://github.com/Sky-Cooper/Social-Autoposting-saas",
    },
  },
  {
    title: "LeetCode Challenges",
    images: [],
    role: "Algorithmic Problem Solver",
    description:
      "Solved over 100 algorithmic problems on LeetCode, sharpening problem-solving and data structure mastery across Python and Java.",
    tech: ["Python", "Java", "Algorithms", "DSA"],
    links: {
      demo: "https://github.com/Sky-Cooper/leetcode",
      github: "https://github.com/Sky-Cooper/leetcode",
      live: "https://github.com/Sky-Cooper/leetcode",
    },
  },
];
