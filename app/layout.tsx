import type { Metadata } from "next";
import { Fraunces, Courier_Prime, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  // Fraunces is a variable font. Without the opsz axis, next/font pins optical
  // size at its default (14 - a text cut), which renders far too wide and heavy
  // at display sizes. Including it re-enables automatic optical sizing.
  axes: ["opsz"],
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
    <html lang="en" className={`${fraunces.variable} ${courier.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
