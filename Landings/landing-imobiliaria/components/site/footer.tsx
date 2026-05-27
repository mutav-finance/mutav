import { useTranslations } from "next-intl";
import { Logo } from "./logo";
import { LiveSquare } from "./live-square";
import { LanguageToggle } from "./language-toggle";

type FooterLink = { label: string; href: string };
type FooterColumn = { label: string; links: FooterLink[] };

export function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const columns = t.raw("columns") as FooterColumn[];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <LiveSquare label={tNav("liveLabel")} />
            </div>
            <p className="mt-6 font-sans text-base-sm leading-relaxed text-text max-w-[24rem]">
              {t("tagline")}
            </p>
            <p className="mt-3 font-mono text-xs text-text-2 max-w-[24rem]">
              {t("subtitle")}
            </p>
          </div>

          <nav
            aria-label={t("navLabel")}
            className="flex flex-wrap gap-12 justify-start"
          >
            {columns.map((col) => (
              <div key={col.label}>
                <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                  {col.label}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener" : undefined}
                        className="font-mono text-xs text-text-2 hover:text-text transition-[color] duration-150 ease-out outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-2xs text-text-2">
            {t("copyright", { year })}
          </p>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
}
