import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function ImobiliariaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = (await getMessages()) as Record<string, unknown>;
  const { imobiliaria, investidor: _unused, ...shared } = messages;
  const scoped = { ...shared, ...(imobiliaria as Record<string, unknown>) };

  return (
    <NextIntlClientProvider messages={scoped}>
      <div data-front="imobiliarias" className="flex-1 flex flex-col min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
