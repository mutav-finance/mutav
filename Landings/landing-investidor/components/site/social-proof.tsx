import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

type SocialProofItem = { org: string; detail: string; type: string };

export function SocialProof() {
  const t = useTranslations("socialProof");
  const items = t.raw("items") as SocialProofItem[];

  return (
    <section aria-label={t("kicker")} className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12">
        <MonoKicker label={t("kicker")} />
        <ul className="mt-8 flex flex-col gap-4 lg:flex-row lg:gap-12">
          {items.map((item) => (
            <li key={item.org} className="flex items-start gap-4">
              <span
                aria-hidden
                className="mt-1 shrink-0 size-2 bg-accent"
              />
              <div>
                <p className="font-display font-bold text-base text-text leading-tight">
                  {item.org}
                </p>
                <p className="mt-1 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
