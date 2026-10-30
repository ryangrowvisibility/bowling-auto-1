import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald" });
const source = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source" });

export const metadata: Metadata = {
  title: "Bowling Auto 1 | Auto Repair in South Sacramento | (916) 395-2804",
  description:
    "Complete auto repair on Bowling Drive in South Sacramento: diagnostics, brakes, A/C, tune-ups, transmission, suspension and electrical. Rated 4.8 stars on Google. Call (916) 395-2804.",
  openGraph: {
    title: "Bowling Auto 1 | Auto Repair in South Sacramento",
    description: "Honest prices, clear updates, and a shop that follows up. Call (916) 395-2804.",
    images: ["/images/shop-front.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${source.variable}`}>
      <body>{children}</body>
    </html>
  );
}
