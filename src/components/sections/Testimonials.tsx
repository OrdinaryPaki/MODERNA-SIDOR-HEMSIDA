import Image from "next/image";

const TESTIMONIALS = [
  {
    company: "Urban Bites",
    logo: "/reference/Ntc48i8GxNtzZe6K8P7DeRLzQ.svg",
    logoWidth: 256,
    logoHeight: 42,
    quote:
      "Our digital ordering system finally feels effortless. Customers find it easy to navigate, and we’ve seen orders skyrocket since launch.",
    person: "Isabella Rodriguez",
    role: "Founder of Urban Bites",
    avatar: "/reference/WHdoBnCIPWONp7Vxs0PkhrCEnj0.jpg",
    align: "center",
  },
  {
    company: "Baseline Sports",
    logo: "/reference/faK3uVL6HKHj0lUYRZh2fWmn3o.svg",
    logoWidth: 256,
    logoHeight: 42,
    quote:
      "The new brand identity gave us the confidence to stand out. Athletes now recognize us instantly, and engagement from our community grew stronger than ever.",
    person: "Derek Thompson",
    role: "Founder of Baseline sports",
    avatar: "/reference/Qtiy6JZJ0E0ZUM1L1TfcKWvXjo.png",
    align: "right",
  },
  {
    company: "Northcap Supply",
    logo: "/reference/NwlOGrknUmkPlpa4MVL7oF0w48Q.svg",
    logoWidth: 279,
    logoHeight: 42,
    quote:
      "The rebrand captured exactly what we stand for. Clean, minimal, and bold, it gave our streetwear label the edge we needed to break through.",
    person: "Sarah Kim",
    role: "Founder of Northcap Supply",
    avatar: "/reference/YH92OiY3WonR2pfeoHvH2CFxNc.png",
    align: "left",
  },
  {
    company: "Velo Studio",
    logo: "/reference/awDtj7rqkXF0BCm12jsm7BzLczg.svg",
    logoWidth: 194,
    logoHeight: 37,
    quote:
      "The new website completely reflects our creative energy. It’s smooth, dynamic, and has opened the door to exciting new collaborations",
    person: "Marcus Chen",
    role: "Director of Velo Studio",
    avatar: "/reference/ugLvMpISL7m7PF7OpfK4y3598xU.png",
    align: "center",
  },
];

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <article className="min-h-[388px] w-full max-w-[355px] rounded-[8px] bg-white p-5 shadow-[0_1px_3px_rgba(6,18,24,0.12)] sm:max-w-[371px]">
      <div className="flex h-[34px] items-center">
        <Image
          src={t.logo}
          alt={t.company}
          width={t.logoWidth}
          height={t.logoHeight}
          className="h-auto max-h-[34px] w-auto max-w-[172px] object-contain object-left"
        />
      </div>

      <div className="my-5 h-px bg-[#0612181f]" />

      <p className="min-h-[148px] text-[18px] font-medium leading-[1.24] tracking-[-0.04em] text-[#061218] sm:min-h-[160px] sm:text-xl sm:leading-[1.28]">
        {t.quote}
      </p>

      <div className="my-5 h-px bg-[#0612181f]" />

      <div className="flex items-center gap-3 sm:gap-4">
        <Image
          src={t.avatar}
          alt={t.person}
          width={48}
          height={48}
          className="h-12 w-12 rounded-[4px] object-cover"
        />
        <div>
          <p className="text-[17px] font-medium tracking-[-0.04em] text-[#061218] sm:text-lg">
            {t.person}
          </p>
          <p className="text-sm tracking-[-0.02em] text-[#061218]/70">
            {t.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-background">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5 sm:px-8">
        <h2 className="w-full text-center text-[48px] font-medium uppercase leading-[0.9] tracking-[-0.04em] text-[#061218]/18 sm:text-[clamp(5rem,14.2vw,11.75rem)] lg:text-[clamp(11.75rem,12.5vw,16rem)]">
          <span className="sm:hidden">
            Client
            <br />
            Results
          </span>
          <span className="hidden whitespace-nowrap sm:inline">Client Results</span>
        </h2>
      </div>

      <div className="relative z-10 -mt-[100vh] flex flex-col gap-[360px] px-5 pb-[577px] pt-[380px] sm:px-8 sm:pb-[623px] sm:pt-[420px] lg:hidden">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.company}
            className={`flex ${
              t.align === "left"
                ? "justify-start sm:pl-[4%]"
                : t.align === "right"
                  ? "justify-end sm:pr-[4%]"
                  : "justify-center"
            }`}
          >
            <Card t={t} />
          </div>
        ))}
      </div>

      <div className="relative z-10 -mt-[100vh] hidden h-[4192px] px-8 lg:block">
        <div className="absolute left-[535px] top-[1352px]">
          <Card t={TESTIMONIALS[0]} />
        </div>
        <div className="absolute left-[907px] top-[2060px]">
          <Card t={TESTIMONIALS[1]} />
        </div>
        <div className="absolute left-[162px] top-[2300px]">
          <Card t={TESTIMONIALS[2]} />
        </div>
        <div className="absolute left-[535px] top-[3008px]">
          <Card t={TESTIMONIALS[3]} />
        </div>
      </div>
    </section>
  );
}
