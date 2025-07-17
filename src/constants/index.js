import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github
} from "../assets";
import pawnpatch from "../assets/logo pwn&patch light background + name.png";
import yottabyte from "../assets/image.png";
import codingbetounsi from "../assets/image copy.png";
import geekshack from "../assets/geekshack.png";
import codeherways from "../assets/codeHerWays.png";
import aws from "../assets/aws.png";
import onset from "../assets/onSet.png";
import ipeis from "../assets/ipeis.png";
import ensit from "../assets/ensit.png";
import lupus from "../assets/lupus.png";
import evo2 from "../assets/evo2.png";
import meetAI from "../assets/meetAi.png";
import project from "../assets/project.png";
import mobileapp from "../assets/mobileapp.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
  {
    title: "Backend Specialist",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
];

const technologies = [
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Three.js", icon: threejs },
  { name: "CSS", icon: css },
  { name: "HTML", icon: html },
];

const experiences = [
  {
    title: "AI & Software Engineering Intern",
    company_name: "Pawn & Patch",
    icon: pawnpatch,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Developed backend services to automate security analysis from vendors like *VirusTotal* and *AbuseIPDB*.",
      "Built interactive dashboards and reports for threat scoring and incident details while engineering a custom pipeline to handle bulk lookups with efficient queuing and rate-limiting strategies.",
      "Contributed to intelligent threat classification and predictive risk scoring using *machine learning*.",
      "Collaborated with a small team using *Git*, *Ruby on Rails*, *PostgreSQL*, and *Python*."
    ],
  },
  {
    title: "AI & Software Engineering Intern",
    company_name: "Yottabyte",
    icon: yottabyte,
    iconBg: "#E6DEDD",
    date: "July 2025 - August 2025",
    points: [
      "Contributed to the development of an AI-powered video call platform with real-time communication and intelligent meeting features.",
      "Implemented automated meeting summaries, transcript generation, and AI-based chat using *OpenAI*.",
      "Worked across the full stack using *Next.js 15*, *React 19*, *Tailwind CSS*, *Shadcn UI*, and *FastAPI* while integrating third-party services including *Stream Video/Chat SDKs* and *Stripe* for payments.",
      "Deployed backend services using *Inngest* and serverless infrastructure for scalable, real-time performance."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Coding Betounsi",
    icon: codingbetounsi,
    iconBg: "#383E56",
    date: "July 2024 - August 2024",
    points: [
      "Developed a full-stack Point of Sale (POS) application using *Angular* and *FastAPI (Python)*.",
      "Integrated authentication and role-based access control for secure user management.",
      "Received code reviews and applied feedback to improve code quality and best practices, gaining valuable experience in collaborative development processes."
    ],
  },
];

const testimonials = [
  {
    testimonial: "GeeksHack 4.0 Hackathon",
    name: "Hackathon Achievement",
    designation: "Certificate",
    company: "GeeksHack 4.0",
    image: geekshack,
  },
  {
    testimonial: "Code Her Ways 2.0 Hackathon",
    name: "Hackathon Achievement",
    designation: "Certificate",
    company: "Code Her Ways 2.0",
    image: codeherways,
  },
  {
    testimonial: "AWS Machine Learning Foundations",
    name: "Amazon Web Services",
    designation: "Certificate",
    company: "Amazon Web Services",
    image: aws,
  },
  {
    testimonial: "English Onset - B2",
    name: "English",
    designation: "Certificate",
    company: "Onset",
    image: onset,
  },
];

const projects = [
  {
    name: "LupusAI - AI Powered GitHub Assistant for Developers",
    description:
      "Built and deployed a full-stack GitHub-style development tool using Next.js 15 and Google Gemini AI. Features include repository-based Q&A with RAG (Retrieval-Augmented Generation), smart commit insights, user authentication via Clerk, and real-time meeting transcriptions with AssemblyAI. Integrated Stripe for payments and deployed on Vercel with NeonDB for scalable data management.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "gemini", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "shadcn", color: "blue-text-gradient" },
      { name: "stripe", color: "green-text-gradient" },
      { name: "neondb", color: "pink-text-gradient" },
      { name: "firebase", color: "blue-text-gradient" },
      { name: "assemblyai", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: lupus,
    source_code_link: "https://github.com/Esra2brahmi/github-ai",
  },
  {
    name: "AI-Powered DNA Mutation Pathogenicity Predictor",
    description:
      "Developed a full-stack web application to predict the pathogenicity of DNA mutations using the Evo2 language model. Deployed a FastAPI backend with GPU acceleration via Modal and created a Next.js + Tailwind frontend for genome browsing, mutation input, and AI-based variant effect analysis. Integrated with UCSC and NCBI APIs for comprehensive genomic data access.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "modal", color: "pink-text-gradient" },
      { name: "evo2", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "shadcn", color: "pink-text-gradient" },
      { name: "ucsc api", color: "blue-text-gradient" },
      { name: "ncbi", color: "green-text-gradient" },
    ],
    image: evo2,
    source_code_link: "https://github.com/Esra2brahmi/AI-Powered-DNA-Variant-Effect-Prediction-Tool",
  },
  {
    name: "AI-Powered Video Call Platform with Real-Time Agents",
    description:
      "Built a comprehensive full-stack application enabling real-time video calls with AI agents, automated meeting transcripts, summaries, and Q&A functionality. Integrated Stream SDK for video capabilities, OpenAI for intelligent features, and Inngest for asynchronous job processing. Supports subscription management, authentication, and mobile responsiveness.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "shadcn", color: "blue-text-gradient" },
      { name: "stream", color: "green-text-gradient" },
      { name: "openai", color: "pink-text-gradient" },
      { name: "inngest", color: "blue-text-gradient" },
      { name: "polar", color: "green-text-gradient" },
    ],
    image: meetAI,
    source_code_link: "https://github.com/",
  },
  {
    name: "ProjectSync — Academic Project Management Platform",
    description:
      "Developed a web platform to digitize and streamline academic project management in universities. Features include project tracking, task management, team communication, and document sharing in a unified interface. Built using .NET and React with Scrum methodology for flexibility and continuous improvement throughout the development process.",
    tags: [
      { name: ".net", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "c#", color: "pink-text-gradient" },
      { name: "scrum", color: "blue-text-gradient" },
    ],
    image: project,
    source_code_link: "https://github.com/Esra2brahmi/ProjectSync_server",
  },
  {
    name: "MedLink — Healthcare Appointment & Document Management App",
    description:
      "Created a cross-platform mobile application designed to streamline appointment scheduling, consultations, and medical document sharing for both patients and healthcare professionals. Developed with Ionic 6+ and Angular for the frontend and Flask for the backend API, ensuring a smooth and efficient user experience across all devices.",
    tags: [
      { name: "ionic", color: "blue-text-gradient" },
      { name: "angular", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
      { name: "restapi", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: mobileapp,
    source_code_link: "https://github.com/",
  },
];

const education = [
  {
    degree: "Master's Degree in Intelligent Systems (ISI)",
    school: "ENSIT - National Higher School of Engineers of Tunis",
    date: "September 2025 - June 2026",
    image: ensit,
  },
  {
    degree: "Software Engineering Degree",
    school: "ENSIT - National Higher School of Engineers of Tunis",
    date: "September 2023 - June 2026",
    image: ensit,
  },
  {
    degree: "Preparatory Cycle Degree for Engineering Studies in Mathematics and Physics",
    school: "IPEIS - Preparatory Institute for Engineering Studies of Sfax",
    date: "September 2021 - June 2023",
    image: ipeis,
  },
];

export { services, technologies, experiences, testimonials, projects, education };
