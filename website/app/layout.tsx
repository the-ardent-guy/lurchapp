import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
      className={`${instrumentSerif.variable} ${inter.variable} ${bebasNeue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
