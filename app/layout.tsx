import type { Metadata } from "next";
import { Playfair_Display, Courier_Prime, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "LURCH — Finally, love optimised.",
  description: "Real connection. Algorithmically guaranteed.",
  openGraph: {
    title: "LURCH — Finally, love optimised.",
    description: "Real connection. Algorithmically guaranteed.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${courier.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
