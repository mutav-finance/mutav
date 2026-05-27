"use client";

import { useTranslations } from "next-intl";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
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
      className="relative border-b border-border overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute right-0 inset-y-0 w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, ease, delay: 0.3 }}
      >
        <Image
          src="/img/hero-building.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center grayscale brightness-125"
          priority
        />
        <div className="absolute inset-0 bg-accent/25" />
        {/* Fade left */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[var(--color-canvas)] to-transparent" />
        {/* Fade right */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-canvas)] to-transparent" />
        {/* Fade bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-canvas)] to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24 lg:py-40">
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
