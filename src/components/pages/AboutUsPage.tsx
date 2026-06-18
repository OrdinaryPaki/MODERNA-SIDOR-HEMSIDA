import Image from "next/image";
import FitText from "@/components/FitText";
import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/sections/SectionLabel";

const CLIENT_LOGOS = [
  "/reference/OPToRxvhQd2ScvavfIOXuI6o.svg",
  "/reference/Ntc48i8GxNtzZe6K8P7DeRLzQ.svg",
  "/reference/9XfpXOcQrpiKYnZNcFlnYhYZVI.svg",
  "/reference/rHPu3YfQxZrz1Xw15tIQTPQIsU.svg",
  "/reference/2rq9YMILXCGw0qOqXvxaPhzIuWo.svg",
  "/reference/OEklTYyEPGkk7846aK5rBd4nfcs.svg",
];

const AWARDS = [
  {
    index: "01",
    body: "Awwwards",
    title: "Site of the Month",
    year: "2025",
  },
  {
    index: "02",
    body: "Communication Arts",
    title: "Design Annual Winner",
    year: "2024",
  },
  {
    index: "03",
    body: "Webby awwards",
    title: "Best visual design",
    year: "2023",
  },
  {
    index: "04",
    body: "CSS Design Awards",
    title: "Website of the Day",
    year: "2022",
  },
];

const TEAM = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/reference/EiA4iZPaAE5MgkPEM2Jzjl6Q0.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Brand Strategist",
    image: "/reference/mv5k4A5bcoM3cCehh5WGY2vR9w.png",
  },
  {
    name: "Elena Thompson",
    role: "Lead Designer",
    image: "/reference/6ZMucLXjDo5falTRvJDgy9LQCc.png",
  },
  {
    name: "David Park",
    role: "Web Developer",
    image: "/reference/FKskt3wvzejbjxV6Dr8ewf2wjgs.png",
  },
  {
    name: "Ryan Anderson",
    role: "Project Manager",
    image: "/reference/5diKqf0U2Vk2jN3JLVedX53JBs.png",
  },
  {
    name: "Lisa Johnson",
    role: "Marketing Manager",
    image: "/reference/eIk60oFw5Btb9sVOQs589lyTIc.png",
  },
];

