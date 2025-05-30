import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import profileImg from "../assets/foto_profissional.png"; // substitua pela sua imagem

const Home = () => {
  return (
    <section className="min-h-screen bg-[#fffffe] text-[#094067] flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 items-center gap-12">
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

          <div className="flex gap-4 mt-6 justify-center md:justify-start flex-wrap">
            <a
              href="/cv-guigo.pdf"
              download
              className="flex items-center gap-2 px-6 py-2 border border-[#3da9fc] text-[#3da9fc] rounded hover:bg-[#3da9fc] hover:text-white transition"
            >
              <FaDownload /> Download CV
            </a>
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
        </motion.div>

        {/* Foto à direita com efeito Tilt */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Halo rotativo removido */}
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                },
              }}
              className="absolute w-[110%] h-[110%] rounded-full border-2 border-dashed border-transparent opacity-30 pointer-events-none"
            ></motion.div>

            {/* Efeito Tilt com imagem sem bordas */}
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-[#094067]">2</h2>
          <p className="text-sm text-[#5f6c7b]">Anos de experiência</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#094067]">10</h2>
          <p className="text-sm text-[#5f6c7b]">Projetos finalizados</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#094067]">8</h2>
          <p className="text-sm text-[#5f6c7b]">Tecnologias dominadas</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#094067]">625</h2>
          <p className="text-sm text-[#5f6c7b]">Commits de código</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
