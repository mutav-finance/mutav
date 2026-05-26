import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo — swappable between a brand asset and a styled text wordmark.
 *
 * Today: renders `public/brand/logo.png` (the GitHub org M-mark, 231×231).
 *
 * To swap (e.g. when the SVG arrives):
 *   1. Drop the new asset at `public/brand/<filename>` — same name to
 *      overwrite, or any name to track separately
 *   2. Update the three constants below:
 *      - `BRAND_LOGO_SRC` → the public path (or `null` to fall back to text)
 *      - `BRAND_LOGO_INTRINSIC_*` → the asset's natural pixel size
 *        (next/image needs this to reserve layout space; the displayed
 *        size is still driven by Tailwind `h-*` on the component)
 *
 * Sizing:
 *   - Default rendered height: `h-7` (28px) in nav/footer
 *   - Override via `className="h-6"` etc.
 *
 * Text fallback:
 *   - Setting `BRAND_LOGO_SRC = null` reactivates the styled wordmark
 *     ("mutav" in accent color). Useful for testing, dark/light contexts
 *     where the raster doesn't fit, or interim states.
 */

// Single source of truth for swapping. Set to `null` to use the text wordmark.
const BRAND_LOGO_SRC: string | null = "/brand/logo.png";
const BRAND_LOGO_INTRINSIC_WIDTH = 231;
const BRAND_LOGO_INTRINSIC_HEIGHT = 231;

type Props = {
  className?: string;
  /** Override the default "mutav" aria-label (e.g. for a localized brand name). */
  ariaLabel?: string;
};

export function Logo({ className, ariaLabel = "mutav" }: Props) {
  if (BRAND_LOGO_SRC) {
    return (
      <Image
        src={BRAND_LOGO_SRC}
        alt={ariaLabel}
        width={BRAND_LOGO_INTRINSIC_WIDTH}
        height={BRAND_LOGO_INTRINSIC_HEIGHT}
        className={cn("h-7 w-auto select-none", className)}
        priority
      />
    );
  }

  return (
    <span
      aria-label={ariaLabel}
      className={cn(
        "font-display font-bold text-accent select-none",
        "text-lg leading-none tracking-[-0.03em] lowercase",
        className,
      )}
    >
      mutav
    </span>
  );
}
