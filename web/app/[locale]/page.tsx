import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/sections/nav";
import { SocialProof } from "@/components/sections/social-proof";
import { Hero } from "@/components/sections/hero";
import { TheGap } from "@/components/sections/the-gap";
import { Solutions } from "@/components/sections/solutions";
import { Market } from "@/components/sections/market";
import { Protocol } from "@/components/sections/protocol";
import { Tiers } from "@/components/sections/tiers";
import { MidCta } from "@/components/sections/mid-cta";
import { InvestidorCapture } from "@/components/marketing/investidor-capture";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { SiteFooter } from "@/components/sections/footer";

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
        <SocialProof />
        <TheGap />
        <Solutions />
        <Market />
        <Protocol />
        <Tiers />
        <MidCta />
        <InvestidorCapture />
        <Team />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
