import { cn } from "@/lib/utils";

export function Mono({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono",
        // Tabular numerals enforced globally via globals.css; class is here for clarity
        className,
      )}
    >
      {children}
    </span>
  );
}
