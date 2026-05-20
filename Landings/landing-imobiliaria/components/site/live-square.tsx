export function LiveSquare({ label }: { label: string }) {
  return (
    <span role="status" aria-label={label} className="inline-flex items-center">
      <span className="mutav-live-square block size-[6px] bg-accent" aria-hidden />
    </span>
  );
}
