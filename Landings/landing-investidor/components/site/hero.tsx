import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MonoKicker } from "@/components/site/mono-kicker";

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

        <div className="border-l-2 border-accent pl-3 mb-6">
          <MonoKicker label="Real Asset. Real Yield." />
        </div>
        <h1
          id="hero-h1"
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.02em]"
        >
          <span className="block text-[clamp(2.75rem,6vw,5.5rem)]">
            <span className="text-text">Access the </span>
            <span className="text-accent">$770M</span>
          </span>
          <span className="block text-[clamp(2.75rem,6vw,5.5rem)] text-text">
            Brazilian Rental
          </span>
          <span className="block text-[clamp(2.75rem,6vw,5.5rem)] text-text">
            Guarantee Market
          </span>
        </h1>
        <p className="mt-10 max-w-[40rem] font-sans text-lg leading-[1.55] text-text-2">
          The on-chain rental guarantee fund. Opening real assets with real yield to investors through onchain guarantee funds.
        </p>
        <div className="mt-8 flex items-center gap-10">
          <div className="flex flex-col items-center gap-3 border border-border px-6 py-4">
            <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
              supported by
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
          <Button variant="investidor" size="imo" asChild>
            <a href="#the-gap">[ learn more ]</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
