import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TheGap } from "@/components/site/the-gap";
import { Market } from "@/components/site/market";
import { Tiers } from "@/components/site/tiers";
import { MidCta } from "@/components/site/mid-cta";
import { VisionArc } from "@/components/site/vision-arc";
import { InvestidorCapture } from "@/components/site/investidor-capture";
import { Team } from "@/components/site/team";
import { Faq } from "@/components/site/faq";
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
        <Market />
        <Tiers />
        <MidCta />
        <VisionArc />
        <InvestidorCapture />
        <Team />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
