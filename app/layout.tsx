import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeApplicator } from "@/components/layout/ThemeApplicator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LURCH — Finally, love optimised.",
  description: "We match you on your trauma.",
  openGraph: {
    title: "LURCH — Finally, love optimised.",
    description: "We match you on your trauma.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LURCH — Finally, love optimised.",
    description: "We match you on your trauma.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="phone-shell">
          <ThemeApplicator />
          <div className="no-bounce">{children}</div>
        </div>
      </body>
    </html>
  );
}
