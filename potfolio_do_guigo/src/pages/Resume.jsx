import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const resumeData = [
  {
    type: "experience",
    title: "Desenvolvedor Front-End",
    company: "Tech Solutions",
    period: "Jan 2023 - Atual",
    description:
      "Desenvolvimento de interfaces modernas com React, integração de APIs REST e foco em performance e acessibilidade.",
  },
  {
    type: "experience",
    title: "Estagiário em Desenvolvimento Web",
    company: "Dev Company",
    period: "Jun 2022 - Dez 2022",
    description:
      "Suporte na criação de componentes reutilizáveis e páginas responsivas com React e Tailwind.",
  },
  {
    type: "education",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "Faculdade de Tecnologia",
    period: "2021 - 2023",
    description:
      "Foco em desenvolvimento web, banco de dados, lógica de programação e boas práticas de engenharia de software.",
  },
  {
    type: "education",
    title: "Curso de React Avançado",
    company: "Rocketseat",
    period: "2022",
    description:
      "Hooks, Context API, Styled Components, e projetos práticos com integração de APIs.",
  },
];

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#fffffe] text-[#094067] px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meu <span className="text-[#3da9fc]">Currículo</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto pl-6 border-l-4 border-[#3da9fc] space-y-12">
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
            {/* 🔁 Bolinha com animação contínua */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-1.5 w-3 h-3 bg-[#3da9fc] rounded-full shadow-md"
            ></motion.div>

            <div className="ml-4 bg-white border-l-4 border-[#3da9fc] pl-6 py-4 rounded shadow-md group-hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-bold flex items-center gap-2 group-hover:text-[#3da9fc]">
                {item.type === "experience" ? (
                  <FaBriefcase />
                ) : (
                  <FaGraduationCap />
                )}
                {item.title}
              </h4>
              <p className="text-sm text-[#5f6c7b]">{item.company}</p>
              <p className="text-sm italic text-[#5f6c7b]">{item.period}</p>
              <p className="text-sm mt-2 text-[#5f6c7b]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
