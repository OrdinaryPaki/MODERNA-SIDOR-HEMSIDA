import { projectOverviewHref } from "@/lib/project-visibility";
import Image from "next/image";
import Link from "next/link";
import { aboutPageEnabled } from "@/lib/about-visibility";
import s from "./standard-hero-parts.module.css";

const heroHeadline = "Digitala lösningar som gör vardagen enklare.";

export function HeroTitle({ className = "", emphasizeOpening = false }: { className?: string; emphasizeOpening?: boolean }) {
  const words = heroHeadline.split(" ");
  return <h1 className={`${s.title} ${className}`}>{emphasizeOpening ? <><span>{words.slice(0, 2).join(" ")}</span>{" "}{words.slice(2).join(" ")}</> : heroHeadline}</h1>;
}

export function HeroCopy({ className = "" }: { className?: string }) {
  return <p className={`${s.copy} ${className}`}>Vi skapar webbplatser och digitala system som sparar tid och hjälper din verksamhet framåt.</p>;
}

export function HeroActions({ className = "" }: { className?: string }) {
  return <div className={`${s.actions} ${className}`}>
    <Link className={s.primary} href="/contact">Prata med oss<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></Link>
    <Link className={s.secondary} href={projectOverviewHref}>Se våra projekt</Link>
  </div>;
}

export function HeroPhoto({ className, src = "/assets/hero/coastal-house.png", alt = "Modern arkitektur vid den svenska kusten" }: { className: string; src?: string; alt?: string }) {
  return <div className={`${s.photo} ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 809px) 100vw, 55vw" loading="eager" /></div>;
}

export function HeroPreviewNav() {
  return <div className={s.nav}>
    <Link className={s.brand} href="/">Moderna Sidor<span aria-hidden="true">.</span></Link>
    <nav aria-label="Hero-navigering"><Link href={projectOverviewHref}>Projekt</Link>{aboutPageEnabled && <Link href="/about">Om oss</Link>}<Link href="/contact">Kontakt</Link></nav>
  </div>;
}
