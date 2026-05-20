import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

type Stat = { value: string; label: string; note: string };

export function Market() {
  const t = useTranslations("market");
  const stats = t.raw("stats") as Stat[];

  return (
    <section
      id="market"
      aria-labelledby="market-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="market-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-16 grid gap-px bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="bg-surface p-8">
              <p className="font-mono font-bold text-4xl lg:text-5xl text-text leading-none">
                {s.value}
              </p>
              <p className="mt-4 font-sans text-sm leading-snug text-text-2">
                {s.label}
              </p>
              <p className="mt-2 font-mono text-2xs uppercase tracking-[0.03em] text-accent">
                {s.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
