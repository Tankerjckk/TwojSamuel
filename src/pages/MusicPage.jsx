import React from "react";
import { motion } from "framer-motion";

import Sidebar from "../components/Sidebar";

import muzykaHeroBanner from "../assets/muzyka-hero-banner.png";
import muzykaHeroBannerMobile from "../assets/muzyka-hero-banner-mobile.png";

import presjaCover from "../assets/tracks/presja.png";
import tostyCover from "../assets/tracks/tosty-i-hot-dogi.png";
import mnieTestujCover from "../assets/tracks/mnie-testuj.png";
import potencjalCover from "../assets/tracks/potencjal.png";
import zycioweTangoCover from "../assets/tracks/zyciowe-tango.png";
import jomoCover from "../assets/tracks/jomo.png";
import krokiCover from "../assets/tracks/kroki.png";
import uniesienieCover from "../assets/tracks/uniesienie.png";
import planyIndywidualneCover from "../assets/tracks/plany-indywidualne.png";
import samoswiadomoscCover from "../assets/tracks/samoswiadomosc.png";
import tubblyCover from "../assets/tracks/tubbly.png";
import desynchronizacjaCover from "../assets/tracks/desynchronizacja.png";
import hotelParasiteCover from "../assets/tracks/hotel-parasite.png";
import chanelCover from "../assets/tracks/chanel.png";

import preludiumAudio from "../audio/full/1-preludium.mp3";
import pracyAudio from "../audio/full/2-pracy.mp3";
import czasuAudio from "../audio/full/3-czasu.mp3";
import finansowaAudio from "../audio/full/4-finansowa.mp3";
import spolecznaAudio from "../audio/full/5-spoleczna.mp3";
import interludiumAudio from "../audio/full/6-interludium.mp3";
import jezykaAudio from "../audio/full/7-jezyka.mp3";
import rodzinyAudio from "../audio/full/8-rodziny.mp3";
import podrozyAudio from "../audio/full/9-podrozy.mp3";
import zdrowegoZyciaAudio from "../audio/full/10-zdrowego-zycia.mp3";
import toOstatnieLudiumAudio from "../audio/full/11-to-ostatnie-ludium.mp3";

import bouncingAudio from "../audio/full/bouncing.mp3";
import dniAudio from "../audio/full/28-dni.mp3";
import twojAdrianAudio from "../audio/full/twoj-adrian.mp3";
import aktAudio from "../audio/full/akt-1.mp3";
import fomoAudio from "../audio/full/fomo.mp3";
import nostalgiaAudio from "../audio/full/nostalgia.mp3";
import pingwinyAudio from "../audio/full/pingwiny.mp3";

import mnieTestujAudio from "../audio/full/mnie-testuj.mp3";
import potencjalAudio from "../audio/full/potencjal.mp3";
import zycioweTangoAudio from "../audio/full/zyciowe-tango.mp3";
import jomoAudio from "../audio/full/jomo.mp3";
import krokiAudio from "../audio/full/kroki.mp3";
import uniesienieAudio from "../audio/full/uniesienie.mp3";
import planyIndywidualneAudio from "../audio/full/plany-indywidualne.mp3";
import samoswiadomoscAudio from "../audio/full/samoswiadomosc.mp3";
import tubblyAudio from "../audio/full/tubbly.mp3";
import desynchronizacjaAudio from "../audio/full/desynchronizacja.mp3";

import hotelParasiteAudio from "../audio/full/hotel-parasite.mp3";
import theBetAudio from "../audio/full/the-bet.mp3";
import wycieczkaAudio from "../audio/full/wycieczka-do-wwa-cz-2.mp3";
import summerFashionAudio from "../audio/full/summer-fashion.mp3";
import milosnaPiosenkaAudio from "../audio/full/milosna-piosenka.mp3";
import topAudio from "../audio/full/top-100.mp3";

import chanelAudio from "../audio/full/chanel.mp3";

import { lyrics } from "../data/lyrics";

