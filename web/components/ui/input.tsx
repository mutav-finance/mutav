import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full bg-transparent border border-border text-text",
        "px-4 font-mono text-base-sm placeholder:text-text-3",
        // Imobiliárias front gets a white surface inside the form
        "[[data-front=imobiliarias]_&]:bg-surface",
        "transition-[border-color,background-color,color] duration-150 ease-out",
        "focus:border-accent focus:outline-none",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        "aria-[invalid=true]:border-error",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
