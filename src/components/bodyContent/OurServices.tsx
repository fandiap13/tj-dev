import { motion } from "framer-motion";

import { LayoutDashboard, RefreshCcw, Rocket, Settings } from "lucide-react";

export const services = [
  {
    icon: Rocket,
    title: "Website Instan",
    description:
      "Website siap pakai dalam waktu singkat. Cocok untuk portofolio, bisnis, landing page, dan event.",
  },
  {
    icon: Settings,
    title: "Sistem Kustom",
    description:
      "Pengembangan aplikasi berbasis web atau mobile sesuai dengan kebutuhan pengguna—baik untuk internal perusahaan, sistem inventaris, pemesanan, manajemen data, dan lainnya.",
  },
  {
    icon: RefreshCcw,
    title: "Revisi & Dukungan Cepat",
    description:
      "Tim kami siap melakukan penyesuaian desain atau fitur tanpa menunda waktu produksi.",
  },
  {
    icon: LayoutDashboard,
    title: "Integrasi API & Dashboard Admin",
    description:
      "Website atau aplikasi dapat dikoneksikan dengan sistem eksternal dan memiliki dashboard admin untuk pengelolaan mandiri.",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="container-content mt-32 lg:mt-44">
      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent leading-tight text-left lg:text-center">
          Layanan Kami
        </h1>

        <h3 className="font-normal text-zinc-500 text-base text-left lg:text-lg lg:text-center xl:text-xl">
          Kami menawarkan solusi digital yang mencakup pembuatan website, sistem
          informasi, dan aplikasi mobile dengan desain modern dan performa
          tinggi. Fokus kami adalah memberikan layanan cepat, aman, dan sesuai
          kebutuhan bisnis Anda.
        </h3>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center text-zinc-300 text-xl mt-10 lg:mt-20 gap-5 !justify-center">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className=" overflow-hidden rounded-xl p-4 space-y-3 border-[0.5px] border-my-dark shadow"
                style={{
                  background:
                    "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)",
                }}
              >
                <div className="bg-gray-500/20 backdrop-blur-sm rounded-lg p-2 h-12 w-12">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="font-semibold text-xl lg:text-2xl">
                  {service.title}
                </h3>

                <p className="font-normal text-sm lg:text-base leading-normal text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
