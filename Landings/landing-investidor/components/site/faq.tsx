import { useTranslations } from "next-intl";

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];

  return (
    <section aria-labelledby="faq-h2" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24">
        <h2
          id="faq-h2"
          className="font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
        >
          {t("h2")}
        </h2>

        <dl className="mt-16 divide-y divide-border border-t border-border">
          {items.map((item) => (
            <div
              key={item.q}
              className="grid lg:grid-cols-2 gap-4 lg:gap-16 py-8"
            >
              <dt className="font-display font-bold text-lg leading-snug text-text">
                {item.q}
              </dt>
              <dd className="font-sans text-base-sm leading-relaxed text-text-2">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
