import React from "react";
import useLenisScroll from "../hooks/useLenisScroll";
import { Link } from "react-router-dom";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

import logo from "../assets/logo.png";

import heroBanner from "../assets/hero-banner.png";
import heroBannerMobile from "../assets/hero-banner-mobile.png";

import presjaCover from "../assets/tracks/presja.png";

import aboutme1 from "../assets/aboutme1.png";
import aboutme2 from "../assets/aboutme2.png";

import preludiumAudio from "../audio/short/1-preludium-short.mp3";
import pracyAudio from "../audio/short/2-pracy-short.mp3";
import czasuAudio from "../audio/short/3-czasu-short.mp3";
import finansowaAudio from "../audio/short/4-finansowa-short.mp3";
import spolecznaAudio from "../audio/short/5-spoleczna-short.mp3";
import interludiumAudio from "../audio/short/6-interludium-short.mp3";
import jezykaAudio from "../audio/short/7-jezyka-short.mp3";
import rodzinyAudio from "../audio/short/8-rodziny-short.mp3";
import podrozyAudio from "../audio/short/9-podrozy-short.mp3";
import zdrowegoZyciaAudio from "../audio/short/10-zdrowego-zycia-short.mp3";
import ostatnieLudiumAudio from "../audio/short/11-to-ostatnie-ludium-short.mp3";

const fadeUp = {
  hidden: { opacity: 0, y: 70, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -160,
    rotate: -18,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 160,
    rotate: 18,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-[1700px] items-center justify-between px-8 md:h-24 md:px-12">
          <img
            src={logo}
            alt="TwójSamuel"
            className="h-16 w-auto object-contain md:h-24"
          />

          <div className="flex items-center gap-6 md:gap-14">
            <nav className="hidden items-center gap-12 text-[11px] uppercase tracking-[0.35em] text-zinc-300 lg:flex">
              <a href="#" className="text-white underline underline-offset-[10px]">
                Start
              </a>
              <a href="/muzyka" className="transition hover:text-white">
  Muzyka
</a>
              <a href="/omnie" className="transition hover:text-white">
                O mnie
              </a>

              <a href="/kontakt" className="transition hover:text-white">
                Kontakt
              </a>
            </nav>

            <div className="hidden items-center gap-5 text-white sm:flex">
              <a href="https://www.instagram.com/twojsamuel/" target="_blank"><FaInstagram size={16} /></a>
              <a href="https://www.youtube.com/@twojsamuel1744" target="_blank"><FaYoutube size={17} /></a>
              <a href="https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9?si=o30LKDgkSxCzB0YRgXrpEw" target="_blank"><FaSpotify size={16} /></a>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] border border-white/15 lg:hidden"
            >
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] h-screen w-[86%] max-w-[390px] border-l border-white/10 bg-black p-8 transition duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-14 flex items-center justify-between">
          <img
            src={logo}
            alt="TwójSamuel"
            className="h-14 w-auto object-contain"
          />

          <button
            onClick={closeMenu}
            className="h-11 w-11 border border-white/15 text-2xl text-white"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-7 text-[13px] uppercase tracking-[0.35em] text-zinc-300">
          <a onClick={closeMenu} href="#">Home</a>
          <a onClick={closeMenu} href="#muzyka">Muzyka</a>
          <a onClick={closeMenu} href="#omnie">O mnie</a>
          <a onClick={closeMenu} href="#obecnie">Obecnie</a>
          <a onClick={closeMenu} href="#kontakt">Kontakt</a>
        </nav>

        <div className="absolute bottom-8 left-8 right-8">
          <div className="mb-7 h-px w-full bg-white/10" />

          <div className="mb-8 flex items-center gap-6 text-white">
            <a href="https://www.instagram.com/twojsamuel/" target="_blank"><FaInstagram size={18} /></a>
            <a href="https://www.youtube.com/@twojsamuel1744" target="_blank"><FaYoutube size={20} /></a>
            <a href="https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9?si=o30LKDgkSxCzB0YRgXrpEw" target="_blank"><FaSpotify size={18} /></a>
          </div>

          <p className="text-[10px] uppercase leading-[2] tracking-[0.35em] text-zinc-600">
            underground / warszawa / 2026
          </p>
        </div>
      </aside>
    </>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 180]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.12]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <motion.picture
        style={{ y: heroY, scale: heroScale }}
        className="absolute inset-0"
      >
        <source media="(max-width: 768px)" srcSet={heroBannerMobile} />
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="h-full w-full object-cover"
        />
      </motion.picture>

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-10 left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center px-6 md:bottom-14 md:w-auto md:px-0"
      >
        <div className="mb-7 text-center text-[11px] uppercase leading-[2] tracking-[0.22em] text-zinc-100 md:mb-8 md:text-[15px] md:tracking-[0.32em]">
          <p>UNDERGROUND. SZCZERY. PRAWDZIWY.</p>
          <p>TO NIE RAP, TO DZIENNIK.</p>
        </div>

