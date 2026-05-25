"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

interface ScrambleButtonProps extends VariantProps<typeof buttonVariants> {
  children: string;
  href?: string;
  className?: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

export function ScrambleButton({
  children,
  href,
  variant,
  size,
  className,
  type,
  disabled,
}: ScrambleButtonProps) {
  const [displayText, setDisplayText] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  const scramble = useCallback(() => {
    if (disabled) return;
    frameRef.current = 0;
    const duration = children.length * 3;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      frameRef.current++;
      const progress = frameRef.current / duration;
      const revealedLength = Math.floor(progress * children.length);

      setDisplayText(
        children
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealedLength) return children[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (frameRef.current >= duration) {
        clearInterval(intervalRef.current!);
        setDisplayText(children);
      }
    }, 30);
  }, [children, disabled]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    setDisplayText(children);
  }, [children]);

  const cls = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a href={href} className={cls} onMouseEnter={scramble}>
        {displayText}
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      className={cls}
      onMouseEnter={scramble}
    >
      {displayText}
    </button>
  );
}
