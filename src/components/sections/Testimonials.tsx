import Image from "next/image";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Our digital ordering system finally feels effortless. Customers find it easy to navigate, and we've seen orders skyrocket since launch.",
    name: "Isabella Rodriguez",
    role: "Founder of Urban Bites",
    avatar: "/assets/avatar-1.png",
  },
  {
    quote:
      "The rebrand captured exactly what we stand for. Clean, minimal, and bold, it gave our streetwear label the edge we needed to break through.",
    name: "Sarah Kim",
    role: "Founder of Northcap Supply",
    avatar: "/assets/avatar-2.png",
  },
  {
    quote:
      "The new brand identity gave us the confidence to stand out. Athletes now recognize us instantly, and engagement from our community grew stronger than ever.",
    name: "Derek Thompson",
    role: "Founder of Baseline sports",
    avatar: "/assets/avatar-3.png",
  },
  {
    quote:
      "The new website completely reflects our creative energy. It's smooth, dynamic, and has opened the door to exciting new collaborations.",
    name: "Marcus Chen",
    role: "Director of Velo Studio",
    avatar: "/assets/avatar-4.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f0f5f9] px-8 py-24 text-[#061218]">
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-[clamp(80px,16vw,220px)] font-medium uppercase leading-none tracking-[-0.05em] text-[#061218]/[0.04]"
      >
        Clients
      </p>
      <div className="relative mx-auto max-w-[1439px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className={`flex h-full flex-col justify-between rounded-[8px] bg-white p-5 ${
                i % 2 === 1 ? "lg:mt-16" : ""
              }`}
            >
              <p className="text-[20px] leading-[26px] tracking-[-0.6px]">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-[rgba(6,18,24,0.12)] pt-4">
                <div className="flex items-center gap-4">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-[4px]">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[20px] font-medium leading-[26px] tracking-[-0.6px]">
                      {t.name}
                    </p>
                    <p className="text-[14px] leading-[18px] tracking-[-0.14px] text-[#141414]/70">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
