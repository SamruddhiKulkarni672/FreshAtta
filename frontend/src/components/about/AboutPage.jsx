"use client";

import HeroSection from "@/components/about/HeroSection";
import OurStorySection from "@/components/about/OurStorySection";
import MissionValues from "@/components/common/MissionValues";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <OurStorySection />
      <section>
        <MissionValues />
      </section>
    </main>
  );
}
