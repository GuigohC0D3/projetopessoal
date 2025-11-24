import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaDatabase,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de aplicações modernas, performáticas e escaláveis usando React, Next.js e TypeScript.",
    icon: <FaCode />,
    color: "#3da9fc",
  },
  {
    title: "Design Responsivo",
    description:
      "Layouts que se adaptam perfeitamente a todos os dispositivos, priorizando UX e acessibilidade.",
    icon: <FaMobileAlt />,
    color: "#ef4565",
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas e visualmente atraentes com foco no usuário e consistência de marca.",
    icon: <FaPaintBrush />,
    color: "#fca311",
  },
  {
    title: "APIs e Banco de Dados",
    description:
      "Integrações com APIs REST/GraphQL e gerenciamento eficiente de dados com bancos modernos como PostgreSQL.",
    icon: <FaDatabase />,
    color: "#00b894",
  },
  {
    title: "Segurança em Aplicações Web",
    description:
      "Análise e mitigação de vulnerabilidades em aplicações web, seguindo boas práticas e referências como OWASP Top 10.",
    icon: <FaShieldAlt />,
    color: "#ef4565",
  },
  {
    title: "Boas Práticas em Cyber Security",
    description:
      "Orientação em políticas de segurança, autenticação segura, senhas fortes, backups e proteção de dados sensíveis.",
    icon: <FaLock />,
    color: "#5f6c7b",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-[#fffffe] text-[#094067] px-6 py-16 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meus <span className="text-[#3da9fc]">Serviços</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.02}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="text-4xl p-4 rounded-full"
                  style={{
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-[#5f6c7b] text-sm">{service.description}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
