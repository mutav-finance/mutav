import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

type Tier = {
  token: string;
  label: string;
  riskLabel: string;
  yieldLabel: string;
  body: string;
  access: string;
};

export function Tiers() {
  const t = useTranslations("tiers");
  const items = t.raw("items") as Tier[];

  return (
    <section
      id="tiers"
      aria-labelledby="tiers-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="tiers-h2"
          className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2Line1")}
          <span className="lg:block">{t("h2Line2")}</span>
        </h2>
        <p className="mt-6 max-w-[52rem] font-sans text-base-sm leading-relaxed text-text-2">
          {t("intro")}
        </p>

        <ul className="mt-16 grid gap-px bg-border lg:grid-cols-3">
          {items.map((tier, i) => (
            <li key={tier.token} className="bg-surface p-8 flex flex-col gap-6">
              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display font-bold text-3xl text-accent tracking-[-0.01em]">
                  {tier.token}
                </p>
                <p className="mt-1 font-display font-bold text-xl text-text leading-tight">
                  {tier.label}
                </p>
              </div>

              <div className="flex gap-6">
                <div className="border-t border-border pt-3 flex-1">
                  <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                    {tier.riskLabel}
                  </p>
                </div>
                <div className="border-t border-accent/40 pt-3 flex-1">
                  <p className="font-mono text-2xs uppercase tracking-[0.03em] text-accent">
                    {tier.yieldLabel}
                  </p>
                </div>
              </div>

              <p className="font-sans text-base-sm leading-relaxed text-text-2 flex-1">
                {tier.body}
              </p>

              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2 border-t border-border pt-4">
                {tier.access}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
            {t("waterfall")}
          </p>
          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
            {t("redeemNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
