export default function InvestidorLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div data-front="investidor" className="flex-1 flex flex-col min-h-screen">
      {children}
    </div>
  );
}
