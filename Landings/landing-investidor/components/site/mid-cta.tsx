import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function MidCta() {
  const t = useTranslations("midCta");

  return (
    <section aria-labelledby="mid-cta-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <h2
          id="mid-cta-h2"
          className="max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>
        <p className="mt-4 max-w-[36rem] font-sans text-base-sm leading-relaxed text-text-2">
          {t("body")}
        </p>
        <div className="mt-8">
          <Button variant="investidor" asChild>
            <a href="#investidor-form">{t("cta")}</a>
          </Button>
        </div>
        {t("note") && (
          <p className="mt-4 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
            {t("note")}
          </p>
        )}
      </div>
    </section>
  );
}
