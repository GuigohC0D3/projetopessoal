import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    let rafId;

    const animate = () => {
      let start = 0;
      const increment = end / (duration / 16);
      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          rafId = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (node) observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, duration]);

  return (
    <h2 ref={ref} className="text-3xl font-bold text-[#094067] group-hover:text-[#3da9fc] transition">
      {new Intl.NumberFormat("pt-BR").format(count)}
    </h2>
  );
};

export default AnimatedCounter;
