import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaBrain,
} from "react-icons/fa";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI / Research" },
];

const projects = [
  {
    title: "Peticionador",
    role: "Full Stack Developer",
    type: "Web App",
    category: "web",
    featured: true,
    impact: "R$40k project · ~R$3k/mo savings · 2h saved per petition",
    stack: ["React", "Vite", "Flask", "PostgreSQL", "Firestore", "Docker", "Google Cloud Run"],
    description:
      "Complete system for law firms with automatic generation of legal petitions (.docx), client and legal thesis management. Interface built with Tailwind CSS, Radix UI, Framer Motion and Recharts. Containerized with Docker, deployed on Google Cloud Run with CI/CD via Cloud Build.",
    highlight: "From manual drafting to automated petitions in seconds — real ROI delivered.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "BEES B2B — Ambev",
    role: "Backend Developer (Intern)",
    type: "Enterprise API",
    category: "backend",
    featured: true,
    impact: "Production · National scale · Ambev platform",
    stack: ["Python 3.12", "Django", "Django REST Framework", "APScheduler", "Pytest"],
    description:
      "Modules for the B2B BEES platform used by Ambev distributors nationwide. Delivered account management, dynamic delivery windows and KPI flexibility features in a production environment, following professional code standards alongside a third-party team.",
    highlight: "Enterprise production code for one of Brazil's largest beverage companies.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "App Barbearia",
    role: "Mobile & Backend Developer",
    type: "Mobile App",
    category: "mobile",
    featured: false,
    impact: "In active real use",
    stack: ["Flutter", "Dart", "NestJS", "Prisma", "PostgreSQL"],
    description:
      "Mobile app in real-world use for barbershop scheduling and management, with admin panel and a secure REST API built with NestJS and Prisma ORM.",
    highlight: "End-to-end mobile: scheduling, admin panel, secure REST API — live in production.",
    demoUrl: "",
    githubUrl: "https://github.com/GuigohC0D3/app_barbearia",
  },
  {
    title: "Círculo de Fogo — TCC",
    role: "AI / Research Developer",
    type: "AI Research",
    category: "ai",
    featured: false,
    impact: "Academic · AI-driven research",
    stack: ["Python", "Machine Learning", "Climatic Data APIs", "AI"],
    description:
      "Predictive AI system to estimate forest fire spread velocity, integrating climatic, environmental and land-cover data to outperform traditional models and optimize emergency responses.",
    highlight: "AI-powered fire behavior prediction surpassing traditional simulation models.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Soil Health Assistance System",
    role: "Full Stack Developer",
    type: "Web App",
    category: "web",
    featured: false,
    impact: "Open-source MVP",
    stack: ["Vue 3", "FastAPI", "PostgreSQL", "Docker Compose"],
    description:
      "Full-stack MVP to automate soil management recommendations based on lab analyses. JWT authentication, Swagger-documented API and Docker Compose infrastructure.",
    highlight: "From soil data to actionable farming insights with secure full-stack architecture.",
    demoUrl: "",
    githubUrl: "https://github.com/GuigohC0D3/soil-health-assistance-system",
  },
  {
    title: "Personal Portfolio",
    role: "Frontend Developer",
    type: "Web App",
    category: "web",
    featured: false,
    impact: "Live & deployed",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
    description:
      "Professional portfolio showcasing projects, tech stack and contact channels. Features animated 3D Vanta/Three.js backgrounds, smooth transitions and live GitHub API stats.",
    highlight: "This very site — built with React, animated with Framer Motion and Three.js.",
    demoUrl: "https://guilhermeancheschiwerneckpereiraportfoli-g05v.onrender.com",
    githubUrl: "",
  },
];

const categoryIcon = {
  web: <FaLaptopCode />,
  mobile: <FaMobileAlt />,
  backend: <FaServer />,
  ai: <FaBrain />,
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative min-h-screen text-[#094067] px-6 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/85 to-[#094067]/92 -z-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-[#3da9fc]">Work</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d8eefe] max-w-2xl mx-auto">
            Real projects — from enterprise production APIs to mobile apps in active use.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 text-xs sm:text-sm rounded-full border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-[#3da9fc] text-white border-[#3da9fc] shadow-md"
                  : "bg-white/10 text-[#d8eefe] border-[#90b4ce55] hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-white/95 rounded-xl shadow-md border border-[#90b4ce33] p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                project.featured ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {/* Top row */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#3da9fc]">
                      {project.type}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#ef4565] text-white w-fit">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="text-[#3da9fc] text-lg mt-0.5">
                    {categoryIcon[project.category]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#094067] mb-0.5">{project.title}</h3>
                <p className="text-xs font-semibold text-[#5f6c7b] mb-2">{project.role}</p>

                {/* Impact badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#d8eefe] text-[#094067] text-xs font-semibold mb-3">
                  {project.impact}
                </div>

                <p className="text-xs text-[#3da9fc] font-medium mb-2 leading-snug">
                  {project.highlight}
                </p>
                <p className="text-sm text-[#5f6c7b] mb-4">{project.description}</p>
              </div>

              {/* Stack + links */}
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-[#f0f7ff] text-[#094067] text-xs border border-[#90b4ce33]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex gap-3 text-sm pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-[#3da9fc] hover:text-[#ef4565] transition"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-[#3da9fc] hover:text-[#ef4565] transition"
                      >
                        <FaExternalLinkAlt />
                        <span>Live demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
