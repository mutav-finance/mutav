import { useTranslations } from "next-intl";
import { MonoKicker } from "./mono-kicker";
import { WaitlistForm } from "./waitlist-form";

export function InvestidorCapture() {
  const t = useTranslations("investidor");
  const items = t.raw("items") as string[];

  return (
    <section
      id="investidor"
      aria-labelledby="inv-h2"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:order-2">
          <MonoKicker index={t("kickerIndex")} label={t("kicker")} />
          <h2
            id="inv-h2"
            className="mt-6 font-display font-bold text-text text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em]"
          >
            {t("h2Line1")}
            <br />
            {t("h2Line2")}
          </h2>
          <ol className="mt-8 space-y-4 list-none">
            {items.map((line, i) => (
              <li
                key={i}
                className="font-sans text-base leading-relaxed text-text"
              >
                {line}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col lg:order-1">
          <WaitlistForm audience="investidor" />
          <p className="mt-6 font-mono text-2xs leading-relaxed text-text-2">
            <a
              href="https://github.com/mutav-finance"
              target="_blank"
              rel="noopener"
              className="text-accent hover:underline underline-offset-4"
            >
              {t("verifyCta")}
            </a>
          </p>
          <p className="mt-3 font-mono text-2xs leading-relaxed text-text-2">
            {t("tagline")}
          </p>
        </div>
      </div>
    </section>
  );
}
