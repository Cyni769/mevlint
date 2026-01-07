import React from "react";
import type { Metadata } from "next";
import { Rethink_Sans , Space_Mono } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mevlint - Collaborate with creators and make dream come true",
  description: "Mevlint is a platform that connects creators with professionals across various fields to bring their projects to life. Join us to explore opportunities, collaborate with partners, and turn your dreams into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
