import { useTranslations } from "next-intl";
import { Logo } from "@/components/primitives/logo";
import { LanguageToggle } from "@/components/primitives/language-toggle";
import { ScrambleButton } from "@/components/primitives/scramble-button";

type NavLink = { label: string; href: string };

export function SiteNav() {
  const t = useTranslations("nav");
  const links = t.raw("links") as NavLink[];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/95">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6 lg:px-8">
        <a
          href="#main"
          className="flex items-center outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
          aria-label={t("logoLabel")}
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-text-2 hover:text-text transition-colors duration-150 outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageToggle />
          <ScrambleButton variant="investidor" href="#mid-cta">
            {t("ctaLabel") + " →"}
          </ScrambleButton>
        </div>
      </div>
    </header>
  );
}
