import React from "react";
import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";

export default function DeklaracjaDostepnosci() {
  return (
    <>
      <SEO
        title="Deklaracja dostępności | TwójSamuel"
        description="Deklaracja dostępności strony internetowej TwójSamuel."
        url="/deklaracja-dostepnosci"
      />

      <a
        href="#tresc-deklaracji"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-white focus:px-5 focus:py-3 focus:text-[12px] focus:font-bold focus:uppercase focus:tracking-[0.2em] focus:text-black"
      >
        Przejdź do treści
      </a>

      <main
        id="main-content"
        tabIndex="-1"
        className="min-h-screen bg-black text-white"
      >
        <Sidebar active="/deklaracja-dostepnosci" />

        <section
          id="tresc-deklaracji"
          tabIndex="-1"
          className="px-5 py-28 md:px-14 xl:ml-[180px] xl:px-20"
        >
          <div className="mx-auto max-w-[980px]">
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-zinc-400">
              / Dokumenty
            </p>

            <h1 className="mb-8 text-[34px] font-black uppercase leading-none tracking-[0.14em] md:text-[70px] md:tracking-[0.18em]">
              Deklaracja dostępności
            </h1>

            <p className="mb-16 text-[12px] uppercase leading-[2] tracking-[0.25em] text-zinc-400">
              Ostatnia aktualizacja: 2026
            </p>

            <div className="space-y-14 text-[14px] leading-[2] tracking-[0.04em] text-zinc-400">
              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  1. Wstęp
                </h2>

                <p>
                  TwójSamuel dokłada starań, aby strona internetowa dostępna pod
                  adresem <span className="text-white">www.twojsamuel.pl</span>{" "}
                  była dostępna dla jak najszerszej grupy użytkowników, w tym
                  osób korzystających z technologii wspomagających.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  2. Status zgodności
                </h2>

                <p>
                  Strona została przygotowana z uwzględnieniem wytycznych WCAG
                  2.2 na poziomie AA.
                </p>

                <p className="mt-5">
                  W ramach prac przeprowadzono testy automatyczne oraz ręczne
                  sprawdzenie podstawowych obszarów dostępności, takich jak
                  obsługa klawiaturą, widoczność fokusu, kontrast, semantyka
                  nagłówków, formularze oraz działanie elementów
                  interaktywnych.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  3. Zastosowane rozwiązania
                </h2>

                <ul className="list-disc space-y-2 pl-6">
                  <li>obsługa strony za pomocą klawiatury,</li>
                  <li>link „Przejdź do treści”,</li>
                  <li>widoczny fokus na elementach interaktywnych,</li>
                  <li>poprawiona hierarchia nagłówków,</li>
                  <li>odpowiedni kontrast treści i elementów interfejsu,</li>
                  <li>etykiety oraz opisy dla elementów formularza,</li>
                  <li>obsługa zamykania menu klawiszem Escape,</li>
                  <li>ukrywanie treści dekoracyjnych przed czytnikami ekranu,</li>
                  <li>responsywny układ strony dla urządzeń mobilnych.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  4. Treści niedostępne lub częściowo dostępne
                </h2>

                <p>
                  Na stronie mogą występować pojedyncze elementy wymagające
                  dalszej oceny lub indywidualnego usprawnienia, szczególnie w
                  przypadku nietypowych konfiguracji przeglądarek, urządzeń lub
                  technologii wspomagających.
                </p>

                <p className="mt-5">
                  Strona jest stale rozwijana i w przyszłości planowane są
                  kolejne usprawnienia związane z dostępnością cyfrową.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  5. Przygotowanie deklaracji
                </h2>

                <p>
                  Deklaracja została sporządzona na podstawie samooceny oraz
                  testów przeprowadzonych podczas prac nad stroną.
                </p>

                <p className="mt-5">
                  Weryfikacja obejmowała między innymi testy Lighthouse,
                  sprawdzenie obsługi klawiaturą, działania formularza,
                  nawigacji, menu mobilnego oraz podstawowej semantyki HTML.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  6. Informacje zwrotne i kontakt
                </h2>

                <p>
                  W przypadku zauważenia problemów z dostępnością strony można
                  skontaktować się przez e-mail:
                </p>

                <p className="mt-5">
                  <a
                    href="mailto:kontakt@twojsamuel.pl"
                    aria-label="Wyślij wiadomość e-mail na adres kontakt@twojsamuel.pl"
                    className="text-white underline underline-offset-4"
                  >
                    kontakt@twojsamuel.pl
                  </a>
                </p>

                <p className="mt-5">
                  W zgłoszeniu warto podać adres podstrony, opis problemu oraz
                  informacje o używanym urządzeniu, przeglądarce lub technologii
                  wspomagającej.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  7. Data sporządzenia i aktualizacji
                </h2>

                <p>Deklarację sporządzono w 2026 roku.</p>

                <p className="mt-5">
                  Ostatnia aktualizacja deklaracji: 2026.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}