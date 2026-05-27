import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { LiveSquare } from "./live-square";
import { LanguageToggle } from "./language-toggle";

export function SiteNav() {
  const t = useTranslations("nav");
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/95 backdrop-blur-[0px]">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6 lg:px-8">
        <a
          href="#main"
          className="flex items-center gap-3 outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-4"
          aria-label={t("logoLabel")}
        >
          <Logo />
          <LiveSquare label={t("liveLabel")} />
        </a>

        <nav aria-label="menu principal" className="hidden lg:flex items-center gap-8">
          <a
            href="#produto"
            className="font-mono text-xs uppercase tracking-[0.06em] text-text-2 hover:text-text transition-colors"
          >
            {t("produto")}
          </a>
          <a
            href="#imob-help"
            className="font-mono text-xs uppercase tracking-[0.06em] text-text-2 hover:text-text transition-colors"
          >
            {t("diferenciais")}
          </a>
          <a
            href="#team"
            className="font-mono text-xs uppercase tracking-[0.06em] text-text-2 hover:text-text transition-colors"
          >
            {t("quemSomos")}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#imobiliaria"
            className="hidden lg:inline-flex items-center px-4 h-8 font-mono text-xs uppercase tracking-[0.06em] bg-accent text-canvas hover:bg-accent/90 transition-colors"
          >
            {t("cta")} <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
