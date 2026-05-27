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
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Image
            src="/brand/logo.svg"
            alt="mutav"
            width={36}
            height={30}
            className="mb-6"
          />
          <h2
            id="imob-h2"
            className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] uppercase"
          >
            {t("h2")}
          </h2>
          <ol className="mt-8 space-y-2 list-none">
            {items.map((line, i) => (
              <li
                key={i}
                className="font-sans text-base leading-snug text-text"
              >
                {line}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col">
          <WaitlistForm audience="imobiliaria" />
          <p className="mt-6 font-mono text-2xs leading-relaxed text-text-2">
            {t("consent")}
          </p>
        </div>
      </div>
    </section>

  );
}
