"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  words: string[];
  className?: string;
}

export function AnimatedSolutionsHeading({ words, className }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrent((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(id);
  }, [current, words.length]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <h2 id="solutions-h2" className={`${className} flex items-baseline gap-4`}>
      <span className="text-accent">REAL</span>
      <span className="relative overflow-hidden">
        <span className="invisible" aria-hidden>{longest}</span>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 flex items-center justify-start font-bold"
            initial={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              current === i
                ? { y: 0, opacity: 1 }
                : { y: current > i ? "-150%" : "150%", opacity: 0 }
            }
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h2>
  );
}
