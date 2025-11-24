import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const resumeData = [
  // EXPERIÊNCIAS
  {
    type: "experience",
    title: "Estagiário em Desenvolvimento de Software",
    company: "Nazária Distribuidora de Farmacêuticos – Grupo Jorge Batista",
    period: "2024 - Atual",
    description:
      "Atuação como desenvolvedor Full Stack em projetos internos, com foco em sistemas corporativos (como sistema de Comandas para o Clube ARJOB), utilizando React, Next.js, TypeScript, Flask, PostgreSQL, Git, Docker e boas práticas de engenharia de software.",
  },
  {
    type: "experience",
    title: "Desenvolvedor Web (Projetos Pessoais e Freelancers)",
    company: "Projetos autorais e landing pages para clientes",
    period: "2021 - Atual",
    description:
      "Desenvolvimento de aplicações web e mobile, incluindo portfólio pessoal, sistemas de controle de comandas, landing pages para clientes e o app BibigoAirplane, utilizando React, Vue, Next.js, Flutter, Tailwind, Shadcn/ui e integração com APIs.",
  },

    // CURSOS E FORMAÇÕES COMPLEMENTARES
  {
    type: "education",
    title: "Python 3: Algoritmos, POO, Testes, TDD e Design Patterns",
    company: "Udemy",
    period: "Carga horária: 141h",
    description:
      "Formação focada em desenvolvimento Back-End com Python, cobrindo lógica, orientação a objetos, testes automatizados, TDD e padrões de projeto.",
  },
  {
    type: "education",
    title: "Formações em Desenvolvimento Web, Git, Docker e Lógica",
    company: "Alura",
    period: "Diversos cursos entre 2022 - 2024",
    description:
      "Cursos de Git e GitHub, Docker, lógica de programação com JavaScript, desenvolvimento pessoal e carreira em Back-End Python, além de participação em eventos como DNT e Oracle ONE.",
  },

  // FORMAÇÃO
  {
    type: "education",
    title: "Engenharia de Software",
    company: "Faculdade ICEV – 5º período",
    period: "2021 - Atual",
    description:
      "Graduação com foco em desenvolvimento web, bancos de dados, lógica de programação, POO, estrutura de dados, boas práticas de engenharia de software e projetos aplicados ao mercado.",
  },
  {
    type: "education",
    title: "Ensino Médio",
    company: "Unidade Escolar Colégio Impacto",
    period: "Concluído em 2020",
    description:
      "Conclusão do Ensino Médio com base sólida em matemática, lógica e raciocínio crítico, que serviram de base para a área de tecnologia.",
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
            {/* Bolinha animada da timeline */}
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
                {item.type === "experience" ? <FaBriefcase /> : <FaGraduationCap />}
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
