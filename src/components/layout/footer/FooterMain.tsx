const FooterMain = () => {
  return (
    <footer id="footer" className="pt-40 lg:pt-64">
      <div className="h-[400px] flex items-center justify-center relative">
        <div className="container-content">
          <div
            aria-hidden="true"
            className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"
          ></div>

          {/* Blurred Gradient Shape */}
          <div
            className="absolute inset-x-0 top-10 bottom-0 z-0 flex transform-gpu justify-center overflow-hidden blur-3xl pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-my-info to-my-primary opacity-20"
              style={{
                clipPath:
                  "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)",
              }}
            />
          </div>

          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_70px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none z-10" />

          {/* Main Content */}
          <div className="text-center space-y-5 lg:space-y-9 z-10 block translate-y-0">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent leading-tight">
              Siap Bekerja Sama?
            </h1>
            <h3 className="text-base font-normal text-zinc-500 lg:text-lg">
              Kami mungkin bukan agensi dengan daftar panjang klien besar,
              tetapi kami punya dedikasi, semangat, dan perhatian terhadap
              detail yang tidak kalah. Hubungi kami untuk mendiskusikan ide
              Anda, dan mari kita wujudkan solusi digital yang siap pakai, atau
              seperti nama kami: Terima Jadi.
            </h3>

            {/* CTA Button */}
            <div className="mt-12 flex items-center justify-center">
              <button
                className="group relative rounded-full p-px text-sm lg:text-lg text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow cursor-pointer"
                type="button"
                onClick={() => {}}
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                  Hubungi Kami
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-my-primary/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container-content border-t-[.5px] border-t-my-dark/50 flex justify-between items-center gap-10 pt-5 pb-5 lg:pb-12">
        <div className="text-zinc-400 text-xs md:text-sm font-medium">
          © 2025 TerimaJadi. Privacy Policy Terms of Use
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
