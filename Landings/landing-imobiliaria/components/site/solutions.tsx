"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Zap, Shield, Eye, Lock } from "lucide-react";

type SolutionCard = { kicker: string; headline: string; body: string };

const ICONS = [
  <Eye key="eye" className="w-[14px] h-[14px] shrink-0 block" />,
  <Zap key="zap" className="w-[14px] h-[14px] shrink-0 block" />,
  <Shield key="shield" className="w-[14px] h-[14px] shrink-0 block" />,
  <Lock key="lock" className="w-[14px] h-[14px] shrink-0 block" />,
];

const VISUALS = [
  <div key="audit" className="flex flex-col items-center justify-center gap-3 w-full h-full">
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="w-8 h-8 border border-border bg-canvas" />
          {i < 2 && <div className="w-4 h-px bg-border" />}
        </div>
      ))}
    </div>
    <p className="font-mono text-2xs uppercase tracking-[0.06em] text-accent">onchain</p>
  </div>,
  <div key="imob" className="flex flex-col items-center justify-center gap-3 w-full h-full">
    <p className="font-mono text-[2rem] font-bold text-accent leading-none">48h</p>
    <p className="font-mono text-2xs uppercase tracking-[0.06em] text-text-3">aprovação automática</p>
    <div className="flex items-center gap-2 mt-1">
      <span className="block w-12 h-px bg-border" />
      <p className="font-mono text-xs text-text-3">R$ 0</p>
      <span className="block w-12 h-px bg-border" />
    </div>
  </div>,
  <div key="inq" className="flex flex-col justify-center gap-2 w-full h-full px-2">
    {["Sem fiador", "Sem caução", "Sem seguro fiança"].map((line) => (
      <div key={line} className="flex items-center gap-2">
        <span className="font-mono text-xs text-accent">✓</span>
        <p className="font-mono text-xs text-text-2">{line}</p>
      </div>
    ))}
  </div>,
  <div key="seguro" className="flex items-center justify-center gap-6 w-full h-full px-4 flex-wrap">
    {["Perda de emprego", "Afastamento médico", "Redução de renda"].map((item) => (
      <div key={item} className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border border-accent/40 flex items-center justify-center">
          <span className="font-mono text-xs text-accent">✓</span>
        </div>
        <p className="font-mono text-2xs uppercase tracking-[0.04em] text-text-3 text-center">{item}</p>
      </div>
    ))}
  </div>,
];

function Dots() {
  return (
    <div className="flex items-center gap-[5px]" aria-hidden>
      {[0, -2.4, -1.2].map((d) => (
        <span
          key={d}
          className="block size-[5px] bg-accent shrink-0 mutav-dot-blink"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
    </div>
  );
}

export function Solutions() {
  const t = useTranslations("solutions");
  const cards = t.raw("cards") as SolutionCard[];
  const [active, setActive] = useState(0);

  return (
    <section id="produto" aria-labelledby="solutions-h2" className="border-b border-border bg-surface-2">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3 flex items-center gap-3">
            <span className="block w-px h-3 bg-accent shrink-0" aria-hidden />
            {t("kicker")}
          </p>
          <h2
            id="solutions-h2"
            className="font-display font-bold text-text text-3xl lg:text-5xl leading-[1.05] tracking-[-0.02em] uppercase"
          >
            {t("h2")}
          </h2>
          <p className="font-sans text-base text-text-2 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Tab triggers */}
        <div
          role="tablist"
          aria-label={t("h2")}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {cards.map((card, i) => (
            <button
              key={card.kicker}
              role="tab"
              aria-selected={active === i}
              aria-controls={`solutions-panel-${i}`}
              id={`solutions-tab-${i}`}
              onClick={() => setActive(i)}
              className={[
                "inline-flex items-center gap-2 px-4 py-2.5 transition-all duration-200 outline-none hover:scale-105 active:scale-95",
                "focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-2",
                active === i
                  ? "bg-accent text-canvas border border-accent"
                  : "bg-canvas text-text-3 border border-border hover:text-text-2 hover:border-text-3",
              ].join(" ")}
            >
              {ICONS[i]}
              <span className="font-mono text-2xs uppercase tracking-[0.04em] leading-none">{card.kicker}</span>
            </button>
          ))}
        </div>

        {/* Content panels */}
        <div className="mt-6">
          {cards.map((card, i) => (
            <div
              key={card.kicker}
              id={`solutions-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`solutions-tab-${i}`}
              hidden={active !== i}
              className="bg-canvas border border-border p-8 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className="flex flex-col gap-6">
                <Dots />
                <p className="font-display font-bold text-2xl leading-tight text-text uppercase">
                  {card.headline}
                </p>
                <p className="font-sans text-base leading-relaxed text-text-2">
                  {card.body}
                </p>
              </div>
              <div
                aria-hidden
                className="aspect-video bg-surface-2 border border-border flex items-center justify-center px-6"
              >
                {VISUALS[i]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
