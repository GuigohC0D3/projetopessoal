import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNavbar(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={animateNavbar ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 bg-[#094067] shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[#fffffe] text-2xl font-bold">
              Guigoh<span className="text-[#3da9fc]">.</span>
            </h1>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors group ${
                    isActive ? "text-[#3da9fc]" : "text-[#fffffe]"
                  }`
                }
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#3da9fc] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    location.pathname === item.path ? "scale-x-100" : ""
                  }`}
                ></span>
              </NavLink>
            ))}

            {/* Botão "Hire Me" */}
            <button className="ml-6 bg-[#ef4565] text-white px-4 py-2 rounded-full hover:bg-[#e03e58] transition font-semibold">
              Hire Me
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#094067] px-4 pt-4 pb-6 space-y-3 text-[#fffffe]">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left font-medium ${
                  isActive ? "text-[#3da9fc]" : "text-[#fffffe]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button className="mt-4 bg-[#ef4565] text-white w-full px-4 py-2 rounded-full hover:bg-[#e03e58] transition font-semibold">
            Hire Me
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
