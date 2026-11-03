import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Softique Demo — the app's display face, used for the LURCH wordmark so the
// logo is identical to the app.
const softique = localFont({
  src: [
    { path: "../public/fonts/SoftiqueDemo-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/SoftiqueDemo-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-logo",
  display: "swap",
});

// Three families only. Instrument Serif for headings and big numbers,
// Inter for UI and body, Bebas Neue for stamps.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stamp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lurch | Finally, love optimised.",
  description:
    "Lurch matches you on your trauma. A satirical dating app that shows how real ones keep you swiping. Free. Try it now.",
  openGraph: {
    title: "Lurch | Finally, love optimised.",
    description:
      "Lurch matches you on your trauma. A satirical dating app that shows how real ones keep you swiping. Free. Try it now.",
    type: "website",
    url: "https://lurchout.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lurch | Finally, love optimised.",
    description:
      "Lurch matches you on your trauma. A satirical dating app that shows how real ones keep you swiping. Free. Try it now.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${bebasNeue.variable} ${softique.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
