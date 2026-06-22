import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import SiteHeader from "@/components/SiteHeader";
import Showreel from "@/components/sections/Showreel";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <SiteHeader tone="dark" mobileFixed revealAfterHero />
      <Hero />
      <LogoMarquee />
      <Showreel />
      <Portfolio />
      <Services />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faq />
      <Contact compact />
      <Footer mergeWithPrevious compactEnd />
    </main>
  );
}
