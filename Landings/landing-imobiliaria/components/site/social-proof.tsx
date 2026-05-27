import { useTranslations } from "next-intl";

export function SocialProof() {
  const t = useTranslations("socialProof");
  return (
    <section aria-labelledby="sp-heading" className="border-b border-border bg-surface-2">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 lg:py-12 flex flex-col items-center text-center gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-2">
          {t("kicker")}
        </p>
        <p className="font-display font-bold text-accent text-[4.5rem] lg:text-[6.5rem] leading-none tracking-[-0.04em] uppercase">
          {t("stat")}
        </p>
        <p
          id="sp-heading"
          className="font-display font-bold text-text text-2xl lg:text-3xl leading-[1.1] tracking-[-0.02em] uppercase"
        >
          {t("headline")}
        </p>
      </div>
    </section>
  );
}
