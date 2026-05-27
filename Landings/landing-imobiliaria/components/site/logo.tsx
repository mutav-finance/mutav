import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <Image
        src="/brand/logo.svg"
        alt=""
        width={36}
        height={30}
        className="shrink-0"
        priority
      />
      <span className="font-display font-bold text-accent text-lg leading-none tracking-[-0.03em] lowercase select-none">
        mutav
      </span>
    </span>
  );
}
