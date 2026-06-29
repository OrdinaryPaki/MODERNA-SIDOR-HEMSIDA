import Image from "next/image";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import { CareerApplyDropdown } from "../CareerApplyDropdown";
import { navItems, navHref } from "../navigation";
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
  as?: "p" | "h1";
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
  scaleX?: number;
  wordSpacing?: number;
  hideIcon?: boolean;
};

type ImageLayer = {
  src: string;
  x: number;
  y: number;
  w: number;
  h: number;
  alt?: string;
  priority?: boolean;
  radius?: number;
};

type BoxLayer = {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  border?: string;
  radius?: number;
  wide?: boolean;
  foreground?: boolean;
};

type MarqueeLayer = {
  title: string;
  items: string[];
  x: number;
  y: number;
  w: number;
  h: number;
};

type CareerApplicationLayer = {
  role: string;
  x: number;
  y: number;
  w: number;
};

export type FigmaPageData = {
  height: number;
  srOnlyTitle?: string;
  navDark?: boolean;
  showNav?: boolean;
  navCtaVariant?: "text" | "button";
  textOffsetY?: number;
  offsetAfterY?: number;
  yOffsetAfter?: number;
  images: ImageLayer[];
  boxes: BoxLayer[];
  texts: TextLayer[];
  links?: TextLayer[];
  marquees?: MarqueeLayer[];
  careerApplications?: CareerApplicationLayer[];
};

const family = {
  inter: "var(--hemsida-figma-inter), Arial, sans-serif",
  tight: "var(--hemsida-figma-inter), Arial, sans-serif",
  archivo: "var(--hemsida-figma-archivo), Arial, sans-serif",
};

function adjustedY(y: number, data: Pick<FigmaPageData, "offsetAfterY" | "yOffsetAfter">) {
  return data.offsetAfterY !== undefined && y >= data.offsetAfterY ? y + (data.yOffsetAfter ?? 0) : y;
}

function Text({ layer, offsetY = 0, data }: { layer: TextLayer; offsetY?: number; data: FigmaPageData }) {
  const Element = layer.as ?? "p";
  const hasStarIcon = [
    "See what we did",
    "View all AI solutions",
    "View open careers",
    "Se vad vi gjorde",
    "Se öppna roller",
    "Ansök",
  ].includes(layer.text) && !layer.hideIcon;

  return (
    <>
      {hasStarIcon ? (
        <span
          className={styles.inlineStar}
          aria-hidden="true"
          style={{
            left: layer.x - 29,
            top: adjustedY(layer.y, data) + offsetY,
            color: layer.color ?? "#121212",
            fontSize: 15,
            lineHeight: `${layer.line}px`,
          }}
        >
          ✦
        </span>
      ) : null}
      <Element
        className={`${styles.text} ${hasStarIcon ? styles.starLinkText : ""}`}
        style={
          {
            left: layer.x,
            top: adjustedY(layer.y, data) + offsetY,
            width: layer.w,
            height: layer.h,
            "--text-color": layer.color ?? "#121212",
            "--font-family": family[layer.family ?? "tight"],
            "--font-size": `${layer.size}px`,
            "--font-weight": layer.weight ?? 500,
            "--line-height": `${layer.line}px`,
            "--letter-spacing": `${layer.tracking ?? 0}px`,
            wordSpacing: layer.wordSpacing ? `${layer.wordSpacing}px` : undefined,
            "--align": layer.align ?? "left",
            transform: layer.scaleX ? `scaleX(${layer.scaleX})` : undefined,
            transformOrigin: layer.scaleX ? "left top" : undefined,
            whiteSpace: hasStarIcon ? "nowrap" : undefined,
          } as React.CSSProperties
        }
      >
        {layer.text}
      </Element>
    </>
  );
}

function Box({ layer, data }: { layer: BoxLayer; data: FigmaPageData }) {
  return (
    <div
      className={`${styles.box} ${layer.wide ? styles.sectionWide : ""}`}
      style={
        {
          left: layer.x,
          top: adjustedY(layer.y, data),
          width: layer.w,
          height: layer.h,
          "--box-color": layer.color,
          "--box-border": layer.border ?? "0",
          "--radius": `${layer.radius ?? 0}px`,
        } as React.CSSProperties
      }
    />
  );
}

function isBackdropLayer(image: ImageLayer) {
  return image.src.endsWith("-hero-bg.png");
}

function FigmaNav({ ctaVariant = "text" }: { ctaVariant?: FigmaPageData["navCtaVariant"] }) {
  return (
    <header className={styles.nav}>
      <a className={styles.logo} href={navHref.home}>
        Moderna Sidor
      </a>
      <nav className={styles.navLinks} aria-label="Primary">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className={styles.search} href={navHref.contact}>
        <span className={styles.searchIcon} aria-hidden="true" />
        Sök
      </a>
      <a className={`${styles.navCta} ${ctaVariant === "button" ? styles.navCtaButton : ""}`} href={navHref.solutions}>
        Se lösningar
      </a>
    </header>
  );
}

