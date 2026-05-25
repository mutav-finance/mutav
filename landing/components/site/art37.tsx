import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

export function Art37() {
  const t = useTranslations("art37");

  return (
    <section aria-labelledby="art37-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <MonoKicker label={t("kicker")} />
          <h2
            id="art37-h2"
            className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {t("h2")}
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-sans text-base-sm leading-relaxed text-text-2">
            {t("body")}
          </p>
          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2 border-t border-border pt-4">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
}
