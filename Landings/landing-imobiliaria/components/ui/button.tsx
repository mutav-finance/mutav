import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap select-none transition-[background-color,border-color,color] duration-150 ease-out outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        // Investidor primary — transparent + amber border, fills on hover
        investidor:
          "bg-transparent border border-accent text-accent font-mono font-medium text-sm hover:bg-accent hover:text-canvas",
        // Imobiliárias primary — solid amber fill + dark text
        imobiliarias:
          "bg-accent border border-accent text-[#1A1A1A] font-sans font-medium text-base-sm hover:bg-accent-dim",
        // Outline — transparent + neutral border (secondary CTAs)
        outline:
          "bg-transparent border border-border text-text-2 font-sans font-medium text-base-sm hover:border-accent hover:text-text",
        // Ghost — minimal, no chrome (language toggle / chyron CTAs)
        ghost:
          "bg-transparent border border-transparent text-text-2 font-mono font-medium text-2xs hover:text-text",
      },
      size: {
        default: "h-10 px-6",
        lg: "h-11 px-6", // 44px — Investidor capture submit per fix-006
        imo: "h-12 px-6", // 48px — Imobiliárias spec
        sm: "h-8 px-3",
        chip: "h-6 px-2",
      },
    },
    defaultVariants: {
      variant: "investidor",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
