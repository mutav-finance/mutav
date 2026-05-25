"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
}

export function Typewriter({
  text,
  speed = 40,
  cursor = true,
  cursorChar = "|",
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const id = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(id);
  }, [displayed, text, speed, active]);

  useEffect(() => {
    if (!cursor) return;
    const id = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(id);
  }, [cursor]);

  const newlineIdx = displayed.indexOf("\n");
  const before = newlineIdx === -1 ? displayed : displayed.slice(0, newlineIdx);
  const after  = newlineIdx === -1 ? ""        : displayed.slice(newlineIdx + 1);

  return (
    <span ref={ref} className={className}>
      <span className="text-accent">{before}</span>
      {after && (
        <>
          {"\n"}
          <span className="text-text">{after}</span>
        </>
      )}
      {cursor && (
        <span
          className="ml-1 transition-opacity duration-75 text-accent"
          style={{ opacity: showCursor ? 1 : 0 }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}
