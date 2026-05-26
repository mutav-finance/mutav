import { useTranslations } from "next-intl";
import { Logo } from "@/components/shared/logo";
import { LiveSquare } from "@/components/shared/live-square";
import { LanguageToggle } from "@/components/shared/language-toggle";

export function SiteNav() {
  const t = useTranslations("imobiliaria.nav");
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
        <LanguageToggle />
      </div>
    </header>
  );
}
