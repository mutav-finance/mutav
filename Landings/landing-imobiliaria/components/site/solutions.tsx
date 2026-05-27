"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Zap, Shield, Eye, Lock } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease, delay },
});

type SolutionCard = { kicker: string; headline: string; body: string };

const ICONS = [
  <Eye key="eye" className="w-[14px] h-[14px] shrink-0 block" />,
  <Zap key="zap" className="w-[14px] h-[14px] shrink-0 block" />,
  <Shield key="shield" className="w-[14px] h-[14px] shrink-0 block" />,
  <Lock key="lock" className="w-[14px] h-[14px] shrink-0 block" />,
];

const VISUALS = [
  <div key="audit" className="absolute inset-0">
    <Image
      src="/img/yamato-yamaguchi.jpg"
      alt=""
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover grayscale brightness-125"
    />
    <div className="absolute inset-0 bg-accent/25" />
  </div>,
  <div key="imob" className="absolute inset-0">
    <Image
      src="/img/melrose-by-the-lake.jpg"
      alt=""
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover grayscale"
    />
    <div className="absolute inset-0 bg-accent/25" />
  </div>,
  <div key="inq" className="absolute inset-[-1px] flex items-center bg-canvas px-6">
    <div className="flex items-stretch gap-2 w-full h-[70%]">
      {[
        { name: "MUTAV ONE", cobertura: "x12", saida: "3x", highlight: false },
        { name: "MUTAV FIT", cobertura: "x24", saida: "5x", highlight: true  },
        { name: "MUTAV PRO", cobertura: "x48", saida: "7x", highlight: false },
      ].map((plan) => (
        <div
          key={plan.name}
          className={[
            "flex flex-col flex-1 p-4 border",
            "border-border bg-surface-2",
          ].join(" ")}
        >
          <p className={["font-mono text-2xs uppercase tracking-[0.08em] font-semibold mb-4", "text-accent"].join(" ")}>
            {plan.name}
          </p>
          <div className="flex flex-col gap-1 mb-3">
            <p className="font-mono text-3xl font-bold text-text leading-none">{plan.cobertura}</p>
            <p className="font-mono text-2xs uppercase tracking-[0.04em] text-text-3">cobertura</p>
          </div>
          <div className="w-full h-px bg-border mb-3" />
          <div className="flex flex-col gap-1">
            <p className="font-mono text-3xl font-bold text-text leading-none">{plan.saida}</p>
            <p className="font-mono text-2xs uppercase tracking-[0.04em] text-text-3">custo de saída</p>
          </div>
        </div>
      ))}
    </div>
  </div>,
  <div key="seguro" className="absolute inset-0">
    <Image
      src="/img/sasun-bughdaryan.jpg"
      alt=""
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover grayscale"
    />
    <div className="absolute inset-0 bg-accent/25" />
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
        <motion.div className="flex flex-col items-center text-center gap-3" {...fadeUp(0)}>
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
        </motion.div>

        {/* Tab triggers */}
        <motion.div {...fadeUp(0.15)}>
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
        </motion.div>

        {/* Content panels */}
        <motion.div className="mt-6" {...fadeUp(0.25)}>
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
                className="relative aspect-video flex items-center justify-center px-6 overflow-hidden"
              >
                {VISUALS[i]}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
