import React, {useEffect, useMemo, useState, useTransition} from 'react';
import styles from './Main.module.scss';
import {useTranslation} from "react-i18next";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import ContentMap from "../../components/ContentMap/ContentMap";
import {ALL_OBJECTS_JSON, DETAILT_RECOMENDED_ITEMS} from "./dataFromServer";
import Spinner from "./Spinner";

const DEFAULT_LANG_KEY = 'ru'

const TRANSLATION_LANGUAGES = {
  en: {viewName: 'RUS', nativeName: 'English'},
  ru: {viewName: 'ENG', nativeName: 'Russian'}
};

function Main() {
  const [isPending, startTransition] = useTransition();

  const [langKey, setLangKey] = useState(DEFAULT_LANG_KEY)

  function changeLanguage() {
    if (langKey === 'ru') {
      setLangKey('en')
      return
    }
    setLangKey('ru')
  }

  useEffect(() => {
    i18n.changeLanguage(langKey)
  }, [langKey])


  const {t, i18n} = useTranslation();

  const [recommendedItems, setRecommendedItems] = useState(DETAILT_RECOMENDED_ITEMS);
  const [allObjects, setAllObjects] = useState(ALL_OBJECTS_JSON);
  
  const sportsTags = useMemo(() => {
    return [
      {id: 'id--football', en: 'Football', viewName: t('leftMenu.tags.football'), ru: 'Футбол'},
      {id: 'id--athletics', en: 'Athletics', viewName: t('leftMenu.tags.athletics'), ru: 'Легкая атлетика'},
      {id: 'id--rugby_7', en: 'Rugby 7', viewName: t('leftMenu.tags.rugby_7'), ru: 'Регби 7'},
      {id: 'id--hockey', en: 'Hockey', viewName: t('leftMenu.tags.hockey'), ru: 'Хоккей'},
      {id: 'id--boxing', en: 'Boxing', viewName: t('leftMenu.tags.boxing'), ru: 'Бокс'},
      {id: 'id--sambo', en: 'Sambo', viewName: t('leftMenu.tags.sambo'), ru: 'Самбо'},
      {id: 'id--great_tennis', en: 'Great tennis', viewName: t('leftMenu.tags.great_tennis'), ru: 'Большой теннис'},
      {id: 'id--badminton', en: 'Badminton', viewName: t('leftMenu.tags.badminton'), ru: 'Бадминтон'},
      {id: 'id--squash', en: 'Squash', viewName: t('leftMenu.tags.squash'), ru: 'Сквош'},
      {id: 'id--table_tennis', en: 'Table tennis', viewName: t('leftMenu.tags.table_tennis'), ru: 'Настольный теннис'},
      {id: 'id--padel_tennis', en: 'Padel tennis', viewName: t('leftMenu.tags.padel_tennis'), ru: 'Падел-теннис'},
      {id: 'id--beach_tennis', en: 'Beach Tennis', viewName: t('leftMenu.tags.beach_tennis'), ru: 'Пляжный теннис'},
      {id: 'id--tennis', en: 'Tennis', viewName: t('leftMenu.tags.tennis'), ru: 'Теннис'},
      {id: 'id--volleyball', en: 'Volleyball', viewName: t('leftMenu.tags.volleyball'), ru: 'Волейбол'},
      {id: 'id--fencing', en: 'Fencing', viewName: t('leftMenu.tags.fencing'), ru: 'Фехтование'},
      {id: 'id--fight', en: 'Fight', viewName: t('leftMenu.tags.fight'), ru: 'Борьба'},
      {
        id: 'id--acrobatic_rock_n_roll',
        en: 'Acrobatic rock "n" roll',
        viewName: t('leftMenu.tags.acrobatic_rock_n_roll'),
        ru: 'Акробатический рок-н-ролл'
      },
      {
        id: 'id--sports_dances',
        en: 'Sports dances',
        viewName: t('leftMenu.tags.sports_dances'),
        ru: 'Спортивные танцы'
      },
      {id: 'id--mini_football', en: 'Mini football', viewName: t('leftMenu.tags.mini_football'), ru: 'Мини-футбол'},
      {id: 'id--waterpark', en: 'Waterpark', viewName: t('leftMenu.tags.waterpark'), ru: 'Аквапарк'},
      {id: 'id--spa_areas', en: 'Spa areas', viewName: t('leftMenu.tags.spa_areas'), ru: 'Спа-зоны'},
      {id: 'id--surfing', en: 'Surfing', viewName: t('leftMenu.tags.surfing'), ru: 'Серфинг'},
      {
        id: 'id--shooting_sport',
        en: 'Shooting sport',
        viewName: t('leftMenu.tags.shooting_sport'),
        ru: 'Стрелковый спорт'
      },
      {id: 'id--crossfit', en: 'Crossfit', viewName: t('leftMenu.tags.crossfit'), ru: 'Кроссфит'},
      {id: 'id--karate', en: 'Karate', viewName: t('leftMenu.tags.karate'), ru: 'Каратэ'},
      {id: 'id--jiu_jitsu', en: 'Jiu Jitsu', viewName: t('leftMenu.tags.jiu_jitsu'), ru: 'Джиу Джитсу'},
      {id: 'id--grappling', en: 'Grappling', viewName: t('leftMenu.tags.grappling'), ru: 'Грэпплинг'},
      {id: 'id--kickboxing', en: 'Kickboxing', viewName: t('leftMenu.tags.kickboxing'), ru: 'Кикбоксинг'},
      {id: 'id--basketball', en: 'Basketball', viewName: t('leftMenu.tags.basketball'), ru: 'Баскетбол'},
      {id: 'id--rugby', en: 'Rugby', viewName: t('leftMenu.tags.rugby'), ru: 'Регби'},
      {id: 'id--run', en: 'Run', viewName: t('leftMenu.tags.run'), ru: 'Бег'},
      {id: 'id--swimming', en: 'Swimming', viewName: t('leftMenu.tags.swimming'), ru: 'Плавание'},
      {id: 'id--water_polo', en: 'Water polo', viewName: t('leftMenu.tags.water_polo'), ru: 'Водное поло'},
      {
        id: 'id--synchronized_swimming',
        en: 'Synchronized swimming',
        viewName: t('leftMenu.tags.synchronized_swimming'),
        ru: 'Синхронное плавание'
      },
      {id: 'id--aqua_aerobics', en: 'Aqua aerobics', viewName: t('leftMenu.tags.aqua_aerobics'), ru: 'Аквааэробика'},
      {id: 'id--trampolining', en: 'Trampolining', viewName: t('leftMenu.tags.trampolining'), ru: 'Прыжки на батуте'},
      {
        id: 'id--sports_acrobatics',
        en: 'Sports Acrobatics',
        viewName: t('leftMenu.tags.sports_acrobatics'),
        ru: 'Спортивная акробатика'
      },
      {id: 'id--fitness', en: 'Fitness', viewName: t('leftMenu.tags.fitness'), ru: 'Фитнес'},
      {id: 'id--triathlon', en: 'Triathlon', viewName: t('leftMenu.tags.triathlon'), ru: 'Триатлон'},
      {
        id: 'id--general_physical_and_strength_training',
        en: 'General physical and strength training',
        viewName: t('leftMenu.tags.general_physical_and_strength_training'),
        ru: 'Общая физическая и силовая подготовка'
      },
      {id: 'id--gym', en: 'Gym', viewName: t('leftMenu.tags.gym'), ru: 'Тренажерный зал'},
      {id: 'id--pool', en: 'Pool', viewName: t('leftMenu.tags.pool'), ru: 'Бассейн'},
      {id: 'id--handball', en: 'Handball', viewName: t('leftMenu.tags.handball'), ru: 'Гандбол'},
      {id: 'id--ice_arena', en: 'Ice arena', viewName: t('leftMenu.tags.ice_arena'), ru: 'Ледовая арена'},
      {id: 'id--choreography', en: 'Choreography', viewName: t('leftMenu.tags.choreography'), ru: 'Хореография'},
      {id: 'id--acrobatics', en: 'Acrobatics', viewName: t('leftMenu.tags.acrobatics'), ru: 'Акробатика'},
      {id: 'id--ice_shows', en: 'Ice shows', viewName: t('leftMenu.tags.ice_shows'), ru: 'Ледовые шоу'},
      {id: 'id--skating_rink', en: 'skating rink', viewName: t('leftMenu.tags.skating_rink'), ru: 'Каток'},
      {id: 'id--climbing', en: 'Climbing', viewName: t('leftMenu.tags.climbing'), ru: 'Скалолазание'},
      {id: 'id--martial_arts', en: 'Martial arts', viewName: t('leftMenu.tags.martial_arts'), ru: 'Единоборства'},
      {
        id: 'id--rhythmic_gymnastics',
        en: 'Rhythmic gymnastics',
        viewName: t('leftMenu.tags.rhythmic_gymnastics'),
        ru: 'Ритмическая гимнастика'
      },
      {
        id: 'id--extreme_sports_ground',
        en: 'Extreme sports ground',
        viewName: t('leftMenu.tags.extreme_sports_ground'),
        ru: 'Площадка экстремальных видов спорта'
      },
      {id: 'id--chess_club', en: 'Chess Club', viewName: t('leftMenu.tags.chess_club'), ru: 'Шахматный клуб'},
      {id: 'id--shooting', en: 'Shooting', viewName: t('leftMenu.tags.shooting'), ru: 'Стрельба'},
      {
        id: 'id--equestrian_arena',
        en: 'Equestrian arena',
        viewName: t('leftMenu.tags.equestrian_arena'),
        ru: 'Конно-спортивный манеж'
      },
      {
        id: 'id--steeplechase',
        en: 'Steeplechase',
        viewName: t('leftMenu.tags.steeplechase'),
        ru: 'Бег с препятствиями'
      },
      {
        id: 'id--long_jump_high_jump_triple_jump',
        en: 'Long jump, high jump, triple jump',
        viewName: t('leftMenu.tags.long_jump_high_jump_triple_jump'),
        ru: 'Прыжки в длину,  высоту, тройной прыжок'
      },
      {id: 'id--pole_vault', en: 'Pole vault', viewName: t('leftMenu.tags.pole_vault'), ru: 'Прыжки с шестом'},
      {id: 'id--shot_put', en: 'Shot put', viewName: t('leftMenu.tags.shot_put'), ru: 'Толкание ядра'},
      {
        id: 'id--general_physical_training',
        en: 'General physical training', viewName: t('leftMenu.tags.general_physical_training'),
        ru: 'Общая физическая подготовка'
      },
      {
        id: 'id--fitness_aerobics',
        en: 'Fitness aerobics',
        viewName: t('leftMenu.tags.fitness_aerobics'),
        ru: 'Фитнес-аэробика'
      },
      {
        id: 'id--cross_country_skiing',
        en: 'Cross-country skiing',
        viewName: t('leftMenu.tags.cross_country_skiing'),
        ru: 'Лыжные гонки'
      },
      {id: 'id--skating', en: 'Skating', viewName: t('leftMenu.tags.skating'), ru: 'Катание на коньках'},
      {id: 'id--roller_sport', en: 'Roller sport', viewName: t('leftMenu.tags.roller_sport'), ru: 'Роллер спорт'},
      {id: 'id--workout', en: 'Workout', viewName: t('leftMenu.tags.workout'), ru: 'Воркаут'},
      {id: 'id--arm_wrestling', en: 'Arm wrestling', viewName: t('leftMenu.tags.arm_wrestling'), ru: 'Армрестлинг'},
      {id: 'id--powerlifting', en: 'Powerlifting', viewName: t('leftMenu.tags.powerlifting'), ru: 'Пауэрлифтинг'},
      {id: 'id--dance_sport', en: 'Dance sport', viewName: t('leftMenu.tags.dance_sport'), ru: 'Танцевальный спорт'},
      {
        id: 'id--aesthetic_gymnastics',
        en: 'Aesthetic gymnastics', viewName: t('leftMenu.tags.aesthetic_gymnastics'),
        ru: 'Эстетическая гимнастика'
      },
      {
        id: 'id--improving_gymnastics',
        en: 'Improving gymnastics', viewName: t('leftMenu.tags.improving_gymnastics'),
        ru: 'Оздоровительная гимнастика'
      },
      {id: 'id--judo', en: 'Judo', viewName: t('leftMenu.tags.judo'), ru: 'Дзюдо'},
      {id: 'id--ski_combined', en: 'Ski combined', viewName: t('leftMenu.tags.ski_combined'), ru: 'Лыжное двоеборье'},
      {id: 'id--snowboard', en: 'Snowboard', viewName: t('leftMenu.tags.snowboard'), ru: 'Сноуборд'},
      {id: 'id--freestyl', en: 'Freestyle', viewName: t('leftMenu.tags.freestyl'), ru: 'Фристайл'},
      {
        id: 'id--alpine_skiing',
        en: 'Alpine skiing',
        viewName: t('leftMenu.tags.alpine_skiing'),
        ru: 'Горнолыжный спорт'
      },
      {
        id: 'id--cycling_bmx',
        en: 'Cycling - BMX',
        viewName: t('leftMenu.tags.cycling_bmx'),
        ru: 'Велосипедный спорт - ВМХ'
      },
      {id: 'id--skateboarding', en: 'Skateboarding', viewName: t('leftMenu.tags.skateboarding'), ru: 'Скейтбординг'},
      {id: 'id--bodybuilding', en: 'Bodybuilding', viewName: t('leftMenu.tags.bodybuilding'), ru: 'Бодибилдинг'},
      {id: 'id--chess', en: 'Chess', viewName: t('leftMenu.tags.chess'), ru: 'Шахматы'},
      {id: 'id--health_run', en: 'Health Run', viewName: t('leftMenu.tags.health_run'), ru: 'Оздоровительный бег'},
      {id: 'id--taekwondo', en: 'Taekwondo', viewName: t('leftMenu.tags.taekwondo'), ru: 'Тхэквондо'},
      {id: 'id--wrestling', en: 'Wrestling', viewName: t('leftMenu.tags.wrestling'), ru: 'Спортивная борьба'},
      {id: 'id--aikido', en: 'Aikido', viewName: t('leftMenu.tags.aikido'), ru: 'Айкидо'},
      {id: 'id--wushu', en: 'Wushu', viewName: t('leftMenu.tags.wushu'), ru: 'Ушу'},
      {
        id: 'id--complex_combat',
        en: 'Complex combat',
        viewName: t('leftMenu.tags.complex_combat'),
        ru: 'Комплексное единоборство'
      },
      {
        id: 'id--bullet_shooting',
        en: 'Bullet shooting',
        viewName: t('leftMenu.tags.bullet_shooting'),
        ru: 'Пулевая стрельба'
      },
      {
        id: 'id--weightlifting',
        en: 'Weightlifting',
        viewName: t('leftMenu.tags.weightlifting'),
        ru: 'Тяжелая атлетика'
      },
      {
        id: 'id--aircraft_modeling',
        en: 'Aircraft Modeling',
        viewName: t('leftMenu.tags.aircraft_modeling'),
        ru: 'Авиамодельный спорт'
      },
      {id: 'id--aerobics', en: 'Aerobics', viewName: t('leftMenu.tags.aerobics'), ru: 'Аэробика'},
      {
        id: 'id--figure_skating',
        en: 'Figure Skating',
        viewName: t('leftMenu.tags.figure_skating'),
        ru: 'Фигурное катание на коньках'
      },
      {id: 'id--urban_sports', en: 'Urban sports', viewName: t('leftMenu.tags.urban_sports'), ru: 'Городской спорт'},
      {
        id: 'id--shooting_from_a_crossbow',
        en: 'Shooting from a crossbow', viewName: t('leftMenu.tags.shooting_from_a_crossbow'),
        ru: 'Стрельба из арбалета'
      },
      {
        id: 'id--sports_tourism',
        en: 'Sports tourism',
        viewName: t('leftMenu.tags.sports_tourism'),
        ru: 'Спортивный туризм'
      },
      {id: 'id--floorbal', en: 'Floorbal', viewName: t('leftMenu.tags.floorbal'), ru: 'Флорбол'},
      {id: 'id--motor_sport', en: 'Motor sport', viewName: t('leftMenu.tags.motor_sport'), ru: 'Автомобильный спорт'},
      {
        id: 'id--cycling_mountain_biking',
        en: 'Cycling - Mountain biking', viewName: t('leftMenu.tags.cycling_mountain_biking'),
        ru: 'Велосипедный спорт - Маунтинбайк'
      },
      {id: 'id--polyathlon', en: 'Polyathlon', viewName: t('leftMenu.tags.polyathlon'), ru: 'Полиатлон'},
      {
        id: 'id--shooting_from_regular_or_service_weapons',
        en: 'Shooting from regular or service weapons',
        viewName: t('leftMenu.tags.shooting_from_regular_or_service_weapons'),
        ru: 'Стрельба из штатного или табельного оружия'
      },
      {
        id: 'id--shooting_from_combat_handguns',
        en: 'Shooting from combat handguns', viewName: t('leftMenu.tags.shooting_from_combat_handguns'),
        ru: 'Стрельба из боевого ручного стрелкового оружия'
      },
      {id: 'id--archery', en: 'Archery', viewName: t('leftMenu.tags.archery'), ru: 'Стрельба из лука'},
      {id: 'id--skiing', en: 'Skiing', viewName: t('leftMenu.tags.skiing'), ru: 'Катание на лыжах'},
      {id: 'id--checkers', en: 'Checkers', viewName: t('leftMenu.tags.checkers'), ru: 'Шашки'},
      {id: 'id--board_games', en: 'Board games', viewName: t('leftMenu.tags.board_games'), ru: 'Настольные игры'},
      {id: 'id--curling', en: 'Curling', viewName: t('leftMenu.tags.curling'), ru: 'Кёрлинг'},
      {id: 'id--equestrian', en: 'Equestrian', viewName: t('leftMenu.tags.equestrian'), ru: 'Конный спорт'},
      {id: 'id--yoga', en: 'Yoga', viewName: t('leftMenu.tags.yoga'), ru: 'Йога'},
      {id: 'id--darts', en: 'Darts', viewName: t('leftMenu.tags.darts'), ru: 'Дартс'},
      {id: 'id--rowing', en: 'Rowing', viewName: t('leftMenu.tags.rowing'), ru: 'Гребной спорт'},
      {id: 'id--sailing', en: 'Sailing', viewName: t('leftMenu.tags.sailing'), ru: 'Парусный спорт'},
      {id: 'id--rowing_slalom', en: 'Rowing slalom', viewName: t('leftMenu.tags.rowing_slalom'), ru: 'Гребной слалом'},
      {
        id: 'id--kayaking_and_canoeing',
        en: 'Kayaking and canoeing', viewName: t('leftMenu.tags.kayaking_and_canoeing'),
        ru: 'Гребля на байдарках и каноэ'
      },
      {id: 'id--waterskiing', en: 'Waterskiing', viewName: t('leftMenu.tags.waterskiing'), ru: 'Воднолыжный спорт'},
      {id: 'id--armlifting', en: 'Armlifting', viewName: t('leftMenu.tags.armlifting'), ru: 'Армлифтинг'},
      {id: 'id--gymnastics', en: 'Gymnastics', viewName: t('leftMenu.tags.gymnastics'), ru: 'Гимнастика'},
      {id: 'id--mas_wrestling', en: 'Mas-wrestling', viewName: t('leftMenu.tags.mas_wrestling'), ru: 'Мас-рестлинг'},
      {id: 'id--thai_boxing', en: 'Thai boxing', viewName: t('leftMenu.tags.thai_boxing'), ru: 'Тайский бокс'},
      {id: 'id--cheerleading', en: 'Cheerleading', viewName: t('leftMenu.tags.cheerleading'), ru: 'Черлидинг'},
      {id: 'id--bandy', en: 'Bandy', viewName: t('leftMenu.tags.bandy'), ru: 'Хоккей с мячом'},
      {
        id: 'id--sports_aerobics',
        en: 'Sports aerobics',
        viewName: t('leftMenu.tags.sports_aerobics'),
        ru: 'Спортивная аэробика'
      },
      {
        id: 'id--football_freestyle',
        en: 'Football freestyle',
        viewName: t('leftMenu.tags.football_freestyle'),
        ru: 'Футбольный фристайл'
      },
      {
        id: 'id--oriental_martial_arts',
        en: 'Oriental martial arts', viewName: t('leftMenu.tags.oriental_martial_arts'),
        ru: 'Восточное боевое единоборство'
      },
      {
        id: 'id--kettlebell_zifting',
        en: 'Kettlebell lifting',
        viewName: t('leftMenu.tags.kettlebell_zifting'),
        ru: 'Гиревой спорт'
      },
      {
        id: 'id--mixed_martial_arts',
        en: 'Mixed martial arts (MMA)',
        viewName: t('leftMenu.tags.mixed_martial_arts'),
        ru: 'Смешанное боевое единоборство (ММА)'
      },
      {
        id: 'id--hand_to_hand_fight',
        en: 'Hand-to-hand fight',
        viewName: t('leftMenu.tags.hand_to_hand_fight'),
        ru: 'Рукопашный бой'
      },
      {id: 'id--biathlon', en: 'Biathlon', viewName: t('leftMenu.tags.biathlon'), ru: 'Биатлон'},
      {id: 'id--kendo', en: 'Kendo', viewName: t('leftMenu.tags.kendo'), ru: 'Кендо'},
      {id: 'id--mountaineering', en: 'Mountaineering', viewName: t('leftMenu.tags.mountaineering'), ru: 'Альпинизм'},
      {
        id: 'id--practical_shooting',
        en: 'Practical shooting',
        viewName: t('leftMenu.tags.practical_shooting'),
        ru: 'Практическая стрельба'
      },
      {
        id: 'id--billiard_sport',
        en: 'Billiard sport',
        viewName: t('leftMenu.tags.billiard_sport'),
        ru: 'Бильярдный спорт'
      },
      {
        id: 'id--army_hand_to_hand_combat',
        en: 'Army hand-to-hand combat', viewName: t('leftMenu.tags.army_hand_to_hand_combat'),
        ru: 'Армейский рукопашный бой'
      },
      {id: 'id--mini_golf', en: 'Mini golf', viewName: t('leftMenu.tags.mini_golf'), ru: 'Мини-гольф'},
      {id: 'id--underwater', en: 'Underwater', viewName: t('leftMenu.tags.underwater'), ru: 'Подводный спорт'},
      {id: 'id--water_pol', en: 'Water pol', viewName: t('leftMenu.tags.water_pol'), ru: 'Водное поло'},
      {id: 'id--diving', en: 'Diving', viewName: t('leftMenu.tags.diving'), ru: 'Прыжки в воду'},
      {
        id: 'id--orienteering',
        en: 'Orienteering',
        viewName: t('leftMenu.tags.orienteering'),
        ru: 'Спортивное ориентирование'
      },
      {id: 'id--golf', en: 'Golf', viewName: t('leftMenu.tags.golf'), ru: 'Гольф'},
      {id: 'id--bowling', en: 'Bowling', viewName: t('leftMenu.tags.bowling'), ru: 'Боулинг'},
      {id: 'id--bowlspor', en: 'Bowlspor', viewName: t('leftMenu.tags.bowlspor'), ru: 'Боулспорт'},
      {id: 'id--paintball', en: 'Paintball', viewName: t('leftMenu.tags.paintball'), ru: 'Пейнтбол'},
      {id: 'id--capoeira', en: 'Capoeira', viewName: t('leftMenu.tags.capoeira'), ru: 'Капоэйра'},
      {
        id: 'id--belt_wrestling',
        en: 'Belt Wrestling',
        viewName: t('leftMenu.tags.belt_wrestling'),
        ru: 'Борьба на поясах'
      },
      {id: 'id--chir_sport', en: 'Chir sport', viewName: t('leftMenu.tags.chir_sport'), ru: 'Чир спорт'},
      {
        id: 'id--nordic_walking',
        en: 'Nordic walking',
        viewName: t('leftMenu.tags.nordic_walking'),
        ru: 'Скандинавская ходьба'
      },
      {
        id: 'id--rowing_and_sailing_combined',
        en: 'Rowing and sailing combined', viewName: t('leftMenu.tags.rowing_and_sailing_combined'),
        ru: 'Гребно-парусное двоеборье'
      },
      {id: 'id--zumba', en: 'Zumba', viewName: t('leftMenu.tags.zumba'), ru: 'Зумба'},
      {
        id: 'id--american_football',
        en: 'American football',
        viewName: t('leftMenu.tags.american_football'),
        ru: 'Американский футбол'
      },
      {
        id: 'id--shooting_from_electronic_weapons',
        en: 'Shooting from electronic weapons', viewName: t('leftMenu.tags.shooting_from_electronic_weapons'),
        ru: 'Стрельба из электронного оружия'
      },
      {
        id: 'id--skeet_shooting',
        en: 'Skeet shooting',
        viewName: t('leftMenu.tags.skeet_shooting'),
        ru: 'Стендовая стрельба'
      },
      {
        id: 'id--sports_of_the_Deaf',
        en: 'Sports of the Deaf',
        viewName: t('leftMenu.tags.sports_of_the_Deaf'),
        ru: 'Спорт глухих'
      },
      {
        id: 'id--cycling_highway',
        en: 'Cycling - Highway',
        viewName: t('leftMenu.tags.cycling_highway'),
        ru: 'Велосипедный спорт - Шоссе'
      },
      {
        id: 'id--cycling_track',
        en: 'Cycling - Track',
        viewName: t('leftMenu.tags.cycling_track'),
        ru: 'Велосипедный спорт - Трек'
      },
      {
        id: 'id--sports_of_persons_with_oda_impairment',
        en: 'Sports of persons with ODA impairment', viewName: t('leftMenu.tags.sports_of_persons_with_oda_impairment'),
        ru: 'Спорт лиц с поражением ОДА'
      },
      {id: 'id--field_hocke', en: 'Field hocke', viewName: t('leftMenu.tags.field_hocke'), ru: 'Хоккей на траве'},
      {id: 'id--kyokushin', en: 'Kyokushin', viewName: t('leftMenu.tags.kyokushin'), ru: 'Киокусинкай'},
      {id: 'id--sumo', en: 'Sumo', viewName: t('leftMenu.tags.sumo'), ru: 'Сумо'},
      {id: 'id--softball', en: 'Softball', viewName: t('leftMenu.tags.softball'), ru: 'Софтбол'},
      {id: 'id--baseball', en: 'Baseball', viewName: t('leftMenu.tags.baseball'), ru: 'Бейсбол'},
      {
        id: 'id--sports_for_persons_with_disabilities_of_all_categories',
        en: 'Sports for persons with disabilities of all categories',
        viewName: t('leftMenu.tags.sports_for_persons_with_disabilities_of_all_categories'),
        ru: 'Спорт для лиц с ограниченными возможностями здоровья всех категорий'
      },
      {id: 'id--boccia', en: 'Boccia', viewName: t('leftMenu.tags.boccia'), ru: 'Бочча'},
      {
        id: 'id--modern_pentathlon',
        en: 'Modern Pentathlon',
        viewName: t('leftMenu.tags.modern_pentathlon'),
        ru: 'Современное пятиборье'
      },
      {
        id: 'id--all_style_karate',
        en: 'All Style Karate',
        viewName: t('leftMenu.tags.all_style_karate'),
        ru: 'Всестилевое каратэ'
      },
      {id: 'id--scooter', en: 'Scooter', viewName: t('leftMenu.tags.scooter'), ru: 'Самокатный спорт'},
      {
        id: 'id--ship_Modeling',
        en: 'Ship Modeling',
        viewName: t('leftMenu.tags.ship_Modeling'),
        ru: 'Судомодельный спорт'
      },
      {
        id: 'id--automodel_sport',
        en: 'Automodel sport',
        viewName: t('leftMenu.tags.automodel_sport'),
        ru: 'Автомодельный спорт'
      },
      {id: 'id--novus', en: 'Novus', viewName: t('leftMenu.tags.novus'), ru: 'Новус'},
      {id: 'id--airsoft', en: 'Airsoft', viewName: t('leftMenu.tags.airsoft'), ru: 'Страйкбол'},
      {
        id: 'id--motorcycle_sport',
        en: 'Motorcycle sport',
        viewName: t('leftMenu.tags.motorcycle_sport'),
        ru: 'Мотоциклетный спорт'
      },
      {id: 'id--parachuting', en: 'Parachuting', viewName: t('leftMenu.tags.parachuting'), ru: 'Парашютный спорт'},
      {
        id: 'id--computer_sports',
        en: 'Computer sports',
        viewName: t('leftMenu.tags.computer_sports'),
        ru: 'Компьютерный спорт'
      },
      {id: 'id--boating', en: 'Boating', viewName: t('leftMenu.tags.boating'), ru: 'Гребля на шлюпках'},
      {
        id: 'id--sports_of_the_blind',
        en: 'Sports of the Blind',
        viewName: t('leftMenu.tags.sports_of_the_blind'),
        ru: 'Спорт слепых'
      },
    ];
  }, [t])

  const [activeSportTagIds, setActiveSportTagIds] = useState([
    // 'id--football',
    // 'id--hockey',
    // 'id--boxing'
  ]) // null || [id--Хоккей]


  const [filtredRecommendedItems, setFiltredRecommendedItems] = useState([])
  useEffect(() => {
    startTransition(() => {
      if (!activeSportTagIds?.length) {
        setFiltredRecommendedItems(recommendedItems)
      }
      let returnedItems = [...recommendedItems]
      const filteredTags = sportsTags.filter(sportTag => activeSportTagIds.some(activeTag => activeTag === sportTag.id))
      const tagsRuNames = {}
      if (!filteredTags.length) {
        setFiltredRecommendedItems(returnedItems)
      }
      filteredTags.forEach((filterTag => tagsRuNames[filterTag.ru] = true))
      returnedItems = returnedItems.filter((item) =>
        filteredTags.every(filterTag => JSON.parse(item.sport_types_ru).some(sportTag => sportTag === filterTag.ru))
      )
      setFiltredRecommendedItems(returnedItems)
    })
  }, [activeSportTagIds, recommendedItems])

  const [filtredAllObjects, setFiltredAllObjects] = useState({})
  useEffect(() => {
    startTransition(() => {
      if (!activeSportTagIds?.length) {
        const newReturnedItems = {}
        for (let i = 0, len = allObjects.length; i < len; i++) {
          const item = allObjects[i]
            newReturnedItems[item.id] = true
        }
        setFiltredAllObjects(newReturnedItems)
        return
      }
      const newReturnedItems = {}

      const filteredTags = sportsTags.filter(sportTag => activeSportTagIds.some(activeTag => activeTag === sportTag.id))
      if (!filteredTags.length) {
        setFiltredAllObjects({})
        return
      }
      for (let i = 0, len = allObjects.length; i < len; i++) {
        const item = allObjects[i]
        const itemTags = JSON.parse(item.sport_type)
        if (filteredTags.every(filterTag => itemTags.includes(filterTag.ru))) {
          newReturnedItems[item.id] = true
        }
      }
      setFiltredAllObjects(newReturnedItems)
    })
  }, [activeSportTagIds, allObjects])
  
  return (
    <>
      <Spinner isLoading={isPending}/>
      <div className={styles.main}>
        <div className={styles.topFloatText}>
          <span className={styles.topFloatText__main}>{t('topFloat.part1')}</span>
          <span className={styles.topFloatText__sub}>{t('topFloat.part2')}</span>
        </div>
        <div className={styles.leftFloatText}>
          <span className={styles.leftFloatText__main}>{t('leftFloatText.part1')}</span>
          <span className={styles.leftFloatText__sub}>{t('leftFloatText.part2')}</span>
        </div>
        <button className={styles.LangBtn} onClick={changeLanguage}>
          <span>{TRANSLATION_LANGUAGES[langKey].viewName}</span>
        </button>
        <div className={styles.MoscowLogo}>
          <div className={styles.MoscowLogo__img}>
            <img src="img/moscow_flag.svg" alt=""/>
          </div>
          <div className={styles.MoscowLogo__text}>
            {t('leftFloatText.moscow_logo')}
          </div>
        </div>
        <div className={styles.main__content}>
          <LeftPanel
            activeSportTagIds={activeSportTagIds}
            setActiveSportTagIds={setActiveSportTagIds}
            langKey={langKey}
            sportsTags={sportsTags}
            startTransition={startTransition}
          />
          <ContentMap
            recommendedItems={filtredRecommendedItems}
            allObjects={filtredAllObjects}
          />
        </div>
      </div>
    </>
  )
}

export default Main;
