import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrambleButton } from "@/components/investidor/scramble-button";
import { BlurFade } from "@/components/ui/blur-fade";

export function MidCta() {
  const t = useTranslations("investidor.midCta");

  return (
    <section id="mid-cta" aria-labelledby="mid-cta-h2" className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden>
        <div className="w-full mx-auto max-w-[1440px] px-6 lg:px-8 translate-x-[10%]">
        <div className="relative w-[800px] h-[1050px]">
          <Image
            src="/img/11.jpg"
            alt=""
            fill
            className="object-cover grayscale opacity-15"
          />
          <div className="absolute inset-0 bg-canvas opacity-30 mix-blend-multiply" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, var(--canvas) 0%, transparent 25%, transparent 75%, var(--canvas) 100%)" }}
          />
        </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <BlurFade delay={0}>
          <h2
            id="mid-cta-h2"
            className="max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {t("h2")}
          </h2>
        </BlurFade>
        <BlurFade delay={0.1}>
          <p className="mt-4 max-w-[36rem] font-sans text-base-sm leading-relaxed text-text-2">
            {t("body")}
          </p>
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-8">
            <ScrambleButton variant="investidor" href="#investidor-form">
              {t("cta")}
            </ScrambleButton>
          </div>
        </BlurFade>
        {t("note") && (
          <BlurFade delay={0.3}>
            <p className="mt-4 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
              {t("note")}
            </p>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
