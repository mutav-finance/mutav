import Image from "next/image";

const partners = [
  { src: "/img/stellar-logo.png", alt: "Stellar",  href: "https://stellar.org",    width: 110 },
  { src: "/img/nearx-logo.png",   alt: "NearX",    href: "https://nearx.com.br",   width: 90  },
];

export function SocialProof() {
  return (
    <section aria-label="Supported by" className="border-b border-border py-8 bg-surface">
      <div className="flex flex-col items-center gap-6">
        <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
          supported by
        </p>
        <div className="flex items-center gap-10">
          {partners.map((p) => (
            <a
              key={p.alt}
              href={p.href}
              target="_blank"
              rel="noopener"
              aria-label={p.alt}
              className="opacity-40 hover:opacity-70 transition-opacity duration-150"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={24}
                className="h-6 w-auto object-contain brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
