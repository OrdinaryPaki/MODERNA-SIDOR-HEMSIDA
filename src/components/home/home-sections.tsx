import { Reveal } from "@/components/shared/reveal";
import { SplitText } from "@/components/shared/reveal";
import { Counter } from "@/components/shared/counter";
import { Button } from "@/components/shared/button";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { customers } from "@/data/customers";
import {
  ProcessCards,
} from "./interactive-sections";
import s from "./home.module.css";

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className={s.badge}>{children}</span>;
}
function SectionHeading({
  badge,
  title,
  description,
  href,
  label,
}: {
  badge: string;
  title: string;
  description: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className={s.sectionHeading}>
      <Badge>{badge}</Badge>
      <div>
        <SplitText text={title} />
        <p>{description}</p>
        {href && (
          <Button href={href} variant="text">
            {label}
          </Button>
        )}
      </div>
    </div>
  );
}
export { HeroVariants as HomeHero } from "./hero-variants";
export function HomeVision() {
  return (
    <section id="intro" className={s.vision}>
      <div className={s.visionTop}>
        <Badge>VÅR VISION</Badge>
        <div>
          <SplitText text="Det innebär att ni kan hantera större volymer utan att ha fler manuella steg." />
          <p>
            Teknik ska göra verksamheten enklare att driva, även när kraven på verksamheten ökar.
          </p>
          <div className={s.counters}>
            {[
              { value: 47, suffix: "", label: "Levererade projekt", fractionDigits: 0 },
              { value: 30, suffix: "M+", label: "Dataanrop per månad", fractionDigits: 0 },
              { value: 100, suffix: "%", label: "Egenutvecklat", fractionDigits: 0 },
            ].map(({ value, suffix, label, fractionDigits }) => (
              <div key={label}>
                <Counter
                  value={value}
                  suffix={suffix}
                  fractionDigits={fractionDigits}
                />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={s.visionDivider} />
      <div className={s.logoTicker}>
        <div>
          {[0, 1].map((copy) => (
            <div key={copy} className={s.logoTrack} aria-hidden={copy === 1}>
              {customers.map((customer) => (
                <span key={customer.name} className={s.customerWordmark}>
                  <img
                    src={customer.logo.src}
                    alt={customer.showName ? "" : customer.name}
                    data-preserve-contrast={customer.preserveContrast || undefined}
                    width={customer.logo.width}
                    height={customer.logo.height}
                    style={{ height: customer.logo.displayHeight }}
                    loading="lazy"
                    decoding="async"
                  />
                  {customer.showName && <span>{customer.name}</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HomeProcess() {
  return (
    <section id="process" className={s.process}>
      <div className={s.processHeading}>
        <Badge>VÅR PROCESS</Badge>
        <SplitText text="Vi utvecklar lösningar med tydliga prioriteringar, genomtänkta tekniska val och ansvar för att resultatet fungerar i praktiken." />
      </div>
      <ProcessCards />
    </section>
  );
}
export function HomeProjects() {
  return (
    <section id="projects" className={s.projects}>
      <SectionHeading
        badge="KUNDUPPDRAG"
        title="Utvalda uppdrag"
        description="Varje verksamhet har sina utmaningar. Här visar vi hur vi har löst dem tillsammans med våra kunder, från första behov till färdig lösning."
      />
      <div className={s.projectGrid}>
        {projects.slice(0, 6).map((project, i) => (
          <Reveal key={project.slug} className={s[`project${i}`]}>
            <ProjectCard
              project={project}
              sizes={`(max-width: 809px) calc(100vw - 40px), (max-width: 1199px) ${[30, 58, 32, 44, 49, 33][i]}vw, ${[30, 59, 32, 32, 50, 33][i]}vw`}
              aspectRatio={[1, 1.47862, 1, 1, 1.47862, 1][i]}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
