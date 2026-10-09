import styles from "./unique.module.css";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className={styles.label}><span aria-hidden="true" />{children}</span>;
}