function AboutHero() {
  return (
    <section id="about-top" className="bg-background pb-[60px] xl:pb-20">
      <SiteHeader />

      <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1376px] pt-[63px] sm:w-[calc(100%_-_64px)] sm:pt-[88px] xl:pt-[49px]">
        <FitText
          text="About us"
          className="font-medium leading-[0.88] tracking-[-0.055em] text-[#061218]"
        />

        <div className="mt-[24px] flex justify-end xl:mt-[22px]">
          <p className="max-w-[520px] text-base font-normal leading-[1.3] tracking-[-0.03em] text-[#061218] xl:max-w-[640px] xl:text-[20px]">
            <span className="xl:hidden">
              Since 2019, we help growing companies build brands that work and
              drive real growth.
            </span>
            <span className="hidden xl:inline">
              Since 2019, we&apos;ve been helping growing companies build
              brands that don&apos;t just look good, they work. We combine
              strategic thinking with creative execution to deliver measurable
              results that drive real business growth.
            </span>
          </p>
        </div>

        <div className="relative mt-[56px] aspect-[1.49] overflow-hidden rounded-lg bg-white sm:aspect-[1.6875] xl:mt-[76px] xl:aspect-[1.765]">
          <div className="absolute -left-[200px] top-[-67px] h-[calc(100%_+_164px)] w-[calc(100%_+_200px)] xl:top-[-121px]">
            <Image
              src="/reference/DdCM3KYV85ewHU6J3QjwhM8Uc.jpg"
              alt="Team collaborating in a studio"
              fill
              priority
              sizes="(min-width: 1280px) calc(min(100vw - 64px, 1376px) + 200px), (min-width: 640px) calc(100vw + 136px), calc(100vw + 160px)"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="bg-background px-5 pb-[52px] pt-[60px] sm:px-8 xl:pb-[88px] xl:pt-[76px]">
      <div className="mx-auto grid w-full max-w-[1376px] gap-8 xl:grid-cols-[minmax(0,796px)_420px] xl:items-end xl:gap-0">
        <div>
          <SectionLabel>{"//02 Our clients"}</SectionLabel>
          <h2 className="mt-3 max-w-[314px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] sm:max-w-[344px] xl:max-w-[524px] xl:text-[88px]">
            Trusted by businesses
          </h2>
        </div>
        <p className="max-w-[350px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] xl:max-w-[420px] xl:text-[20px]">
          <span className="xl:hidden">
            We help ambitious, driven companies grow fast with smart, creative
            work together.
          </span>
          <span className="hidden xl:inline">
            We work with ambitious companies who understand that smart creative
            work drives real business growth and competitive advantage.
          </span>
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-[1376px] gap-6 md:grid-cols-3 xl:mt-[72px]">
        {CLIENT_LOGOS.map((logo) => (
          <div
            key={logo}
            className="flex h-[132px] items-center justify-center rounded-[4px] border border-[#0612181f] bg-transparent"
          >
            <div className="relative h-[52px] w-40">
              <Image src={logo} alt="" fill sizes="160px" className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="bg-background px-5 pb-[82px] pt-[60px] sm:px-8 xl:pb-[83px] xl:pt-[76px]">
      <div className="mx-auto grid w-full max-w-[1376px] gap-[64px] xl:grid-cols-[676px_676px] xl:gap-6">
        <div>
          <SectionLabel>{"//03 Awards"}</SectionLabel>
          <h2 className="mt-3 max-w-[314px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] sm:max-w-[330px] xl:max-w-[444px] xl:text-[68px]">
            Industry recognition
          </h2>
          <p className="mt-4 max-w-[350px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] xl:max-w-[440px] xl:text-[20px]">
            We’re proud of creative awards, but we’re prouder of the business
            results our clients achieve.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex h-[45px] items-center justify-center rounded-[4px] bg-[#1f75b2] px-6 text-base font-medium text-white transition-colors hover:bg-[#1b679d]"
          >
            Let&apos;s get in touch
          </a>
        </div>

        <div className="flex flex-col">
          {AWARDS.map((award) => (
            <article
              key={award.index}
              className="grid min-h-[88px] grid-cols-[24px_1fr_auto] gap-4 border-b border-[#0612181f] py-4 first:pb-0 xl:min-h-[101px] xl:py-6"
            >
              <span className="text-base leading-[1.3] tracking-[-0.03em] text-[#061218]">
                {award.index}
              </span>
              <div>
                <p className="w-fit text-sm leading-[1.3] tracking-[-0.01em] text-[#061218]">
                  {award.body}
                </p>
                <h3 className="mt-1 w-fit text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] xl:text-2xl">
                  {award.title}
                </h3>
              </div>
              <span className="self-center text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] xl:text-xl">
                {award.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-background px-5 pb-[43px] pt-[60px] sm:px-8 xl:pb-[83px] xl:pt-[76px]">
      <div className="mx-auto grid w-full max-w-[1376px] gap-8 xl:grid-cols-[minmax(0,1026px)_350px] xl:items-end xl:gap-0">
        <div>
          <SectionLabel>{"//04 Team"}</SectionLabel>
          <h2 className="mt-3 max-w-[314px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] sm:max-w-[344px] xl:max-w-[494px] xl:text-[88px]">
            Meet our team
          </h2>
        </div>
        <p className="max-w-[350px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] xl:text-[20px]">
          <span className="xl:hidden">
            Strategists, designers, and marketers focused on growing your
            business with smart creative work.
          </span>
          <span className="hidden xl:inline">
            Strategists, designers, and marketers who share one goal, growing
            your business through smart creative work.
          </span>
        </p>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-[1376px] gap-x-6 gap-y-8 md:grid-cols-3 xl:mt-[81px] xl:gap-y-[30px]">
        {TEAM.map((member) => (
          <article key={member.name} className="rounded-xl bg-white p-4 pb-5">
            <div className="relative aspect-[0.885] overflow-hidden rounded-lg bg-[#d9dddf] xl:aspect-[0.851]">
              <Image
                src={member.image}
                alt="Team member"
                fill
                sizes="(min-width: 768px) 31vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-[20px] font-medium leading-[1.3] tracking-[-0.03em]">
              {member.name}
            </h3>
            <p className="mt-1 text-base leading-[1.3] tracking-[-0.03em] text-[#061218]">
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <Clients />
      <Awards />
      <Team />
      <Contact compact />
      <Footer mergeWithPrevious />
    </main>
  );
}
