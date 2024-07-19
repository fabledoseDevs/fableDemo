import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  ActiveTranslation,
  TranslationCard,
  TranslationTemplate,
  UseTranslation as UseTranslationType,
} from './TemplateLandingPage.types';

export const TemplateLandingPage: TranslationTemplate = {
  en: {
    jumbotron: {
      subtitle: 'Fabledose',
      before: 'place where fables',
      after: 'while read',
      redLineText: 'come alive',
    },
    storyCardButtonLabel: {
      read: 'Read',
      comingSoon: 'Coming Soon',
    },
    projectSummary: {
      mainText: [
        'We are a group of friends and professionals united by a common passion for fairy tales and stories for children. Among us there are educators, kindergarten and nursery teachers, programmers and artists. We all believe that reading fairy tales to a child is an important part of his or her development. With this in mind, we started working on creating a magical portal filled with animated books for children to read.',
        "We want to offer classic fairy tales that have stood the test of time, told not only in words, but also with animated illustrations. Each story has been selected for depth and meaning, with the goal of bringing out the best in children's imaginations. You can safely leave our fairy tales to your child to read on their own, or read them with your child at bedtime. These stories are designed to captivate and inspire young and old alike.",
        'We will launch a crowdfunding campaign soon! We encourage you to support this project. Without your involvement, projects like this - focused on an idea other than money - have a limited chance of coming to fruition. With your support, we can create an interactive platform that will immerse children in the magical world of stories. Stay tuned for further updates. We will launch our campaign sooner than you think!',
      ],
      supplementaryText: [
        "We invite you to engage in this journey. Follow us on social media or use the button below to subscribe to our newsletter. Stay in touch and be the first to know about the project's progress. Together we can ignite the spark of imagination in the hearts of children and ensure that animated fairy tales to read will inspire future generations.",
        'Thank you for your interest in our project. Looking forward to hear from you soon!',
      ],
    },
  },
  pl: {
    jumbotron: {
      subtitle: 'Fabledose',
      before: 'tutaj baśnie',
      after: 'do czytania',
      redLineText: 'ożywają',
    },
    storyCardButtonLabel: {
      read: 'Czytaj',
      comingSoon: 'Dostępne wkrótce',
    },
    projectSummary: {
      mainText: [
        'Jesteśmy grupą przyjaciół i profesjonalistów, których łączy wspólna pasja do baśni i opowiadań dla dzieci. Są wśród nas pedagodzy, nauczyciele przedszkolni i żłobkowi, programiści i artyści. Wszyscy kierujemy się przekonaniem, że czytanie dziecku bajek jest istotną częścią jego rozwoju. Mając to na uwadze, rozpoczęliśmy pracę nad stworzeniem magicznego portalu wypełnionego animowanymi książkami do czytania dla dzieci.',
        'Chcemy oferować klasyczne baśnie, które przetrwały próbę czasu, opowiedziane nie tylko słowem, ale też animowaną ilustracją. Każda historia została wybrana pod kątem głębi i znaczenia, mając na celu wydobycie tego, co w dziecięcej wyobraźni najlepsze. Możesz bezpiecznie zostawić nasze bajki dziecku do samodzielnego czytania, lub czytać je z własną pociechą na dobranoc. Opowieści te zostały zaprojektowane tak, aby urzekać i inspirować zarówno młodych, jak i starszych.',
        'Już wkrótce uruchomimy kampanię crowdfundingową! Zachęcamy Cię do wsparcia tego projektu. Bez twojego zaangażowania takie projekty jak ten — skupione wokół idei innej niż pieniądze — mają ograniczone szanse na zaistnienie. Dzięki Twojemu wsparciu możemy stworzyć interaktywną platformę, która zanurzy dzieci w magicznym świecie opowieści. Pozostań na bieżąco z dalszymi aktualizacjami. Uruchomimy naszą kampanię wcześniej, niż myślisz!',
      ],
      supplementaryText: [
        'Zapraszamy Cię do zaangażowania w tę podróż. Śledź nas na profilach społecznościowych lub użyj poniższego przycisku aby zapisać się do naszego newslettera. Pozostań w kontakcie i jako pierwszy dowiaduj się o postępie prac nad projektem. Razem możemy rozpalić iskrę wyobraźni w sercach dzieci i sprawić, że animowane baśnie do czytania będą inspirowały przyszłe pokolenia.',
        'Dziękujemy za zainteresowanie naszym projektem. Do usłyszenia wkrótce!',
      ],
    },
  },
};

