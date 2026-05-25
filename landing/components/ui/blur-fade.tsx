"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";

interface BlurFadeProps {
  as?: keyof typeof motion;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
  yOffset?: number;
  blur?: string;
}

export function BlurFade({
  as = "div",
  children,
  className,
  style,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const variants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0,       opacity: 1, filter: "blur(0px)" },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = (motion as any)[as];

  return (
    <AnimatePresence>
      <MotionTag
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
        className={className}
        style={style}
      >
        {children}
      </MotionTag>
    </AnimatePresence>
  );
}
