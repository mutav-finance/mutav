"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MonoKicker } from "./mono-kicker";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease, delay },
});

type GapItem = { label: string; headline: string; body: string };

export function TheGap() {
  const t = useTranslations("gap");
  const items = t.raw("items") as GapItem[];

  return (
    <section
      id="the-gap"
      aria-labelledby="gap-h2"
      className="border-b border-border bg-surface-2"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <motion.div {...fadeUp(0)}>
          <MonoKicker label={t("kicker")} showLine />
        </motion.div>
        <motion.h2
          id="gap-h2"
          className="mt-6 max-w-[52rem] font-display font-bold text-text text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] uppercase whitespace-pre-line"
          {...fadeUp(0.1)}
        >
          Quem <span className="text-accent">aluga</span>, e quem <span className="text-accent">cuida</span>,{"\n"}paga pela mesma falha
        </motion.h2>

        <ul className="mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {items.map((g, i) => (
            <motion.li key={g.label} className="border-t border-border pt-6" {...fadeUp(0.1 + i * 0.08)}>
              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                {g.label}
              </p>
              <p className="mt-4 font-display font-bold text-xl leading-tight text-text">
                {g.headline}
              </p>
              <p className="mt-3 font-sans text-base-sm leading-relaxed text-text-2">
                {g.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
