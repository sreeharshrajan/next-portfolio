import "@assets/styles/globals.css";

import config from "@/database/config/metadata.json";

import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import LenisScroller from "@components/layout/LenisScroller";
import CustomCursor from "@components/layout/CustomCursor";
import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

export const metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
};

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`antialiased`}>
      <body
        className={`${font.className} bg-zinc-50 dark:bg-stone-950 dark:text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        <CustomCursor />
        <LenisScroller />
      </body>
    </html>
  );
}
