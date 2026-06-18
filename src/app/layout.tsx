import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display-typsnitt för rubriker (self-hostat från Fontshare, fri kommersiell licens)
const switzer = localFont({
  variable: "--font-switzer",
  src: [
    { path: "../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Nori Studio – Creative Agency Website Template",
  description:
    "Nori Studio is a modern Framer template for agencies, studios, and freelancers to showcase portfolios with style and impact.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${switzer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
