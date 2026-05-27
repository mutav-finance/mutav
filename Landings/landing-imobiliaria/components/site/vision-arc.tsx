import Image from "next/image";
import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";
import { LayoutDashboard, TrendingUp, Eye, ShieldCheck } from "lucide-react";

type Card = { icon: string; title: string; body: string };

const ICONS: Record<string, React.ReactNode> = {
  layout:   <LayoutDashboard className="w-5 h-5" />,
  trending: <TrendingUp      className="w-5 h-5" />,
  eye:      <Eye             className="w-5 h-5" />,
  shield:   <ShieldCheck     className="w-5 h-5" />,
};

export function VisionArc() {
  const t = useTranslations("imobHelp");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="imob-help"
      aria-labelledby="imob-help-h2"
      className="border-b border-border bg-surface-2"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="imob-help-h2"
          className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] uppercase"
        >
          {t("h2")}
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-2">
          {/* 2×2 cards */}
          <ul className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            {cards.map((card) => (
              <li
                key={card.title}
                className="bg-canvas border border-border p-5 flex flex-col gap-3 h-full"
              >
                <span className="text-accent">{ICONS[card.icon]}</span>
                <p className="font-display font-bold text-base leading-snug text-text uppercase">
                  {card.title}
                </p>
                <p className="font-sans text-sm leading-relaxed text-text-2 flex-1">
                  {card.body}
                </p>
              </li>
            ))}
          </ul>

          {/* Large image card */}
          <div className="relative border border-border overflow-hidden min-h-[560px]">
            <Image
              src="/img/11.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