export const StoryCardGoldilock: TranslationCard = {
  en: {
    title: 'Goldilock and Three Bears',
    url: '/goldilock-and-three-bears',
    summary:
      "The golden-haired girl stumbles upon the bears' cabin and starts causing mischief there, learning a lesson about the importance of responsibility.",
    synopsis:
      "The fairy tale tells about three teddy bears who lived in a cozy forest. One day, a golden-haired girl, known for her mischievous nature, broke into their house and caused a ruckus, eating their porridge, breaking their armchair and making a mess in their bedroom. When the bears returned, they realized what had happened and started looking for the intruder. The golden-haired girl, terrified, decided to repair the damage and apologize to the bears. She spent the whole day with them, helping them prepare the porridge, fixing the car seat, and tidying up the bedroom. The fairy tale has a happy ending when the girl learns a lesson about respect for other people's property and enjoys dinner and dessert together with the teddy bears. He emphasizes that although children sometimes do mischief, it is important to apologize and correct mistakes.",
  },
  pl: {
    title: 'Złotowłosa i Trzy Misie',
    url: '/zlotowlosa-i-trzy-misie',
    summary:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    synopsis:
      'Bajka opowiada o trzech misiach, które mieszkały w przytulnym lesie. Pewnego dnia złotowłosa dziewczynka, znana z psotnego charakteru, wtargnęła do ich domu i narobiła zamieszania, zjadając ich owsiankę, psując fotelik i bałaganiąc w sypialni. Gdy misie wróciły, zorientowały się, co się stało, i zaczęły szukać intruza. Złotowłosa dziewczynka, przerażona, postanowiła naprawić szkody i przeprosić misie. Spędziła z nimi cały dzień, pomagając w przygotowaniu owsianki, naprawiając fotelik i porządkując sypialnię. Bajka kończy się happy endem, gdy dziewczynka uczy się lekcji o szacunku do cudzego mienia i wspólnie z misiami cieszy się kolacją oraz deserem. Podkreśla, że choć dzieci czasem robią psoty, ważne jest przeproszenie i naprawienie błędów.',
  },
};

export const StoryCardThreeLittlePigs: TranslationCard = {
  en: {
    title: 'Three Little Pigs',
    url: '/three-little-pigs',
    summary:
      'Three little pigs set off into the big world to start an independent life. Their story becomes dramatic when they have to confront the wolf.',
    synopsis: '',
  },
  pl: {
    title: 'Trzy Świnki',
    url: '/trzy-swinki',
    summary:
      'Trzy świnki wyruszają w wielki świat aby rozpocząć samodzielne życie. Ich historia nabiera dramatycznych barw, gdy muszą się skonfrontować z wilkiem.',
    synopsis: '',
  },
};

export const useTranslations: UseTranslationType = () => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] =
    useState<ActiveTranslation>({
      template: TemplateLandingPage.en,
      goldilock: StoryCardGoldilock.en,
      pigs: StoryCardThreeLittlePigs.en,
    });

  useEffect(() => {
    setActiveTranslations(
      {
        template: TemplateLandingPage[languageInfo],
        goldilock: StoryCardGoldilock[languageInfo],
        pigs: StoryCardThreeLittlePigs[languageInfo],
      } || {
        template: TemplateLandingPage.en,
        goldilock: StoryCardGoldilock.en,
        pigs: StoryCardThreeLittlePigs.en,
      },
    );
  }, [languageInfo]);

  const { template, goldilock, pigs } = activeTranslations;

  return {
    template,
    goldilock,
    pigs,
  };
};