import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";

type CustoItem = { label: string; value: string; note: string };

export function CustoAprovacao() {
  const t = useTranslations("custoAprovacao");
  const items = t.raw("items") as CustoItem[];

  return (
    <section aria-labelledby="custo-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <MonoKicker label={t("kicker")} />
        <h2
          id="custo-h2"
          className="mt-6 max-w-[40rem] font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <ul className="mt-16 grid gap-px bg-border lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.label} className="bg-surface p-8">
              <p className="font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
                {item.label}
              </p>
              <p className="mt-4 font-mono font-bold text-3xl lg:text-4xl text-text leading-none">
                {item.value}
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-text-2">
                {item.note}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-mono text-2xs uppercase tracking-[0.03em] text-text-2">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
