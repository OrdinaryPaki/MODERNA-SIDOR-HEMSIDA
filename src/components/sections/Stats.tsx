"use client";

import CountUp from "@/components/CountUp";

const row1 = [
  { end: 120, suffix: "+", decimals: 0, label: "Completed projects" },
  { end: 3.2, suffix: "x", decimals: 1, label: "Average ROI increase" },
];
const row2 = [
  { end: 98, suffix: "%", decimals: 0, label: "Client satisfaction rate" },
  { end: 24, suffix: "hr", decimals: 0, label: "Average response time" },
];

export default function Stats() {
  return (
    <section className="bg-[#061218] px-8 py-20">
      <div className="mx-auto flex max-w-[1439px] flex-col gap-[76px]">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#f0f5f9]/70">
            //05 Why choose us
          </span>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-[692px] text-[88px] font-medium uppercase leading-[96.8px] tracking-[-3.52px] text-[#f0f5f9]">
              Details make the difference
            </p>
            <p className="max-w-[290px] text-[20px] leading-[26px] tracking-[-0.6px] text-[#f0f5f9]/70">
              We&apos;re not just designers. We&apos;re your partners who help
              you grow and get real results you can see.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex flex-col gap-4">
          <StatsRow items={row1} />
          <div className="h-px w-full bg-[rgba(240,245,249,0.12)]" />
          <StatsRow items={row2} />
          <div className="h-px w-full bg-[rgba(240,245,249,0.12)]" />

          {/* Logo row at bottom */}
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {["Baseline", "Urban Bites", "Northcap", "Velo"].map((name) => (
              <div
                key={name}
                className="flex h-[132px] items-center justify-center rounded-[4px] border border-[rgba(240,245,249,0.12)] bg-[#061218]"
              >
                <span className="text-[18px] font-medium text-[#f0f5f9]/50">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsRow({
  items,
}: {
  items: { end: number; suffix: string; decimals: number; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-6 py-6 lg:flex-row lg:gap-16">
      {items.map((s) => (
        <div
          key={s.label}
          className="flex flex-1 items-end justify-between"
        >
          <span className="text-[124px] font-normal leading-[111.6px] tracking-[-4.96px] text-[#f0f5f9]">
            <CountUp end={s.end} decimals={s.decimals} suffix={s.suffix} />
          </span>
          <span className="text-[20px] leading-[26px] tracking-[-0.6px] text-[#f0f5f9]/70">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
