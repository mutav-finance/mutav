import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      id="hero"
      aria-labelledby="hero-h1"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 lg:py-40">
        <MonoKicker
          index={t("kickerIndex")}
          total={t("kickerTotal")}
          label={t("kicker")}
        />
        <h1
          id="hero-h1"
          className="mt-6 font-display font-bold text-text text-6xl text-balance"
        >
          {t("h1Line1")}{" "}
          <span className="lg:block">{t("h1Line2")}</span>{" "}
          <span className="lg:block">{t("h1Line3")}</span>
        </h1>
        <p className="mt-8 max-w-[36rem] font-sans text-lg leading-[1.55] text-text-2">
          {t("subhead")}
        </p>
        <p className="mt-6 font-mono text-sm text-text-2">
          {t("manifesto")}
        </p>
        <p className="mt-4 font-mono text-2xs uppercase tracking-[0.03em] text-accent">
          {t("timelineSignal")}
        </p>
      </div>
    </section>
  );
}
