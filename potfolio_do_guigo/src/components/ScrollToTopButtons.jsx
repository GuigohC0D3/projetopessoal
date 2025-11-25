import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 200; // px de rolagem até aparecer

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop || 0;

      setIsVisible(currentScrollTop > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const start =
      window.pageYOffset || document.documentElement.scrollTop || 0;
    const duration = 700; // ms da animação

    if (start === 0) return;

    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing suave (ease-out cúbico)
      const ease = 1 - Math.pow(1 - progress, 3);

      const newY = start * (1 - ease);
      window.scrollTo(0, newY);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 z-50
        px-3 py-2
        text-white bg-[#e03e58]
        rounded-full cursor-pointer
        shadow-lg
        transition-transform duration-500
        hover:scale-110 active:scale-90
        focus:outline-none
      "
      aria-label="Back to top"
    >
      <FaChevronUp />
      <span className="sr-only">Back to top</span>
    </button>
  );
};

export default ScrollToTopButton;
