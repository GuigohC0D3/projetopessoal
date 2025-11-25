import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion as Motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaDatabase,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/src/vanta.net";

const services = [
  {
    title: "Web Development",
    description:
      "Building modern, high-performance and scalable applications using React, Next.js and TypeScript.",
    icon: <FaCode />,
    color: "#3da9fc",
  },
  {
    title: "Responsive Design",
    description:
      "Layouts that perfectly adapt to all devices, prioritizing UX and accessibility.",
    icon: <FaMobileAlt />,
    color: "#ef4565",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing interfaces focused on the user and brand consistency.",
    icon: <FaPaintBrush />,
    color: "#fca311",
  },
  {
    title: "APIs & Databases",
    description:
      "Integrations with REST/GraphQL APIs and efficient data management using modern databases like PostgreSQL.",
    icon: <FaDatabase />,
    color: "#00b894",
  },
  {
    title: "Web Application Security",
    description:
      "Analysis and mitigation of vulnerabilities in web applications, following best practices such as OWASP Top 10.",
    icon: <FaShieldAlt />,
    color: "#ef4565",
  },
  {
    title: "Cyber Security Best Practices",
    description:
      "Guidance on security policies, secure authentication, strong passwords, backups, and protection of sensitive data.",
    icon: <FaLock />,
    color: "#5f6c7b",
  },
];

const Services = () => {
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
  }, [vantaRef]); // eslint não reclama e o ref não muda de identidade

  return (
    <section className="relative min-h-screen text-[#094067] px-6 py-16 flex flex-col items-center overflow-hidden">
      {/* 🔹 Fundo Vanta NET */}
      <div ref={vantaRef} className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/80 to-[#094067]/90 -z-10 pointer-events-none" />

      <div className="relative w-full max-w-6xl z-10">
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white py-8"
        >
          My <span className="text-[#3da9fc]">Services</span>
        </Motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {services.map((service, index) => (
            <Motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.1}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.02}
                className="bg-white/95 p-6 rounded-xl shadow-md border border-[#90b4ce33] hover:shadow-2xl transition-all duration-300"
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
                  <h3 className="text-xl font-semibold text-[#094067]">
                    {service.title}
                  </h3>
                  <p className="text-[#5f6c7b] text-sm">
                    {service.description}
                  </p>
                </div>
              </Tilt>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
