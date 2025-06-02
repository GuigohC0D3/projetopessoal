import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaCode,
  FaProjectDiagram,
  FaLayerGroup,
  FaGitAlt,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profileImg from "../assets/foto_profissional.png";
import AnimatedCounter from "../components/AnimatedCounter";

const Home = () => {
  const stats = [
    {
      label: "Anos de experiência",
      end: 2,
      icon: <FaCode />,
      tooltip: "Tempo desde que comecei profissionalmente a desenvolver",
    },
    {
      label: "Projetos finalizados",
      end: 10,
      icon: <FaProjectDiagram />,
      tooltip: "Projetos concluídos com sucesso",
    },
    {
      label: "Tecnologias dominadas",
      end: 8,
      icon: <FaLayerGroup />,
      tooltip: "Stacks que domino com segurança",
    },
    {
      label: "Commits de código",
      end: 625,
      icon: <FaGitAlt />,
      tooltip: "Commits públicos realizados em projetos Git",
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative min-h-screen bg-[#fffffe] text-[#094067] flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          background: {
            color: { value: "#fffffe" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#3da9fc" },
            links: {
              color: "#3da9fc",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      <div className="w-full max-w-6xl grid md:grid-cols-2 items-center gap-12 z-10">
        {/* Texto à esquerda */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-[#5f6c7b]">
            Software Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Hello I'm <span className="text-[#3da9fc]">Guilherme</span>
          </h1>
          <p className="text-[#5f6c7b] mt-4 max-w-md mx-auto md:mx-0">
            I create elegant and functional web applications using modern
            technologies. Let's build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6">
            <a
              href="/cv-guigo.pdf"
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
                <FaGithub className="text-xl text-[#094067] hover:text-[#3da9fc] transition" />
              </a>
              <a
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-xl text-[#094067] hover:text-[#3da9fc] transition" />
              </a>
              <a
                href="https://twitter.com/seuusuario"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-xl text-[#094067] hover:text-[#3da9fc] transition" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Foto com Tilt */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center z-10"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center">
            <motion.div
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
        </motion.div>
      </div>

      {/* Estatísticas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center z-10"
      >
        {stats.map((item, i) => (
          <motion.div
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
