import Image from "next/image";
import { useTranslations } from "next-intl";
import { WaitlistForm } from "./waitlist-form";

export function ImobiliariaCapture() {
  const t = useTranslations("imobiliaria");
  const items = t.raw("items") as string[];

  return (
    <section
      id="imobiliaria"
      aria-labelledby="imob-h2"
      className="relative border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden>
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-8 -translate-x-[13%] translate-y-[5%]">
          <div className="relative w-[732px] h-[976px]">
            <Image
              src="/img/11.jpg"
              alt=""
              fill
              className="object-cover grayscale opacity-15"
            />
            <div className="absolute inset-0 bg-canvas opacity-30 mix-blend-multiply" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, var(--canvas) 0%, transparent 25%, transparent 60%, var(--canvas) 100%)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, var(--canvas) 0%, transparent 15%, transparent 85%, var(--canvas) 100%)" }}
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="flex flex-col items-center">
          <span className="mb-3 flex items-center gap-4">
            <Image
              src="/brand/logo.svg"
              alt=""
              width={77}
              height={64}
              className="shrink-0"
            />
            <div className="flex flex-col justify-center gap-2">
              <span className="font-display font-bold text-[#0a0a0a] text-2xl leading-none tracking-[-0.02em] uppercase">feito para quem tem</span>
              <span className="font-display font-bold text-[#0a0a0a] text-2xl leading-none tracking-[-0.02em] uppercase">muito o que fazer.</span>
            </div>
          </span>
          <div className="mt-3 border border-accent px-12 py-5 flex flex-col items-center text-center w-fit mx-auto gap-1.5 bg-white/25">
            <p className="font-mono text-xs text-text whitespace-nowrap leading-none">
              assessorado por especialistas com
            </p>
            <p
              className="font-display font-bold text-accent leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.1rem, 4.25vw, 3.6rem)" }}
            >
              +30 ANOS
            </p>
            <p className="font-mono text-xs text-text whitespace-nowrap leading-none">
              no mercado de aluguel imobiliário
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h2
            id="imob-h2"
            className="font-display font-bold text-text text-[2.04rem] lg:text-[2.73rem] leading-[1.1] tracking-[-0.02em] uppercase whitespace-pre-line"
          >
            {t("h2")}
          </h2>

          <div className="mt-10">
            <WaitlistForm audience="imobiliaria" />
          </div>
          <p className="mt-6 font-mono text-2xs leading-relaxed text-text-2">
            {t("consent")}
          </p>
        </div>
      </div>
    </section>

  );
}
