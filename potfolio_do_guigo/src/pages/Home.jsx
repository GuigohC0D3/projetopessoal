import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion as Motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaCode,
  FaProjectDiagram,
  FaLayerGroup,
  FaGitAlt,
} from "react-icons/fa";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/src/vanta.net"; // Aqui trocamos de BIRDS para NET
import profileImg from "../assets/Guigo.png";
import AnimatedCounter from "../components/AnimatedCounter";

const Home = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
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
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  const stats = [
    {
      label: "Years of Experience",
      end: 2,
      icon: <FaCode />,
      tooltip: "Time since I started working professionally as a developer",
    },
    {
      label: "Completed Projects",
      end: 10,
      icon: <FaProjectDiagram />,
      tooltip: "Projects successfully completed",
    },
    {
      label: "Technologies Mastered",
      end: 8,
      icon: <FaLayerGroup />,
      tooltip: "Tech stacks I confidently work with",
    },
    {
      label: "Code Commits",
      end: 625,
      icon: <FaGitAlt />,
      tooltip: "Public commits made across my Git repositories",
    },
  ];

  return (
    <section className="relative min-h-screen text-[#094067] flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
      {/* 🔹 Fundo animado NET */}
      <div ref={vantaRef} className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/80 to-[#094067]/90 -z-10 pointer-events-none" />

      <div className="relative w-full max-w-6xl grid md:grid-cols-2 items-center gap-12 z-10">
        <Motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-[#ffffff]">
            Software Developer
          </p>
          <h1 className="text-4xl  text-[#137dce] sm:text-5xl font-bold mt-2">
            Hello I'm{" "}
            <span className="text-[#3da9fc]">
              Guilherme Ancheschi Werneck Pereira
            </span>
          </h1>
          <p className="text-[#ffffff] mt-4 max-w-md mx-auto md:mx-0">
            I create elegant and functional web applications using modern
            technologies. Let's build something amazing together!
          </p>

          <div className="flex justify-center md:justify-start flex-wrap items-center gap-4 mt-6">
            <a
              href="/Guilherme Ancheschi Werneck Pereira - Currículo (4) (2) (1).pdf"
              download
              className="flex items-center gap-2 px-6 py-2 border border-[#3da9fc] text-[#3da9fc] rounded hover:bg-[#3da9fc] hover:text-white transition"
            >
              <FaDownload /> Download CV
            </a>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/GuigohC0D3"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-xl text-[#3da9fc] hover:text-[#359dec] transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-ancheschi-werneck-pereira/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl text-[#3da9fc] hover:text-[#359dec] transition" />
              </a>
              <a
                href="https://www.instagram.com/guigohwerneck?igsh=MWZ5Y2U3bXgwZzU5bw=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-xl text-[#3da9fc] hover:text-[#359dec] transition" />
              </a>
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center z-10"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center">
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute w-[110%] h-[110%] rounded-full border-2 border-dashed border-transparent opacity-30 pointer-events-none"
            />
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.05}
              transitionSpeed={2500}
              className="w-full h-full"
            >
              <img
                src={profileImg}
                alt="Perfil"
                className="w-full h-full object-cover object-top rounded-full shadow-xl"
              />
            </Tilt>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="relative mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center z-10"
      >
        {stats.map((item, i) => (
          <Motion.div
            key={i}
            className="group bg-white hover:bg-[#e0f2ff] rounded-lg py-6 px-4 shadow transition duration-300 hover:scale-105 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          >
            <div className="text-3xl mb-2 text-[#3da9fc] mx-auto">
              {item.icon}
            </div>
            <AnimatedCounter end={item.end} />
            <p className="text-sm text-[#5f6c7b] mt-1 group-hover:text-[#3da9fc] transition">
              {item.label}
            </p>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#3da9fc] text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none">
              {item.tooltip}
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
};

export default Home;
