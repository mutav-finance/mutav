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

type Founder = { initial: string; name: string; role: string; bio: string };

const PHOTOS: Record<string, string> = {
  D: "/team/draau.jpg",
  J: "/team/jubs.jpg",
};

export function QuemSomos() {
  const t = useTranslations("team");
  const founders = t.raw("founders") as Founder[];

  return (
    <section
      id="team"
      aria-labelledby="team-h2"
      className="border-b border-border bg-surface-2"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <MonoKicker label={t("kicker")} showLine />
          <h2
            id="team-h2"
            className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] uppercase"
          >
            {t("h2")}
          </h2>
        </motion.div>

        {/* Body + Founders */}
        <motion.div
          className="mt-6 flex flex-col lg:flex-row items-stretch gap-6 lg:gap-[180px]"
          {...fadeUp(0.15)}
        >
          {/* Left: body card */}
          <div className="flex-1 bg-canvas border border-border border-l-8 border-l-accent p-8 flex flex-col justify-center gap-4">
            <p className="font-sans text-base leading-relaxed text-text-2">
              {t("description1")}
            </p>
            <p className="font-sans text-base leading-relaxed text-text-2">
              {t.rich("description2", { b: (chunks) => <strong className="font-semibold text-text">{chunks}</strong> })}
            </p>
          </div>

          {/* Right: founders */}
          <div className="shrink-0 grid grid-cols-2 gap-2 lg:w-[380px]">
            {founders.map((f) => (
              <div key={f.name} className="bg-canvas border border-border flex flex-col items-center overflow-hidden">
                <div className="relative w-full h-[240px] overflow-hidden">
                  {PHOTOS[f.initial] ? (
                    <>
                      <Image
                        src={PHOTOS[f.initial]}
                        alt={f.name}
                        fill
                        sizes="(min-width: 1024px) 150px, 50vw"
                        className="object-cover object-top grayscale brightness-125"
                      />
                      <div className="absolute inset-0 bg-accent/10" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-accent grid place-items-center font-display font-bold text-4xl text-canvas">
                      {f.initial}
                    </div>
                  )}
                </div>
                <div className="py-4 px-3 text-center">
                  <p className="font-display font-bold text-xs leading-tight text-text uppercase whitespace-pre-line">
                    {f.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
