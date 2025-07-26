const DescriptionUs = () => {
  return (
    <section id="desc" className="container-content">
      <div className="pt-40 lg:pt-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent leading-tight text-left">
            Deskripsi Singkat Mengenai Kami
          </h1>
          <div className="font-normal text-zinc-500 text-base lg:text-lg xl:text-xl">
            TerimaJadi adalah layanan pembuatan website dan software yang
            berkomitmen untuk memberikan solusi digital cepat, terjangkau, dan
            profesional. Kami membantu individu, UMKM, startup, hingga
            perusahaan untuk memiliki sistem dan tampilan web yang optimal,{" "}
            <span className="text-zinc-300">
              tanpa proses yang berbelit-belit
            </span>
            .
          </div>
        </div>
      </div>

      <div className="pt-40 lg:pt-64">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="order-2 lg:order-1 font-normal text-zinc-500 text-base lg:text-lg xl:text-xl">
            Kami menaruh perhatian besar pada proses kerja yang rapi,
            terstruktur, dan mudah dikembangkan. Kami membangun sistem dengan
            teknologi modern, dokumentasi yang jelas, serta desain yang
            memprioritaskan kenyamanan pengguna.
          </div>
          <h1 className="order-1 lg:order-2 text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent leading-tight text-start lg:text-end">
            Pendekatan kami
          </h1>
        </div>
      </div>
    </section>
  );
};

export default DescriptionUs;
