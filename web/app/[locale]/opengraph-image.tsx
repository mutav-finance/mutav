import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt =
  "mutav — access the $770M Brazilian rental guarantee market";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens mirrored from web/app/globals.css (dark theme).
const CANVAS = "#0A0A0A";
const TEXT = "#F5F4EE";
const TEXT_2 = "#9C9A92";
const ACCENT = "#D4A04A";
const BORDER = "#272622";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isPt = locale === "pt-BR";

  // Brand mark — read the PNG from disk, base64-encode for inline embedding.
  // ImageResponse needs the image as a data URL or absolute URL; inline avoids
  // a runtime fetch + works in edge & node alike.
  const logoPath = join(process.cwd(), "public", "brand", "logo.png");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  const logoDataUrl = `data:image/png;base64,${logoBase64}`;

  const kicker = isPt ? "ATIVO REAL. RENDIMENTO REAL." : "REAL ASSET. REAL YIELD.";
  const headline = isPt
    ? "Mercado de R$ 4 bi em garantia de aluguel — on-chain pela primeira vez"
    : "Access the $770M Brazilian rental guarantee market";
  const subline = isPt
    ? "O fundo de garantia locatícia on-chain. Rendimento real, lastreado em ativos reais."
    : "The on-chain rental guarantee fund. Real yield, backed by real assets.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: CANVAS,
          color: TEXT,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top — kicker bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.08em",
            color: TEXT_2,
            fontFamily: "monospace",
          }}
        >
          <div style={{ width: 4, height: 28, background: ACCENT }} />
          {kicker}
        </div>

        {/* Middle — headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: TEXT,
              textTransform: "uppercase",
              maxWidth: 1040,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: TEXT_2,
              maxWidth: 880,
            }}
          >
            {subline}
          </div>
        </div>

        {/* Bottom — lockup + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img
              src={logoDataUrl}
              width={64}
              height={64}
              alt=""
            />
            <span
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: "-0.03em",
              }}
            >
              mutav
            </span>
          </div>
          <span
            style={{
              fontSize: 22,
              fontFamily: "monospace",
              color: TEXT_2,
              letterSpacing: "0.04em",
            }}
          >
            mutav.finance
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
