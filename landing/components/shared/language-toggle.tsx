"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const label = locale === "pt-BR" ? "Idioma" : "Language";

  const linkClass = (active: boolean) =>
    cn(
      "outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2",
      active ? "text-text" : "text-text-2 hover:text-text",
    );

  return (
    <nav
      aria-label={label}
      className={cn("flex items-center font-mono text-2xs", className)}
    >
      <span aria-hidden className="text-text-3">[ </span>
      <Link
        href={pathname}
        locale="pt-BR"
        aria-current={locale === "pt-BR" ? "true" : undefined}
        className={linkClass(locale === "pt-BR")}
      >
        pt-BR
      </Link>
      <span aria-hidden className="mx-1 text-text-3">/</span>
      <Link
        href={pathname}
        locale="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={linkClass(locale === "en")}
      >
        en
      </Link>
      <span aria-hidden className="text-text-3"> ]</span>
    </nav>
  );
}
