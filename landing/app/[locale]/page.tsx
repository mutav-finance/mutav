import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { SocialProof } from "@/components/site/social-proof";
import { TheGap } from "@/components/site/the-gap";
import { CustoAprovacao } from "@/components/site/custo-aprovacao";
import { VisionArc } from "@/components/site/vision-arc";
import { Art37 } from "@/components/site/art37";
import { ImobiliariaCapture } from "@/components/site/imobiliaria-capture";
import { SeguroPrestamista } from "@/components/site/seguro-prestamista";
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
        <SocialProof />
        <TheGap />
        <CustoAprovacao />
        <VisionArc />
        <Art37 />
        <ImobiliariaCapture />
        <SeguroPrestamista />
        <Team />
      </main>
      <SiteFooter />
    </>
  );
}
