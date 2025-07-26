"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const HeroMain = () => {
  const ref = useRef(null);

  //   Animasi dimulai saat atas elemen (start) menyentuh atas layar (start)
  // Animasi berakhir saat bawah elemen (end) menyentuh atas layar (start)
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"], // ketika elemen keluar dari viewport atas
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="hero" className="container-content">
      {/* <div style={{ transform: "translateY(100px)" }}>
        Komponen ini digeser ke kanan 100px
      </div> */}

      {/* <div
        ref={ref}
        style={{ transform: "translateY(100px)" }}
        className="text-center mx-auto max-w-3xl"
      ></div> */}

      <motion.div
        ref={ref}
        style={{ opacity, y: translateY }}
        className="text-center mx-auto max-w-3xl pt-32 lg:pt-64 tracking-tight transform translate-y-0"
      >
        <h1 className="text-3xl lg:text-4xl xl:text-6xl font-extrabold capitalize heading-gradient gradient-white-fade">
          solusi software terjangkau, cepat, dan profesional
        </h1>

        <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-zinc-400  font-semibold mt-8">
          <span className="text-my-primary">TerimaJadi</span> berfokus pada
          pembuatan software dan website yang terjangkau, cepat, dan
          profesional, namun tetap fleksibel untuk menyesuaikan kebutuhan
          pengguna.
        </p>

        <div className="flex justify-center mt-6 lg:mt-10">
          <button
            className="group relative rounded-full p-px text-sm md:text-base lg:text-lg text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow cursor-pointer"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R19kq:"
            data-state="closed"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(0,209,242,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative z-9 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
              Mulai <ChevronRight className="inline-block ml-1" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-my-primary/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </motion.div>

      <div className="pt-20 lg:pt-40 grid grid-cols-1 lg:grid-cols-[1fr_40%_1fr] w-full gap-5 lg:gap-7 place-items-center relative">
        <div
          className="absolute left-0 right-0 top-0 m-auto max-w-3xl w-full h-full blur-[160px] z-0"
          style={{
            background:
              "linear-gradient(100deg, var(--my-primary) 5%, rgba(0,209,242, 0.2) 0.01%, rgba(124,58,237, 0.3) 100%)",
          }}
        ></div>

        <div className="w-full h-[300px] lg:h-[320px] xl:h-[400px] relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative overflow-hidden rounded-3xl before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-my-bg-dark/60 before:via-transparent before:to-my-dark/60"
          >
            <Image
              src="/images/dashboard3.jpg"
              alt="Deskripsi gambar"
              style={{ objectFit: "cover" }}
              className="border border-zinc-500/30"
              fill
            />
          </motion.div>
        </div>
        <div className="w-full h-[300px] lg:h-[400px] xl:h-[500px] relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative overflow-hidden rounded-3xl before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-my-bg-dark/60 before:via-transparent before:to-my-dark/60"
          >
            <Image
              src="/images/dashboard2.jpg"
              alt="Deskripsi gambar"
              style={{ objectFit: "cover" }}
              className="border border-zinc-500/30"
              fill
            />
          </motion.div>
        </div>
        <div className="w-full h-[300px] lg:h-[320px] xl:h-[400px] relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative overflow-hidden rounded-3xl before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-my-bg-dark/60 before:via-transparent before:to-my-dark/60"
          >
            <Image
              src="/images/dashboard4.jpg"
              alt="Deskripsi gambar"
              style={{ objectFit: "cover" }}
              className="border border-zinc-500/30"
              fill
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;

{
  /* <div
            className="absolute left-0 right-0 top-12 m-auto max-w-3xl w-full h-full blur-[160px]"
            style={{
              background:
                "linear-gradient(180deg, var(--my-primary) 0%, rgba(0,209,242, 0.984375) 0.01%, rgba(124,58,237, 0.3) 100%)",
            }}
          ></div> */
}
