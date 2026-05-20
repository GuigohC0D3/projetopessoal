import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactItems = [
  {
    icon: <FaEnvelope />,
    href: "mailto:guilhermewerneckpereira11@hotmail.com",
    label: "guilhermewerneckpereira11@hotmail.com",
    external: false,
    breakAll: true,
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/guilherme-ancheschi-werneck-pereira/",
    label: "LinkedIn Profile",
    external: true,
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/GuigohC0D3",
    label: "github.com/GuigohC0D3",
    external: true,
  },
];

const Modal = ({ type, onClose }) => {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {type && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 flex items-center justify-center z-[301] px-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative text-center">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#90b4ce] hover:text-[#094067] transition"
                aria-label="Close"
              >
                <FaTimes size={18} />
              </button>

              {/* Icon */}
              <div className={`flex justify-center mb-4 text-5xl ${isSuccess ? "text-[#3da9fc]" : "text-[#ef4565]"}`}>
                {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#094067] mb-2">
                {isSuccess ? "Message sent!" : "Something went wrong"}
              </h3>

              {/* Body */}
              <p className="text-sm text-[#5f6c7b] mb-6">
                {isSuccess
                  ? "Thanks for reaching out! I'll get back to you as soon as possible."
                  : "Your message could not be sent. Please try again or contact me directly by email."}
              </p>

              {/* Action button */}
              <button
                onClick={onClose}
                className={`w-full py-2.5 rounded-full text-white text-sm font-semibold transition ${
                  isSuccess
                    ? "bg-[#3da9fc] hover:bg-[#359dec]"
                    : "bg-[#ef4565] hover:bg-[#ff5b78]"
                }`}
              >
                {isSuccess ? "Got it!" : "Close"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    const data = new FormData(formRef.current);

    // Using emailjs.send with explicit params so reply_to is always set,
    // making it clear in the inbox which email address sent the message.
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name:  data.get("user_name"),
          user_email: data.get("user_email"),
          subject:    data.get("subject"),
          message:    data.get("message"),
          reply_to:   data.get("user_email"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSending(false);
        setModal("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        setIsSending(false);
        setModal("error");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-[#094067] px-4 sm:px-6 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#094067]/85 to-[#094067]/92 -z-10 pointer-events-none" />

      <Modal type={modal} onClose={() => setModal(null)} />

      <div className="relative w-full max-w-5xl mx-auto z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s <span className="text-[#3da9fc]">Talk</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d8eefe] max-w-2xl mx-auto">
            Whether you&apos;re looking for a developer, want to collaborate on
            a project, or just say hi — feel free to reach out. I usually reply
            within a day.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white/95 rounded-xl shadow-md border border-[#90b4ce33] p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#094067] mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-[#5f6c7b] mb-4 leading-relaxed">
                I&apos;m currently open to freelance work, job opportunities and
                interesting side projects. The best way to reach me is by email
                or LinkedIn.
              </p>

              <ul className="space-y-3 text-sm">
                {contactItems.map(({ icon, href, label, external, breakAll }) => (
                  <li key={href} className="flex items-center gap-3 min-w-0">
                    <span className="shrink-0 p-2 rounded-full bg-[#d8eefe] text-[#3da9fc]">
                      {icon}
                    </span>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className={`min-w-0 hover:text-[#3da9fc] transition text-[#5f6c7b] ${breakAll ? "break-all" : "truncate"}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}

                <li className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 p-2 rounded-full bg-[#d8eefe] text-[#3da9fc]">
                    <FaLocationArrow />
                  </span>
                  <span className="text-[#90b4ce] text-sm">
                    Teresina, PI · Brazil (GMT-3)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 border border-[#90b4ce55] rounded-xl p-4 text-xs text-[#d8eefe] leading-relaxed">
              Prefer async communication? Send me a detailed message with project
              requirements, deadlines and budget estimates — I&apos;ll reply with
              suggestions and next steps.
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/95 rounded-xl shadow-md border border-[#90b4ce33] p-4 sm:p-6"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#094067] mb-4">
              Send me a message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1">
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
                  <label htmlFor="email" className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1">
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
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1">
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
                <label htmlFor="message" className="block text-xs font-semibold text-[#5f6c7b] uppercase tracking-widest mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about what you need..."
                  className="w-full rounded-md border border-[#90b4ce66] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3da9fc] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ef4565] text-white text-sm font-semibold shadow-md hover:bg-[#ff5b78] disabled:opacity-70 disabled:cursor-not-allowed transition"
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
