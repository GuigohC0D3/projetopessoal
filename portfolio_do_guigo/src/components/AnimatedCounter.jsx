import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // cerca de 60fps
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
  }, [end, duration]);

  return (
    <h2 className="text-3xl font-bold text-[#094067] group-hover:text-[#3da9fc] transition">
      {new Intl.NumberFormat("pt-BR").format(count)}
    </h2>
  );
};

export default AnimatedCounter;
