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
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <h2
          id="team-h2"
          className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] text-center uppercase"
        >
          {t("h2")}
        </h2>

        <div className="mt-8 grid lg:grid-cols-[auto_minmax(0,640px)] gap-10 lg:gap-16 items-start mx-auto w-fit">
          <div className="flex flex-col justify-start items-center text-center">
            <p className="font-mono text-base text-text-2 whitespace-nowrap leading-relaxed">
              {t("preBadge")}
            </p>
            <p
              className="font-display font-bold text-accent leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(5.5rem, 11vw, 10rem)" }}
            >
              +30
            </p>
            <p
              className="font-display font-bold text-accent leading-none tracking-[-0.04em]"
              style={{ fontSize: "clamp(4rem, 8vw, 7.5rem)" }}
            >
              ANOS
            </p>
            <p className="mt-4 font-mono text-base text-text-2 whitespace-nowrap leading-relaxed">
              {t("badge")}
            </p>
          </div>

          <ul className="grid gap-px bg-border lg:grid-cols-2 self-stretch">
            {founders.map((f) => {
              const photo = PHOTOS[f.initial];
              return (
                <li key={f.name} className="bg-canvas flex flex-col">
                  <a
                    href={HREFS[f.initial] ?? "#"}
                    target="_blank"
                    rel="noopener"
                    aria-label={f.githubLabel}
                    className="relative flex-1 block min-h-[200px] outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    {photo ? (
                      <Image
                        src={photo}
                        alt={f.name}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover grayscale"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-accent text-canvas grid place-items-center font-display font-bold text-4xl">
                        {f.initial}
                      </div>
                    )}
                  </a>
                  <div className="p-6 border-t border-border bg-surface-2 shrink-0">
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
        </div>
      </div>
    </section>
  );
}
