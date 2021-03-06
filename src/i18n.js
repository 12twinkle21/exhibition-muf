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
            part1: 'WHERE DO I GO TO PLAY ',
            part2: 'SPORTS?',
          },
          leftMenu: {
            sportsTypeTitle: 'TYPES OF SPORTS',
            notFound: 'Nothing found',
            tags: {
              football: 'Football',
              athletics: 'Athletics',
              rugby_7: 'Rugby 7',
              hockey: 'Hockey',
              boxing: 'Boxing',
              sambo: 'Sambo',
              great_tennis: 'Great tennis',
              badminton: 'Badminton',
              squash: 'Squash',
              table_tennis: 'Table tennis',
              padel_tennis: 'Padel tennis',
              beach_tennis: 'Beach Tennis',
              tennis: 'Tennis',
              volleyball: 'Volleyball',
              fencing: 'Fencing',
              fight: 'Fight',
              acrobatic_rock_n_roll: 'Acrobatic rock "n" roll',
              sports_dances: 'Sports dances',
              mini_football: 'Mini football',
              waterpark: 'Waterpark',
              spa_areas: 'Spa areas',
              surfing: 'Surfing',
              shooting_sport: 'Shooting sport',
              crossfit: 'Crossfit',
              karate: 'Karate',
              jiu_jitsu: 'Jiu Jitsu',
              grappling: 'Grappling',
              kickboxing: 'Kickboxing',
              basketball: 'Basketball',
              rugby: 'Rugby',
              run: 'Run',
              swimming: 'Swimming',
              water_polo: 'Water polo',
              synchronized_swimming: 'Synchronized swimming',
              aqua_aerobics: 'Aqua aerobics',
              trampolining: 'Trampolining',
              sports_acrobatics: 'Sports Acrobatics',
              fitness: 'Fitness',
              triathlon: 'Triathlon',
              general_physical_and_strength_training: 'General physical and strength training',
              gym: 'Gym',
              pool: 'Pool',
              handball: 'Handball',
              ice_arena: 'Ice arena',
              choreography: 'Choreography',
              acrobatics: 'Acrobatics',
              ice_shows: 'Ice shows',
              skating_rink: 'skating rink',
              climbing: 'Climbing',
              martial_arts: 'Martial arts',
              rhythmic_gymnastics: 'Rhythmic gymnastics',
              extreme_sports_ground: 'Extreme sports ground',
              chess_club: 'Chess Club',
              shooting: 'Shooting',
              equestrian_arena: 'Equestrian arena',
              steeplechase: 'Steeplechase',
              long_jump_high_jump_triple_jump: 'Long jump, high jump, triple jump',
              pole_vault: 'Pole vault',
              shot_put: 'Shot put',
              general_physical_training: 'General physical training',
              fitness_aerobics: 'Fitness aerobics',
              cross_country_skiing: 'Cross-country skiing',
              skating: 'Skating',
              roller_sport: 'Roller sport',
              workout: 'Workout',
              arm_wrestling: 'Arm wrestling',
              powerlifting: 'Powerlifting',
              dance_sport: 'Dance sport',
              aesthetic_gymnastics: 'Aesthetic gymnastics',
              improving_gymnastics: 'Improving gymnastics',
              judo: 'Judo',
              ski_combined: 'Ski combined',
              snowboard: 'Snowboard',
              freestyl: 'Freestyl',
              alpine_skiing: 'Alpine skiing',
              cycling_bmx: 'Cycling - BMX',
              skateboarding: 'Skateboarding',
              bodybuilding: 'Bodybuilding',
              chess: 'Chess',
              health_run: 'Health Run',
              taekwondo: 'Taekwondo',
              wrestling: 'Wrestling',
              aikido: 'Aikido',
              wushu: 'Wushu',
              complex_combat: 'Complex combat',
              bullet_shooting: 'Bullet shooting',
              weightlifting: 'Weightlifting',
              aircraft_modeling: 'Aircraft Modeling',
              aerobics: 'Aerobics',
              figure_skating: 'Figure Skating',
              urban_sports: 'Urban sports',
              shooting_from_a_crossbow: 'Shooting from a crossbow',
              sports_tourism: 'Sports tourism',
              floorbal: 'Floorbal',
              motor_sport: 'Motor sport',
              cycling_mountain_biking: 'Cycling - Mountain biking',
              polyathlon: 'Polyathlon',
              shooting_from_regular_or_service_weapons: 'Shooting from regular or service weapons',
              shooting_from_combat_handguns: 'Shooting from combat handguns',
              archery: 'Archery',
              skiing: 'Skiing',
              checkers: 'Checkers',
              board_games: 'Board games',
              curling: 'Curling',
              equestrian: 'Equestrian',
              yoga: 'Yoga',
              darts: 'Darts',
              rowing: 'Rowing',
              sailing: 'Sailing',
              rowing_slalom: 'rowing slalom',
              kayaking_and_canoeing: 'Kayaking and canoeing',
              waterskiing: 'Waterskiing',
              armlifting: 'Armlifting',
              gymnastics: 'Gymnastics',
              mas_wrestling: 'Mas-wrestling',
              thai_boxing: 'Thai boxing',
              cheerleading: 'Cheerleading',
              bandy: 'Bandy',
              sports_aerobics: 'Sports aerobics',
              football_freestyle: 'Football freestyle',
              oriental_martial_arts: 'Oriental martial arts',
              kettlebell_zifting: 'Kettlebell lifting',
              mixed_martial_arts: 'Mixed martial arts (MMA)',
              hand_to_hand_fight: 'Hand-to-hand fight',
              biathlon: 'Biathlon',
              kendo: 'Kendo',
              mountaineering: 'Mountaineering',
              practical_shooting: 'Practical shooting',
              billiard_sport: 'Billiard sport',
              army_hand_to_hand_combat: 'Army hand-to-hand combat',
              mini_golf: 'Mini golf',
              underwater: 'Underwater',
              water_pol: 'Water pol',
              diving: 'Diving',
              orienteering: 'Orienteering',
              golf: 'Golf',
              bowling: 'Bowling',
              bowlspor: 'Bowlspor',
              paintball: 'Paintball',
              capoeira: 'Capoeira',
              belt_wrestling: 'Belt Wrestling',
              chir_sport: 'Chir sport',
              nordic_walking: 'Nordic walking',
              rowing_and_sailing_combined: 'Rowing and sailing combined',
              zumba: 'Zumba',
              american_football: 'American football',
              shooting_from_electronic_weapons: 'Shooting from electronic weapons',
              skeet_shooting: 'Skeet shooting',
              sports_of_the_Deaf: 'Sports of the Deaf',
              cycling_highway: 'Cycling - Highway',
              cycling_track: 'Cycling - Track',
              sports_of_persons_with_oda_impairment: 'Sports of persons with ODA impairment',
              field_hocke: 'Field hocke',
              kyokushin: 'Kyokushin',
              sumo: 'Sumo',
              softball: 'Softball',
              baseball: 'Baseball',
              sports_for_persons_with_disabilities_of_all_categories: 'Sports for persons with disabilities of all categories',
              boccia: 'Boccia',
              modern_pentathlon: 'Modern Pentathlon',
              all_style_karate: 'All Style Karate',
              scooter: 'Scooter',
              ship_Modeling: 'Ship Modeling',
              automodel_sport: 'Automodel sport',
              novus: 'Novus',
              airsoft: 'Airsoft',
              motorcycle_sport: 'Motorcycle sport',
              parachuting: 'Parachuting',
              computer_sports: 'Computer sports',
              boating: 'Boating',
              sports_of_the_blind: 'Sports of the Blind',
            }
          },
          searchResultTitle: 'SEARCH RESULTS:',
          searchInputPlaceholder: 'Search',
          leftFloatText: {
            part1: 'SEARCH BY',
            part2: 'SPORT',
            moscow_logo: 'Project of the Moscow city government'
          },
          map: {
            recomendationTitle: 'Recommendations:'
          }
        }
      },
      ru: {
        translation: {
          topFloat: {
            part1: '?????? ?????? ???????????????? ',
            part2: '???????????????'
          },
          leftMenu: {
            sportsTypeTitle: '???????? ????????????',
            notFound: '???????????? ???? ??????????????',
            tags: {
              football: '????????????',
              athletics: '???????????? ????????????????',
              rugby_7: '??????????-7',
              hockey: '????????????',
              boxing: '????????',
              sambo: '??????????',
              great_tennis: '?????????????? ????????????',
              badminton: '??????????????????',
              squash: '??????????',
              table_tennis: '???????????????????? ????????????',
              padel_tennis: '??????????-????????????',
              beach_tennis: '?????????????? ????????????',
              tennis: '????????????',
              volleyball: '????????????????',
              fencing: '????????????????????',
              fight: '????????????',
              acrobatic_rock_n_roll: '???????????????????????????? ??????-??-????????',
              sports_dances: '???????????????????? ??????????',
              mini_football: '????????-????????????',
              waterpark: '????????????????',
              spa_areas: '??????-????????',
              surfing: '??????????????',
              shooting_sport: '???????????????????? ??????????',
              crossfit: '????????????????',
              karate: '????????????',
              jiu_jitsu: '????????-????????????',
              grappling: '??????????????????',
              kickboxing: '????????????????????',
              basketball: '??????????????????',
              rugby: '??????????',
              run: '??????',
              swimming: '????????????????',
              water_polo: '???????????? ????????',
              synchronized_swimming: '???????????????????? ????????????????',
              aqua_aerobics: '????????????????????????',
              trampolining: '???????????? ???? ????????????',
              sports_acrobatics: '???????????????????? ????????????????????',
              fitness: '????????????',
              triathlon: '????????????????',
              general_physical_and_strength_training: '?????????? ???????????????????? ?? ?????????????? ????????????????????',
              gym: '?????????????????????? ??????',
              pool: '??????????????',
              handball: '??????????????',
              ice_arena: '?????????????? ??????????',
              choreography: '??????????????????????',
              acrobatics: '????????????????????',
              ice_shows: '?????????????? ??????',
              skating_rink: '??????????',
              climbing: '????????????????????????',
              martial_arts: '????????????????????????',
              rhythmic_gymnastics: '?????????????????????? ????????????????????',
              extreme_sports_ground: '???????????????? ?????????????????????????? ?????????? ????????????',
              chess_club: '?????????????????? ????????',
              shooting: '????????????????',
              equestrian_arena: '??????????-???????????????????? ??????????',
              steeplechase: '?????? ?? ??????????????????????????',
              long_jump_high_jump_triple_jump: '???????????? ?? ??????????, ?? ????????????, ?????????????? ????????????',
              pole_vault: '???????????? ?? ????????????',
              shot_put: '???????????????? ????????',
              general_physical_training: '?????????? ???????????????????? ????????????????????',
              fitness_aerobics: '????????????-????????????????',
              cross_country_skiing: '???????????? ??????????',
              skating: '?????????????? ???? ??????????????',
              roller_sport: '???????????? ??????????',
              workout: '??????????????',
              arm_wrestling: '??????????????????????',
              powerlifting: '????????????????????????',
              dance_sport: '???????????????????????? ??????????',
              aesthetic_gymnastics: '???????????????????????? ????????????????????',
              improving_gymnastics: '?????????????????????????????? ????????????????????',
              judo: '??????????',
              ski_combined: '???????????? ??????????????????',
              snowboard: '????????????????',
              freestyl: '????????????????',
              alpine_skiing: '?????????????????????? ??????????',
              cycling_bmx: '???????????????????????? ?????????? - ??????',
              skateboarding: '????????????????????????',
              bodybuilding: '??????????????????????',
              chess: '??????????????',
              health_run: '?????????????????????????????? ??????',
              taekwondo: '??????????????????',
              wrestling: '???????????????????? ????????????',
              aikido: '????????????',
              wushu: '??????',
              complex_combat: '?????????????????????? ????????????????????????',
              bullet_shooting: '?????????????? ????????????????',
              weightlifting: '?????????????? ????????????????',
              aircraft_modeling: '?????????????????????????? ??????????',
              aerobics: '????????????????',
              figure_skating: '???????????????? ?????????????? ???? ??????????????',
              urban_sports: '?????????????????? ??????????',
              shooting_from_a_crossbow: '???????????????? ???? ????????????????',
              sports_tourism: '???????????????????? ????????????',
              floorbal: '??????????????',
              motor_sport: '?????????????????????????? ??????????',
              cycling_mountain_biking: '???????????????????????? ?????????? - ??????????????????????',
              polyathlon: '??????????????????',
              shooting_from_regular_or_service_weapons: '???????????????? ???? ???????????????? ?????? ???????????????????? ????????????',
              shooting_from_combat_handguns: '???????????????? ???? ?????????????? ?????????????? ?????????????????????? ????????????',
              archery: '???????????????? ???? ????????',
              skiing: '?????????????? ???? ??????????',
              checkers: '??????????',
              board_games: '???????????????????? ????????',
              curling: '??????????????',
              equestrian: '???????????? ??????????',
              yoga: '????????',
              darts: '??????????',
              rowing: '?????????????? ??????????',
              sailing: '???????????????? ??????????',
              rowing_slalom: '?????????????? ????????????',
              kayaking_and_canoeing: '???????????? ???? ?????????????????? ?? ??????????',
              waterskiing: '?????????????????????? ??????????',
              armlifting: '????????????????????',
              mas_wrestling: '??????-????????????????',
              thai_boxing: '?????????????? ????????',
              cheerleading: '??????????????????',
              bandy: '???????????? ?? ??????????',
              sports_aerobics: '???????????????????? ????????????????',
              football_freestyle: '???????????????????? ????????????????',
              oriental_martial_arts: '?????????????????? ???????????? ????????????????????????',
              kettlebell_zifting: '?????????????? ??????????',
              mixed_martial_arts: '?????????????????? ???????????? ???????????????????????? (??????)',
              hand_to_hand_fight: '???????????????????? ??????',
              biathlon: '??????????????',
              kendo: '??????????',
              mountaineering: '??????????????????',
              practical_shooting: '???????????????????????? ????????????????',
              billiard_sport: '???????????????????? ??????????',
              army_hand_to_hand_combat: '?????????????????? ???????????????????? ??????',
              mini_golf: '????????-??????????',
              underwater: '?????????????????? ??????????',
              water_pol: '???????????? ????????',
              diving: '???????????? ?? ????????',
              orienteering: '???????????????????? ????????????????????????????',
              golf: '??????????',
              bowling: '??????????????',
              bowlspor: '??????????????????',
              paintball: '????????????????',
              capoeira: '????????????????',
              belt_wrestling: '???????????? ???? ????????????',
              chir_sport: '?????? ??????????',
              nordic_walking: '?????????????????????????? ????????????',
              rowing_and_sailing_combined: '????????????-???????????????? ??????????????????',
              zumba: '??????????',
              american_football: '???????????????????????? ????????????',
              shooting_from_electronic_weapons: '???????????????? ???? ???????????????????????? ????????????',
              skeet_shooting: '?????????????????? ????????????????',
              sports_of_the_Deaf: '?????????? ????????????',
              cycling_highway: '???????????????????????? ?????????? - ??????????',
              cycling_track: '???????????????????????? ?????????? - ????????',
              sports_of_persons_with_oda_impairment: '?????????? ?????? ?? ???????????????????? ??????',
              field_hocke: '???????????? ???? ??????????',
              kyokushin: '??????????????????????',
              sumo: '????????',
              softball: '??????????????',
              baseball: '??????????????',
              sports_for_persons_with_disabilities_of_all_categories: '?????????? ?????? ?? ?????????????????????????? ?????????????????????????? ???????????????? ???????? ??????????????????',
              boccia: '??????????',
              modern_pentathlon: '?????????????????????? ??????????????????',
              all_style_karate: '?????????????????????? ????????????',
              scooter: '???????????????????? ??????????',
              ship_Modeling: '?????????????????????????? ??????????',
              automodel_sport: '?????????????????????????? ??????????',
              novus: '??????????',
              airsoft: '??????????????????',
              motorcycle_sport: '?????????????????????????? ??????????',
              parachuting: '???????????????????? ??????????',
              computer_sports: '???????????????????????? ??????????',
              boating: '???????????? ???? ??????????????',
              sports_of_the_blind: '?????????? ????????????',
            }
          },
          searchResultTitle: '???????????????????? ????????????:',
          searchInputPlaceholder: '??????????',
          leftFloatText: {
            part1: '?????????? ',
            part2: '???? ?????????? ????????????',   
            moscow_logo: '???????????? ?????????????????????????? ????????????'
          },
          map: {
            recomendationTitle: '????????????????????????:'
          }
        },

      },
    }
  });


export default i18n;