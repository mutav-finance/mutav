import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrambleButton } from "@/components/primitives/scramble-button";
import { MonoKicker } from "@/components/primitives/mono-kicker";
import { BlurFade } from "@/components/ui/blur-fade";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="border-b border-border lg:grid lg:grid-cols-2 lg:items-stretch"
    >
      {/* Left — copy */}
      <div className="px-6 lg:px-8 py-24 lg:py-40 lg:max-w-[720px] lg:ml-auto lg:w-full flex flex-col justify-center">
        <BlurFade delay={0}>
          <div className="border-l-2 border-accent pl-3 mb-6">
            <MonoKicker label={t("kicker")} />
          </div>
        </BlurFade>

        <h1
          id="hero-h1"
          className="font-display font-bold uppercase leading-[1.0625] tracking-[-0.03em]"
        >
          <BlurFade delay={0.1}>
            <span className="block text-6xl text-text">
              {t.rich("h1Line1", {
                accent: (chunks) => <span className="text-accent">{chunks}</span>,
              })}
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <span className="block text-6xl text-text">{t("h1Line2")}</span>
          </BlurFade>
          <BlurFade delay={0.3}>
            <span className="block text-6xl text-text">{t("h1Line3")}</span>
          </BlurFade>
        </h1>

        <BlurFade delay={0.4}>
          <p className="mt-10 max-w-[40rem] font-sans text-base leading-[1.5] text-text-2">
            {t("subhead")}
          </p>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="mt-8">
            <ScrambleButton variant="investidor" size="imo" href="#the-gap">
              {t("cta")}
            </ScrambleButton>
          </div>
        </BlurFade>
      </div>

      {/* Right — hero image, full bleed */}
      <BlurFade delay={0.2} className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-full">
        <Image
          src="/img/hero.png"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover object-left"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </BlurFade>

    </section>
  );
}
