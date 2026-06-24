import { navItems } from "./navigation";
import styles from "./mobile-nav.module.css";

export function MobileNav() {
  return (
    <details className={styles.mobileNav}>
      <summary aria-label="Öppna meny">
        <span aria-hidden="true" />
      </summary>
      <nav aria-label="Mobil meny">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
