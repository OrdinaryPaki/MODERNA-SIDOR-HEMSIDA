import Image from "next/image";

export default function Showreel() {
  return (
    <section className="bg-[#f0f5f9] px-8 py-20 text-[#061218]">
      <div className="mx-auto flex max-w-[1439px] flex-col gap-[76px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#1f75b2]">
            //02 Showreel
          </span>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-[644px] text-[88px] font-medium uppercase leading-[96.8px] tracking-[-3.52px]">
              See Our Work in Motion
            </p>
            <p className="max-w-[380px] text-[20px] leading-[26px] tracking-[-0.6px] opacity-70">
              Experience a fast showcase of our best projects, highlighting bold
              design, seamless strategy, and measurable impact.
            </p>
          </div>
        </div>

        {/* Video/poster */}
        <div className="group relative aspect-[1439/820] w-full overflow-hidden rounded-[12px]">
          <Image
            src="/assets/showreel.png"
            alt="Showreel"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
