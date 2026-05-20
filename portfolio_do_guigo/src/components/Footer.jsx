import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { scrollTo } from "../utils/scrollTo";

const Footer = () => {
  return (
    <footer className="border-t border-[#90b4ce40] bg-[#021524] text-[#d8eefe]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Branding */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white">
            Guilherme Ancheschi Werneck Pereira
          </h3>
          <p className="text-sm text-[#90b4ce]">
            Software Developer focused on building modern, scalable, and secure
            web experiences with clean design and solid engineering practices.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold tracking-widest text-[#3da9fc] uppercase">
            Navigation
          </h4>
          <nav className="flex flex-wrap gap-3 text-sm">
            {[
              { label: "Home", id: "home" },
              { label: "Services", id: "services" },
              { label: "Resume", id: "resume" },
              { label: "Work", id: "work" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-[#3da9fc] transition"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div className="space-y-3">
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
          <p className="text-xs text-[#5f6c7b] pt-1">
            Full Stack · Python/Django · React · Flutter
          </p>
        </div>
      </div>

      <div className="border-t border-[#1b3954]">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-[#90b4ce]">
          © {new Date().getFullYear()} Guilherme Ancheschi Werneck Pereira. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
