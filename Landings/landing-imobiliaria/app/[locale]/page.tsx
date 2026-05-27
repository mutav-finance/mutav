import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TheGap } from "@/components/site/the-gap";
import { Solutions } from "@/components/site/solutions";
import { ImobHelp } from "@/components/site/imob-help";
import { QuemSomos } from "@/components/site/quem-somos";
import { ImobiliariaCapture } from "@/components/site/imobiliaria-capture";
import { SiteFooter } from "@/components/site/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteNav />
      <main id="main" className="flex-1">
        <Hero />
        <TheGap />
        <Solutions />
        <ImobHelp />
        <ImobiliariaCapture />
        <QuemSomos />
      </main>
      <SiteFooter />
    </>
  );
}
