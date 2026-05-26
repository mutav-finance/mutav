import { useTranslations } from "next-intl";
import { MonoKicker } from "@/components/shared/mono-kicker";
import { WaitlistForm } from "@/components/shared/waitlist-form";

export function ImobiliariaCapture() {
  const t = useTranslations("imobiliaria");
  const items = t.raw("items") as string[];

  return (
    <section
      id="imobiliaria"
      aria-labelledby="imob-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <MonoKicker index={t("kickerIndex")} label={t("kicker")} />
          <h2
            id="imob-h2"
            className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {t("h2")}
          </h2>
          <ol className="mt-8 space-y-4 list-none">
            {items.map((line, i) => (
              <li
                key={i}
                className="font-sans text-base leading-relaxed text-text"
              >
                {line}
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-border pt-6">
            <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
              {t("cobertura.kicker")}
            </p>
            <p className="mt-3 font-sans text-base-sm leading-relaxed text-text-2">
              {t("cobertura.body")}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <WaitlistForm audience="imobiliaria" />
          <p className="mt-6 font-mono text-2xs leading-relaxed text-text-2">
            {t("dignity")}
          </p>
          <p className="mt-3 font-mono text-2xs leading-relaxed text-text-2">
            {t("consent")}
          </p>
        </div>
      </div>
    </section>
  );
}
