import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://sarroca1935.com"),
  title: "Sarroca 1935 | Asset Management",
  description: "Vehículo de inversión familiar enfocado en el crecimiento y la preservación del patrimonio con una estrategia de largo plazo.",
  keywords: ["asset management", "family office", "inversiones", "Barcelona", "patrimonio familiar"],
  authors: [{ name: "Sarroca 1935" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sarroca 1935 | Asset Management",
    description: "Preservar. Crecer. Perdurar.",
    type: "website",
    locale: "es_ES",
    siteName: "Sarroca 1935",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarroca 1935 | Asset Management",
    description: "Preservar. Crecer. Perdurar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-source-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
