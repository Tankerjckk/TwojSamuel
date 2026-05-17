import React from "react";
import { motion } from "framer-motion";

import omnieHeroBanner from "../assets/omnie-hero-banner.png";
import omniePrawda from "../assets/icons/omnie-prawda.png";
import omnieNiezaleznosc from "../assets/icons/omnie-niezaleznosc.png";
import omnieWrazliwosc from "../assets/icons/omnie-wrazliwosc.png";
import omnieLojalnosc from "../assets/icons/omnie-lojalnosc.png";
import omnieCytat from "../assets/omnie-cytat.png";

import Sidebar from "../components/Sidebar";

const timeline = [
  {
    year: "2020",
    title: "Początek",
    text: "Po pierwszym utworze dostałem zaproszenie na pierwszy koncert. Miesiąc później miałem już przygotowane kolejne 6 numerów na występ.",
  },
  {
    year: "2023",
    title: "Pierwsza EP",
    text: "„Hotel Parasite” to zbiór wspomnień i przemyśleń z okresu po przeprowadzce do Warszawy na studia.",
  },
  {
    year: "2024",
    title: "Największy projekt",
    text: "Koncert na Crypto Community Conference przed publicznością liczącą 1000 osób.",
  },
  {
    year: "2026",
    title: "Przełom",
    text: "Powstanie magnum opus. Pierwszy album dopracowany na tak wysokim poziomie, zarówno tekstowo, jak i dźwiękowo.",
  },
];

const values = [
  {
    title: "Autentyczność",
    text: "Opowiadam historie, nie bajki.",
    icon: omniePrawda,
  },
  {
    title: "Kreatywność",
    text: "Kocham eksperymentować z gatunkami i odkrywać nowe dźwięki.",
    icon: omnieNiezaleznosc,
  },
  {
    title: "Ambicja",
    text: "Chcę stale rozwijać jakość swojego brzmienia i tekstów.",
    icon: omnieWrazliwosc,
  },
  {
    title: "Lojalność",
    text: "Bez moich bliskich nie byłoby mnie w tym miejscu.",
    icon: omnieLojalnosc,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function OmniePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Sidebar active="/omnie" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/10 bg-black xl:ml-[180px]">
        <img
          src={omnieHeroBanner}
          alt="O mnie"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex min-h-screen items-center px-8 pt-24 md:px-14 xl:px-20"
        >
          <div className="max-w-[760px]">
            <p className="mb-10 text-[11px] uppercase tracking-[0.45em] text-zinc-400">
              / O mnie
            </p>

            <h1 className="mb-10 text-[70px] font-black uppercase leading-none tracking-[0.28em] text-white sm:text-[105px] md:text-[140px] xl:text-[160px]">
              O mnie
            </h1>

            <p className="max-w-[620px] text-[16px] uppercase leading-[2] tracking-[0.42em] text-zinc-400 md:text-[22px]">
              CHCE PO PROSTU 
              <br />
              COŚ PO SOBIE ZOSTAWIĆ.
            </p>

            <div className="mt-14 h-px w-14 bg-white/80" />
          </div>
        </motion.div>
      </section>

      <section className="border-b border-white/10 bg-black px-8 py-24 md:px-14 xl:ml-[180px] xl:px-20">
        <motion.div
          className="mx-auto max-w-[1500px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
            <div>
              <p className="mb-6 text-[12px] uppercase tracking-[0.45em] text-zinc-500">
                Moja historia
              </p>

              <div className="h-px w-10 bg-white/60" />
            </div>

            <div>
              <p className="max-w-[650px] text-[14px] leading-[2] tracking-[0.08em] text-zinc-400">
                Zbieram doświadczenie muzyczne od 2020 roku.
                <br />
                Przez 6 lat budowałem wizerunek firm i osób prywatnych, generując przy tym milionowe wyświetlenia.
                <br />
                W końcu postanowiłem stworzyć własny.
              </p>
            </div>
          </div>

          <div className="mt-24">
            <div className="relative hidden h-px bg-white/30 md:block">
              {timeline.map((item, index) => (
                <span
                  key={item.year}
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 bg-zinc-400"
                  style={{
                    left: `${(index / (timeline.length - 1)) * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="grid gap-12 md:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.year} className="pt-0 text-center md:pt-12">
                  <p className="mb-8 text-[14px] uppercase tracking-[0.35em] text-white">
                    {item.year}
                  </p>

                  <h3 className="mb-5 text-[13px] uppercase tracking-[0.45em] text-white">
                    {item.title}
                  </h3>

                  <p className="mx-auto max-w-[210px] text-[13px] leading-[2] tracking-[0.06em] text-zinc-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-b border-white/10 bg-black px-8 py-24 md:px-14 xl:ml-[180px] xl:px-20">
        <motion.div
          className="mx-auto max-w-[1500px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25 }}
        >
          <div className="mb-20">
            <p className="mb-6 text-[12px] uppercase tracking-[0.45em] text-zinc-500">
              Wartości
            </p>

            <div className="h-px w-10 bg-white/60" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center ${
                  index !== values.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                <img
  src={value.icon}
  alt={value.title}
  className="mx-auto -mb-2 h-32 w-32 object-contain opacity-90 transition duration-500 hover:scale-110"
/>

                <h3 className="mb-6 text-[13px] uppercase tracking-[0.45em] text-white">
                  {value.title}
                </h3>

                <p className="mx-auto max-w-[220px] text-[13px] leading-[2] tracking-[0.06em] text-zinc-400">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-black px-5 py-16 md:px-14 md:py-24 xl:ml-[180px] xl:px-20">
  <motion.div
    className="mx-auto max-w-[1500px]"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.25 }}
  >
    <div className="relative overflow-hidden border border-white/10 bg-zinc-950/40">
      <img
        src={omnieCytat}
        alt="Cytat"
        className="h-[520px] w-full object-cover object-left opacity-80 md:h-[380px] md:object-center"
      />

      <div className="absolute inset-0 bg-black/45 md:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-gradient-to-r md:from-black/10 md:via-black/20 md:to-black/50" />

      <div className="absolute inset-0 flex items-end px-6 pb-10 md:items-center md:justify-end md:px-20 md:pb-0 xl:px-32">
        <div className="max-w-[720px] text-left">
          <div className="mb-4 text-[52px] leading-none text-white/35 md:mb-6 md:text-[70px]">
            “
          </div>

          <p className="text-[15px] uppercase leading-[2] tracking-[0.28em] text-zinc-200 md:text-[25px] md:tracking-[0.45em]">
            Chcę, aby każdy moment
            <br />
            w moim życiu był wart
            <br />
            napisania o nim piosenki.
          </p>

          <p
            className="mt-8 rotate-[-2deg] text-[36px] text-white/70 md:mt-10 md:text-[46px]"
            style={{
              fontFamily: "Caveat",
            }}
          >
            TwójSamuel
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>
    </main>
  );
}