import { useTranslations } from "next-intl";

type SolutionItem = { gapRef: string; headline: string; body: string };

export function Solutions() {
  const t = useTranslations("solutions");
  const items = t.raw("items") as SolutionItem[];

  const h2Lines = t.raw("h2Lines") as string[];

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <div className="text-center">
          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3 mb-6">
            {t("kicker")}
          </p>
          <h2
            id="solutions-h2"
            className="font-display font-bold text-text text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]"
          >
            {h2Lines.map((line) => (
              <span key={line} className="block">
                <span className="text-accent">REAL</span>
                {line.slice(4)}
              </span>
            ))}
          </h2>
        </div>

        <ul className="mt-16 grid gap-4 lg:grid-cols-3">
          {items.map((s) => (
            <li key={s.gapRef} className="bg-canvas border border-border p-8 flex flex-col gap-6">
              <div className="flex items-center gap-[5px]" aria-hidden>
                {[0, -2.4, -1.2].map((delay) => (
                  <span
                    key={delay}
                    className="block size-[5px] bg-accent shrink-0 mutav-dot-blink"
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </div>
              <p className="font-display font-bold text-2xl leading-tight text-text">
                {s.headline}
              </p>
              <p className="font-sans text-base-sm leading-relaxed text-text-2 flex-1">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
