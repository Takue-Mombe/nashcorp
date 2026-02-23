import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tinashegore.com"),
  title: {
    default: "Tinashe Gore | Bespoke Carpentry & Custom Woodwork Studio",
    template: "%s | Tinashe Gore Carpentry Studio",
  },
  description:
    "Tinashe Gore Carpentry Studio crafts bespoke furniture, custom cabinetry, and fine woodwork. Hand-built with precision and passion.",
  authors: [{ name: "Tinashe Gore Carpentry Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
