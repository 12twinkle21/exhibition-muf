import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'ru',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          topFloat: {
            part1: 'WHERE DO I GO TO DO ',
            part2: 'SPORTS?'
          },
          leftMenu: {
            sportsTypeTitle: 'TYPES OF SPORTS',
            tags: {
              hockey: 'Hockey',
              soccer: 'Soccer',
              squash: 'Squash',
              tennis: 'Tennis',
              aikido: 'Aikido',
              boxing: 'Boxing',
              aqua_aerobicsot: 'Aqua Aerobicsot',
              mountaineering: 'Mountaineering',
              badminton: 'Badminton',
              armlifting: 'Armlifting',
              aerobics: 'Aerobics',
              basketball: 'Basketball',
              baseball: 'Baseball',
              volleyball: 'Volleyball',
            }
          },
          searchResultTitle: 'SEARCH RESULTS:',
          leftFloatText: {
            part1: 'COMPANY',
            part2: 'SEARCH'
          },
          map: {
            recomendationTitle: 'Recommendations:'
          }
        }
      },
      ru: {
        translation: {
          topFloat: {
            part1: 'ГДЕ МНЕ ЗАНЯТЬСЯ ',
            part2: 'СПОРТОМ?'
          },
          leftMenu: {
            sportsTypeTitle: 'ВИДЫ СПОРТА',
            tags: {
              hockey: 'Хоккей',
              soccer: 'Футбол',
              squash: 'Сквош',
              tennis: 'Теннис',
              aikido: 'Айкидо',
              boxing: 'Бокс',
              aqua_aerobicsot: 'Аквааэробика',
              mountaineering: 'Альпинизм',
              badminton: 'Бадминтон',
              armlifting: 'Армлифтинг',
              aerobics: 'Аэробика',
              basketball: 'Баскетбол',
              baseball: 'Бейсбол',
              volleyball: 'Волейбол',
            }
          },
          searchResultTitle: 'РЕЗУЛЬТАТЫ ПОИСКА:',
          leftFloatText: {
            part1: 'ПОИСК ',
            part2: 'ПО ОРГАНИЗАЦИЯМ'
          },
          map: {
            recomendationTitle: 'Рекомендации:'
          }
        },

      },
    }
  });


export default i18n;