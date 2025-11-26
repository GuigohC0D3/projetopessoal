import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/src/vanta.net";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "APIs & Backends" },
];

const projects = [
  {
    title: "Ordering & Tab Management System",
    role: "Full Stack Developer",
    type: "Web App",
    category: "web",
    featured: true,
    stack: ["React", "Flask", "PostgreSQL", "Docker"],
    description:
      "Ordering system for ARJOB Club, allowing table selection, order registration, tab management and closing with full history for audits.",
    highlight: "From manual notes to a structured digital system with history and error tracking.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "BibigoAirplane – Flight Booking App",
    role: "Mobile & Backend Developer",
    type: "Mobile App",
    category: "mobile",
    stack: ["Flutter", "Firebase", "Amadeus API"],
    description:
      "Mobile app for searching flights, viewing prices and saving reservations, inspired by real airline apps and integrated with Amadeus APIs.",
    highlight: "End-to-end flow: search, seat selection, payment and boarding pass.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Internship Journal Platform",
    role: "Full Stack Developer",
    type: "Web App",
    category: "web",
    stack: ["Next.js", "Django", "JWT Auth"],
    description:
      "Platform for interns and managers to register daily logs, approvals and reports with digital signatures and PDF export.",
    highlight: "Multi-role access with secure authentication and signature workflow.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Lost & Found – ICEV",
    role: "Full Stack Developer",
    type: "Web & Mobile",
    category: "web",
    stack: ["Flutter", "Firebase", "Cloud Storage"],
    description:
      "Lost and found system for an educational institution, registering items, owners and matches between them.",
    highlight: "Reduces friction between students and administration when dealing with lost items.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "Flights API Integration",
    role: "Backend Developer",
    type: "API / Backend",
    category: "backend",
    stack: ["Node.js", "TypeScript", "Amadeus API"],
    description:
      "Backend integration service with Amadeus Flight Offers to power search and pricing features for client apps.",
    highlight: "Clean architecture with separation between services, mappers and external providers.",
    demoUrl: "",
    githubUrl: "",
  },
  {
    title: "TV Content Management for Company",
    role: "Frontend Developer",
    type: "Internal Tool",
    category: "web",
    stack: ["React", "TypeScript", "WebSockets"],
    description:
      "Dashboard to manage and schedule content for multiple TVs inside the company, with real-time updates.",
    highlight: "Centralized control of multiple screens with live sync.",
    demoUrl: "",
    githubUrl: "",
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;
    if (vantaEffect.current) return;

    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3da9fc,
      backgroundColor: 0x094067,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 15.0,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [vantaRef]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative min-h-screen text-[#094067] px-6 py-16 overflow-hidden"
    >
      {/* Vanta NET background + gradient */}
      <div ref={vantaRef} className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/80 to-[#094067]/90 -z-10 pointer-events-none" />

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
            A selection of real projects and experiments where I combine modern
            web development, clean interfaces and solid engineering practices.
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

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white/95 rounded-xl shadow-md border border-[#90b4ce33] p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                project.featured ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              {/* Topo: tipo + ícone */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#3da9fc]">
                  {project.type}
                </span>
                <div className="text-[#3da9fc]">
                  {project.category === "web" && <FaLaptopCode />}
                  {project.category === "mobile" && <FaMobileAlt />}
                  {project.category === "backend" && <FaServer />}
                </div>
              </div>

              {/* Conteúdo principal */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#094067] mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-[#5f6c7b] mb-1">
                  {project.role}
                </p>
                <p className="text-xs text-[#90b4ce] mb-3">
                  {project.highlight}
                </p>
                <p className="text-sm text-[#5f6c7b] mb-4">
                  {project.description}
                </p>
              </div>

              {/* Stack + links */}
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full bg-[#d8eefe] text-[#094067] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-3 text-sm">
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

                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-[#ef4565] text-white">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
