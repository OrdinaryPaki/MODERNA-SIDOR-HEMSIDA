"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const slides = [
  {
    quote:
      "Moderna Sidor hjälpte oss samla uppföljning, ansvar och nästa steg i ett tydligt flöde. Det blev enklare att hitta rätt information, följa upp vad som fastnade och fatta beslut utan att hoppa mellan flera underlag. Vi fick också bättre överblick mellan teamen när något behövde prioriteras snabbt.",
    name: "Kundteam",
    role: "Operativ ledning",
    desktopImage: "https://framerusercontent.com/images/XrnXAfMIemeJb08mW1AhrUQMjT0.jpg?width=9238&height=6159",
    mobileImage: "https://framerusercontent.com/images/XrnXAfMIemeJb08mW1AhrUQMjT0.jpg?width=9238&height=6159",
  },
  {
    quote:
      "Vi fick en gemensam vy för status, ansvar och kundhistorik. Teamet behövde lägga mindre tid på att leta och mer tid på att agera.",
    name: "Projektansvarig",
    role: "Leverans och uppföljning",
    desktopImage: "/figma/hemsida-1/impact-crop.jpg",
    mobileImage: "/figma/hemsida-1/pages/about-testimonial.png",
  },
  {
    quote:
      "Rapporteringen gick från splittrade utdrag till ett system där vi kunde prioritera rätt snabbare och följa upp vad som faktiskt fastnade.",
    name: "Ledningsgrupp",
    role: "Beslut och planering",
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
    }, 24000);

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
          <div
            key={`${activeSlide.desktopImage}-desktop`}
            className={styles.testimonialImage}
            style={{ backgroundImage: `url(${activeSlide.desktopImage})` }}
          />
          <div
            key={`${activeSlide.mobileImage}-mobile`}
            className={`${styles.testimonialImage} ${styles.testimonialImageMobile}`}
            style={{ backgroundImage: `url(${activeSlide.mobileImage})` }}
          />
        </div>
      </div>
    </>
  );
}
