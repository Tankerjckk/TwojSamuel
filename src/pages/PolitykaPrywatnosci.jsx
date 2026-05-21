import React from "react";
import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO";

export default function PolitykaPrywatnosci() {
  return (
    <>
      <SEO
        title="Polityka prywatności | TwójSamuel"
        description="Polityka prywatności oraz informacje o plikach cookies serwisu TwójSamuel."
        url="/polityka-prywatnosci"
      />

      <main className="min-h-screen bg-black text-white">
        <Sidebar active="/polityka-prywatnosci" />

        <section className="px-5 py-28 md:px-14 xl:ml-[180px] xl:px-20">
          <div className="mx-auto max-w-[980px]">
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-zinc-500">
              / Dokumenty
            </p>

            <h1 className="mb-8 text-[34px] font-black uppercase leading-none tracking-[0.14em] md:text-[70px] md:tracking-[0.18em]">
              Polityka prywatności
            </h1>

            <p className="mb-16 text-[12px] uppercase leading-[2] tracking-[0.25em] text-zinc-500">
              Ostatnia aktualizacja: 2026
            </p>

            <div className="space-y-14 text-[14px] leading-[2] tracking-[0.04em] text-zinc-400">
              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  1. Informacje ogólne
                </h2>

                <p>
                  Niniejsza polityka prywatności określa zasady przetwarzania
                  danych osobowych oraz wykorzystywania plików cookies w
                  serwisie internetowym dostępnym pod adresem{" "}
                  <span className="text-white">www.twojsamuel.pl</span>.
                </p>

                <p className="mt-5">
                  Administratorem danych osobowych jest Jacek Kubiak, Otwock,
                  Polska. Kontakt z Administratorem możliwy jest pod adresem
                  e-mail:{" "}
                  <a
                    href="mailto:kontakt@twojsamuel.pl"
                    className="text-white underline underline-offset-4"
                  >
                    kontakt@twojsamuel.pl
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  2. Zakres przetwarzanych danych
                </h2>

                <p>
                  Serwis może przetwarzać dane osobowe podane dobrowolnie przez
                  użytkownika, w szczególności poprzez formularz kontaktowy.
                </p>

                <p className="mt-5">
                  W przypadku formularza kontaktowego mogą być przetwarzane:
                  imię i nazwisko, adres e-mail, temat wiadomości oraz treść
                  wiadomości.
                </p>

                <p className="mt-5">
                  Serwis może również przetwarzać dane techniczne związane z
                  korzystaniem ze strony, takie jak adres IP, informacje o
                  przeglądarce, data i czas zapytania, adres odwiedzanej
                  podstrony oraz informacje diagnostyczne.
                </p>

                <p className="mt-5">
                  Newsletter nie jest obecnie aktywną funkcją serwisu. Jeśli w
                  przyszłości zostanie uruchomiony, polityka prywatności zostanie
                  zaktualizowana o informacje dotyczące zapisu, wypisu oraz
                  przetwarzania danych w tym celu.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  3. Cele przetwarzania danych
                </h2>

                <p>Dane osobowe mogą być przetwarzane w celu:</p>

                <ul className="mt-5 list-disc space-y-2 pl-6">
                  <li>
                    obsługi wiadomości przesłanych przez formularz kontaktowy,
                  </li>
                  <li>udzielenia odpowiedzi na zapytanie użytkownika,</li>
                  <li>prowadzenia korespondencji,</li>
                  <li>
                    zapewnienia bezpieczeństwa i prawidłowego działania strony,
                  </li>
                  <li>
                    prowadzenia statystyk odwiedzin po wyrażeniu zgody na
                    cookies analityczne.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  4. Podstawy przetwarzania danych
                </h2>

                <p>
                  Dane przesłane przez formularz kontaktowy są przetwarzane w
                  celu podjęcia działań na żądanie użytkownika oraz w ramach
                  prawnie uzasadnionego interesu Administratora, polegającego na
                  obsłudze korespondencji i udzielaniu odpowiedzi.
                </p>

                <p className="mt-5">
                  Dane techniczne mogą być przetwarzane w ramach prawnie
                  uzasadnionego interesu Administratora, polegającego na
                  zapewnieniu bezpieczeństwa, diagnostyce błędów oraz
                  prawidłowym działaniu serwisu.
                </p>

                <p className="mt-5">
                  Cookies analityczne i marketingowe wykorzystywane są wyłącznie
                  po wyrażeniu zgody przez użytkownika. Użytkownik może w każdej
                  chwili zmienić lub cofnąć zgodę.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  5. Formularz kontaktowy i Web3Forms
                </h2>

                <p>
                  Formularz kontaktowy korzysta z usługi Web3Forms, która
                  umożliwia przesyłanie wiadomości z formularza bez konieczności
                  tworzenia własnego backendu. Dane wpisane w formularzu są
                  przekazywane w celu dostarczenia wiadomości do Administratora.
                </p>

                <p className="mt-5">
                  Wysyłając formularz, użytkownik potwierdza zapoznanie się z
                  polityką prywatności oraz wyraża zgodę na przetwarzanie danych
                  w celu obsługi wiadomości.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  6. Hosting i logi techniczne
                </h2>

                <p>
                  Strona jest hostowana za pośrednictwem platformy Vercel. W
                  celu zapewnienia działania, bezpieczeństwa i diagnostyki
                  serwisu mogą być przetwarzane dane techniczne, takie jak adres
                  IP, informacje o przeglądarce, data i czas żądania, adres
                  odwiedzanej strony oraz informacje o błędach.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  7. Google Search Console
                </h2>

                <p>
                  Serwis korzysta z Google Search Console w celu monitorowania
                  widoczności strony w wynikach wyszukiwania Google, sprawdzania
                  indeksowania podstron oraz wykrywania problemów technicznych
                  związanych z obecnością strony w wyszukiwarce.
                </p>

                <p className="mt-5">
                  Google Search Console nie służy do wyświetlania reklam ani do
                  tworzenia profili marketingowych użytkowników.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  8. Google Analytics 4
                </h2>

                <p>
                  Serwis korzysta z Google Analytics 4 w celu prowadzenia
                  statystyk odwiedzin strony, takich jak liczba użytkowników,
                  odwiedzane podstrony, źródła wejść oraz podstawowe informacje
                  o zachowaniu użytkowników w serwisie.
                </p>

                <p className="mt-5">
                  Google Analytics 4 jest uruchamiany dopiero po wyrażeniu przez
                  użytkownika zgody na cookies analityczne. Jeśli użytkownik
                  odrzuci cookies analityczne, skrypt Google Analytics nie jest
                  ładowany.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  9. Pliki cookies
                </h2>

                <p>
                  Serwis korzysta z plików cookies. Cookies to niewielkie pliki
                  zapisywane na urządzeniu użytkownika, które mogą być
                  wykorzystywane do prawidłowego działania strony, zapamiętania
                  ustawień oraz prowadzenia statystyk.
                </p>

                <p className="mt-5">
                  W serwisie mogą występować następujące kategorie cookies:
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-6">
                  <li>
                    <span className="text-white">niezbędne</span> — wymagane do
                    działania strony oraz zapamiętania decyzji dotyczącej zgód,
                  </li>
                  <li>
                    <span className="text-white">analityczne</span> — używane do
                    pomiaru odwiedzin i sposobu korzystania ze strony, np. przez
                    Google Analytics 4,
                  </li>
                  <li>
                    <span className="text-white">marketingowe</span> — obecnie
                    nie są wykorzystywane do aktywnych kampanii reklamowych, ale
                    kategoria pozostaje dostępna na wypadek przyszłych działań
                    promocyjnych, np. pikseli reklamowych lub remarketingu.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  10. Zarządzanie zgodami cookies
                </h2>

                <p>
                  Przy pierwszej wizycie użytkownik może zaakceptować, odrzucić
                  lub dostosować zgody cookies. Zgody analityczne i marketingowe
                  nie są domyślnie zaznaczone w ustawieniach szczegółowych.
                </p>

                <p className="mt-5">
                  Po dokonaniu wyboru na stronie pozostaje dostępna zakładka
                  „COOKIES”, która umożliwia ponowne otwarcie ustawień i zmianę
                  zgód.
                </p>

                <p className="mt-5">
                  Użytkownik może również usunąć pliki cookies bezpośrednio w
                  ustawieniach swojej przeglądarki internetowej.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  11. Okres przechowywania danych
                </h2>

                <p>
                  Dane z formularza kontaktowego są przechowywane przez okres
                  niezbędny do obsługi korespondencji, a następnie mogą być
                  przechowywane przez czas potrzebny do zabezpieczenia
                  ewentualnych roszczeń.
                </p>

                <p className="mt-5">
                  Dane techniczne i analityczne są przechowywane zgodnie z
                  ustawieniami dostawców usług, w szczególności Vercel i Google.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  12. Odbiorcy danych
                </h2>

                <p>
                  Dane mogą być przekazywane podmiotom wspierającym działanie
                  strony, w szczególności:
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-6">
                  <li>dostawcy hostingu — Vercel,</li>
                  <li>dostawcy obsługi formularza — Web3Forms,</li>
                  <li>
                    dostawcy narzędzi analitycznych — Google, po wyrażeniu
                    zgody na cookies analityczne,
                  </li>
                  <li>
                    dostawcom usług technicznych niezbędnych do utrzymania i
                    zabezpieczenia strony.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  13. Przekazywanie danych poza EOG
                </h2>

                <p>
                  Niektórzy dostawcy usług, tacy jak Vercel, Google lub
                  Web3Forms, mogą przetwarzać dane poza Europejskim Obszarem
                  Gospodarczym. W takim przypadku dane są przekazywane z
                  zastosowaniem odpowiednich mechanizmów ochrony wymaganych przez
                  przepisy o ochronie danych osobowych.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  14. Prawa użytkownika
                </h2>

                <p>
                  Użytkownikowi przysługuje prawo dostępu do danych, otrzymania
                  ich kopii, sprostowania, usunięcia, ograniczenia przetwarzania,
                  przenoszenia danych, sprzeciwu wobec przetwarzania oraz
                  wycofania zgody, jeśli przetwarzanie odbywa się na podstawie
                  zgody.
                </p>

                <p className="mt-5">
                  W celu realizacji praw należy skontaktować się z
                  Administratorem pod adresem:{" "}
                  <a
                    href="mailto:kontakt@twojsamuel.pl"
                    className="text-white underline underline-offset-4"
                  >
                    kontakt@twojsamuel.pl
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  15. Skarga do organu nadzorczego
                </h2>

                <p>
                  Użytkownik ma prawo wnieść skargę do Prezesa Urzędu Ochrony
                  Danych Osobowych, jeśli uzna, że przetwarzanie danych narusza
                  przepisy o ochronie danych osobowych.
                </p>
              </section>

              <section>
                <h2 className="mb-5 text-[14px] uppercase tracking-[0.35em] text-white">
                  16. Zmiany polityki prywatności
                </h2>

                <p>
                  Polityka prywatności może być aktualizowana, szczególnie w
                  przypadku dodania nowych funkcji strony, newslettera, narzędzi
                  analitycznych lub marketingowych.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}