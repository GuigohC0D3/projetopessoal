import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiFlutter, SiDart,
  SiNodedotjs, SiNestjs, SiPython, SiFastapi, SiFlask, SiDjango, SiPrisma,
  SiPostgresql, SiFirebase,
  SiDocker, SiGooglecloud,
  SiGit, SiGithub, SiPostman, SiFigma, SiLinux,
} from "react-icons/si";

const resumeData = [
  {
    type: "experience",
    title: "Technology Intern",
    company: "Nazária Distribuidora — BEES B2B (Ambev)",
    period: "Aug 2024 – present · Scrum/Kanban",
    tags: ["Python", "Django", "Django REST Framework", "APScheduler", "Pytest"],
    description:
      "Developed modules for the B2B BEES platform used by Ambev distributors nationwide: account management, dynamic delivery windows (delivery_window) and KPI flexibility (force_flexible_kpi). Delivered in production with professional code standards alongside a third-party team.",
  },
  {
    type: "education",
    title: "Software Engineering — 7th Semester",
    company: "Faculdade ICEV",
    period: "2021 – present",
    tags: [],
    description:
      "Bachelor's degree focused on software architecture, databases, OOP, data structures and real-world engineering projects.",
  },
  {
    type: "education",
    title: "High School",
    company: "Colégio Impacto",
    period: "Finished in 2020",
    tags: [],
    description: "Strong foundation in logic and critical thinking that shaped the technology path.",
  },
];

const certifications = [
  { title: "Introduction to Cybersecurity", org: "Cisco Networking Academy", year: "2026" },
  { title: "AWS Academy Cloud Foundations", org: "Amazon Web Services", year: "2025" },
  { title: "Docker: Containers Management", org: "Alura", year: "2024" },
  { title: "Back-End Python Career", org: "Alura", year: "2024" },
  { title: "Git & GitHub: Collaboration", org: "Alura", year: "2023" },
  { title: "Programming Logic — JavaScript", org: "Alura", year: "2022" },
];

const techStack = [
  {
    category: "Frontend",
    color: "#3da9fc",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#1a1a1a" },
      { name: "Vue 3", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#D4A017" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Mobile",
    color: "#ef4565",
    techs: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    category: "Backend",
    color: "#00b894",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Flask", icon: SiFlask, color: "#1a1a1a" },
      { name: "Django", icon: SiDjango, color: "#1a5c36" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    category: "Database",
    color: "#fca311",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#a29bfe",
    techs: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
  {
    category: "Tools",
    color: "#90b4ce",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#1a1a1a" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Linux", icon: SiLinux, color: "#1a1a1a" },
    ],
  },
];

const Resume = () => {
  return (
    <section id="resume" className="relative min-h-screen text-[#094067] px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/85 to-[#094067]/92 -z-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 py-8"
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-[#3da9fc]">Resume</span>
          </h2>
          <p className="mt-3 text-sm text-[#d8eefe] max-w-xl mx-auto">
            Full Stack Developer · 7th semester Software Engineering · in production since aug/2024
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 border-l-4 border-[#3da9fc] space-y-10 mb-14">
          {resumeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative cursor-default group"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 top-1.5 w-3 h-3 bg-[#3da9fc] rounded-full shadow-md"
              />
              <div className="ml-4 bg-white/95 border-l-4 border-[#3da9fc] pl-6 py-4 pr-4 rounded shadow-md group-hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold flex items-center gap-2 group-hover:text-[#3da9fc] transition">
                  {item.type === "experience" ? <FaBriefcase className="text-[#3da9fc]" /> : <FaGraduationCap className="text-[#3da9fc]" />}
                  {item.title}
                </h4>
                <p className="text-sm font-semibold text-[#3da9fc]">{item.company}</p>
                <p className="text-xs italic text-[#90b4ce] mb-2">{item.period}</p>
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-[#d8eefe] text-[#094067] text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-sm text-[#5f6c7b]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <FaCertificate className="text-[#3da9fc]" /> Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/95 rounded-xl p-4 shadow-md border border-[#90b4ce33] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-sm font-semibold text-[#094067]">{cert.title}</p>
                <p className="text-xs text-[#3da9fc] mt-0.5">{cert.org}</p>
                <p className="text-xs text-[#90b4ce] mt-0.5">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-5">Tech Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {techStack.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
                className="bg-white/95 rounded-xl p-5 shadow-md border border-[#90b4ce33]"
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: group.color }}
                >
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map(({ name, icon: Icon, color }) => (
                    <span
                      key={name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0f7ff] border border-[#90b4ce33] text-sm text-[#094067] hover:scale-105 transition-transform duration-150 cursor-default"
                    >
                      <Icon style={{ color, fontSize: "1rem", flexShrink: 0 }} />
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
