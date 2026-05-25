import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function InvestidorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = (await getMessages()) as Record<string, unknown>;
  const { investidor, imobiliaria: _unused, ...shared } = messages;
  const scoped = { ...shared, ...(investidor as Record<string, unknown>) };

  return (
    <NextIntlClientProvider messages={scoped}>
      <div data-front="investidor" className="flex-1 flex flex-col min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