const fadeUp = {
  hidden: { opacity: 0, y: 45, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const discography = [
  {
    title: "PRESJA",
    type: "Album",
    tracks: [
      {
  title: "Preludium",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: preludiumAudio,
  lyricsKey: "preludium",
  description:
    "„Preludium” pokazuje życie w natłoku wielu różnych presji pojawiających się i znikających na różnych etapach dnia, roku i życia. To obraz chaosu myśli powstającego wtedy, gdy kilka napięć nakłada się na siebie jednocześnie. Z pozoru drobne rzeczy zaczynają tworzyć realny ciężar, trudny do zignorowania. Utwór oddaje stan przeciążenia i zagubienia, dobrze znany każdemu z nas. To bezpośrednia zapowiedź kolejnych utworów i presji, które będą się stopniowo ujawniać.",
},
      { 
        title: "Pracy", 
        year: "2026", 
        group: "PRESJA", 
        type: "album", 
        image: presjaCover, 
        audio: pracyAudio,
        lyricsKey: "pracy",
        description: "Utwór skupia się na presji związanej z pracą, rozwojem i porównywaniem się do innych. Kasia mierzy się z oczekiwaniami awansu, większych zarobków i „lepszego życia”, jednocześnie czując stagnację i zmęczenie. Codzienność zamienia się w powtarzalny schemat, w którym motywacja miesza się z frustracją. Porównania do rówieśników i medialnych sukcesów tylko pogłębiają poczucie, że jest w tyle. To historia o wyścigu, w którym im szybciej biegniesz, tym trudniej zobaczyć sens."
      },
      {
  title: "Czasu",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: czasuAudio,
  lyricsKey: "czasu",
  description:
    "Utwór pokazuje presję ciągłych bodźców w postaci powiadomień na zegarku. Za każdym razem, gdy bohaterka chce sprawdzić godzinę, ekran zasłaniają kolejne komunikaty. Natłok informacji, który sama sobie stworzyła różnorakimi aplikacjami, zaczyna przejmować kontrolę nad jej codziennością. Brak chwili ciszy sprawia, że trudno się zatrzymać i złapać oddech, a czas zaczyna przeciekać przez palce, niezauważalnie.",
},

{
  title: "Finansowa",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: finansowaAudio,
  lyricsKey: "finansowa",
  description:
    "Utwór skupia się na presji finansowej i potrzebie posiadania rzeczy, które definiują status. Kasia balansuje między realnymi możliwościami a chęcią życia na poziomie, który widzi u innych. Zakupy przestają być potrzebą, a zaczynają być próbą dopasowania się i nadążania za trendami. Z czasem pojawia się pytanie, czy to motywacja do rozwoju, czy już presja, która przejmuje kontrolę. To historia o tym, jak łatwo pomylić własne potrzeby z tym, co narzuca świat.",
},

{
  title: "Społeczna",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: spolecznaAudio,
  lyricsKey: "spoleczna",
  description:
    "Utwór pokazuje presję życia w social mediach i potrzebę ciągłego bycia widzianym. Kasia zaczyna traktować codzienność jak content, a własne życie jak projekt do pokazania innym. Granica między byciem sobą a kreowaniem wizerunku stopniowo się zaciera. Porównania, lajki i obserwacja innych napędzają spiralę napięcia i poczucie, że wciąż trzeba więcej. To historia o tym, jak łatwo zgubić siebie w świecie, w którym wszystko jest na pokaz.",
},

{
  title: "Interludium",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: interludiumAudio,
  lyricsKey: "interludium",
  description:
    "Utwór skupia się na próbie wyhamowania i poukładania nagromadzonej presji. Kasia zaczyna zauważać, jak bardzo wciągnęło ją ciągłe 'więcej' i potrzeba levelowania życia. Pojawia się refleksja, że nie ilość, a jakość ma realne znaczenie. Mimo tego nadal balansuje między chęcią zmiany a starymi nawykami. To moment pierwszej próby odzyskania kontroli i złapania dystansu.",
},
    ],
  },

  {
    title: "PRESJA",
    type: "Album",
    tracks: [
      {
  title: "Języka",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: jezykaAudio,
  lyricsKey: "jezyka",
  description:
    "Utwór porusza temat presji związanej z językiem, trendami i sposobem komunikacji. Kasia realnie nie rozumie części anglicyzmów, ale czuje potrzebę używania ich, żeby dopasować się do otoczenia. Granica między autentycznością a kreacją zaczyna się zacierać. Bohaterka czuje niemoc i ma wrażenie, że nie ma na to wpływu. Zaczyna wierzyć, że jedynym wyjściem jest dostosowanie się i oczekiwanie na zmianę mody.",
},

{
  title: "Rodziny",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: rodzinyAudio,
  lyricsKey: "rodziny",
  description:
    "Utwór porusza temat presji dorastania i ciągłego poczucia, że trzeba chcieć więcej. Refren inspirowany klimatem 'Wszystko, czego dziś chcę' Izabeli Trojanowskiej pokazuje zderzenie marzeń z realnym napięciem i oczekiwaniami. Motyw 'oderwać wzdłuż linii' staje się symbolem momentu, w którym powinniśmy zrobić wszystko dobrze i w końcu dorosnąć. Zamiast spokoju pojawia się jednak kolejne pytanie — czy to naprawdę nasz wybór, czy tylko odpowiedź na presję.",
},

{
  title: "Podróży",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: podrozyAudio,
  lyricsKey: "podrozy",
  description:
    "Utwór porusza temat presji doświadczeń i życia na maksa napędzanego przez FOMO i trendy. Kasia chce przeżyć wszystko — podróże, smaki i miejsca — ale z czasem zaczyna się w tym gubić. Zamiast wolności pojawia się pośpiech i poczucie, że trzeba robić więcej, zobaczyć więcej i doświadczyć jak najwięcej. Nawet odpoczynek przestaje być naturalny, bo staje się kolejnym punktem do zaliczenia.",
},

{
  title: "Zdrowego życia",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: zdrowegoZyciaAudio,
  lyricsKey: "zdrowegozycia",
  description:
    "Utwór porusza temat presji życia zdrowo i ciągłego doskonalenia siebie. Kasia próbuje stosować wszystkie zasady i dobre nawyki, ale z czasem zaczyna odczuwać ich ciężar. Zamiast równowagi pojawia się kontrola i poczucie, że zawsze można robić więcej. Każda kolejna rada i trend zamienia się w obowiązek, który zamiast pomagać zaczyna przytłaczać.",
},

{
  title: "To ostatnie ludium",
  year: "2026",
  group: "PRESJA",
  type: "album",
  image: presjaCover,
  audio: toOstatnieLudiumAudio,
  lyricsKey: "ostatnieludium",
  description:
    "Utwór porusza temat bezradności i potrzeby wsparcia w świecie pełnym presji. Kasia czuje, że powinna radzić sobie sama, ale jednocześnie nie potrafi unieść wszystkiego w pojedynkę. To moment, w którym wszystkie presje z całego albumu nakładają się na siebie. Pojawia się wewnętrzny konflikt między potrzebą niezależności a pragnieniem, żeby ktoś ją uratował. To najbardziej intymny punkt historii, w którym napięcie osiąga swoje maksimum.",
},
    ],
  },

  {
    title: "TOSTY I HOT-DOGI",
    type: "Album",
    tracks: [
      { 
        title: "Bouncing", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", 
        image: tostyCover, 
        audio: bouncingAudio,
        description:
    "To otwarcie EP „TOSTY I HOT-DOGI”. Numer opowiada o wakacjach, miłościach, marzeniach oraz wszystkich dobrych i złych decyzjach, które pojawiały się po drodze. To ciągła pogoń za miłością, sławą i zabawą. W chwilach upadku wraca tęsknota za przeszłością, a w momentach wyżyn pojawia się głód jeszcze większych emocji. Ostatecznie wszystko kończy się porannym zjazdem i pustką. Utwór jest zbiorem emocji oraz listem skierowanym do romantycznych uczuć.",
    },

      { 
        title: "28 Dni", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", 
        image: tostyCover, 
        audio: dniAudio,
        description:
        "Tytuł nawiązuje do mojego ulubionego typu horroru. Utwór opowiada o momentach, w których wszystko zaczyna układać się po mojej myśli, a ja w końcu znajduję czas dla siebie. Przez długi czas towarzyszyła mi presja, która nie pozwalała odpocząć nawet przez chwilę. „to mój dzień” jest momentem przełamania, w którym zamiast martwić się przyszłością, zaczynam po prostu tworzyć. To także podziękowanie dla ludzi, którzy zostali obok mimo mojej ciszy i zapowiedź powrotu po dłuższym czasie.",
      },

      { 
        title: "TwójAdrian", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", 
        image: tostyCover, 
        audio: twojAdrianAudio,
        description:
        "To hołd i prezent urodzinowy dla mojego starszego brata. W trakcie swojej muzycznej podróży dostałem od niego wsparcie, którego nie da się opisać. Cały utwór został napisany z perspektywy Adriana i prowadzi przez kolejne etapy jego życia, od pierwszego mieszkania aż do momentu powstawania tego tekstu. Numer jest pełen inside joke’ów, wspomnień i charakterystycznych momentów związanych z osobą, bez której ta EP prawdopodobnie nigdy by nie powstała.",
      },

      { 
        title: "AKT 1", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", image: 
        tostyCover, 
        audio: aktAudio,
        description:
        "Opowiadam o alternatywnej rzeczywistości, w której w ułamku sekundy udaje mi się osiągnąć wszystko, czego kiedykolwiek pragnąłem, a cały ten sukces zaczyna mnie przytłaczać. Dni stają się powtarzalne, tracę własne zasady moralne i przestaję czerpać satysfakcję z drogi ku świetności, ponieważ już ją przeszedłem. Przedstawiam tutaj swoje obawy i lęk przed tym, że osiągnięcie wielkości nie da mi prawdziwego szczęścia, a wszystko, czego pragnąłem, stanie się źródłem największego cierpienia.",
      },

      { 
        title: "FOMO", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", image: 
        tostyCover, 
        audio: fomoAudio,
        description:
        "To historia spotkania dwóch wersji mnie. Jedna z nich odpuściła pogoń za sztucznie wykreowanym szczęściem, które narzuca społeczeństwo. Druga to najlepsza wersja samego siebie, wolna od FOMO, presji i ciągłego stresu.",
      },

      { 
        title: "Nostalgia", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", 
        image: tostyCover, 
        audio: nostalgiaAudio,
        description:
        "To nostalgia za czasami, w których poznałem najwięcej ludzi w swoim życiu, a każde wyjście na miasto kończyło się nową historią i nowymi znajomościami. Momentem, gdy największym problemem były pieniądze na alkohol i oceny w USOS-ie. Nie tęsknię już za tym, ale był to moment życia, w którym nikt jeszcze nie chciał być kimś, a każdy chciał po prostu poznać siebie.",
      },

      { 
        title: "PINGWINY", 
        year: "2024", 
        group: "TOSTY I HOT-DOGI", 
        type: "album", 
        image: tostyCover, 
        audio: pingwinyAudio,
        description:
        "To utwór o rasizmie, strachu i dezinformacji. Mówię o nienawiści, która nie rodzi się z faktów, ale z emocji i lęku przed tym, co obce. Każda kolejna obawa przed drugim człowiekiem tworzy strach przekazywany dalej naszym bliskim, przez co świat staje się coraz bardziej czarno-biały. Brak akceptacji zmian i niechęć do spojrzenia na innych z empatią sprawiają, że ranimy nie tylko otoczenie, ale również samych siebie. Ta spirala będzie trwała, dopóki nie zaczniemy dostrzegać własnych emocji i historii w innych ludziach.",
      },
    ],
  },

  {
    title: "HOTEL PARASITE",
    type: "Album",
    tracks: [
      { 
        title: "Hotel Parasite", 
        year: "2023", 
        group: "HOTEL PARASITE", 
        type: "album", 
        image: hotelParasiteCover, 
        audio: hotelParasiteAudio,
        description:
        "Hotel Parasite” opowiada o pracy, która z czasem zaczęła wydawać się bezcelowa. Na tym etapie życia czułem, że przestałem rozwijać się i uczyć nowych rzeczy. Pojawiło się znudzenie oraz potrzeba nowych doświadczeń. „Hotel Parasite” otwiera EP opowiadające o chwilowym zaniku emocji w moim życiu.",
      },

      { 
        title: "The Bet", 
        year: "2023", 
        group: "HOTEL PARASITE", 
        type: "album", 
        image: hotelParasiteCover, 
        audio: theBetAudio,
        description:
        "Opowiadam o życiu chwilą i braku patrzenia na konsekwencje. Podejście do dziewczyn zostało ukształtowane przez dziesiątki podobnych randek, a sytuacja przedstawiona w utworze jest na tyle powtarzalna, że mogłaby stać się schematem. Właśnie dlatego traktuję to spotkanie w tak chłodny sposób. To wprowadzenie do świata, w którym gesty i słowa rzadko są szczere, a większość z nich ma prowadzić do konkretnego celu.",
      },

      { 
        title: "Wycieczka do Wwa cz.2", 
        year: "2023", 
        group: "HOTEL PARASITE", 
        type: "album", 
        image: hotelParasiteCover, 
        audio: wycieczkaAudio,
        description:
        "To druga część „CHANEL”. Utwór opowiada o życiu opartym na chwilowych potrzebach i schematach, z których próbuję się wyrwać, ale ciągle do nich wracam. Z czasem pojawia się refleksja nad tym, kim byłem, kim chciałem zostać i co muszę poświęcić, żeby faktycznie zmienić siebie na lepsze.",
      },

      { 
        title: "Summer Fashion", 
        year: "2023", 
        group: "HOTEL PARASITE", 
        type: "album", 
        image: hotelParasiteCover, 
        audio: summerFashionAudio,
        description:
        "To historia z wakacji opowiedziana od końca. Najpierw pojawia się mieszkanie dziewczyny, później rozmowa z nią w klubie, a dopiero na końcu moment poznania. Sama dziewczyna nie ma tu większego znaczenia. Stała się jedynie impulsem, który zmienił kierunek moich myśli. To właśnie wtedy narodził się pomysł na tę EP.",
      },

      {
        title: "Miłosna Piosenka", 
        year: "2023", 
        group: "HOTEL PARASITE", 
        type: "album", 
        image: hotelParasiteCover, 
        audio: milosnaPiosenkaAudio,
        description:
        "To historia krótkiej relacji, która od początku była skazana na koniec. Utwór opowiada o dwójce ludzi będących w tym samym momencie życia, etapie prób, błędów i ciągłego szukania siebie. Oboje żyją chwilą i nie wybiegają myślami w przyszłość. Wszystko kończy się w momencie, gdy jedna z tych osób decyduje się ruszyć dalej, szukając progresu i czegoś więcej niż chwilowego komfortu.",
      },

      { 
        title: "Top 100", 
        year: "2023", 
        group: "HOTEL PARASITE", 
        type: "album", 
        image: hotelParasiteCover, 
        audio: topAudio,
        description:
        "To zwieńczenie EP „Hotel Parasite”. Po wszystkich wcześniejszych historiach w końcu wybieram progres, którego od dawna mi brakowało. Odcinam relacje ciągnące mnie w dół i zaczynam skupiać się na sobie, mimo że cały czas wracają dawne emocje i wspomnienia. To moment podjęcia decyzji, żeby iść do przodu bez oglądania się na to, kto zostanie obok mnie.",
      },
    ],
  },

  {
    title: "SINGLE",
    type: "Single",
    tracks: [
      { 
        title: "Mnie testuj", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: mnieTestujCover, 
        audio: mnieTestujAudio,
        description:
        "To utwór o relacjach opartych wyłącznie na chwilowych potrzebach i fizyczności. O obustronnej świadomości, że żadna ze stron nie chce poznawać się głębiej. Z czasem całkowicie przestaję myśleć o konsekwencjach swoich działań, zarówno psychicznych, jak i fizycznych. Wszystko zmienia się dopiero przy spotkaniu tej konkretnej dziewczyny, która brutalnie wybija mi taki sposób myślenia z głowy. Gdybym wierzył w karmę, uznałbym, że wtedy do mnie wróciła.",
      },

      { 
        title: "Potencjał", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: potencjalCover, 
        audio: potencjalAudio,
        description:
        "„Potencjał” opowiada o tym, jak świadomość własnego talentu potrafi stać się wewnętrzną blokadą i prowadzić do prokrastynacji. Utwór został podzielony na dwie części. Pierwsza pokazuje chaos myśli podczas wyjścia do miasta, pobytu w klubie i przypadkowego spotkania przy barze. Druga to moment pozostania samemu ze sobą po decyzji o niewychodzeniu z domu. W obu odsłonach próbuję znaleźć powód, przez który wciąż odkładam rozpoczęcie drogi po własną karierę.",
      },

      { 
        title: "Życiowe tango", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: zycioweTangoCover, 
        audio: zycioweTangoAudio,
        description:
        "Ten utwór jest moim hołdem dla czasów tuż po przeprowadzce do Warszawy. Dla okresu młodości, w którym nie istnieje jeszcze presja posiadania rodziny, domu czy stabilnej pracy. Problemy tamtych dni miały wtedy dla mnie taką samą wagę jak te obecne, choć z perspektywy czasu wydają się błahe, a czasem nawet zabawne. To opowieść o podstawowych potrzebach, takich jak miłość, pieniądze i czas, w momencie, w którym mam świadomość, że nadal jestem młody i wciąż mam na wszystko czas.",
      },

      {
        title: "JOMO", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: jomoCover, 
        audio: jomoAudio,
        description:
        "To pierwszy miesiąc po sytuacji z „Kroki”. Gonitwa za „krótkimi emocjami” powoli ustaje, a ja próbuję wyżyć się muzycznie poprzez własne przemyślenia. Ten utwór jest eksperymentem zarówno pod względem stylu, jak i tematu. Tęsknotę za dawnym stylem życia ukrywam pod blantami i spotkaniami z przyjaciółmi, którzy wspierali mnie w drodze po kolejnych szczeblach muzycznej kariery. W pewnym sensie jest to ucieczka ze skrajności w skrajność, od nadmiaru wyjść i braku prawdziwych wspomnień do nadmiaru wolnego czasu i życia bez robienia czegokolwiek na siłę.",
      },
      { 
        title: "KROKI", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: krokiCover, 
        audio: krokiAudio,
        description:
        "W tamtym momencie zdałem sobie sprawę, że wszystkie wspomnienia zaczynają wyglądać tak samo. W pogoni za różnorodnością odkryłem jedynie powtarzający się schemat. Ciągła gonitwa za krótkimi emocjami sprawiła, że przestałem szukać doświadczeń, które naprawdę mogłyby coś znaczyć i zostać ze mną na dłużej. Podczas tworzenia tego utworu podjąłem decyzję o zmianie. Właśnie wtedy zaczął kończyć się pewien etap mojego życia, choć sam proces trwał jeszcze długo.",
      },
    ],
  },

  {
    title: "SINGLE",
    type: "Single",
    tracks: [
      { 
        title: "UNIESIENIE", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: uniesienieCover, 
        audio: uniesienieAudio,
        description:
        "To opowieść o dwóch osobach, którym mogło udać się tylko w tym konkretnym momencie życia. Nie ma już znaczenia to, co naprawdę chcą sobie przekazać, bo cała sytuacja powstała wyłącznie pod wpływem silnych emocji tamtego dnia. To historia relacji, w której obie strony wykorzystują swoją wzajemną wrażliwość, mając pełną świadomość tej gry. Mimo wszystko właśnie ona sprawia, że następnego dnia czują się ze sobą trochę lepiej.",
      },
      { 
        title: "Plany indywidualne", 
        year: "2024", 
        group: "SINGLE", 
        type: "single", 
        image: planyIndywidualneCover, 
        audio: planyIndywidualneAudio,
        description:
        "Utwór jest moim wyobrażeniem momentu, w którym osiągam sukces muzyczny. Opowiadam o tym, w jaki sposób mogłoby do tego dojść oraz jakie obawy pojawiają się teraz, zestawione z tymi, które wyobrażam sobie w przyszłości. W momencie pisania, utwór był jednocześnie teraźniejszością i przyszłością, która nigdy nie istniała i prawdopodobnie nigdy nie nadejdzie.",
      },
      {
        title: "Samoświadomość",
        displayTitle: (
          <>
            Samo-
            <br />
            świadomość
          </>
        ),
        year: "2024",
        group: "SINGLE",
        type: "single",
        image: samoswiadomoscCover,
        audio: samoswiadomoscAudio,
        description:
        "To historia z wakacji opowiedziana od końca. Najpierw pojawia się mieszkanie dziewczyny, później rozmowa z nią w klubie, a dopiero na końcu moment poznania. Sama dziewczyna nie ma tu większego znaczenia. Stała się jedynie impulsem, który zmienił kierunek moich myśli. To właśnie wtedy narodził się pomysł na tę EP.",
      },
      {
        title: "Desynchronizacja",
        displayTitle: (
          <>
            Desyn-
            <br />
            chronizacja
          </>
        ),
        year: "2023",
        group: "SINGLE",
        type: "single",
        image: desynchronizacjaCover,
        audio: desynchronizacjaAudio,
        description:
        "Ten utwór ma zachęcić do rozmowy z bliskimi. Czasem samo wypowiedzenie na głos tego, co siedzi w głowie, potrafi sprawić, że człowiek przestaje czuć się samotny. Nie powinno się wstydzić własnych emocji, bo właśnie one są jedną z najbardziej prawdziwych i najpiękniejszych rzeczy, jakie mamy.",
      },
      { 
        title: "CHANEL", 
        year: "2023", 
        group: "SINGLE", 
        type: "single", 
        image: chanelCover, 
        audio: chanelAudio,
        description:
        "„CHANEL” zaczyna się od rozmowy między wersją mnie po przeprowadzce na studia do Warszawy a tą, która nadal żyje na wsi z rodzicami. Opowiadam o życiu chwilą, takim, w którym noc pozbawiona realnych problemów przyćmiewa wszystkie dni. Obserwuję zmianę swojego podejścia do pracy, miłości i szacunku do samego siebie. „CHANEL” to przemyślenia pojawiające się podczas powrotów do domu o 5 rano po piątkowych imprezach.",
      },
    ],
  },
];

const allTracks = discography.flatMap((section) => section.tracks);

const formatTime = (seconds) => {
  if (!seconds || Number.isNaN(seconds)) return "--:--";

  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${rest}`;
};

export default function MusicPage() {
  const [activeTrack, setActiveTrack] = React.useState(allTracks[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [discographyIndex, setDiscographyIndex] = React.useState(0);
  const [showLyricsModal, setShowLyricsModal] = React.useState(false);

  React.useEffect(() => {
  if (!showLyricsModal) return;

  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = originalOverflow;
  };
}, [showLyricsModal]);

  const audioRef = React.useRef(null);

  const activeSection = discography[discographyIndex];
  const activeLyrics = lyrics[activeTrack.lyricsKey] || [];
  const activeLyricIndex = activeLyrics.findLastIndex(
  (item) => item.time !== undefined && currentTime >= item.time
);
  const lyricsContainerRef = React.useRef(null);
const activeLineRef = React.useRef(null);

React.useEffect(() => {
  if (!activeLineRef.current) return;
  if (!lyricsContainerRef.current) return;

  const container = lyricsContainerRef.current;
  const activeLine = activeLineRef.current;

  const containerHeight = container.clientHeight;
  const lineTop = activeLine.offsetTop;
  const lineHeight = activeLine.clientHeight;

  container.scrollTo({
    top: lineTop - containerHeight / 2 + lineHeight / 2,
    behavior: "smooth",
  });

}, [activeLyricIndex]);

  React.useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const stopAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current = null;

    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  };

  const toggleBottomPlayer = async () => {
  if (!audioRef.current) {
    playTrack(activeTrack);
    return;
  }

  if (isPlaying) {
    audioRef.current.pause();
    setIsPlaying(false);
  } else {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  }
};

const seekAudio = (seconds) => {
  if (!audioRef.current) return;

  const audio = audioRef.current;

  audio.currentTime = Math.max(
    0,
    Math.min(audio.duration, audio.currentTime + seconds)
  );

  setCurrentTime(audio.currentTime);

  setProgress(
    (audio.currentTime / audio.duration) * 100
  );
};

  const playTrack = async (track) => {
    if (activeTrack.title === track.title && isPlaying) {
      stopAudio();
      return;
    }

    stopAudio();
    setActiveTrack(track);

    const audio = new Audio(track.audio);
    audio.preload = "metadata";
    audio.volume = 0.9;

    audio.onloadedmetadata = () => {
      setDuration(audio.duration || 0);
    };

    audio.ontimeupdate = () => {
      if (!audio.duration) return;

      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.onended = () => {
      audioRef.current = null;
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audioRef.current = audio;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      stopAudio();
    }
  };

  const nextDiscography = () => {
    setDiscographyIndex((prev) =>
      prev >= discography.length - 1 ? 0 : prev + 1
    );
  };

  const prevDiscography = () => {
    setDiscographyIndex((prev) =>
      prev <= 0 ? discography.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-black pb-[104px] text-white md:pb-[122px]">
      <Sidebar active="/muzyka" />

      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-black xl:ml-[180px]">
  <picture>
    <source media="(max-width: 768px)" srcSet={muzykaHeroBannerMobile} />

    <img
      src={muzykaHeroBanner}
      alt="Muzyka"
      className="absolute inset-0 h-full w-full object-cover opacity-75"
    />
  </picture>

  <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
  <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />

  <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="relative z-10 flex min-h-[100svh] items-center px-6 pt-20 md:px-14 xl:px-16"
>
  <div className="max-w-[760px]">
      <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-zinc-400 md:mb-10 md:text-[11px]">
        / Muzyka
      </p>

      <h1 className="mb-8 text-[54px] font-black uppercase leading-none tracking-[0.14em] text-white sm:text-[76px] md:text-[120px] xl:text-[145px]">
        Muzyka
      </h1>

      <p className="mb-10 max-w-[520px] text-[11px] uppercase leading-[2] tracking-[0.28em] text-zinc-400 md:text-[16px] md:tracking-[0.32em]">
        To nie rap. To zapis momentów.
      </p>

      <div className="h-px w-full max-w-[420px] bg-white/10 md:max-w-[560px]" />
    </div>
  </motion.div>
</section>

      <section className="border-b border-white/10 px-5 py-16 md:px-8 md:py-24 xl:ml-[180px] xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="mb-12 text-[12px] uppercase tracking-[0.45em] text-zinc-500">
              / Dyskografia
            </p>

            <p className="max-w-[190px] text-[12px] uppercase leading-[2] tracking-[0.28em] text-zinc-500">
              Każdy utwór to inny rozdział. Każda historia to część mnie.
            </p>

            <div className="mt-12 h-px w-16 bg-white/40" />

            <div className="mt-10 flex items-center gap-4">
              <button
                onClick={prevDiscography}
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-lg text-zinc-400 transition hover:border-white hover:text-white"
              >
                ←
              </button>

              <button
                onClick={nextDiscography}
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-lg text-zinc-400 transition hover:border-white hover:text-white"
              >
                →
              </button>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.28em] text-zinc-600">
              {discographyIndex + 1} / {discography.length}
            </p>
          </div>

          <div>
            <div className="mb-10 border-b border-white/10 pb-5">
              <p className="mb-2 text-[10px] uppercase tracking-[0.45em] text-zinc-600">
                {activeSection.type}
              </p>

              <h3 className="text-[18px] uppercase tracking-[0.45em] text-white md:text-[24px]">
                {activeSection.title}
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {activeSection.tracks.map((track) => (
                <button
                  key={`${track.group}-${track.title}`}
                  onClick={() => playTrack(track)}
                  className={`group grid grid-cols-[86px_1fr_36px] items-center border p-0 text-left transition md:grid-cols-[120px_1fr_40px] ${
                    activeTrack.title === track.title
                      ? "border-white/35 bg-white/[0.04]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img
                    src={track.image}
                    alt={track.title}
                    className="h-[86px] w-[86px] object-cover opacity-75 transition group-hover:opacity-100 md:h-[120px] md:w-[120px]"
                  />

                  <div className="px-4 md:px-7">
                    <h3 className="mb-3 text-[13px] uppercase leading-[1.4] tracking-[0.22em] text-white md:mb-4 md:text-[18px] md:tracking-[0.28em]">
                      {track.title}
                    </h3>

                    <p className="text-[9px] uppercase tracking-[0.24em] text-zinc-500 md:text-[10px] md:tracking-[0.32em]">
                      {track.group} • {track.year}
                    </p>
                  </div>

                  <div className="text-zinc-300">
                    {activeTrack.title === track.title && isPlaying ? (
                      <span className="text-white">Ⅱ</span>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="h-4 w-4"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-black px-5 py-16 md:px-8 md:py-28 xl:ml-[180px] xl:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <p className="mb-8 text-[11px] uppercase tracking-[0.45em] text-zinc-500">
            / Muzyka / {activeTrack.title}
          </p>

          <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[360px_minmax(0,1fr)_320px]">
            <div>
              <div className="relative border border-white/15 bg-zinc-950">
                <span className="absolute left-5 top-5 z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-300">
                  <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.9)]" />
                  REC
                </span>

                <img
                  src={activeTrack.image}
                  alt={activeTrack.title}
                  className="aspect-square w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
  {activeTrack.group} / CZAS / {formatTime(duration)}
</p>
            </div>

            <div>
              <h2 className="mb-8 break-words text-[34px] uppercase leading-[1.1] tracking-[0.18em] text-white md:text-[52px] md:tracking-[0.24em] 2xl:text-[68px] 2xl:tracking-[0.34em]">
                {activeTrack.displayTitle || activeTrack.title}
              </h2>

              <div className="mb-10 space-y-2 border-b border-white/10 pb-8 text-[11px] uppercase leading-[1.9] tracking-[0.28em] text-zinc-500">
                <p>Rok: {activeTrack.year}</p>
                <p>
                  {activeTrack.type === "album" ? "Album" : "Single"}:{" "}
                  {activeTrack.group}
                </p>
                <p>Produkcja: TwójSamuel</p>
                <p>Czas: {formatTime(duration)}</p>
              </div>

              <h3 className="mb-6 text-[13px] uppercase tracking-[0.4em] text-white">
                O utworze
              </h3>

              <p className="max-w-[480px] text-[13px] leading-[2.1] tracking-[0.06em] text-zinc-400">
  {activeTrack.description ||
    "Opis utworu zostanie dodany później."}
</p>

              <div className="mt-10 space-y-2 text-[10px] uppercase tracking-[0.32em] text-zinc-600">

              </div>
            </div>

           <div className="border-t border-white/10 pt-10 lg:col-span-2 2xl:col-span-1 2xl:border-l 2xl:border-t-0 2xl:pl-10 2xl:pt-0">
              <h3 className="mb-8 text-[13px] uppercase tracking-[0.4em] text-white">
                Tekst
              </h3>

 <div className="relative max-h-[360px] overflow-hidden border border-white/10 bg-black/20 p-6">
  <div className="pointer-events-none absolute left-0 top-0 z-10 h-14 w-full bg-gradient-to-b from-black to-transparent" />

  <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-14 w-full bg-gradient-to-t from-black to-transparent" />

  <div
    ref={lyricsContainerRef}
    className="max-h-[310px] space-y-5 overflow-y-auto pr-3"
  >
    {activeLyrics.length > 0 ? (
      activeLyrics.map((item, index) => {
        const isActive = index === activeLyricIndex;
        const isPast = index < activeLyricIndex;

        if (item.type === "section") {
          return (
            <p
              key={index}
              ref={isActive ? activeLineRef : null}
              className={`pt-3 text-[10px] uppercase tracking-[0.35em] transition duration-500 ${
                isActive || isPast
                  ? "text-white"
                  : "text-zinc-600"
              }`}
            >
              {item.text}
            </p>
          );
        }

        return (
          <p
            key={index}
            ref={isActive ? activeLineRef : null}
            className={`leading-[1.9] tracking-[0.05em] transition-all duration-500 ${
              isActive
                ? "border-l border-white pl-4 text-[15px] scale-[1.03] text-white"
                : isPast
                ? "text-zinc-700"
                : "text-zinc-400"
            }`}
          >
            {item.text}
          </p>
        );
      })
    ) : (
      <p className="border-l border-white pl-4 text-white">
        Tekst zostanie dodany później.
      </p>
    )}
  </div>
</div>

              <button
onClick={() => setShowLyricsModal(true)}
className="vhs-hover mt-10 border border-white/20 px-7 py-4 text-[10px] uppercase tracking-[0.35em] text-zinc-300 transition hover:border-white hover:text-white"
>
Pokaż cały tekst ↗
</button>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-black/85 backdrop-blur-md xl:pl-[180px]">
  <div className="grid h-[88px] grid-cols-[1fr_auto] items-center gap-4 px-4 md:h-[110px] md:grid-cols-[minmax(0,1fr)_auto_auto] md:px-10">
    <div className="flex min-w-0 items-center gap-4 md:gap-5">
      <img
        src={activeTrack.image}
        alt={activeTrack.title}
        className="h-14 w-14 shrink-0 border border-white/10 object-cover opacity-90 md:h-20 md:w-20"
      />

      <div className="min-w-0">
        <p className="max-w-[150px] truncate text-[13px] uppercase tracking-[0.28em] text-white sm:max-w-[260px] md:max-w-none md:text-[24px] md:tracking-[0.45em]">
          {activeTrack.title}
        </p>

        <p className="mt-2 truncate text-[9px] uppercase tracking-[0.28em] text-zinc-500 md:text-[12px] md:tracking-[0.35em]">
          {activeTrack.group}
        </p>
      </div>
    </div>

    <div className="hidden items-center gap-8 border-r border-white/15 pr-8 text-[13px] uppercase tracking-[0.28em] text-zinc-400 md:flex xl:gap-10 xl:pr-10">
      <span>{formatTime(currentTime)}</span>
      <span>/</span>
      <span>{formatTime(duration)}</span>
    </div>

    <div className="flex items-center gap-4 md:pl-8 xl:gap-7 xl:pl-10">
      <button
        onClick={() => seekAudio(-5)}
        className="hidden opacity-70 transition hover:opacity-100 md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-5 w-5"
        >
          <path d="M11 18V6l-8.5 6L11 18Zm10 0V6l-8.5 6L21 18Z" />
        </svg>
      </button>

      <button
        onClick={toggleBottomPlayer}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/60 text-white transition hover:border-white md:h-20 md:w-20"
      >
        {isPlaying ? (
          <span className="text-2xl md:text-3xl">Ⅱ</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="ml-[2px] h-6 w-6 md:h-7 md:w-7"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <button
        onClick={() => seekAudio(5)}
        className="hidden opacity-70 transition hover:opacity-100 md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-5 w-5"
        >
          <path d="M13 6v12l8.5-6L13 6ZM3 6v12l8.5-6L3 6Z" />
        </svg>
      </button>
    </div>
  </div>

  <div className="h-px w-full bg-white/10">
    <div className="h-full bg-white" style={{ width: `${progress}%` }} />
  </div>
</div>

      {showLyricsModal && (
<div
className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-6"
onClick={() => setShowLyricsModal(false)}
>

<div
className="w-full max-w-[900px] border border-white/10 bg-black p-5 md:p-10"
onClick={(e)=>e.stopPropagation()}
>

<div className="mb-8 flex items-start justify-between">

<div>

<p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
TEKST
</p>

<h2 className="break-words text-[24px] uppercase leading-[1.2] tracking-[0.16em] text-white md:text-[34px] md:tracking-[0.2em]">
{activeTrack.title}
</h2>

</div>

<button
onClick={()=>setShowLyricsModal(false)}
className="text-zinc-500 transition hover:text-white"
>
✕
</button>

</div>


<div
  className="max-h-[65vh] overflow-y-auto overscroll-contain pr-3 md:pr-5"
  onWheel={(e) => e.stopPropagation()}
  onTouchMove={(e) => e.stopPropagation()}
>

{activeLyrics.map((item,index)=>{

if(item.type==="section"){
return(

<p
key={index}
className="mt-10 mb-5 text-[11px] uppercase tracking-[0.35em] text-zinc-500"
>
{item.text}
</p>

)
}

return(

<p
key={index}
className="mb-4 text-[15px] leading-[2] text-zinc-300"
>
{item.text}
</p>

)

})}

</div>

</div>

</div>
)}
    </main>
  );
}