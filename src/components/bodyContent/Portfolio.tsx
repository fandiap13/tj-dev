export const services = [
  {
    image: "/images/fast.jpg",
    title: "Praktis & Cepat",
    description:
      "Kami menghindari proses yang berbelit-belit. Cukup ceritakan kebutuhan Anda, kami kerjakan sampai jadi.",
  },
  {
    image: "/images/price.jpg",
    title: "Harga Terjangkau",
    description:
      "Layanan premium tanpa membuat kantong Anda jebol. Cocok untuk usaha kecil maupun proyek pribadi.",
  },
  {
    image: "/images/profesional.jpg",
    title: "Profesional & Terpercaya",
    description:
      "Kami menjunjung tinggi kualitas kerja dan komunikasi yang jelas, agar hasil sesuai ekspektasi.",
  },
  {
    image: "/images/custom.jpg",
    title: "Bisa Disesuaikan",
    description:
      "Mau mulai dari nol atau upgrade sistem lama? Kami siap bantu sesuai kebutuhan unik Anda.",
  },
];

const Portfolio = () => {
  return (
    <section id="services" className="container-content pt-40 lg:pt-64">
      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent leading-tight text-left lg:text-center">
          Portofolio Kami
        </h1>

        <h3 className="font-normal text-zinc-500 text-base text-left lg:text-lg lg:text-center xl:text-xl">
          Beberapa contoh proyek yang telah kami kerjakan
        </h3>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-zinc-300 text-xl mt-20 gap-5 justify-center`">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className="bg-my-bg-dark rounded-xl border-[0.5px] border-my-dark/50 shadow overflow-hidden"
            >
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  className="relative w-full h-[300px]"
                >
                  <Image
                    src={service.image}
                    alt={`Img Service ${i + 1}`}
                    fill
                    objectFit="cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-2xl">{service.title}</h3>

                <p className="font-normal text-base text-zinc-400">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Portfolio;
