import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hemsidaInter = Inter({
  subsets: ["latin"],
  variable: "--hemsida-1-inter",
  weight: ["400", "500", "600"],
});

const hemsidaInterTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--hemsida-1-inter-tight",
  weight: ["500", "600"],
});

const hemsidaArchivo = Archivo({
  subsets: ["latin"],
  variable: "--hemsida-1-archivo",
  weight: ["500"],
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
  title: "Moderna Sidor – Skräddarsydda digitala system",
  description:
    "Moderna Sidor utvecklar skräddarsydda digitala system, AI-funktioner och plattformar för företag med specifika behov.",
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
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} ${switzer.variable} ${hemsidaInter.variable} ${hemsidaInterTight.variable} ${hemsidaArchivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
