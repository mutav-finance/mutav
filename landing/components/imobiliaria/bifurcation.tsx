import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

type Card = {
  n: string;
  label: string;
  subjectLabel: string;
  body: string;
  aria: string;
  cta: string;
};

const HREFS = ["#imobiliaria", "#investidor"];

export function Bifurcation() {
  const t = useTranslations("bifurcation");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="bifurcation"
      aria-labelledby="bif-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <div className="text-center">
          <MonoKicker label={t("kicker")} className="text-center" />
          <h2
            id="bif-h2"
            className="mt-6 inline-block font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {t("h2Line1")}
            <br />
            {t("h2Line2")}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
          {cards.map((c, i) => (
            <a
              key={c.n}
              href={HREFS[i]}
              aria-label={c.aria}
              className="group bg-surface px-8 py-12 transition-[background-color] duration-150 ease-out hover:bg-surface-2 focus-visible:bg-surface-2 outline-none"
            >
              <p className="font-mono text-2xs tracking-[0.03em] uppercase text-text-2">
                <span className="text-accent">{c.n}</span>
                <span className="mx-2 text-text-3">—</span>
                {c.label}
              </p>
              <p className="mt-6 font-display font-bold text-2xl leading-tight text-text">
                {c.subjectLabel}.
              </p>
              <p className="mt-4 font-sans text-base-sm leading-relaxed text-text-2">
                {c.body}
              </p>
              <p className="mt-8 font-mono text-xs text-accent group-hover:underline underline-offset-4">
                {c.cta}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
