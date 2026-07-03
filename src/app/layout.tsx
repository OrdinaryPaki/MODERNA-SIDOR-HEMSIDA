import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

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
      className={`${hemsidaInter.variable} ${hemsidaInterTight.variable} ${hemsidaArchivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
