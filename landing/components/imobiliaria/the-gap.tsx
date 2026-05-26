import { useTranslations } from "next-intl";
import { MonoKicker } from "@/components/shared/mono-kicker";

type GapItem = { label: string; headline: string; body: string };

export function TheGap() {
  const t = useTranslations("gap");
  const items = t.raw("items") as GapItem[];

  return (
    <section
      id="the-gap"
      aria-labelledby="gap-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="gap-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {items.map((g) => (
            <li key={g.label} className="border-t border-border pt-6">
              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                {g.label}
              </p>
              <p className="mt-4 font-display font-bold text-xl leading-tight text-text">
                {g.headline}
              </p>
              <p className="mt-3 font-sans text-base-sm leading-relaxed text-text-2">
                {g.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
