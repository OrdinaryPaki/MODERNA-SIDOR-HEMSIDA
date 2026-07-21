import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative h-[850px] w-full overflow-hidden">
      {/* Bg layers — exactly as in Figma */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/hero-canvas.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/hero-overlay.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Top: label + hero headline placeholder (your own) */}
      <div className="absolute left-0 top-0 flex w-full max-w-[1503px] flex-col gap-1 pl-3 pr-6 pt-14">
        {/* Large hero wordmark area — 280px tall in original, here your own heading */}
        <div className="h-[280px] w-[1467px] max-w-full">
          <h1 className="text-[clamp(60px,10vw,140px)] font-medium uppercase leading-[0.92] tracking-[-0.04em] text-[#f0f5f9]">
            Moderna Sidor
          </h1>
        </div>
        <div className="flex items-center pl-5">
          <p className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#f0f5f9]/70">
            Sedan 2019
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="absolute bottom-0 left-0 flex w-full max-w-[1503px] items-center justify-end px-8 pb-8">
        <div className="flex flex-col items-end gap-3">
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
              <span className="text-[16px] leading-[20.8px] tracking-[-0.48px] text-[#f0f5f9]">
                4.8/5
              </span>
            </div>
            <span className="text-[16px] leading-[20.8px] tracking-[-0.48px] text-[#f0f5f9]">
              3.2x Average ROI
            </span>
          </div>
          <a
            href="#kontakt"
            className="inline-flex h-[45px] items-center justify-center rounded-[2px] bg-[#f0f5f9] px-6"
          >
            <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px] text-[#1f75b2]">
              Starta ditt projekt
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 0l1.546 3.793L11.7 4.13l-3.2 2.74.99 4.13L6 8.88 2.51 11l.99-4.13L.3 4.13l4.154-.337L6 0z"
        fill="#f0f5f9"
      />
    </svg>
  );
}
