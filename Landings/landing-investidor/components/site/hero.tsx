import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const logos = [
  { src: "/img/stellar-logo.png", alt: "Stellar", href: "https://stellar.org", width: 110 },
  { src: "/img/nearx-logo.png",   alt: "NearX",   href: "https://nearx.com.br", width: 90 },
];

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 lg:py-40">

        <div className="flex items-center gap-6 mb-10">
          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
            backed by
          </p>
          <div className="flex items-center gap-8">
            {logos.map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener"
                aria-label={logo.alt}
                className="flex items-center opacity-50 hover:opacity-80 transition-opacity duration-150"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={28}
                  className="h-5 w-auto object-contain brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        <h1
          id="hero-h1"
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.02em]"
        >
          <span className="block text-[clamp(4rem,10vw,8rem)]">
            <span className="text-text">Real </span>
            <span className="text-accent">Asset</span>
          </span>
          <span className="block text-[clamp(4rem,10vw,8rem)]">
            <span className="text-text">Real </span>
            <span className="text-accent">Yield</span>
          </span>
        </h1>
        <p className="mt-10 max-w-[40rem] font-sans text-lg leading-[1.55] text-text-2">
          {t("subhead")}
        </p>
        <div className="mt-8">
          <Button variant="investidor" asChild>
            <a href="#the-gap">[ learn more ]</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
