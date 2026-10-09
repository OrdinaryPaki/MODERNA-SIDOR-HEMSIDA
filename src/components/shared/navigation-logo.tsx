import navigationLogo from "../../../public/brand/moderna-sidor-navigation-inter.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./site-header.module.css";

type NavigationLogoProps = {
  light?: boolean;
  inactive?: boolean;
  onNavigate: () => void;
};

export function NavigationLogo({ light = false, inactive = false, onNavigate }: NavigationLogoProps) {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${light ? styles.lightLogo : ""}`}
      aria-label="Moderna Sidor – startsida"
      aria-hidden={inactive || undefined}
      inert={inactive}
      onClick={onNavigate}
    >
      <Image
        src={navigationLogo}
        alt="Moderna Sidor"
        width={1774}
        height={887}
        sizes="284px"
        preload
      />
    </Link>
  );
}
