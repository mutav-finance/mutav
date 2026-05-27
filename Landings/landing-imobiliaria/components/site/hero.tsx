"use client";

import { useTranslations } from "next-intl";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { MonoKicker } from "./mono-kicker";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="border-b border-border overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 lg:py-40">
        <motion.div {...fadeUp(0)}>
          <MonoKicker label={t("kicker")} showLine />
        </motion.div>
        <motion.h1
          id="hero-h1"
          className="mt-6 font-display font-bold text-text text-6xl text-balance uppercase"
          {...fadeUp(0.1)}
        >
          {t("h1Line1")}{" "}
          <span className="lg:block">{t("h1Line2")}</span>
        </motion.h1>
        <motion.p
          className="mt-8 max-w-[36rem] font-sans text-lg leading-[1.55] text-accent font-semibold"
          {...fadeUp(0.2)}
        >
          {t("subheadHighlight")}
        </motion.p>
        <motion.p
          className="mt-2 max-w-[36rem] font-sans text-lg leading-[1.55] text-text-2"
          {...fadeUp(0.3)}
        >
          {t("subhead")}
        </motion.p>
        <motion.div className="mt-6 flex items-center gap-6" {...fadeUp(0.4)}>
          <a
            href="#the-gap"
            className="inline-flex items-center px-6 h-10 font-mono text-xs uppercase tracking-[0.06em] bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            saiba mais <ArrowDownRight className="ml-1 w-4 h-4" />
          </a>
          <p className="font-mono text-sm text-text">
            {t("manifesto")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
