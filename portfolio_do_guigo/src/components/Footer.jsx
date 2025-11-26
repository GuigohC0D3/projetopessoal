import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const handleBackToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // animação do scroll
  });
};

const Footer = () => {
  return (
    <footer className=" border-t border-[#90b4ce40] bg-[#021524] text-[#d8eefe]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Coluna 1 – Branding */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white">
            Guilherme Ancheschi Werneck Pereira
          </h3>
          <p className="text-sm text-[#90b4ce]">
            Software Developer focused on building modern, scalable, and secure web experiences with clean design, seamless usability, and solid engineering practices.
          </p>
        </div>

        {/* Coluna 2 – Navegação rápida */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold tracking-widest text-[#3da9fc] uppercase">
            Navigation
          </h4>
          <nav className="flex flex-wrap gap-3 text-sm">
            <a href="#home" className="hover:text-[#3da9fc] transition">
              Home
            </a>
            <a href="#services" className="hover:text-[#3da9fc] transition">
              Services
            </a>
            <a href="#work" className="hover:text-[#3da9fc] transition">
              Work
            </a>
            <a href="#resume" className="hover:text-[#3da9fc] transition">
              Resume
            </a>
            <a href="#contact" className="hover:text-[#3da9fc] transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Coluna 3 – Social + Tech stack */}
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-[#3da9fc] uppercase">
              Connect
            </h4>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/GuigohC0D3"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-transparent hover:border-[#3da9fc] hover:bg-[#04233a] transition"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-ancheschi-werneck-pereira/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-transparent hover:border-[#3da9fc] hover:bg-[#04233a] transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/guigohwerneck?igsh=MWZ5Y2U3bXgwZzU5bw=="
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-transparent hover:border-[#3da9fc] hover:bg-[#04233a] transition"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-[#3da9fc] uppercase">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mt-2 text-xs">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-full bg-[#04233a] text-[#90b4ce] border border-[#1b3954]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* barra inferior */}
      <div className="border-t border-[#1b3954]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#90b4ce]">
          <span>
            © {new Date().getFullYear()} Guilherme Ancheschi Werneck Pereira.
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
