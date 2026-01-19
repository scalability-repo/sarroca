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
  title: "Sarroca 1935 | Asset Management",
  description: "Vehículo de inversión familiar enfocado en el crecimiento y la preservación del patrimonio con una estrategia de largo plazo.",
  keywords: ["asset management", "family office", "inversiones", "Barcelona", "patrimonio familiar"],
  authors: [{ name: "Sarroca 1935" }],
  openGraph: {
    title: "Sarroca 1935 | Asset Management",
    description: "Preservar. Crecer. Perdurar.",
    type: "website",
    locale: "es_ES",
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
