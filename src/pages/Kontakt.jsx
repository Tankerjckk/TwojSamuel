import React from "react";
import { motion } from "framer-motion";

import kontaktHeroBanner from "../assets/kontakt-hero-banner.png";
import kontaktHeroBannerMobile from "../assets/kontakt-hero-banner-mobile.png";

import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";

import {
  FaInstagramSquare,
} from "react-icons/fa";

import {
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Kontakt() {
  return (
    <>
<SEO
  title="Kontakt | TwójSamuel"
  description="Skontaktuj się z TwójSamuel. Współpraca, pytania i kontakt."
  url="/kontakt"
/>
    <main className="min-h-screen bg-black text-white">
      <Sidebar active="/kontakt" />

      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-black xl:ml-[180px]">
  <picture>
    <source media="(max-width: 768px)" srcSet={kontaktHeroBannerMobile} />

    <img
      src={kontaktHeroBanner}
      alt="Kontakt"
      className="absolute inset-0 h-full w-full object-cover opacity-80"
    />
  </picture>

  <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
  <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    className="relative z-10 flex min-h-[100svh] items-center px-6 pt-20 md:px-14 xl:px-20"
  >
    <div className="max-w-[900px]">
      <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-zinc-400 md:mb-10 md:text-[11px]">
        / Kontakt
      </p>

      <h1 className="mb-8 text-[50px] font-black uppercase leading-none tracking-[0.16em] text-white sm:text-[76px] md:mb-10 md:text-[135px] md:tracking-[0.24em] xl:text-[160px]">
        Kontakt
      </h1>

      <p className="max-w-[760px] text-[12px] uppercase leading-[2] tracking-[0.28em] text-zinc-400 md:text-[22px] md:tracking-[0.42em]">
        Odezwij się.
        <br />
        Jestem otwarty na współpracę.
      </p>

      <div className="mt-12 h-px w-14 bg-white/80 md:mt-14" />
    </div>
  </motion.div>
</section>

<section className="bg-black px-5 py-16 md:px-14 md:py-24 xl:ml-[180px] xl:px-20">
  <motion.div
    className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1.2fr_0.8fr]"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.25 }}
  >
    <div>
      <p className="mb-6 text-[12px] uppercase tracking-[0.45em] text-zinc-400">
        Napisz do mnie
      </p>

      <div className="mb-10 h-px w-10 bg-white/60" />

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="grid gap-5"
      >
        <input type="hidden" name="access_key" value="f6f5ac0e-e620-486e-ab2e-95160712125b" />
        <input type="hidden" name="from_name" value="TwojSamuel.pl" />
        <input type="hidden" name="subject" value="Nowa wiadomość ze strony TwojSamuel.pl" />

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Imię i nazwisko"
            className="h-14 border border-white/15 bg-transparent px-5 text-[11px] uppercase tracking-[0.22em] text-white outline-none transition placeholder:text-zinc-500 focus:border-white/50 md:tracking-[0.35em]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            className="h-14 border border-white/15 bg-transparent px-5 text-[11px] uppercase tracking-[0.22em] text-white outline-none transition placeholder:text-zinc-500 focus:border-white/50 md:tracking-[0.35em]"
          />
        </div>

        <input
          type="text"
          name="topic"
          required
          placeholder="Temat"
          className="h-14 border border-white/15 bg-transparent px-5 text-[11px] uppercase tracking-[0.22em] text-white outline-none transition placeholder:text-zinc-500 focus:border-white/50 md:tracking-[0.35em]"
        />

<textarea
  name="message"
  required
  placeholder="Wiadomość"
  rows="7"
  className="resize-none border border-white/15 bg-transparent px-5 py-5 text-[11px] uppercase tracking-[0.22em] text-white outline-none transition placeholder:text-zinc-500 focus:border-white/50 md:tracking-[0.35em]"
/>

<label className="flex items-start gap-4 border border-white/10 p-5">
  <input
    type="checkbox"
    name="privacy_consent"
    required
    value="TAK"
    className="mt-1 h-4 w-4 shrink-0 accent-white"
  />

  <span className="text-[11px] leading-[1.8] tracking-[0.08em] text-zinc-500">
    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi
    wiadomości przesłanej przez formularz kontaktowy oraz akceptuję{" "}
    <a
      href="/polityka-prywatnosci"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white underline underline-offset-4"
    >
      politykę prywatności
    </a>
    .
  </span>
</label>

<input
  type="hidden"
  name="privacy_consent_text"
  value="Użytkownik zaakceptował politykę prywatności i wyraził zgodę na przetwarzanie danych osobowych w celu obsługi wiadomości."
/>

<input
  type="checkbox"
  name="botcheck"
  className="hidden"
  tabIndex="-1"
  autoComplete="off"
/>

        <button
          type="submit"
          className="group mt-2 flex h-16 w-full items-center justify-between border border-white/25 px-6 text-[10px] uppercase tracking-[0.28em] text-white transition hover:border-white md:max-w-[360px] md:px-8 md:text-[11px] md:tracking-[0.35em]"
        >
          Wyślij wiadomość
          <span className="transition group-hover:translate-x-1">→</span>
        </button>
      </form>
    </div>

    <div className="border-t border-white/10 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
      <p className="mb-6 text-[12px] uppercase tracking-[0.45em] text-zinc-400">
        Kontakt
      </p>

      <div className="mb-12 h-px w-10 bg-white/60" />

      <div className="space-y-12">
        <div className="flex gap-5">
          <FiMail size={22} className="mt-1 text-zinc-300" />
          <div>
            <h4 className="mb-3 text-[12px] uppercase tracking-[0.35em] text-white">
              E-mail
            </h4>
            <p className="text-[16px] text-zinc-400">
              kontakt@twojsamuel.pl
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <FaInstagramSquare size={22} className="mt-1 text-zinc-300" />
          <div>
            <h4 className="mb-3 text-[12px] uppercase tracking-[0.35em] text-white">
              Instagram
            </h4>
            <p className="text-[16px] text-zinc-400">@twojsamuel</p>
          </div>
        </div>

        <div className="flex gap-5">
          <FiMapPin size={22} className="mt-1 text-zinc-300" />
          <div>
            <h4 className="mb-3 text-[12px] uppercase tracking-[0.35em] text-white">
              Lokalizacja
            </h4>
            <p className="text-[16px] text-zinc-400">
              Warszawa, Polska
            </p>
          </div>
        </div>

        <div className="mt-12 border border-white/10 p-8">
          <div className="flex gap-5">
            <FiClock size={24} className="mt-1 text-zinc-300" />
            <div>
              <p className="mb-3 text-[12px] uppercase tracking-[0.4em] text-white">
                Czas odpowiedzi
              </p>
              <p className="max-w-[360px] text-[14px] leading-[2] tracking-[0.08em] text-zinc-500">
                Zazwyczaj odpisuję w ciągu 24–48h.
                <br />
                Dzięki za cierpliwość.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>
    </main>
  </>
);
}