import { useTranslations } from "next-intl";
import { MonoKicker } from "@/components/shared/mono-kicker";

export function SeguroPrestamista() {
  const t = useTranslations("seguroPrestamista");
  const items = t.raw("items") as string[];

  return (
    <section aria-labelledby="seguro-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker index={t("kickerIndex")} label={t("kicker")} />
        <h2
          id="seguro-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-8">
          {items.map((line, i) => (
            <li key={i} className="border-t border-border pt-6">
              <p className="font-sans text-base-sm leading-relaxed text-text-2">
                {line}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
