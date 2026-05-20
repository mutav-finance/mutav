import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

type AdvisorItem = { name: string; role: string; body: string };

export function SocialProof() {
  const t = useTranslations("socialProof");
  const items = t.raw("items") as AdvisorItem[];

  return (
    <section aria-labelledby="sp-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="sp-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-16 grid gap-px bg-border lg:grid-cols-2">
          {items.map((item) => (
            <li key={item.name} className="bg-surface p-8">
              <p className="font-display font-bold text-xl leading-tight text-text">
                {item.name}
              </p>
              <p className="mt-1 font-mono text-2xs uppercase tracking-[0.03em] text-accent">
                {item.role}
              </p>
              <p className="mt-4 font-sans text-base-sm leading-relaxed text-text-2">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