<Link
  to="/muzyka"
  className="group flex h-[52px] w-[210px] items-center border border-white/30 bg-black/30 backdrop-blur-sm transition hover:border-white md:h-[58px] md:w-[240px]"
>
  <div className="flex flex-1 items-center justify-center text-[11px] uppercase tracking-[0.28em] text-white md:text-[12px]">
    POSŁUCHAJ
  </div>

  <div className="flex h-full w-[64px] items-center justify-center border-l border-white/20 text-xl transition group-hover:bg-white group-hover:text-black md:w-[72px]">
    →
  </div>
</Link>
      </motion.div>

      <div className="absolute bottom-10 right-10 z-20 hidden flex-col items-center md:flex">
        <div
          className="mb-4 text-[11px] uppercase tracking-[0.35em] text-zinc-300"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Scroll
        </div>

        <div className="relative h-28 w-px bg-white/20">
          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}

function LatestTracks() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 768);
  const [playingIndex, setPlayingIndex] = React.useState(null);
  const [audioProgress, setAudioProgress] = React.useState(0);

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const tracks = [
  {
    title: "Preludium",
    year: "2026",
    image: presjaCover,
    audio: preludiumAudio,
  },
  {
    title: "Pracy",
    year: "2026",
    image: presjaCover,
    audio: pracyAudio,
  },
  {
    title: "Czasu",
    year: "2026",
    image: presjaCover,
    audio: czasuAudio,
  },
  {
    title: "Finansowa",
    year: "2026",
    image: presjaCover,
    audio: finansowaAudio,
  },
  {
    title: "Społeczna",
    year: "2026",
    image: presjaCover,
    audio: spolecznaAudio,
  },
  {
    title: "Interludium",
    year: "2026",
    image: presjaCover,
    audio: interludiumAudio,
  },
  {
    title: "Języka",
    year: "2026",
    image: presjaCover,
    audio: jezykaAudio,
  },
  {
    title: "Rodziny",
    year: "2026",
    image: presjaCover,
    audio: rodzinyAudio,
  },
  {
    title: "Podróży",
    year: "2026",
    image: presjaCover,
    audio: podrozyAudio,
  },
  {
    title: "Zdrowego życia",
    year: "2026",
    image: presjaCover,
    audio: zdrowegoZyciaAudio,
  },
  {
    title: "To ostatnie ludium",
    year: "2026",
    image: presjaCover,
    audio: ostatnieLudiumAudio,
  },
];

  const visibleCount = isMobile ? 1 : 3;
  const gap = isMobile ? 20 : 32;
  const maxIndex = tracks.length - visibleCount;

  React.useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const stopAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current = null;

    setPlayingIndex(null);
    setAudioProgress(0);
  };

  const toggleAudio = (track, index) => {
    if (!track.audio) return;

    if (playingIndex === index) {
      stopAudio();
      return;
    }

    stopAudio();

    const audio = new Audio(track.audio);
    audio.volume = 0.9;

    audio.ontimeupdate = () => {
      if (!audio.duration) return;

      const progress = (audio.currentTime / audio.duration) * 100;
      setAudioProgress(progress);
    };

    audio.onended = () => {
      audioRef.current = null;
      setPlayingIndex(null);
      setAudioProgress(0);
    };

    audio.play();

    audioRef.current = audio;
    setPlayingIndex(index);
  };

  const nextSlide = () => {
    stopAudio();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    stopAudio();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="muzyka"
      className="relative overflow-hidden border-t border-white/10 bg-black py-20 md:py-32"
    >
      <motion.div
        className="mx-auto w-full max-w-[1700px] px-8 md:px-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.35 }}
      >
        <div className="mb-10 flex items-center justify-between gap-6 md:mb-16">
          <h2 className="text-[20px] uppercase tracking-[0.18em] text-white md:text-[34px] md:tracking-[0.22em]">
            Ostatnie utwory
          </h2>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-lg text-zinc-400 transition hover:border-white hover:text-white md:h-14 md:w-14 md:text-xl"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-lg text-zinc-400 transition hover:border-white hover:text-white md:h-14 md:w-14 md:text-xl"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              gap: `${gap}px`,
              transform: `translateX(calc(-${currentIndex} * ((100% - ${
                gap * (visibleCount - 1)
              }px) / ${visibleCount} + ${gap}px)))`,
            }}
          >
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                className="group flex-shrink-0 cursor-pointer"
                style={{
                  width: `calc((100% - ${
                    gap * (visibleCount - 1)
                  }px) / ${visibleCount})`,
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative overflow-hidden border border-white/10 bg-zinc-950">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                  {track.audio && (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleAudio(track, index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          toggleAudio(track, index);
                        }
                      }}
                      className="absolute bottom-4 right-4 z-20 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/70 backdrop-blur-md transition hover:scale-105 hover:border-white"
                    >
                      {playingIndex === index ? (
                        <div className="flex gap-[4px]">
                          <div className="h-4 w-[3px] bg-white" />
                          <div className="h-4 w-[3px] bg-white" />
                        </div>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="ml-[2px] h-5 w-5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-5 border-b border-white/10 pb-5 md:mt-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="mb-2 text-[17px] uppercase tracking-[0.08em] text-white md:text-[20px]">
                        {track.title}
                      </h3>

                      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-[11px] md:tracking-[0.35em]">
                        {track.audio ? "snippet / " : "single / "}
                        {track.year}
                      </p>
                    </div>

                    <span className="text-zinc-700 transition group-hover:text-white">
                      →
                    </span>
                  </div>

                  {playingIndex === index && (
                    <div className="mt-4 h-px w-full overflow-hidden bg-white/10">
                      <div
                        className="h-full bg-white/80 transition-all duration-150 audio-pulse"
                        style={{
                          width: `${audioProgress}%`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = React.useRef(null);

  const isInView = useInView(sectionRef, {
    amount: 0.15,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      id="omnie"
      className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_0.8fr_0.9fr] lg:gap-12">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex justify-center"
        >
          <img src={aboutme2} alt="TwójSamuel" className="max-h-[430px] w-auto rotate-[-3deg] border border-white/10 object-contain opacity-90 shadow-2xl md:max-h-[520px] md:rotate-[-4deg]" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10 border-y border-white/10 py-12 text-center md:py-14"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.38em] text-zinc-500 md:tracking-[0.5em]">
            To nie rap. To dziennik.
          </p>

          <h2 className="mb-9 text-[24px] uppercase tracking-[0.24em] text-white md:text-[28px] md:tracking-[0.28em]">
            Kim jestem?
          </h2>

          <div className="space-y-3 text-[13px] leading-[2] tracking-[0.06em] text-zinc-300">
            <p>Myślę, że jestem taki sam jak wszyscy.</p>
            <p>Nie chcę nikomu nic udowadniać.</p>
            <p>Tworzę muzykę, bo ją kocham,</p>
            <p>a każdy utwór jest dla mnie</p>
            <p>zapisem wspomnień,</p>
            <p>poglądów i emocji z danego okresu życia.</p>
          </div>

<Link
  to="/omnie"
  className="group mx-auto mt-10 flex w-fit items-center gap-5 border-b border-white/25 pb-3 text-[10px] uppercase tracking-[0.35em] text-white transition hover:border-white"
>
  Więcej o mnie
  <span className="transition group-hover:translate-x-1">
    →
  </span>
</Link>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex justify-center"
        >
          <img src={aboutme1} alt="TwójSamuel live" className="max-h-[360px] w-auto rotate-[3deg] border border-white/10 object-contain opacity-85 shadow-2xl md:max-h-[420px] md:rotate-[5deg]" />
        </motion.div>
      </div>
    </section>
  );
}

function CurrentlySection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigTextX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -40]);

  return (
    <section ref={ref} id="obecnie" className="relative overflow-hidden border-t border-white/10 bg-black px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <div className="mb-10 flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">status aktywny</p>
          </div>

          <motion.h2 style={{ x: bigTextX }} className="mb-12 text-[42px] font-light uppercase leading-none tracking-[0.18em] text-white md:mb-16 md:text-[110px] md:tracking-[0.28em]">
            Obecnie
          </motion.h2>
        </motion.div>

        <motion.div style={{ y: contentY }} className="grid grid-cols-1 gap-10 border-y border-white/10 py-12 md:grid-cols-[1fr_1.2fr] md:gap-14 md:py-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-zinc-500">teraz / 2026</p>

          <div className="space-y-6 text-[13px] uppercase leading-[2.1] tracking-[0.16em] text-zinc-200 md:space-y-7 md:text-[21px] md:leading-[2.2] md:tracking-[0.22em]">
            <p>pracuję nad nowym materiałem.</p>
            <p>LEPSZA JAKOŚĆ, WIĘCEJ DŹWIĘKÓW I EKSPERYMENTÓW.</p>
            <p className="text-[12px] tracking-[0.14em] text-zinc-600 md:text-[15px] md:tracking-[0.18em]">
              Po premierze albumu będę publikować jeden utwór miesięcznie.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 text-[10px] uppercase tracking-[0.35em] text-zinc-600 md:mt-12 md:flex-row md:justify-between">
          <span>offline</span>
          <span>warszawa</span>
          <span>underground</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="kontakt" className="relative border-t border-white/10 bg-black px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
        <div>
          <h3 className="mb-3 text-[18px] uppercase tracking-[0.28em] text-white">TwójSamuel</h3>
          <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-600 md:tracking-[0.35em]">
            underground / warszawa / 2026
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 text-[11px] uppercase tracking-[0.35em] text-zinc-400 md:flex-row md:gap-8">
          <a href="https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9?si=o30LKDgkSxCzB0YRgXrpEw" target="_blank" className="transition hover:text-white">Spotify</a>
          <a href="https://www.youtube.com/@twojsamuel1744" target="_blank" className="transition hover:text-white">YouTube</a>
          <a href="https://www.instagram.com/twojsamuel/" target="_blank" className="transition hover:text-white">Instagram</a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.35em] text-zinc-700">© twójsamuel</div>
      </div>
    </footer>
  );
}

function LoadingScreen() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(12px)",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <motion.img
            src={logo}
            alt="TwójSamuel"
            className="h-40 w-auto object-contain md:h-64"
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute bottom-12 left-1/2 h-px w-32 -translate-x-1/2 overflow-hidden bg-white/10"
          >
            <motion.div
              className="h-full bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  useLenisScroll();

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <LatestTracks />
      <AboutSection />
      <CurrentlySection />
      <Footer />
      <LoadingScreen />
    </main>
  );
}