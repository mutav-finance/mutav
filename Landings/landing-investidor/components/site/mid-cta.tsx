import { useTranslations } from "next-intl";

export function MidCta() {
  const t = useTranslations("midCta");

  return (
    <section aria-labelledby="mid-cta-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <div className="max-w-[52rem]">
          <h2
            id="mid-cta-h2"
            className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {t("h2")}
          </h2>
          <p className="mt-4 font-sans text-base-sm leading-relaxed text-text-2">
            {t("body")}
          </p>
          <a
            href="#investidor-form"
            className="mt-8 inline-block font-mono text-sm text-accent hover:text-text transition-colors duration-150 outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {t("cta")}
          </a>
          <p className="mt-4 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
}
