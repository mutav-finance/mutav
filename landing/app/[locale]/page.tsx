import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TheGap } from "@/components/site/the-gap";
import { VisionArc } from "@/components/site/vision-arc";
import { Bifurcation } from "@/components/site/bifurcation";
import { ProprietarioCapture } from "@/components/site/proprietario-capture";
import { InvestidorCapture } from "@/components/site/investidor-capture";
import { Team } from "@/components/site/team";
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
        <VisionArc />
        <Bifurcation />
        <ProprietarioCapture />
        <InvestidorCapture />
        <Team />
      </main>
      <SiteFooter />
    </>
  );
}
