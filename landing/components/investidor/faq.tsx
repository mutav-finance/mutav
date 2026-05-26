"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations("investidor.faq");
  const items = t.raw("items") as FaqItem[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-h2" className="relative border-b border-border overflow-hidden">
      {/* Background image — right-aligned */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none" aria-hidden>
        <div className="w-full mx-auto max-w-[1440px] px-6 lg:px-8 flex justify-end translate-x-[15%]">
          <div className="relative w-[960px] h-[1080px] -translate-y-[10%]">
            <Image
              src="/img/9.jpg"
              alt=""
              fill
              className="object-cover grayscale opacity-15"
            />
            <div className="absolute inset-0 bg-canvas opacity-30 mix-blend-multiply" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, var(--canvas) 0%, transparent 25%, transparent 75%, var(--canvas) 100%)" }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
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

