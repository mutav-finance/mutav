import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo — brand lockup (icon + wordmark) with swappable asset.
 *
 * Today: renders `public/brand/logo.png` (the GitHub org M-mark, 231×231)
 * alongside the styled "mutav" wordmark in accent color.
 *
 * To swap the icon (e.g. when the SVG arrives):
 *   1. Drop the new asset at `public/brand/<filename>`
 *   2. Update the three constants below:
 *      - `BRAND_LOGO_SRC` → public path (or `null` for wordmark-only)
 *      - `BRAND_LOGO_INTRINSIC_*` → asset's natural pixel size (next/image
 *        uses this for layout-shift prevention; displayed size is driven
 *        by Tailwind `h-*` below)
 *
 * Variants:
 *   - Default: lockup (icon + wordmark)
 *   - `BRAND_LOGO_SRC = null`: wordmark-only fallback
 *   - Override sizing/spacing via `className` (e.g. `<Logo className="h-6 gap-3" />`)
 */

const BRAND_LOGO_SRC: string | null = "/brand/logo.svg";
const BRAND_LOGO_INTRINSIC_WIDTH = 72;
const BRAND_LOGO_INTRINSIC_HEIGHT = 60;

type Props = {
  className?: string;
  /** Override the default "mutav" aria-label. */
  ariaLabel?: string;
};

export function Logo({ className, ariaLabel = "mutav" }: Props) {
  return (
    <span
      aria-label={ariaLabel}
      className={cn("inline-flex items-center gap-2 select-none", className)}
    >
      {BRAND_LOGO_SRC ? (
        <Image
          src={BRAND_LOGO_SRC}
          alt=""
          width={BRAND_LOGO_INTRINSIC_WIDTH}
          height={BRAND_LOGO_INTRINSIC_HEIGHT}
          className="h-7 w-auto"
          priority
        />
      ) : null}
      <span
        aria-hidden={BRAND_LOGO_SRC ? "true" : undefined}
        className="font-display font-bold text-accent text-lg leading-none tracking-[-0.03em] lowercase"
      >
        mutav
      </span>
    </span>
  );
}
