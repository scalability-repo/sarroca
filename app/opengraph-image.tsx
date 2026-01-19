import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sarroca 1935 - Asset Management";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoPath = join(process.cwd(), "public", "hero-logo.png");
  const logoData = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F5F4EF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Decorative top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#9a9568",
          }}
        />
        {/* Decorative bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#9a9568",
          }}
        />

        {/* Logo container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Sarroca 1935"
            width={280}
            height={280}
            style={{
              objectFit: "contain",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#9a9568",
              fontSize: "24px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "#9a9568",
              }}
            />
            <span>Asset Management</span>
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "#9a9568",
              }}
            />
          </div>

          {/* Motto */}
          <div
            style={{
              color: "#5a5a5a",
              fontSize: "20px",
              letterSpacing: "0.1em",
              marginTop: "8px",
            }}
          >
            Preservar · Crecer · Perdurar
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
