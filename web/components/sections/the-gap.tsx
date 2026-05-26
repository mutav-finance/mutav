import { useTranslations } from "next-intl";
import { Typewriter } from "@/components/primitives/typewriter";
import { ShineBorder } from "@/components/ui/shine-border";
import { BlurFade } from "@/components/ui/blur-fade";

type GapItem = { label: string; headline: string; body: string };

export function TheGap() {
  const t = useTranslations("gap");
  const rawItems = t.raw("items") as GapItem[];
  const items = [rawItems[2], rawItems[0], rawItems[1]];

  return (
    <section
      id="the-gap"
      aria-labelledby="gap-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <h2
          id="gap-h2"
          className="w-full text-center font-display font-bold text-text text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] whitespace-pre-line"
        >
          <Typewriter text={t("h2")} speed={40} />
        </h2>

        <ul className="mt-16 grid gap-4 lg:grid-cols-3">
          {items.map((g, i) => (
            <BlurFade key={i} as="li" delay={i * 0.1} className={i !== 1 ? "lg:mt-10" : "lg:self-start"}>
              <ShineBorder fill="var(--surface)" className="p-8 flex flex-col gap-6 h-full">
                <div className="flex items-center gap-[5px]" aria-hidden>
                  {[0, -2.4, -1.2].map((d) => (
                    <span
                      key={d}
                      className="block size-[5px] bg-accent shrink-0 mutav-dot-blink"
                      style={{ animationDelay: `${d}s` }}
                    />
                  ))}
                </div>
                {g.label && (
                  <div className="flex items-center gap-3">
                    <span className="block size-[6px] bg-accent shrink-0" aria-hidden />
                    <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                      {g.label}
                    </p>
                  </div>
                )}
                <p className="font-display font-bold text-2xl leading-tight text-text uppercase">
                  {g.headline}
                </p>
                <p className="font-sans text-base-sm leading-relaxed text-text-2 flex-1">
                  {g.body}
                </p>
              </ShineBorder>
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  );
}
