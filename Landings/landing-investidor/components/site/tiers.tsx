import { useTranslations } from "next-intl";

type Tier = {
  token: string;
  riskLabel: string;
  yieldLabel: string;
  body: string;
  access: string;
};

const TOKEN_COLOR: Record<string, string> = {
  MTVH: "text-error",
  MTVM: "text-accent",
  MTVL: "text-success",
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
        <h2
          id="tiers-h2"
          className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2Line1")}
          <span className="lg:block">{t("h2Line2")}</span>
        </h2>
        <p className="mt-6 max-w-[52rem] font-sans text-base-sm leading-relaxed text-text-2">
          {t("intro")}
        </p>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-px bg-border">

          {/* Left — tier cards stacked */}
          <div className="bg-canvas flex flex-col divide-y divide-border">
            {items.map((tier, i) => (
              <div key={tier.token} className="p-8 flex flex-col gap-4">
                <div className="flex items-baseline gap-4">
                  <p className={`font-display font-bold text-2xl tracking-[-0.01em] ${TOKEN_COLOR[tier.token] ?? "text-accent"}`}>
                    {tier.token}
                  </p>
                  <p className="ml-auto font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex gap-8">
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

                <p className="font-sans text-base-sm leading-relaxed text-text-2">
                  {tier.body}
                </p>

                {tier.access && (
                  <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3 border-t border-border pt-4">
                    {tier.access}
                  </p>
                )}
              </div>
            ))}

            <div className="p-8 flex flex-col gap-3">
              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                {t("redeemNote")}
              </p>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div className="bg-surface min-h-[480px] lg:min-h-0 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-full h-full min-h-[400px] border border-border flex items-center justify-center">
              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
                [ fund diagram · image to be placed here ]
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
