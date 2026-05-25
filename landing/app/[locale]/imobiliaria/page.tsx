import { setRequestLocale } from "next-intl/server";
import { SiteNav } from "@/components/imobiliaria/nav";
import { Hero } from "@/components/imobiliaria/hero";
import { SocialProof } from "@/components/imobiliaria/social-proof";
import { TheGap } from "@/components/imobiliaria/the-gap";
import { CustoAprovacao } from "@/components/imobiliaria/custo-aprovacao";
import { VisionArc } from "@/components/imobiliaria/vision-arc";
import { Art37 } from "@/components/imobiliaria/art37";
import { ImobiliariaCapture } from "@/components/imobiliaria/imobiliaria-capture";
import { SeguroPrestamista } from "@/components/imobiliaria/seguro-prestamista";
import { Team } from "@/components/imobiliaria/team";
import { SiteFooter } from "@/components/imobiliaria/footer";

export default async function ImobiliariaPage({
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
