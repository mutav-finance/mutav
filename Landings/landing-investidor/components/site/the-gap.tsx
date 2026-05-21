import { useTranslations } from "next-intl";

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
        <h2
          id="gap-h2"
          className="max-w-[40rem] font-display font-bold text-text text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-16 grid gap-4 lg:grid-cols-3">
          {items.map((g) => (
            <li key={g.label} className="bg-surface border border-border p-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="block size-[6px] bg-accent shrink-0" aria-hidden />
                <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                  {g.label}
                </p>
              </div>
              <p className="font-display font-bold text-2xl leading-tight text-text">
                {g.headline}
              </p>
              <p className="font-sans text-base-sm leading-relaxed text-text-2 flex-1">
                {g.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
