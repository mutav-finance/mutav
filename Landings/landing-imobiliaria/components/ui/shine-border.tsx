import React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  as?: React.ElementType;
  borderWidth?: number;
  duration?: number;
  color?: string;
  fill?: string;
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  as: Tag = "div",
  borderWidth = 1,
  duration = 14,
  color = "var(--accent)",
  fill,
  className,
  children,
}: ShineBorderProps) {
  return (
    <Tag
      className={cn("shine-border", className)}
      style={{
        "--shine-border-width": `${borderWidth}px`,
        "--shine-duration": `${duration}s`,
        "--shine-gradient": `radial-gradient(transparent, transparent, ${color}, transparent, transparent)`,
        ...(fill ? { "--shine-fill": fill } : {}),
      } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