function TextMarquee({ layer }: { layer: MarqueeLayer }) {
  const items = [...layer.items, ...layer.items];

  return (
    <section
      className={styles.textMarquee}
      style={{
        left: layer.x,
        top: layer.y,
        width: layer.w,
        height: layer.h,
      }}
    >
      {layer.title ? <h2>{layer.title}</h2> : null}
      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {items.map((item, index) => (
            <span className={styles.marqueeItem} key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
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
      {data.showNav !== false ? <FigmaNav ctaVariant={data.navCtaVariant} /> : null}
      <div className={styles.canvas}>
        {data.srOnlyTitle ? <h1 className={styles.srOnly}>{data.srOnlyTitle}</h1> : null}
        {data.boxes.filter((box) => !box.foreground).map((box, index) => (
          <Box layer={box} data={data} key={`${box.x}-${box.y}-${index}`} />
        ))}
        {data.images.map((image) =>
          isBackdropLayer(image) ? (
            <div
              aria-hidden="true"
              className={styles.backdropImage}
              key={`${image.src}-${image.x}-${image.y}`}
              style={
                {
                  left: image.x,
                  top: adjustedY(image.y, data),
                  width: image.w,
                  height: image.h,
                  borderRadius: image.radius,
                  "--backdrop-src": `url(${image.src})`,
                } as React.CSSProperties
              }
            />
          ) : (
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
                top: adjustedY(image.y, data),
                width: image.w,
                height: image.h,
                borderRadius: image.radius,
              }}
            />
          ),
        )}
        {data.boxes.filter((box) => box.foreground).map((box, index) => (
          <Box layer={box} data={data} key={`foreground-${box.x}-${box.y}-${index}`} />
        ))}
        {data.texts.map((text, index) => (
          <Text
            layer={text}
            offsetY={data.textOffsetY}
            data={data}
            key={`${text.text}-${text.x}-${text.y}-${index}`}
          />
        ))}
        {data.marquees?.map((marquee, index) => (
          <TextMarquee layer={marquee} key={`${marquee.title}-${marquee.x}-${marquee.y}-${index}`} />
        ))}
        {data.careerApplications?.map((application) => (
          <CareerApplyDropdown
            className={styles.careerApply}
            key={`${application.role}-${application.y}`}
            role={application.role}
            style={{
              left: application.x,
              top: adjustedY(application.y, data),
              width: application.w,
            }}
          />
        ))}
        {data.links?.map((link, index) => (
          <a
            className={styles.footerLink}
            href={navHref.contact}
            key={`${link.text}-${link.x}-${link.y}-${index}`}
            style={{
              left: link.x,
              top: adjustedY(link.y, data),
              width: link.w,
              height: link.h,
              color: link.color,
              fontSize: link.size,
              lineHeight: `${link.line}px`,
              letterSpacing: link.tracking,
            }}
          >
            {link.hideIcon ? null : <span className={styles.footerStar} aria-hidden="true">✦</span>}
            <span className={styles.footerLinkText}>{link.text}</span>
          </a>
        ))}
      </div>
    </main>
  );
}

export const commonFooter = (top: number, boxTop = top): Pick<FigmaPageData, "boxes" | "texts" | "links"> => ({
  boxes: [
    { x: 0, y: boxTop, w: 1512, h: 447, color: "#121212", wide: true },
    { x: 0, y: boxTop + 447, w: 1512, h: 461, color: "#121212", wide: true },
  ],
  texts: [
    {
      text: "Låt oss bygga ett system runt ert arbetssätt",
      x: 64,
      y: top + 120,
      w: 540,
      h: 202,
      size: 48,
      line: 67.2,
      tracking: -0.96,
      color: "#ffffff",
    },
    {
      text: "Moderna Sidor",
      x: 64,
      y: top + 512,
      w: 240,
      h: 45,
      size: 28,
      line: 44.8,
      tracking: -0.56,
      color: "#ffffff",
      weight: 600,
    },
    {
      text: "Skräddarsydda digitala system för företag som vill jobba tydligare",
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
    ...[
      ["Start", 812, top + 564.6953125, 90],
      ["Om oss", 812, top + 607.6953125, 90],
      ["Lösningar", 812, top + 650.6953125, 110],
      ["Karriär", 812, top + 693.6953125, 90],
      ["Kontakt", 812, top + 736.6953125, 90],
      ["Twitter", 1352, top + 564.6953125, 100],
      ["LinkedIn", 1352, top + 607.6953125, 110],
      ["Instagram", 1352, top + 650.6953125, 120],
    ].map(([text, x, y, w]) => ({
      text: text as string,
      x: x as number,
      y: y as number,
      w: w as number,
      h: 16,
      size: 20,
      line: 16,
      color: "#ffffff",
      family: "inter" as const,
      weight: 500 as const,
    })),
  ],
  links: [
    { text: "Kontakta oss", x: 811.3671875, y: top + 301, w: 158, h: 28, size: 20, line: 28, color: "#ffffff" },
  ],
});
