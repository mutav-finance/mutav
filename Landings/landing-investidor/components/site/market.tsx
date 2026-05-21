import { useTranslations } from "next-intl";

type Stat = { value: string; label: string; source?: string };

export function Market() {
  const t = useTranslations("market");
  const stats = t.raw("stats") as Stat[];

  return (
    <section
      id="market"
      aria-labelledby="market-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-[56rem] mx-auto">
          <h2
            id="market-h2"
            className="font-display font-bold text-text text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]"
          >
            {t("h2")}
          </h2>
          <p className="mt-5 font-mono text-sm text-accent">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border border border-border">
          {stats.map((s) => (
            <div key={s.label} className="p-8 lg:p-10">
              <p className="font-mono font-bold text-4xl lg:text-5xl text-text leading-none">
                {s.value}
              </p>
              <p className="mt-4 font-sans text-sm leading-snug text-text-2">
                {s.label}
              </p>
              {s.source && (
                <p className="mt-2 font-mono text-xs text-accent">
                  {s.source}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
