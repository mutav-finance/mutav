import { setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade — mutav",
  description: "Política de privacidade da MUTAV.",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [{ locale: "pt-BR" }, { locale: "en" }];
}

export default async function PrivacidadePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (locale === "en") redirect("/privacidade");

  return (
    <main id="main" className="min-h-screen bg-canvas text-text px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <a
          href="/"
          className="inline-block text-xs font-mono text-text-2 hover:text-accent transition-colors mb-12"
        >
          ← mutav.finance
        </a>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-3">
          Política de Privacidade
        </h1>
        <p className="font-mono text-xs text-text-2 mb-12">
          Última atualização: <time dateTime="2026-05-20">2026-05-20</time>
          {" · "}versão 1.0 · rascunho pendente revisão dos founders
        </p>

        <div className="space-y-10 text-sm font-sans leading-relaxed text-text-2">

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              1. Quem somos
            </h2>
            <p>
              A MUTAV é um protocolo de garantia locatícia em desenvolvimento, operado por Matheus &ldquo;Draau&rdquo; de Pauli e Julia Hoffmann Buratto. Esta política descreve como tratamos os dados pessoais coletados por meio da lista de espera em mutav.finance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              2. Dados coletados
            </h2>
            <p>
              Coletamos exclusivamente o endereço de e-mail fornecido voluntariamente ao se inscrever na lista de espera. Não coletamos dados de navegação, cookies de rastreamento, informações de pagamento ou qualquer outro dado pessoal nesta fase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              3. Finalidade e base legal
            </h2>
            <p>
              Seu e-mail é usado exclusivamente para enviar atualizações sobre o lançamento da MUTAV. A base legal é o consentimento explícito fornecido no momento da inscrição (Lei 13.709/2018 — LGPD, Art. 7º, inciso I).
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              4. Retenção dos dados
            </h2>
            <p>
              Mantemos seu e-mail enquanto você permanecer inscrito na lista ou até o lançamento do produto, o que ocorrer primeiro. Após o lançamento, os dados serão migrados para a plataforma ou excluídos, conforme sua preferência.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              5. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos, alugamos nem compartilhamos seu e-mail com terceiros para fins comerciais. O dado pode ser processado por suboperadores de infraestrutura de e-mail (ex: Resend) exclusivamente para o envio das comunicações descritas nesta política.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              6. Seus direitos (LGPD Art. 18)
            </h2>
            <ul className="list-none space-y-2">
              {[
                "Confirmação da existência do tratamento",
                "Acesso aos dados",
                "Correção de dados incompletos ou desatualizados",
                "Eliminação dos dados tratados com consentimento",
                "Revogação do consentimento a qualquer momento",
                "Portabilidade dos dados",
              ].map((right) => (
                <li key={right} className="flex gap-2">
                  <span className="text-accent font-mono select-none">—</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Para exercer qualquer um desses direitos, basta responder qualquer e-mail da MUTAV com a palavra <span className="font-mono text-text">&ldquo;sair&rdquo;</span> para remoção, ou entrar em contato pelo endereço abaixo.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              7. Contato
            </h2>
            <p>
              Dúvidas sobre privacidade:{" "}
              <a
                href="mailto:privacy@mutav.finance"
                className="text-accent hover:underline font-mono"
              >
                privacy@mutav.finance
              </a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-surface-2">
          <a
            href="/"
            className="inline-block text-xs font-mono text-text-2 hover:text-accent transition-colors"
          >
            ← mutav.finance
          </a>
        </div>
      </div>
    </main>
  );
}
