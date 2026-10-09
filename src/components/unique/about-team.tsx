import { aboutCopy, team } from "@/data/unique-about";
import { Button } from "@/components/shared/button";
import { Reveal, SplitText } from "@/components/shared/reveal";
import styles from "./about.module.css";

export function AboutTeam() {
  return <section className={styles.team} data-section="about-team"><div className={styles.teamGrid}>{team.map((member, index) => <Reveal key={member.name} className={styles.member} delay={(index % 4) * .05}><img src={`/assets/unique/${member.image}`} alt={member.name} loading="lazy" /><div><p>{member.name}</p><p>{member.role}</p></div></Reveal>)}</div><Reveal className={styles.join}><div><SplitText text={aboutCopy.joinTitle} as="h2" /><p>{aboutCopy.join}</p></div><Button href="/contact" variant="text">Let&apos;s talk</Button></Reveal></section>;
}
