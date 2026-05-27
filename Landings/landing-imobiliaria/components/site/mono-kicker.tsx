import { cn } from "@/lib/utils";

export function MonoKicker({
  index,
  label,
  total,
  className,
  showLine,
}: {
  index?: string;
  total?: string;
  label: string;
  className?: string;
  showLine?: boolean;
}) {
  return (
    <p
      className={cn(
        "font-mono text-2xs tracking-[0.03em] uppercase text-text-2 flex items-center gap-3",
        className,
      )}
    >
      {showLine && <span className="block w-px h-3 bg-accent shrink-0" aria-hidden />}
      {index && total && (
        <>
          <span className="text-text">{index}</span>
          <span aria-hidden> / </span>
          <span>{total}</span>
          <span aria-hidden className="mx-2 text-text-3">
            —
          </span>
        </>
      )}
      {index && !total && (
        <>
          <span className="text-text">{index}</span>
          <span aria-hidden className="mx-2 text-text-3">
            —
          </span>
        </>
      )}
      <span>{label}</span>
    </p>
  );
}
