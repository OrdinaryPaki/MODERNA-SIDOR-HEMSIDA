import Image from "next/image";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import styles from "./figma-pages.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--hemsida-figma-inter",
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--hemsida-figma-inter-tight",
  weight: ["500", "600"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--hemsida-figma-archivo",
  weight: ["500"],
});

type TextLayer = {
  text: string;
  x: number;
  y: number;
  w: number;
  h?: number;
  size: number;
  line: number;
  tracking?: number;
  color?: string;
  family?: "inter" | "tight" | "archivo";
  weight?: 400 | 500 | 600;
  align?: "left" | "center";
};

type ImageLayer = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  alt?: string;
  priority?: boolean;
};

type BoxLayer = {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  radius?: number;
  wide?: boolean;
  foreground?: boolean;
};

export type FigmaPageData = {
  height: number;
  navDark?: boolean;
  images: ImageLayer[];
  boxes: BoxLayer[];
  texts: TextLayer[];
  links?: TextLayer[];
};

const navItems = [
  { label: "Start", href: "/hemsida-1" },
  { label: "Om oss", href: "/hemsida-1/about" },
  { label: "Case", href: "/hemsida-1/solutions" },
  { label: "Process", href: "/hemsida-1/careers" },
  { label: "Kontakt", href: "/hemsida-1/contact" },
];

const family = {
  inter: "var(--hemsida-figma-inter), Arial, sans-serif",
  tight: "var(--hemsida-figma-inter-tight), Arial, sans-serif",
  archivo: "var(--hemsida-figma-archivo), Arial, sans-serif",
};

function Text({ layer }: { layer: TextLayer }) {
  return (
    <p
      className={styles.text}
      style={
        {
          left: layer.x,
          top: layer.y,
          width: layer.w,
          height: layer.h,
          "--text-color": layer.color ?? "#121212",
          "--font-family": family[layer.family ?? "tight"],
          "--font-size": `${layer.size}px`,
          "--font-weight": layer.weight ?? 500,
          "--line-height": `${layer.line}px`,
          "--letter-spacing": `${layer.tracking ?? 0}px`,
          "--align": layer.align ?? "left",
        } as React.CSSProperties
      }
    >
      {layer.text}
    </p>
  );
}

function Box({ layer }: { layer: BoxLayer }) {
  return (
    <div
      className={`${styles.box} ${layer.wide ? styles.sectionWide : ""}`}
      style={
        {
          left: layer.x,
          top: layer.y,
          width: layer.w,
          height: layer.h,
          "--box-color": layer.color,
          "--radius": `${layer.radius ?? 0}px`,
        } as React.CSSProperties
      }
    />
  );
}

function FigmaNav() {
  return (
    <header className={styles.nav}>
      <a className={styles.logo} href="/hemsida-1">
        Moderna Sidor
      </a>
      <nav className={styles.navLinks} aria-label="Primary">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className={styles.search} href="/hemsida-1/contact">
        <span className={styles.searchIcon} aria-hidden="true" />
        Sök
      </a>
      <a className={styles.navCta} href="/hemsida-1/solutions">
        Se case
      </a>
    </header>
  );
}

export function FigmaPage({ data }: { data: FigmaPageData }) {
  return (
    <main
      className={`${inter.variable} ${interTight.variable} ${archivo.variable} ${styles.page}`}
      style={
        {
          height: `${(data.height / 1512) * 100}vw`,
          "--figma-height": `${data.height}px`,
        } as React.CSSProperties
      }
    >
      <div className={styles.canvas}>
        {data.boxes.filter((box) => !box.foreground).map((box, index) => (
          <Box layer={box} key={`${box.x}-${box.y}-${index}`} />
        ))}
        {data.images.map((image) => (
          <Image
            className={styles.image}
            src={image.src}
            alt={image.alt ?? ""}
            width={image.w}
            height={image.h}
            priority={image.priority}
            loading={image.priority ? undefined : "eager"}
            unoptimized
            key={`${image.src}-${image.x}-${image.y}`}
            style={{
              left: image.x,
              top: image.y,
              width: image.w,
              height: image.h,
            }}
          />
        ))}
        {data.boxes.filter((box) => box.foreground).map((box, index) => (
          <Box layer={box} key={`foreground-${box.x}-${box.y}-${index}`} />
        ))}
        <FigmaNav />
        {data.texts.map((text, index) => (
          <Text layer={text} key={`${text.text}-${text.x}-${text.y}-${index}`} />
        ))}
        {data.links?.map((link, index) => (
          <a
            className={styles.footerLink}
            href="/hemsida-1/contact"
            key={`${link.text}-${link.x}-${link.y}-${index}`}
            style={{ left: link.x, top: link.y, width: link.w, height: link.h, color: link.color }}
          >
            <span className={styles.arrowIcon} aria-hidden="true" style={{ left: 0, top: 3 }} />
            <span style={{ position: "absolute", left: 33, top: 0 }}>{link.text}</span>
          </a>
        ))}
      </div>
    </main>
  );
}

export const commonFooter = (top: number): Pick<FigmaPageData, "boxes" | "texts" | "links"> => ({
  boxes: [
    { x: 0, y: top, w: 1512, h: 447, color: "#121212", wide: true },
    { x: 0, y: top + 447, w: 1512, h: 461, color: "#121212", wide: true },
  ],
  texts: [
    {
      text: "Gör ert viktigaste arbetsflöde till ett riktigt system",
      x: 64,
      y: top + 120,
      w: 540,
      h: 135,
      size: 48,
      line: 67.2,
      tracking: -0.96,
      color: "#ffffff",
    },
    {
      text: "Vi tar röriga processer, manuella steg och utspridda verktyg och gör dem till en tydlig digital produkt som går att använda varje dag.",
      x: 811,
      y: top + 120,
      w: 637,
      h: 116,
      size: 24,
      line: 38.4,
      tracking: -0.48,
      color: "#121212",
    },
    {
      text: "Moderna Sidor",
      x: 59,
      y: top + 511,
      w: 190,
      h: 45,
      size: 28,
      line: 44.8,
      tracking: -0.56,
      color: "#ffffff",
      weight: 600,
    },
    {
      text: "System, AI-funktioner och interna verktyg byggda runt hur företag faktiskt jobbar.",
      x: 64,
      y: top + 572,
      w: 374,
      h: 48,
      size: 20,
      line: 24,
      tracking: -0.4,
      color: "#ffffff",
      family: "inter",
      weight: 400,
    },
    {
      text: "Sidor",
      x: 811,
      y: top + 511,
      w: 58,
      h: 32,
      size: 20,
      line: 32,
      tracking: -0.4,
      color: "#121212",
      weight: 600,
    },
    {
      text: "Socialt",
      x: 1352,
      y: top + 511,
      w: 80,
      h: 32,
      size: 20,
      line: 32,
      tracking: -0.4,
      color: "#121212",
      weight: 600,
    },
    {
      text: "© 2026 — Moderna Sidor",
      x: 68,
      y: top + 802,
      w: 338,
      h: 39,
      size: 24,
      line: 38.4,
      tracking: -0.48,
      color: "#121212",
    },
  ],
  links: [
    { text: "Kontakta oss", x: 811, y: top + 300, w: 190, h: 28, size: 20, line: 28, color: "#ffffff" },
  ],
});
