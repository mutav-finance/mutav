import Image from "next/image";
import { useTranslations } from "next-intl";

type Founder = {
  initial: string;
  name: string;
  role: string;
  bio: string;
  githubLabel: string;
};

const HREFS: Record<string, string> = {
  D: "https://github.com/draaujpeg",
  J: "https://github.com/hoffms",
};

const PHOTOS: Record<string, string> = {
  D: "/team/draau.jpg",
  J: "/team/jubs.jpg",
};

export function Team() {
  const t = useTranslations("team");
  const founders = t.raw("founders") as Founder[];

  return (
    <section
      id="team"
      aria-labelledby="team-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <h2
          id="team-h2"
          className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] uppercase"
        >
          {t("h2")}
        </h2>
        <p className="mt-4 max-w-[40rem] font-sans text-base-sm leading-relaxed text-text-2">
          {t("subtitle")}
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pb-24">
        <div className="lg:px-[12.5%]">
          <ul className="grid gap-px bg-border lg:grid-cols-2">
            {founders.map((f) => {
              const photo = PHOTOS[f.initial];
              return (
              <li key={f.name} className="bg-surface flex flex-col">
                <a
                  href={HREFS[f.initial] ?? "#"}
                  target="_blank"
                  rel="noopener"
                  aria-label={f.githubLabel}
                  className="relative w-full aspect-[4/3] bg-canvas border-b border-border flex items-center justify-center overflow-hidden outline-none focus-visible:outline-1 focus-visible:outline-accent"
                >
                  {photo ? (
                    <Image
                      src={photo}
                      alt={f.name}
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover grayscale"
                    />
                  ) : (
                    <span className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
                      [ photo · {f.initial} ]
                    </span>
                  )}
                </a>
                <div className="p-8">
                  <p className="font-display font-bold text-xl leading-tight text-text">
                    {f.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {f.role}
                  </p>
                </div>
              </li>
              );
            })}
          </ul>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex-1 h-px bg-accent" aria-hidden />
            <p className="font-mono text-base-sm uppercase tracking-[0.03em] text-accent shrink-0">
              {t("eyebrow")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
