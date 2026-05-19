import Image from "next/image";
import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

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
        <MonoKicker label={t("kicker")} />
        <h2
          id="team-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-16 grid gap-px bg-border lg:grid-cols-2">
          {founders.map((f) => {
            const photo = PHOTOS[f.initial];
            return (
              <li key={f.name} className="bg-surface p-8 flex items-start gap-6">
                <a
                  href={HREFS[f.initial] ?? "#"}
                  target="_blank"
                  rel="noopener"
                  aria-label={f.githubLabel}
                  className="shrink-0 size-16 outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  {photo ? (
                    <Image
                      src={photo}
                      alt={f.name}
                      width={64}
                      height={64}
                      className="size-16 object-cover grayscale"
                    />
                  ) : (
                    <span className="size-16 bg-accent text-canvas grid place-items-center font-display font-bold text-xl hover:bg-accent-dim transition-[background-color] duration-150 ease-out">
                      {f.initial}
                    </span>
                  )}
                </a>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-xl leading-tight text-text">
                    {f.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {f.role}
                  </p>
                  <p className="mt-3 font-sans text-base-sm leading-relaxed text-text-2">
                    {f.bio}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
