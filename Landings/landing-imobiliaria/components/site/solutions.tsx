"use client";

import Image from "next/image";
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

type SolutionCard = { kicker: string; headline: string; body: string };

function KickerTag({ label }: { label: string }) {
  return (
    <span className="self-start px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-widest bg-accent text-accent-foreground leading-none">
      {label}
    </span>
  );
}

export function Solutions() {
  const t = useTranslations("solutions");
  const cards = t.raw("cards") as SolutionCard[];

  return (
    <section id="produto" aria-labelledby="solutions-h2" className="border-b border-border bg-surface-2">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center gap-3" {...fadeUp(0)}>
          <MonoKicker label={t("kicker")} showLine />
          <h2
            id="solutions-h2"
            className="mt-3 font-display font-bold text-text text-3xl lg:text-5xl leading-[1.05] tracking-[-0.02em] uppercase"
          >
            {t("h2")}
          </h2>
          <p className="font-sans text-base text-text-2 leading-relaxed max-w-[48rem]">
            {t("description")}
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2"
          {...fadeUp(0.15)}
        >
          {/* Card 1 — destaque, 2 colunas */}
          <div className="md:col-span-2 h-[340px] bg-accent/10 border border-border p-6 flex flex-col justify-start gap-4 overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
            <KickerTag label={cards[0].kicker} />
            <div className="flex flex-col gap-3">
              <p className="font-display font-bold text-3xl lg:text-4xl leading-tight text-text uppercase">
                {cards[0].headline}
              </p>
              <p className="font-sans text-base leading-relaxed text-text-2 max-w-[480px]">
                {cards[0].body}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[340px] bg-canvas border border-border p-6 flex flex-col justify-start gap-4 overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
            <KickerTag label={cards[1].kicker} />
            <div className="flex flex-col gap-3">
              <p className="font-display font-bold text-2xl leading-tight text-text uppercase">
                {cards[1].headline}
              </p>
              <p className="font-sans text-base leading-relaxed text-text-2">
                {cards[1].body}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[340px] bg-canvas border border-border p-6 flex flex-col justify-between overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col gap-3">
              <KickerTag label={cards[2].kicker} />
              <p className="font-display font-bold text-2xl leading-tight text-text uppercase">
                {cards[2].headline}
              </p>
              <p className="font-sans text-base leading-relaxed text-text-2">
                {cards[2].body}
              </p>
            </div>
            <div className="flex flex-col gap-0.5 self-end text-right">
              <p className="font-display font-bold text-5xl text-accent leading-none">48x</p>
              <p className="font-mono text-2xs uppercase tracking-[0.06em] text-text-3">cobertura até</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="h-[340px] bg-canvas border border-border p-6 flex flex-col justify-start gap-4 overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
            <KickerTag label={cards[3].kicker} />
            <div className="flex flex-col gap-3">
              <p className="font-display font-bold text-2xl leading-tight text-text uppercase">
                {cards[3].headline}
              </p>
              <p className="font-sans text-base leading-relaxed text-text-2">
                {cards[3].body}
              </p>
            </div>
          </div>

          {/* Card 5 — imagem */}
          <div className="h-[340px] relative border border-border overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src="/img/aes.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover grayscale brightness-125"
            />
            <div className="absolute inset-0 bg-accent/25" />
            <div aria-hidden className="absolute top-4 left-4 size-4 border-t border-l border-accent" />
            <div aria-hidden className="absolute top-4 right-4 size-4 border-t border-r border-accent" />
            <div aria-hidden className="absolute bottom-4 right-4 size-4 border-b border-r border-accent" />
            <div aria-hidden className="absolute bottom-4 left-4 size-4 border-b border-l border-accent" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
