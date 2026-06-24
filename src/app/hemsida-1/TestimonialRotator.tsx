"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const slides = [
  {
    quote:
      "Moderna Sidor hjälpte oss samla uppföljning, ansvar och nästa steg i ett tydligt flöde. Det blev enklare att hitta rätt information och fatta beslut.",
    name: "Kundteam",
    role: "Operativ verksamhet",
    desktopImage: "/figma/hemsida-1/impact.jpg",
    mobileImage: "/figma/hemsida-1/testimonial.png",
  },
  {
    quote:
      "Vi gick från spridda dokument till en gemensam arbetsyta där teamet ser status, prioritet och nästa steg utan att leta.",
    name: "Projektteam",
    role: "Tillväxtbolag",
    desktopImage: "/figma/hemsida-1/impact-crop.jpg",
    mobileImage: "/figma/hemsida-1/pages/about-testimonial.png",
  },
  {
    quote:
      "Automatiseringen tog bort återkommande manuella moment och gav oss bättre underlag för beslut varje vecka.",
    name: "Ledningsgrupp",
    role: "Serviceverksamhet",
    desktopImage: "/figma/hemsida-1/pages/about-testimonial.png",
    mobileImage: "/figma/hemsida-1/impact.jpg",
  },
];

export function TestimonialRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.quotePane}>
          <blockquote key={activeSlide.quote}>{activeSlide.quote}</blockquote>
          <div className={styles.person}>
            <strong>{activeSlide.name}</strong>
            <span>{activeSlide.role}</span>
          </div>
        </div>
        <div className={styles.testimonialImageWrap}>
          <Image
            key={activeSlide.desktopImage}
            src={activeSlide.desktopImage}
            alt=""
            fill
            sizes="50vw"
            loading="eager"
            unoptimized
            className={styles.testimonialImage}
          />
          <Image
            key={activeSlide.mobileImage}
            src={activeSlide.mobileImage}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            unoptimized
            className={`${styles.testimonialImage} ${styles.testimonialImageMobile}`}
          />
        </div>
      </div>
      <div className={styles.sliderMarks} aria-label="Testimonial slides">
        {slides.map((slide, index) => (
          <button
            aria-label={`Visa testimonial ${index + 1}: ${slide.name}`}
            aria-current={index === activeIndex}
            className={index === activeIndex ? styles.sliderMarkActive : undefined}
            key={slide.name}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </>
  );
}
