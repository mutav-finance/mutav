import Image from "next/image";

const logos = [
  { src: "/img/stellar-logo.png", alt: "Stellar", href: "https://stellar.org", width: 110 },
  { src: "/img/nearx-logo.png",   alt: "NearX",   href: "https://nearx.com.br", width: 90 },
];

export function SocialProof() {
  return (
    <section aria-label="Backed by" className="border-b border-border py-10">
      <p className="text-center font-mono text-2xs uppercase tracking-[0.03em] text-text-3 mb-8">
        backed by
      </p>

      <div className="flex items-center justify-center gap-12">
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
              className="h-6 w-auto object-contain brightness-0 invert"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
