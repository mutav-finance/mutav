"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Tier = {
  token: string;
  riskLabel: string;
  yieldLabel: string;
  body: string;
  access: string;
};

const TOKEN_COLOR: Record<string, { border: string; text: string }> = {
  MTVH: { border: "border-error",   text: "text-error" },
  MTVM: { border: "border-accent",  text: "text-accent" },
  MTVL: { border: "border-success", text: "text-success" },
};

const TOKEN_IMAGE: Record<string, string> = {
  MTVH: "/img/MTVH.jpg",
  MTVM: "/img/MTVM.jpg",
  MTVL: "/img/MTVL.jpg",
};

export function Tiers() {
  const t = useTranslations("tiers");
  const items = t.raw("items") as Tier[];
  const [active, setActive] = useState(0);

  const colors = TOKEN_COLOR[items[active]?.token] ?? { border: "border-accent", text: "text-accent" };

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

          {/* Left — interactive tier list */}
          <div className="bg-canvas divide-y divide-border">
            {items.map((tier, i) => {
              const isActive = i === active;
              const c = TOKEN_COLOR[tier.token] ?? { border: "border-accent", text: "text-accent" };
              return (
                <button
                  key={tier.token}
                  onClick={() => setActive(i)}
                  className={`w-full text-left pl-6 pr-8 py-8 flex flex-col gap-3 border-l-2 transition-colors duration-150 ${
                    isActive ? c.border : "border-transparent hover:border-border"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <p className={`font-display font-bold text-2xl tracking-[-0.01em] transition-colors duration-150 ${
                      isActive ? c.text : "text-text-3"
                    }`}>
                      {tier.token}
                    </p>
                    {!isActive && (
                      <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-3">
                        {tier.riskLabel} · {tier.yieldLabel}
                      </p>
                    )}
                  </div>

                  {isActive && (
                    <>
                      <div className="flex gap-8">
                        <div className="border-t border-border pt-3 flex-1">
                          <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                            {tier.riskLabel}
                          </p>
                        </div>
                        <div className={`border-t pt-3 flex-1 ${c.border}`}>
                          <p className={`font-mono text-2xs uppercase tracking-[0.03em] ${c.text}`}>
                            {tier.yieldLabel}
                          </p>
                        </div>
                      </div>

                      <p className="font-sans text-base-sm leading-relaxed text-text-2">
                        {tier.body}
                      </p>

                      {tier.access && (
                        <p className={`font-mono text-2xs uppercase tracking-[0.03em] ${c.text} border-t border-border pt-4`}>
                          {tier.access}
                        </p>
                      )}
                    </>
                  )}
                </button>
              );
            })}

          </div>

          {/* Right — tier image */}
          <div className="bg-surface min-h-[480px] lg:min-h-0 relative overflow-hidden">
            {items.map((tier, i) => (
              <Image
                key={tier.token}
                src={TOKEN_IMAGE[tier.token]}
                alt={tier.token}
                fill
                className={`object-cover transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-0"}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
