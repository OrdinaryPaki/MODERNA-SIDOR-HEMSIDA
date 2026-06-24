import { Archivo, Inter, Inter_Tight } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--hemsida-1-inter",
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--hemsida-1-inter-tight",
  weight: ["500", "600"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--hemsida-1-archivo",
  weight: ["500"],
});

export default function Hemsida1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${interTight.variable} ${archivo.variable}`}>
      {children}
    </div>
  );
}
