import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Nori Studio – Design Agency Website Template",
};

export default function NotFound() {
  return (
    <main className="flex-1 bg-background">
      <section className="min-h-[449px] sm:min-h-[729px]">
        <SiteHeader />

        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-5 pt-24 text-center sm:px-8 sm:pt-48">
          <p className="font-mono text-sm font-medium leading-[1.3] tracking-[-0.02em] text-[#1f75b2] sm:text-[20px]">
            {"//404"}
          </p>
          <h1 className="mt-3 w-full max-w-[350px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] sm:max-w-[688px] sm:text-[68px]">
            Oops! This page
            <br />
            doesn’t exist.
          </h1>
          <p className="mt-4 max-w-[288px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] sm:max-w-[368px] sm:text-[20px]">
            You might have taken a wrong turn, but don’t worry, let’s
            get you back on track.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex h-[45px] items-center justify-center rounded-[4px] bg-[#1f75b2] px-[21px] text-base font-medium text-white transition-colors hover:bg-[#1b679d]"
          >
            Back to home
          </Link>
        </div>
      </section>

      <Contact compact />
      <Footer mergeWithPrevious />
    </main>
  );
}
