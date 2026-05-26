import { useTranslations } from "next-intl";
import { MonoKicker } from "@/components/shared/mono-kicker";

type Phase = { n: string; label: string; title: string; body: string };

export function VisionArc() {
  const t = useTranslations("imobiliaria.vision");
  const phases = t.raw("phases") as Phase[];

  return (
    <section
      id="vision-arc"
      aria-labelledby="arc-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="arc-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ol className="mt-16 grid gap-x-8 gap-y-12 lg:grid-cols-4">
          {phases.map((p) => (
            <li key={p.n} className="relative">
              <div aria-hidden className="h-px w-full bg-accent/40 mb-6" />
              <p className="font-mono text-2xs tracking-[0.03em] uppercase text-text-2">
                <span className="text-accent">{p.n}</span>
                <span className="mx-2 text-text-3">—</span>
                {p.label}
              </p>
              <p className="mt-3 font-display font-bold text-lg leading-tight text-text">
                {p.title}
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-text-2">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
