import SectionLabel from "./SectionLabel";

export default function Showreel() {
  return (
    <section className="bg-background px-5 pb-16 pt-14 sm:px-8 sm:py-20">
      <SectionLabel>{"//02 Showreel"}</SectionLabel>

      <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <h2 className="max-w-[353px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] sm:max-w-3xl sm:text-[clamp(2.5rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
          <span className="whitespace-nowrap">See Our Work</span>
          <br />
          <span className="whitespace-nowrap">in Motion</span>
        </h2>
        <p className="max-w-[353px] text-[17px] leading-[1.42] text-muted sm:max-w-[380px] sm:text-[20px] sm:leading-[1.3] sm:tracking-[-0.03em] sm:text-foreground">
          <span className="sm:hidden">
            Browse our best projects showcasing bold design, seamless strategy,
            and real business impact.
          </span>
          <span className="hidden sm:inline">
            Experience a fast showcase of our best projects, highlighting bold
            design, seamless strategy, and measurable impact.
          </span>
        </p>
      </div>

      <div className="grain relative mt-5 aspect-[1.508] w-full overflow-hidden rounded-[12px] border border-[#06121814] bg-[#1b679d] sm:mt-[76px] sm:aspect-[1.753]">
        <video
          src="/reference/3BDoGQqUun8oJGATqjDVryyVGRc.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
