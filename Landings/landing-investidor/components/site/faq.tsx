"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <h2
              id="faq-h2"
              className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
            >
              {t("h2")}
            </h2>

            <dl className="mt-10 border-t border-border">
              {items.map((item, i) => (
                <div key={item.q} className="border-b border-border">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={open === i}
                  >
                    <dt className="font-display font-bold text-base leading-snug text-text">
                      {item.q}
                    </dt>
                    <span className="font-mono text-base text-accent shrink-0" aria-hidden>
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                  {open === i && (
                    <dd className="pb-5 font-sans text-base-sm leading-relaxed text-text-2">
                      {item.a}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
