import { useTranslations } from "next-intl";
import { AnimatedSolutionsHeading } from "./animated-solutions-heading";
import { ShineBorder } from "@/components/ui/shine-border";
import { BlurFade } from "@/components/ui/blur-fade";
import { SolutionVisual } from "./solutions-visuals";

type SolutionItem = { gapRef: string; headline: string; body: string };

export function Solutions() {
  const t = useTranslations("investidor.solutions");
  const rawItems = t.raw("items") as SolutionItem[];
  const items = [rawItems[2], rawItems[0], rawItems[1]];

  const h2Lines = t.raw("h2Lines") as string[];
  const words = h2Lines.map((line) => line.slice(4));

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <div className="flex justify-center">
          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3 mb-2 flex items-center gap-3">
              <span className="block w-px h-3 bg-accent shrink-0" aria-hidden />
              {t("kicker")}
            </p>
            <AnimatedSolutionsHeading
              words={words}
              className="font-display font-bold text-text text-[3.3rem] lg:text-[4.95rem] leading-[1.05] tracking-[-0.02em]"
            />
          </div>
        </div>

        <ul className="mt-16 grid gap-4 lg:grid-cols-3">
          {items.map((s, i) => (
            <BlurFade key={s.gapRef} as="li" delay={i * 0.1} className={i !== 1 ? "lg:mt-10" : "lg:self-start"}>
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
                <p className="font-display font-bold text-2xl leading-tight text-text uppercase">
                  {s.headline}
                </p>
                <p className="font-sans text-base-sm leading-relaxed text-text-2 flex-1">
                  {s.body}
                </p>
                <div
                  aria-hidden
                  className="w-full aspect-video bg-canvas border border-border flex items-center justify-center px-6"
                >
                  <SolutionVisual index={i} />
                </div>
              </ShineBorder>
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  );
}
