/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@components/layout/Navbar";

import "@/assets/styles/globals.scss";
import "@/assets/styles/globals.css";
import LenisScroller from "@/hooks/LenisScroller";
import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sreeharsh Rajan | Full Stack Developer",
  description:
    "Personal Portfolio Website of Sreeharsh, a Full Stack Developer in India who works from Design to Development of Web Applications.",
};

export const viewport: Viewport = {
  themeColor: "#6366F1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased overflow-hidden">
      <body
        className={`${inter.className} bg-zinc-50 dark:bg-indigo-950 overflow-x-hidden`}
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
