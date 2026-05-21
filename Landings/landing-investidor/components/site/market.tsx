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
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-px bg-border">

          {/* Left column */}
          <div className="flex flex-col gap-px bg-border border-t border-l border-b border-border">

            {/* Main headline card */}
            <div className="bg-canvas p-10 flex flex-col justify-between gap-8">
              <h2
                id="market-h2"
                className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
              >
                {t("h2")}
              </h2>
            </div>

            {/* Stats grid — 2×2 */}
            <div className="flex-1 grid grid-cols-2 gap-px bg-border auto-rows-fr">
              {stats.map((s) => (
                <div key={s.label} className="bg-canvas p-8 flex flex-col justify-between gap-4">
                  <p className="font-mono font-bold text-3xl lg:text-4xl text-text leading-none">
                    {s.value}
                  </p>
                  <div>
                    <p className="font-sans text-sm leading-snug text-text-2">
                      {s.label}
                    </p>
                    {s.source && (
                      <p className="mt-1 font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
                        {s.source}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right column — featured accent card */}
          <div className="bg-accent p-10 flex flex-col justify-between gap-8 min-h-[480px]">
            <div>
              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-canvas/60">
                {t("featuredSource")}
              </p>
              <p className="mt-6 font-mono font-bold text-5xl lg:text-6xl text-canvas leading-none">
                {t("featuredValue")}
              </p>
              <p className="mt-3 font-display font-bold text-xl text-canvas leading-snug">
                {t("featuredLabel")}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-sans text-base-sm leading-relaxed text-canvas/80">
                {t("featuredBody")}
              </p>
              <p className="font-sans text-base-sm leading-relaxed text-canvas/80">
                {t("featuredBody2")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
