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
    <div className="max-w-screen-xl mx-auto px-5 xl:px-0">
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
        className="text-center mx-auto max-w-3xl pt-36 lg:pt-52"
      >
        <h1
          className="text-3xl lg:text-4xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold capitalize"
          style={{
            backgroundImage:
              "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
          }}
        >
          solusi software terjangkau, cepat, dan profesional
        </h1>

        <p className="text-sm md:text-base lg:text-lg xl:text-xl text-zinc-300 bg-gradient-to-r font-normal lg:font-medium mt-8">
          TerimaJadi berfokus pada pembuatan software dan website yang
          terjangkau, cepat, dan profesional, namun tetap fleksibel untuk
          menyesuaikan kebutuhan pengguna.
        </p>

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
              Mulai <ChevronRight className="inline-block ml-1" />
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-my-primary/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      </motion.div>

      <div className="mt-28 flex justify-center w-full">
        <div className="w-full h-[200px] lg:h-[600px] 2xl:h-[800px] relative">
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
            className="w-full h-full  sm:w-[400px] sm:h-[400px] lg:w-full lg:h-full relative overflow-hidden rounded-3xl mx-auto"
          >
            <Image
              src="/images/my-bini.jpg"
              alt="Deskripsi gambar"
              style={{ objectFit: "cover" }}
              className="border border-zinc-500/30"
              fill
            />
          </motion.div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sequi nostrum similique dolor natus delectus maiores cupiditate
          aliquam ipsum, vitae recusandae iste excepturi reprehenderit soluta
          aperiam modi molestiae error officiis saepe, illo accusamus
          voluptatibus. Reprehenderit velit, quas illum quod rerum saepe error
          molestiae laborum, aliquid tempore porro voluptate commodi asperiores
          magni! Maxime non recusandae sequi, quaerat ipsam optio impedit earum
          repellendus? Totam assumenda accusamus dolorum molestiae repellendus
          ab nihil doloremque? Vero iusto animi, saepe tempora porro ipsa
          assumenda praesentium dicta quod exercitationem, harum dolorum ipsum
          nesciunt sint, veniam placeat enim voluptate est in. Dicta nesciunt
          aut quia. Architecto quam incidunt dolorum veritatis sapiente officia
          cumque non at vel quas accusantium, voluptates commodi? Libero
          nesciunt ipsam veniam enim ratione, sit saepe eius dolorum dolorem aut
          reprehenderit voluptatem debitis tenetur iste quis nulla pariatur
          distinctio magnam a. Maxime omnis enim ducimus illum atque quia id,
          dignissimos commodi cum dolores tempora laborum numquam unde neque
          quibusdam est, reiciendis provident earum doloribus! Repellendus,
          accusantium, molestiae corrupti ex inventore commodi optio modi magnam
          adipisci doloribus totam alias pariatur officiis. Facere rerum
          similique nulla commodi nihil quos aliquid, laboriosam, ea saepe sunt
          quibusdam, enim incidunt iusto provident earum! Dolorum saepe illum
          corporis, adipisci earum eos. Nam iure quasi excepturi, nemo
          perspiciatis necessitatibus illum ex blanditiis, cupiditate aliquam
          sequi dolorum saepe? Quis dolores cumque sapiente laborum, temporibus
          libero possimus qui, est, eaque illo repudiandae eveniet ducimus aut
          itaque. Similique suscipit aspernatur, cupiditate ex ab tenetur quo
          ad, maxime, atque adipisci porro. Ex aliquam voluptas dolore maxime
          porro animi laboriosam et enim ut atque quisquam quo reiciendis
          consequuntur nobis illo voluptate ducimus qui corrupti recusandae
          dolorem at ipsa, odit sunt dolor. Earum quia culpa, ratione recusandae
          harum pariatur error iusto quisquam distinctio. Deleniti, aspernatur
          odit? Porro deleniti vitae explicabo praesentium perspiciatis
          provident doloremque numquam ad velit voluptates laudantium magnam
          necessitatibus sapiente, voluptatibus nesciunt fuga. Quasi ratione
          provident velit dignissimos quas itaque eum omnis magni. Dolorum
          eveniet fugiat accusamus, provident hic nostrum corporis aut nihil
          cupiditate sequi? Tempora officiis blanditiis vitae distinctio hic
          dolorum mollitia non sed quia quas repellat explicabo, nobis ullam
          iste dolor enim saepe fugiat ipsa consequuntur! Cumque, est ea
          reiciendis animi fugiat maiores eveniet quidem nesciunt quis ipsum
          quibusdam magni sint mollitia assumenda, molestiae harum quas aut
          iure, provident dolores voluptatem debitis non sequi? Veniam odit
          itaque et explicabo modi placeat minus mollitia voluptatum distinctio
          natus numquam, beatae molestiae ipsa labore? Est iure dolores
          laboriosam maxime dolore? Optio eum fuga nam, facere harum repudiandae
          molestias odio quasi possimus in. Repudiandae blanditiis minus
          inventore! Excepturi voluptatem quasi magni illum voluptate expedita
          distinctio nisi sequi vitae? Dicta at quis impedit modi, quasi
          accusamus commodi porro fugit maiores eaque in aut unde minima
          distinctio beatae laboriosam dolorem ipsam neque ut aperiam hic
          voluptatum officiis itaque ipsa? Labore, rerum maxime! Praesentium
          dolorem at dolor, id, similique ipsum harum, quisquam quae porro enim
          delectus rerum consectetur maiores? Iste id dolorum eligendi? Nihil
          similique tempore quia, vitae exercitationem ea ullam at voluptate
          assumenda delectus soluta laudantium error autem deleniti esse cumque.
          Debitis sint excepturi voluptatem perferendis autem quaerat, magni
          nesciunt iure dolore magnam culpa nam iste numquam maiores voluptates
          quia nihil veritatis molestias ipsa. Tempora neque sed minus voluptas
          excepturi aliquam cupiditate qui quas praesentium tempore dolor esse
          enim veniam impedit numquam iste obcaecati laborum magnam nulla,
          labore optio! Accusantium beatae nisi consequatur, iste eveniet
          reiciendis laudantium, enim tempore voluptatum et dolor tempora
          blanditiis cumque aliquid minus maxime quis voluptatibus vel maiores
          quibusdam? Nemo vero illo, repudiandae aliquid voluptatibus odio cum
          sed autem aliquam fugit totam quas ut natus unde quis dolor
          consectetur ad officiis facilis. Necessitatibus dignissimos nemo
          consectetur? Ducimus ab dolorem temporibus, reiciendis quasi nihil
          praesentium veritatis ullam eius voluptatum, harum at accusantium
          molestiae inventore, maiores in incidunt vitae. Minus omnis inventore
          maxime, quibusdam fugiat necessitatibus corporis dignissimos pariatur,
          impedit ratione quae non ullam, recusandae dolores numquam eaque
          facilis nihil dolor velit veritatis aliquam assumenda. Asperiores,
          commodi nam? Non voluptatum, et iusto, vero accusantium rerum nostrum
          quia facere ipsam nihil dolor odit ea doloribus in maiores explicabo
          repudiandae, rem omnis laborum! Suscipit consequatur iusto nesciunt
          quis, porro, sint doloremque dicta saepe nihil nobis culpa fuga
          aperiam tempore! Pariatur, perferendis ipsam commodi dignissimos
          expedita, deleniti est magni accusamus consequuntur, atque dolore
          tempora excepturi cum veritatis molestiae! Quos ipsa numquam sapiente
          eligendi soluta voluptates minus ex doloribus modi natus. Quasi,
          praesentium earum! Doloribus porro obcaecati ex ipsum amet id quos
          beatae nobis optio impedit modi adipisci ducimus, eaque, fuga officiis
          natus? Quasi molestiae excepturi voluptas temporibus praesentium neque
          officiis dolores impedit. Earum mollitia repudiandae fugit. Repellat,
          voluptas at numquam ea, soluta vero quas inventore illo expedita dicta
          quasi impedit esse aspernatur. Odio, laboriosam sapiente doloremque
          amet excepturi est deleniti sint nisi? Assumenda quos maiores, iure
          dolore neque perferendis omnis alias consequatur pariatur quidem quasi
          voluptatem, consectetur quia veniam eos sapiente possimus sunt ex
          aliquam at blanditiis eaque! Necessitatibus, magni unde. Perferendis
          praesentium rerum debitis quo, distinctio nemo aperiam aut
          reprehenderit cum. Mollitia rerum quo numquam natus ullam et iure
          incidunt accusantium maxime? Dolorem ratione provident placeat
          praesentium quibusdam explicabo quae, voluptas quisquam dolor
          obcaecati soluta earum aperiam. Et atque dolor maxime possimus laborum
          natus, velit ipsa maiores omnis error repellendus quas aspernatur quam
          dolore a, dicta recusandae enim consectetur fugit eos rem veritatis
          perferendis! Deleniti aliquam ut cum quia quibusdam sed dolores
          necessitatibus inventore, nisi consectetur distinctio ducimus unde
          itaque molestiae error quos quasi debitis voluptatum pariatur sunt
          excepturi! Beatae omnis ducimus suscipit illo animi consequatur!
          Repellat error, optio eum officiis qui commodi debitis minima atque
          reprehenderit ad autem ut suscipit et exercitationem quisquam soluta
          similique ratione placeat eos aut harum non illum nisi. Quidem
          asperiores sint amet alias ullam quas, tenetur fugiat similique
          laboriosam officia dignissimos iure aperiam pariatur, rerum ut facilis
          quasi. Veritatis voluptates eos ducimus quidem at numquam omnis fugit
          error quia aperiam, reiciendis nihil cum facere, quaerat, cumque illum
          maiores autem provident veniam ut consectetur eaque? Dolorem inventore
          quaerat, delectus quam consectetur exercitationem iure in repudiandae
          asperiores reiciendis ipsam, pariatur facere quae necessitatibus
          beatae. Odit, perferendis minima.
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
