import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — mutav",
  description: "Termos de uso da MUTAV.",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [{ locale: "pt-BR" }, { locale: "en" }];
}

export default async function TermosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main" className="min-h-screen bg-canvas text-text px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <a
          href="/"
          className="inline-block text-xs font-mono text-text-3 hover:text-accent transition-colors mb-12"
        >
          ← mutav.finance
        </a>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-3">
          Termos de Uso
        </h1>
        <p className="font-mono text-xs text-text-3 mb-12">
          Última atualização: <time dateTime="2026-05-20">2026-05-20</time>
          {" · "}versão 1.0 · rascunho pendente revisão dos founders
        </p>

        <div className="space-y-10 text-sm font-sans leading-relaxed text-text-2">

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              1. Sobre a MUTAV
            </h2>
            <p>
              A MUTAV é um protocolo de garantia locatícia em desenvolvimento, construído na blockchain Stellar. O produto ainda não está em operação comercial. Esta página descreve os termos que regem o uso da lista de espera disponível em mutav.finance.
            </p>
            <p className="mt-3">
              Responsáveis: Matheus &ldquo;Draau&rdquo; de Pauli e Julia Hoffmann Buratto.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              2. Lista de espera
            </h2>
            <p>
              Ao fornecer seu e-mail e clicar em &ldquo;entre na lista&rdquo;, você consente em receber comunicações sobre o desenvolvimento e o lançamento da MUTAV. A inscrição não cria qualquer vínculo contratual, não garante acesso antecipado ao produto e não implica qualquer obrigação financeira.
            </p>
            <p className="mt-3">
              Você pode sair da lista a qualquer momento respondendo qualquer e-mail da MUTAV com a palavra &ldquo;sair&rdquo;.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              3. Produto em desenvolvimento
            </h2>
            <p>
              As funcionalidades, estrutura do fundo, classes de tokens (MTVH, MTVM, MTVL) e demais características descritas neste site são informações sobre o produto em desenvolvimento. Estão sujeitas a alterações antes do lançamento. Nada aqui constitui oferta pública de valores mobiliários ou instrumento de investimento regulamentado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              4. Transparência sobre os founders
            </h2>
            <p>
              A MUTAV não é um projeto anônimo. Os responsáveis são publicamente identificados:
            </p>
            <ul className="list-none space-y-2 mt-3">
              <li className="flex gap-2">
                <span className="text-accent font-mono select-none">—</span>
                <span>
                  Matheus &ldquo;Draau&rdquo; de Pauli —{" "}
                  <a href="https://github.com/draaujpeg" className="text-accent hover:underline font-mono">github.com/draaujpeg</a>
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-mono select-none">—</span>
                <span>
                  Julia Hoffmann Buratto —{" "}
                  <a href="https://github.com/hoffms" className="text-accent hover:underline font-mono">github.com/hoffms</a>
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              5. Código aberto
            </h2>
            <p>
              O código do protocolo e a arquitetura técnica são públicos em{" "}
              <a href="https://github.com/mutav-finance" className="text-accent hover:underline font-mono">
                github.com/mutav-finance
              </a>
              . Você pode verificar a implementação de forma independente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              6. Limitação de responsabilidade
            </h2>
            <p>
              O site mutav.finance é disponibilizado &ldquo;como está&rdquo;, sem garantias de qualquer natureza. A MUTAV não se responsabiliza por decisões tomadas com base nas informações aqui publicadas antes do lançamento oficial do produto.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              7. Lei aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de Florianópolis, SC, salvo disposição em contrário.
            </p>
          </section>

          <section>
            <h2 className="font-display text-base font-bold text-text mb-3">
              8. Contato
            </h2>
            <p>
              Dúvidas sobre estes termos:{" "}
              <a
                href="mailto:contato@mutav.finance"
                className="text-accent hover:underline font-mono"
              >
                contato@mutav.finance
              </a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-surface-2">
          <a
            href="/"
            className="inline-block text-xs font-mono text-text-3 hover:text-accent transition-colors"
          >
            ← mutav.finance
          </a>
        </div>
      </div>
    </main>
  );
}
