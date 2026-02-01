import React from "react";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Noto_Sans_Thai } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { LangProvider } from "@/context/lang-context";

import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-notoSansThai",
});

export const metadata: Metadata = {
  title: "Spanwich — Portfolio & Blog",
  description: "Personal portfolio, research, and blog by Spanwich.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansThai.className} flex min-h-screen flex-col`}>
        <LangProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
