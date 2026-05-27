"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MonoKicker } from "./mono-kicker";
import { LayoutDashboard, TrendingUp, Eye, ShieldCheck } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease, delay },
});

type Card = { icon: string; title: string; body: string; exclusive?: boolean; checklist?: string[] };

const ICONS: Record<string, React.ReactNode> = {
  layout:   <LayoutDashboard className="w-5 h-5" />,
  trending: <TrendingUp      className="w-5 h-5" />,
  eye:      <Eye             className="w-5 h-5" />,
  shield:   <ShieldCheck     className="w-5 h-5" />,
};

export function ImobHelp() {
  const t = useTranslations("imobHelp");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="imob-help"
      aria-labelledby="imob-help-h2"
      className="border-b border-border bg-surface-2"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <motion.div {...fadeUp(0)}>
          <MonoKicker label={t("kicker")} />
        </motion.div>
        <motion.h2
          id="imob-help-h2"
          className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] uppercase"
          {...fadeUp(0.1)}
        >
          A MUTAV veio pra <span className="text-accent">facilitar</span> a sua vida
        </motion.h2>

        <motion.div className="mt-12 grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-2" {...fadeUp(0.2)}>
          {/* 2×2 cards */}
          <ul className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            {cards.map((card) => (
              <li
                key={card.title}
                className="relative bg-canvas border border-border p-5 flex flex-col gap-3 h-full"
              >
                {card.exclusive && (
                  <span className="absolute top-0 right-0 px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-widest bg-accent text-accent-foreground leading-none">
                    exclusividade mutav
                  </span>
                )}
                <span className="text-accent">{ICONS[card.icon]}</span>
                <p className="font-display font-bold text-base leading-snug text-text uppercase">
                  {card.title}
                </p>
                <p className="font-sans text-sm leading-relaxed text-text-2">
                  {card.body}
                </p>
                {card.checklist && (
                  <ul className="flex flex-col gap-1 mt-1 flex-1">
                    {card.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-mono text-xs text-text-2">
                        <span className="text-accent">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Large image card */}
          <div className="relative border border-border overflow-hidden min-h-[560px]">
            <Image
              src="/img/skyler-smith.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover grayscale brightness-125"
            />
            <div className="absolute inset-0 bg-accent/25" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
