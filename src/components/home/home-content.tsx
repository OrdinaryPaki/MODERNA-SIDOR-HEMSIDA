import type { ReactNode } from "react";
import {
  HomeVision,
  HomeProcess,
  HomeProjects,
} from "./home-sections";
import { HomeIntroduction } from "./home-introduction";
import styles from "./home-content.module.css";

export function HomeContent({ hero }: { hero?: ReactNode }) {
  return (
    <>
      <div className={hero ? styles.firstScreen : undefined}>
        {hero}
        <HomeIntroduction />
      </div>
      <HomeVision />
      <HomeProcess />
      <HomeProjects />
    </>
  );
}
