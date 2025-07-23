import MeteorBackground from "@/components/layout/background/MeteorBackground";
import HeroMain from "@/components/layout/hero/HeroMain";
import NavbarMain from "@/components/layout/navbar/NavbarMain";

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] text-default-text font-body w-full">
      <div className="fixed left-0 right-0 top-0 z-[-2] h-screen w-full bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(0,105,250,0.20),transparent)] pointer-events-none"></div>

      {/* Meteor effect */}
      <div className="absolute inset-0 z-[-1] pointer-events-none hidden dark:block">
        <MeteorBackground number={40} />
      </div>

      {/* Navbar */}
      <NavbarMain />
      {/* Hero */}
      <HeroMain />
    </main>
  );
}
