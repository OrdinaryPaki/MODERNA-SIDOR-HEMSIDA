import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Showreel from "@/components/sections/Showreel";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Showreel />
        <Portfolio />
        <Services />
        <Stats />
        <Testimonials />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
