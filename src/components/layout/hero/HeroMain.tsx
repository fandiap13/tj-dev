"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const HeroMain = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-36 lg:pt-52 px-5 xl:px-0">
      <div className="text-center mx-auto max-w-3xl">
        <h1
          className="text-3xl lg:text-4xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold"
          style={{
            backgroundImage:
              "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
          }}
        >
          All-in-one Finance App You Always Wanted
        </h1>

        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-zinc-300 bg-gradient-to-r font-normal lg:font-medium mt-8">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>
      </div>

      <div className="flex justify-center mt-10">
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
            Get Started <ChevronRight className="inline-block ml-1" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-my-primary/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>

      <div className="mt-28 flex justify-center w-full">
        <div className="w-full lg:w-[700px] 2xl:w-full lg:h-[600px] 2xl:h-[800px] relative">
          <div
            className="absolute left-0 right-0 top-12 m-auto max-w-3xl h-[250px] sm:h-[300px] lg:h-[650px] blur-[160px]"
            style={{
              background:
                "linear-gradient(180deg, var(--my-primary) 0%, rgba(0,209,242, 0.984375) 0.01%, rgba(81, 195, 140, 0.8) 100%)",
            }}
          ></div>

          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/my-bini.jpg"
              alt="Deskripsi gambar"
              style={{ objectFit: "cover" }}
              className="border border-zinc-500/30"
              fill
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
