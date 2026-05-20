import React from "react";
import { Link, useLocation } from "react-router-dom";

const STORAGE_KEY = "twojsamuel_cookie_consent_v1";

export default function CookieBanner() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [visible, setVisible] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [hasConsent, setHasConsent] = React.useState(false);

  const [analytics, setAnalytics] = React.useState(true);
  const [marketing, setMarketing] = React.useState(true);

  React.useEffect(() => {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      setVisible(true);
      setHasConsent(false);
      return;
    }

    const parsed = JSON.parse(savedConsent);

    setAnalytics(!!parsed.analytics);
    setMarketing(!!parsed.marketing);
    setHasConsent(true);

    window.dispatchEvent(
      new CustomEvent("cookieConsentUpdated", {
        detail: parsed,
      })
    );
  }, []);

  React.useEffect(() => {
    if (!visible) return;

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [visible]);

  const saveConsent = (consent) => {
    const payload = {
      necessary: true,
      analytics: consent.analytics,
      marketing: consent.marketing,
      date: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    window.dispatchEvent(
      new CustomEvent("cookieConsentUpdated", {
        detail: payload,
      })
    );

    setAnalytics(payload.analytics);
    setMarketing(payload.marketing);
    setHasConsent(true);
    setVisible(false);
    setSettingsOpen(false);
  };

  const acceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      analytics: false,
      marketing: false,
    });
  };

  const saveSettings = () => {
    saveConsent({
      analytics,
      marketing,
    });
  };

  const openSettingsAgain = () => {
    setSettingsOpen(true);
    setVisible(true);
  };

  return (
    <>
{hasConsent && !visible && (
  <button
    onClick={openSettingsAgain}
    className={`group fixed z-[15000] flex items-center justify-center border-white/10 bg-black/80 backdrop-blur-md transition duration-500 hover:border-white/40 ${
      isHomePage
        ? "left-0 top-1/2 h-[150px] w-[38px] -translate-y-1/2 border-y border-r hover:w-[52px]"
        : "left-1/2 top-0 h-[34px] w-[150px] -translate-x-1/2 border-x border-b hover:h-[44px] md:left-0 md:top-1/2 md:h-[150px] md:w-[38px] md:-translate-y-1/2 md:translate-x-0 md:border-y md:border-r md:border-b-0 md:border-x-0 md:hover:w-[52px] md:hover:h-[150px]"
    }`}
    aria-label="Zmień ustawienia cookies"
  >
    <span
      className={`text-[9px] uppercase tracking-[0.38em] text-zinc-500 transition duration-500 group-hover:text-white ${
        isHomePage ? "cookie-text-vertical" : "cookie-text-mobile-top"
      }`}
    >
      COOKIES
    </span>
  </button>
)}

      {visible && (
        <div className="fixed inset-0 z-[10000] flex items-end bg-black/65 px-4 py-4 text-white backdrop-blur-sm md:px-8 md:py-8">
          <div className="cookie-panel mx-auto w-full max-w-[1500px] origin-bottom border border-white/10 bg-black/95 px-5 py-5 shadow-2xl md:px-8 md:py-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[820px]">
                <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                  Cookies
                </p>

                <h2 className="mb-4 text-[18px] uppercase tracking-[0.22em] text-white md:text-[22px]">
                  Szanujemy Twoją prywatność
                </h2>

                <p className="text-[13px] leading-[1.9] tracking-[0.04em] text-zinc-400">
                  Używamy niezbędnych plików cookie do działania strony. Za
                  Twoją zgodą możemy używać również cookies analitycznych i
                  marketingowych. Szczegóły znajdziesz w{" "}
                  <Link
                    to="/polityka-prywatnosci"
                    className="text-white underline underline-offset-4"
                  >
                    polityce prywatności
                  </Link>
                  .
                </p>

                {settingsOpen && (
                  <div className="mt-6 grid gap-4 border border-white/10 p-5">
                    <label className="flex items-start gap-4">
                      <input type="checkbox" checked disabled className="mt-1" />

                      <span>
                        <span className="block text-[12px] uppercase tracking-[0.25em] text-white">
                          Niezbędne
                        </span>
                        <span className="mt-2 block text-[12px] leading-[1.8] text-zinc-500">
                          Wymagane do poprawnego działania strony. Tych cookies
                          nie można wyłączyć.
                        </span>
                      </span>
                    </label>

                    <label className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(event) =>
                          setAnalytics(event.target.checked)
                        }
                        className="mt-1"
                      />

                      <span>
                        <span className="block text-[12px] uppercase tracking-[0.25em] text-white">
                          Analityczne
                        </span>
                        <span className="mt-2 block text-[12px] leading-[1.8] text-zinc-500">
                          Pomagają sprawdzić, jak użytkownicy korzystają ze
                          strony. Tutaj później podepniemy GA4.
                        </span>
                      </span>
                    </label>

                    <label className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        checked={marketing}
                        onChange={(event) =>
                          setMarketing(event.target.checked)
                        }
                        className="mt-1"
                      />

                      <span>
                        <span className="block text-[12px] uppercase tracking-[0.25em] text-white">
                          Marketingowe
                        </span>
                        <span className="mt-2 block text-[12px] leading-[1.8] text-zinc-500">
                          Na przyszłość, np. newsletter, piksele reklamowe lub
                          kampanie promocyjne.
                        </span>
                      </span>
                    </label>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <button
                  onClick={rejectAll}
                  className="h-12 border border-white/15 px-6 text-[10px] uppercase tracking-[0.3em] text-zinc-300 transition hover:border-white hover:text-white"
                >
                  Odrzucam
                </button>

                <button
                  onClick={() => setSettingsOpen((prev) => !prev)}
                  className="h-12 border border-white/15 px-6 text-[10px] uppercase tracking-[0.3em] text-zinc-300 transition hover:border-white hover:text-white"
                >
                  Dostosuj
                </button>

                {settingsOpen ? (
                  <button
                    onClick={saveSettings}
                    className="h-12 border border-white bg-white px-6 text-[10px] uppercase tracking-[0.3em] text-black transition hover:bg-zinc-200"
                  >
                    Zapisz
                  </button>
                ) : (
                  <button
                    onClick={acceptAll}
                    className="h-12 border border-white bg-white px-6 text-[10px] uppercase tracking-[0.3em] text-black transition hover:bg-zinc-200"
                  >
                    Akceptuję
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

<style>{`
  .cookie-panel {
    animation: cookieSlideUp 0.55s ease-out both;
  }

  .cookie-text-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .cookie-text-mobile-top {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }

  @media (min-width: 768px) {
    .cookie-text-mobile-top {
      writing-mode: vertical-rl;
      text-orientation: mixed;
    }
  }

  @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
            filter: blur(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
}