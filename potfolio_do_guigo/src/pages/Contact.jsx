import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaPaperPlane,
} from "react-icons/fa";
import * as THREE from "three";
import emailjs from "@emailjs/browser";
// @ts-ignore
import NET from "vanta/src/vanta.net";

const Contact = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!vantaRef.current || vantaEffect.current) return;

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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setIsSending(false);
          alert("Thanks for reaching out! I’ll get back to you soon. 🙂");
          e.target.reset();
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          setIsSending(false);
          alert(
            "Something went wrong while sending your message. Please try again."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-[#094067] px-6 py-16 overflow-hidden"
    >
      {/* Background */}
      <div ref={vantaRef} className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/80 to-[#094067]/90 -z-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white">
            Let&apos;s <span className="text-[#3da9fc]">Talk</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d8eefe] max-w-2xl mx-auto">
            Whether you&apos;re looking for a developer, want to collaborate on
            a project, or just say hi, feel free to reach out. I usually reply
            within a day.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white/95 rounded-xl shadow-md border border-[#90b4ce33] p-6">
              <h3 className="text-xl font-bold text-[#094067] mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-[#5f6c7b] mb-4">
                I&apos;m currently open to freelance work, job opportunities and
                interesting side projects. The best way to reach me is by email
                or LinkedIn.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#d8eefe] text-[#3da9fc]">
                    <FaEnvelope />
                  </span>
                  <a
                    href="mailto:guilhermewerneckpereira11@hotmail.com"
                    className="hover:text-[#3da9fc] transition"
                  >
                    guigohwerneckpereira11@hotmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#d8eefe] text-[#3da9fc]">
                    <FaLinkedin />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/guilherme-ancheschi-werneck-pereira/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#3da9fc] transition"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#d8eefe] text-[#3da9fc]">
                    <FaGithub />
                  </span>
                  <a
                    href="https://github.com/GuigohC0D3"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#3da9fc] transition"
                  >
                    github.com/GuigohC0D3
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-full bg-[#d8eefe] text-[#3da9fc]">
                    <FaLocationArrow />
                  </span>
                  <span className="text-[#d8eefe] sm:text-[#90b4ce]">
                    Teresina, PI · Brazil (GMT-3)
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-[#90b4ce55] rounded-xl p-4 text-xs text-[#d8eefe]">
              <p>
                Prefer async communication? You can also send me a detailed
                message with project requirements, deadlines and budget
                estimates — I&apos;ll reply with suggestions and possible next
                steps.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/95 rounded-xl shadow-md border border-[#90b4ce33] p-6"
          >
            <h3 className="text-xl font-bold text-[#094067] mb-4 flex items-center gap-2">
              Send me a message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-[#90b4ce66] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3da9fc] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-[#90b4ce66] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3da9fc] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project, opportunity, question..."
                  className="w-full rounded-md border border-[#90b4ce66] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3da9fc] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me a bit about what you need..."
                  className="w-full rounded-md border border-[#90b4ce66] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3da9fc] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#ef4565] text-white text-sm font-semibold shadow-md hover:bg-[#ff5b78] disabled:opacity-70 disabled:cursor-not-allowed transition"
              >
                <FaPaperPlane />
                {isSending ? "Sending..." : "Send message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
