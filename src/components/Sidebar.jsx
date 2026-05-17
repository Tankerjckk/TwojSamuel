import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Sidebar({ active }) {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: "Start", path: "/" },
    { label: "Muzyka", path: "/muzyka" },
    { label: "O mnie", path: "/omnie" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  const socialItems = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/twojsamuel/",
      icon: <FaInstagram size={18} />,
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9?si=18SpihYrR_uLJNsE_WS7Tg",
      icon: <FaSpotify size={18} />,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@twojsamuel1744",
      icon: <FaYoutube size={20} />,
    },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-5 top-5 z-[80] flex h-12 w-12 flex-col items-center justify-center gap-[6px] border border-white/15 bg-black/70 backdrop-blur-md xl:hidden"
        aria-label="Otwórz menu"
      >
        <span className="h-px w-5 bg-white" />
        <span className="h-px w-5 bg-white" />
        <span className="h-px w-5 bg-white" />
      </button>

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[180px] border-r border-white/10 bg-black/50 px-6 py-8 xl:block">
        <Link to="/">
          <img
            src={logo}
            alt="TwójSamuel"
            className="mb-20 h-14 w-auto object-contain"
          />
        </Link>

        <nav className="space-y-9 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block transition hover:text-white ${
                active === item.path
                  ? "border-l border-white pl-4 text-white"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6">
          <div className="mb-8 flex gap-5 text-zinc-300">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="block transition hover:scale-110 hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-700">
            © 2026 TwójSamuel
          </p>
        </div>
      </aside>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm transition xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-[100] h-screen w-[82%] max-w-[340px] border-r border-white/10 bg-black px-7 py-7 transition duration-500 xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-16 flex items-center justify-between">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="TwójSamuel"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <button
            onClick={closeMenu}
            className="h-11 w-11 border border-white/15 text-2xl text-white"
            aria-label="Zamknij menu"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-8 text-[13px] uppercase tracking-[0.35em] text-zinc-400">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`transition hover:text-white ${
                active === item.path
                  ? "border-l border-white pl-4 text-white"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-7 right-7 z-[120]">
          <div className="mb-8 h-px w-full bg-white/10" />

          <div className="mb-8 flex gap-6 text-zinc-300">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="block transition hover:scale-110 hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-700">
            © 2026 TwójSamuel
          </p>
        </div>
      </aside>
    </>
  );
}