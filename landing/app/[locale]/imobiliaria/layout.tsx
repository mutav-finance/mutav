export default function ImobiliariaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div data-front="imobiliarias" className="flex-1 flex flex-col min-h-screen">
      {children}
    </div>
  );
}
