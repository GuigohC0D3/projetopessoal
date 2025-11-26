import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/src/vanta.net";

const resumeData = [
  // EXPERIENCE
  {
    type: "experience",
    title: "Software Development Intern",
    company:
      "Nazária Distribuidora de Farmacêuticos – Grupo Jorge Batista",
    period: "2024 - Present",
    description:
      "Full Stack developer in internal corporate projects, such as the ordering system for ARJOB Club, using React, Next.js, TypeScript, Flask, PostgreSQL, Git, Docker and software engineering best practices.",
  },
  {
    type: "experience",
    title: "Web Developer (Personal Projects & Freelance)",
    company: "Own projects and landing pages for clients",
    period: "2021 - Present",
    description:
      "Development of web and mobile applications, including personal portfolio, ordering and tab management systems, landing pages for clients and the BibigoAirplane app, using React, Vue, Next.js, Flutter, Tailwind, Shadcn/UI and API integrations.",
  },

  // COURSES & COMPLEMENTARY EDUCATION
  {
    type: "education",
    title: "Python 3: Algorithms, OOP, Tests, TDD and Design Patterns",
    company: "Udemy",
    period: "Workload: 141 hours",
    description:
      "Training focused on Back-End development with Python, covering logic, object-oriented programming, automated tests, TDD and design patterns.",
  },
  {
    type: "education",
    title: "Web Development, Git, Docker and Logic Tracks",
    company: "Alura",
    period: "Several courses between 2022 - 2024",
    description:
      "Courses on Git and GitHub, Docker, programming logic with JavaScript, personal development and Back-End career with Python, plus participation in events such as DNT and Oracle ONE.",
  },

  // FORMAL EDUCATION
  {
    type: "education",
    title: "Software Engineering",
    company: "ICEV College – 6th semester",
    period: "2021 - Present",
    description:
      "Bachelor’s degree focused on web development, databases, programming logic, OOP, data structures, software engineering best practices and real-world projects.",
  },
  {
    type: "education",
    title: "High School",
    company: "Colégio Impacto",
    period: "Finished in 2020",
    description:
      "High school completed with a strong base in math, logic and critical thinking, which helped a lot in the technology path.",
  },
];

const Resume = () => {
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

  return (
    <section className="relative min-h-screen text-[#094067] px-6 py-16 overflow-hidden">
      {/* Vanta NET background + gradient */}
      <div ref={vantaRef} className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/80 to-[#094067]/90 -z-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white py-8"
        >
          My <span className="text-[#3da9fc]">Resume</span>
        </motion.h2>

        <div className="relative pl-6 border-l-4 border-[#3da9fc] space-y-12">
          {resumeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-pointer group"
            >
              {/* animated timeline dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 top-1.5 w-3 h-3 bg-[#3da9fc] rounded-full shadow-md"
              />

              <div className="ml-4 bg-white/95 border-l-4 border-[#3da9fc] pl-6 py-4 rounded shadow-md group-hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold flex items-center gap-2 group-hover:text-[#3da9fc]">
                  {item.type === "experience" ? (
                    <FaBriefcase />
                  ) : (
                    <FaGraduationCap />
                  )}
                  {item.title}
                </h4>
                <p className="text-sm text-[#5f6c7b]">{item.company}</p>
                <p className="text-sm italic text-[#5f6c7b]">
                  {item.period}
                </p>
                <p className="text-sm mt-2 text-[#5f6c7b]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
