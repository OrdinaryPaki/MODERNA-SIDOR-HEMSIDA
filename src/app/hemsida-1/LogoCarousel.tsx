import styles from "./logo-carousel.module.css";

const logos = [
  "Acme Corp",
  "GlobalTech",
  "Innova",
  "Nexus",
  "Vanguard",
  "Apex",
  "Summit",
  "Horizon",
];

export function LogoCarousel() {
  return (
    <section className={styles.logoCarouselSection}>
      <div className={styles.logoCarousel}>
        <div className={styles.logoTrack}>
          {/* Double the logos for seamless infinite scrolling */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
