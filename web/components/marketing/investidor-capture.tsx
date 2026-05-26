import Image from "next/image";
import { useTranslations } from "next-intl";
import { WaitlistForm } from "@/components/marketing/waitlist-form";

export function InvestidorCapture() {
  const t = useTranslations("investidor");
  const tCta = useTranslations("midCta");

  return (
    <section
      id="investidor-form"
      aria-labelledby="inv-h2"
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
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:order-1 flex flex-col justify-center">
          <div className="relative z-10">
          <Image
            src="/brand/logo.svg"
            alt="mutav"
            width={62}
            height={52}
            className="mb-6"
          />
          <h2
            id="inv-h2"
            className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {tCta("h2")}
          </h2>
          <p className="mt-4 font-sans text-base-sm leading-relaxed text-text-2">
            {tCta("body")}
          </p>
          {tCta("note") && (
            <p className="mt-4 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
              {tCta("note")}
            </p>
          )}
          </div>
        </div>

        <div className="flex flex-col lg:order-2">
          <WaitlistForm audience="investidor" />
          <p className="mt-6 font-mono text-2xs leading-relaxed text-text-2 max-w-md text-center">
            <a
              href="https://x.com/Mutavfinance"
              target="_blank"
              rel="noopener"
              className="text-accent hover:underline underline-offset-4"
            >
              {t("verifyCta")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
