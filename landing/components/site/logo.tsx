import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="tga"
      className={cn(
        "font-display font-bold text-accent select-none",
        "text-lg leading-none tracking-[-0.03em] lowercase",
        className,
      )}
    >
      tga
    </span>
  );
}
