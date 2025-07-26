"use client";

import DescriptionUs from "@/components/bodyContent/DescriptionUs";
import OurServices from "@/components/bodyContent/OurServices";
import Portfolio from "@/components/bodyContent/Portfolio";
import WhyUs from "@/components/bodyContent/WhyUs";
import MeteorBackground from "@/components/layout/background/MeteorBackground";
import FooterMain from "@/components/layout/footer/FooterMain";
import HeroMain from "@/components/layout/hero/HeroMain";
import NavbarMain from "@/components/layout/navbar/NavbarMain";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] text-default-text font-body w-full relative bg-zinc-950">
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 z-0 h-screen w-full bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,rgba(0,105,250,0.5),transparent)] pointer-events-none"></div>
        {/* Meteor effect */}
        <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block">
          <MeteorBackground number={40} />
        </div>
        {/* Navbar */}
        <NavbarMain />
        {/* Hero */}
        <HeroMain />
      </div>

      <main>
        <DescriptionUs />

        <OurServices />

        <WhyUs />

        <Portfolio />
      </main>

      <FooterMain />
    </div>
  );
}
