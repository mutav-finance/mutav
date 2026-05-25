import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/investidor/nav";
import { Hero } from "@/components/investidor/hero";
import { SocialProof } from "@/components/investidor/social-proof";
import { TheGap } from "@/components/investidor/the-gap";
import { Solutions } from "@/components/investidor/solutions";
import { Market } from "@/components/investidor/market";
import { Protocol } from "@/components/investidor/protocol";
import { Tiers } from "@/components/investidor/tiers";
import { MidCta } from "@/components/investidor/mid-cta";
import { Team } from "@/components/investidor/team";
import { Faq } from "@/components/investidor/faq";
import { SiteFooter } from "@/components/investidor/footer";

export default async function InvestidorPage({
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
        <Team />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
