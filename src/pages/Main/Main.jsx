import React, {useEffect, useMemo, useState} from 'react';
import styles from './Main.module.scss';
import {useTranslation} from "react-i18next";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import ContentMap from "../../components/ContentMap/ContentMap";
import {ALL_OBJECTS_JSON, DETAILT_RECOMENDED_ITEMS} from "./dataFromServer";

const DEFAULT_LANG_KEY = 'ru'

const TRANSLATION_LANGUAGES = {
  en: {viewName: 'RUS', nativeName: 'English'},
  ru: {viewName: 'ENG', nativeName: 'Russian'}
};

function Main() {
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

  const [recommendedItems, setRecommendedItems] = useState([]);
  const [allObjects, setAllObjects] = useState([]);

  const sportsTags = useMemo(() => {
    return [
      {id: 'id--football', viewName: t('leftMenu.tags.football'), ru: 'Футбол'},
      {id: 'id--athletics', viewName: t('leftMenu.tags.athletics'), ru: 'Легкая атлетика'},
      {id: 'id--rugby_7', viewName: t('leftMenu.tags.rugby_7'), ru: 'Регби 7'},
      {id: 'id--hockey', viewName: t('leftMenu.tags.hockey'), ru: 'Хоккей'},
      {id: 'id--boxing', viewName: t('leftMenu.tags.boxing'), ru: 'Бокс'},
      {id: 'id--sambo', viewName: t('leftMenu.tags.sambo'), ru: 'Самбо'},
      {id: 'id--great_tennis', viewName: t('leftMenu.tags.great_tennis'), ru: 'Большой теннис'},
      {id: 'id--badminton', viewName: t('leftMenu.tags.badminton'), ru: 'Бадминтон'},
      {id: 'id--squash', viewName: t('leftMenu.tags.squash'), ru: 'Сквош'},
      {id: 'id--table_tennis', viewName: t('leftMenu.tags.table_tennis'), ru: 'Настольный теннис'},
      {id: 'id--padel_tennis', viewName: t('leftMenu.tags.padel_tennis'), ru: 'Падел-теннис'},
      {id: 'id--beach_tennis', viewName: t('leftMenu.tags.beach_tennis'), ru: 'Пляжный теннис'},
      {id: 'id--tennis', viewName: t('leftMenu.tags.tennis'), ru: 'Теннис'},
      {id: 'id--volleyball', viewName: t('leftMenu.tags.volleyball'), ru: 'Волейбол'},
      {id: 'id--fencing', viewName: t('leftMenu.tags.fencing'), ru: 'Фехтование'},
      {id: 'id--fight', viewName: t('leftMenu.tags.fight'), ru: 'Борьба'},
      {
        id: 'id--acrobatic_rock_n_roll',
        viewName: t('leftMenu.tags.acrobatic_rock_n_roll'),
        ru: 'Акробатический рок-н-ролл'
      },
      {id: 'id--sports_dances', viewName: t('leftMenu.tags.sports_dances'), ru: 'Спортивные танцы'},
      {id: 'id--mini_football', viewName: t('leftMenu.tags.mini_football'), ru: 'Мини-футбол'},
      {id: 'id--waterpark', viewName: t('leftMenu.tags.waterpark'), ru: 'Аквапарк'},
      {id: 'id--spa_areas', viewName: t('leftMenu.tags.spa_areas'), ru: 'Спа-зоны'},
      {id: 'id--surfing', viewName: t('leftMenu.tags.surfing'), ru: 'Серфинг'},
      {id: 'id--shooting_sport', viewName: t('leftMenu.tags.shooting_sport'), ru: 'Стрелковый спорт'},
      {id: 'id--crossfit', viewName: t('leftMenu.tags.crossfit'), ru: 'Кроссфит'},
      {id: 'id--karate', viewName: t('leftMenu.tags.karate'), ru: 'Каратэ'},
      {id: 'id--jiu_jitsu', viewName: t('leftMenu.tags.jiu_jitsu'), ru: 'Джиу Джитсу'},
      {id: 'id--grappling', viewName: t('leftMenu.tags.grappling'), ru: 'Грэпплинг'},
      {id: 'id--kickboxing', viewName: t('leftMenu.tags.kickboxing'), ru: 'Кикбоксинг'},
      {id: 'id--basketball', viewName: t('leftMenu.tags.basketball'), ru: 'Баскетбол'},
      {id: 'id--rugby', viewName: t('leftMenu.tags.rugby'), ru: 'Регби'},
      {id: 'id--run', viewName: t('leftMenu.tags.run'), ru: 'Бег'},
      {id: 'id--swimming', viewName: t('leftMenu.tags.swimming'), ru: 'Плавание'},
      {id: 'id--water_polo', viewName: t('leftMenu.tags.water_polo'), ru: 'Водное поло'},
      {id: 'id--synchronized_swimming', viewName: t('leftMenu.tags.synchronized_swimming'), ru: 'Синхронное плавание'},
      {id: 'id--aqua_aerobics', viewName: t('leftMenu.tags.aqua_aerobics'), ru: 'Аквааэробика'},
      {id: 'id--trampolining', viewName: t('leftMenu.tags.trampolining'), ru: 'Прыжки на батуте'},
      {id: 'id--sports_acrobatics', viewName: t('leftMenu.tags.sports_acrobatics'), ru: 'Спортивная акробатика'},
      {id: 'id--fitness', viewName: t('leftMenu.tags.fitness'), ru: 'Фитнес'},
      {id: 'id--triathlon', viewName: t('leftMenu.tags.triathlon'), ru: 'Триатлон'},
      {
        id: 'id--general_physical_and_strength_training',
        viewName: t('leftMenu.tags.general_physical_and_strength_training'),
        ru: 'Общая физическая и силовая подготовка'
      },
      {id: 'id--gym', viewName: t('leftMenu.tags.gym'), ru: 'Тренажерный зал'},
      {id: 'id--pool', viewName: t('leftMenu.tags.pool'), ru: 'Бассейн'},
      {id: 'id--handball', viewName: t('leftMenu.tags.handball'), ru: 'Гандбол'},
      {id: 'id--ice_arena', viewName: t('leftMenu.tags.ice_arena'), ru: 'Ледовая арена'},
      {id: 'id--choreography', viewName: t('leftMenu.tags.choreography'), ru: 'Хореография'},
      {id: 'id--acrobatics', viewName: t('leftMenu.tags.acrobatics'), ru: 'Акробатика'},
      {id: 'id--ice_shows', viewName: t('leftMenu.tags.ice_shows'), ru: 'Ледовые шоу'},
      {id: 'id--skating_rink', viewName: t('leftMenu.tags.skating_rink'), ru: 'Каток'},
      {id: 'id--climbing', viewName: t('leftMenu.tags.climbing'), ru: 'Скалолазание'},
      {id: 'id--martial_arts', viewName: t('leftMenu.tags.martial_arts'), ru: 'Единоборства'},
      {
        id: 'id--rhythmic_gymnastics',
        viewName: t('leftMenu.tags.rhythmic_gymnastics'),
        ru: 'Ритмическая гимнастика'
      },
      {id: 'id--extreme_sports_ground', viewName: t('leftMenu.tags.extreme_sports_ground'), ru: 'Площадка экстремальных видов спорта'},
      {id: 'id--chess_club', viewName: t('leftMenu.tags.chess_club'), ru: 'Шахматный клуб'},
      {id: 'id--shooting', viewName: t('leftMenu.tags.shooting'), ru: 'Стрельба'},
      {id: 'id--equestrian_arena', viewName: t('leftMenu.tags.equestrian_arena'), ru: 'Конно-спортивный манеж'},
      {id: 'id--steeplechase', viewName: t('leftMenu.tags.steeplechase'), ru: 'Бег с препятствиями'},
      {
        id: 'id--long_jump_high_jump_triple_jump',
        viewName: t('leftMenu.tags.long_jump_high_jump_triple_jump'),
        ru: 'Прыжки в длину, в высоту, тройной прыжок'
      },
      {id: 'id--pole_vault', viewName: t('leftMenu.tags.pole_vault'), ru: 'Прыжки с шестом'},
      {id: 'id--shot_put', viewName: t('leftMenu.tags.shot_put'), ru: 'Толкание ядра'},
      {
        id: 'id--general_physical_training',
        viewName: t('leftMenu.tags.general_physical_training'),
        ru: 'Общая физическая подготовка'
      },
      {id: 'id--fitness_aerobics', viewName: t('leftMenu.tags.fitness_aerobics'), ru: 'Фитнес-аэробика'},
      {id: 'id--cross_country_skiing', viewName: t('leftMenu.tags.cross_country_skiing'), ru: 'Лыжные гонки'},
      {id: 'id--skating', viewName: t('leftMenu.tags.skating'), ru: 'Катание на коньках'},
      {id: 'id--roller_sport', viewName: t('leftMenu.tags.roller_sport'), ru: 'Роллер спорт'},
      {id: 'id--workout', viewName: t('leftMenu.tags.workout'), ru: 'Воркаут'},
      {id: 'id--arm_wrestling', viewName: t('leftMenu.tags.arm_wrestling'), ru: 'Армрестлинг'},
      {id: 'id--powerlifting', viewName: t('leftMenu.tags.powerlifting'), ru: 'Пауэрлифтинг'},
      {id: 'id--dance_sport', viewName: t('leftMenu.tags.dance_sport'), ru: 'Танцевальный спорт'},
      {
        id: 'id--aesthetic_gymnastics',
        viewName: t('leftMenu.tags.aesthetic_gymnastics'),
        ru: 'Эстетическая гимнастика'
      },
      {
        id: 'id--improving_gymnastics',
        viewName: t('leftMenu.tags.improving_gymnastics'),
        ru: 'Оздоровительная гимнастика'
      },
      {id: 'id--judo', viewName: t('leftMenu.tags.judo'), ru: 'Дзюдо'},
      {id: 'id--ski_combined', viewName: t('leftMenu.tags.ski_combined'), ru: 'Лыжное двоеборье'},
      {id: 'id--snowboard', viewName: t('leftMenu.tags.snowboard'), ru: 'Сноуборд'},
      {id: 'id--freestyl', viewName: t('leftMenu.tags.freestyl'), ru: 'Фристайл'},
      {id: 'id--alpine_skiing', viewName: t('leftMenu.tags.alpine_skiing'), ru: 'Горнолыжный спорт'},
      {id: 'id--cycling_bmx', viewName: t('leftMenu.tags.cycling_bmx'), ru: 'Велосипедный спорт - ВМХ'},
      {id: 'id--skateboarding', viewName: t('leftMenu.tags.skateboarding'), ru: 'Скейтбординг'},
      {id: 'id--bodybuilding', viewName: t('leftMenu.tags.bodybuilding'), ru: 'Бодибилдинг'},
      {id: 'id--chess', viewName: t('leftMenu.tags.chess'), ru: 'Шахматы'},
      {id: 'id--health_run', viewName: t('leftMenu.tags.health_run'), ru: 'Оздоровительный бег'},
      {id: 'id--taekwondo', viewName: t('leftMenu.tags.taekwondo'), ru: 'Тхэквондо'},
      {id: 'id--wrestling', viewName: t('leftMenu.tags.wrestling'), ru: 'Спортивная борьба'},
      {id: 'id--aikido', viewName: t('leftMenu.tags.aikido'), ru: 'Айкидо'},
      {id: 'id--wushu', viewName: t('leftMenu.tags.wushu'), ru: 'Ушу'},
      {id: 'id--complex_combat', viewName: t('leftMenu.tags.complex_combat'), ru: 'Комплексное единоборство'},
      {id: 'id--bullet_shooting', viewName: t('leftMenu.tags.bullet_shooting'), ru: 'Пулевая стрельба'},
      {id: 'id--weightlifting', viewName: t('leftMenu.tags.weightlifting'), ru: 'Тяжелая атлетика'},
      {id: 'id--aircraft_modeling', viewName: t('leftMenu.tags.aircraft_modeling'), ru: 'Авиамодельный спорт'},
      {id: 'id--aerobics', viewName: t('leftMenu.tags.aerobics'), ru: 'Аэробика'},
      {id: 'id--figure_skating', viewName: t('leftMenu.tags.figure_skating'), ru: 'Фигурное катание на коньках'},
      {id: 'id--urban_sports', viewName: t('leftMenu.tags.urban_sports'), ru: 'Городской спорт'},
      {
        id: 'id--shooting_from_a_crossbow',
        viewName: t('leftMenu.tags.shooting_from_a_crossbow'),
        ru: 'Стрельба из арбалета'
      },
      {id: 'id--sports_tourism', viewName: t('leftMenu.tags.sports_tourism'), ru: 'Спортивный туризм'},
      {id: 'id--floorbal', viewName: t('leftMenu.tags.floorbal'), ru: 'Флорбол'},
      {id: 'id--motor_sport', viewName: t('leftMenu.tags.motor_sport'), ru: 'Автомобильный спорт'},
      {
        id: 'id--cycling_mountain_biking',
        viewName: t('leftMenu.tags.cycling_mountain_biking'),
        ru: 'Велосипедный спорт - Маунтинбайк'
      },
      {id: 'id--polyathlon', viewName: t('leftMenu.tags.polyathlon'), ru: 'Полиатлон'},
      {
        id: 'id--shooting_from_regular_or_service_weapons',
        viewName: t('leftMenu.tags.shooting_from_regular_or_service_weapons'),
        ru: 'Стрельба из штатного или табельного оружия'
      },
      {
        id: 'id--shooting_from_combat_handguns',
        viewName: t('leftMenu.tags.shooting_from_combat_handguns'),
        ru: 'Стрельба из боевого ручного стрелкового оружия'
      },
      {id: 'id--archery', viewName: t('leftMenu.tags.archery'), ru: 'Стрельба из лука'},
      {id: 'id--skiing', viewName: t('leftMenu.tags.skiing'), ru: 'Катание на лыжах'},
      {id: 'id--checkers', viewName: t('leftMenu.tags.checkers'), ru: 'Шашки'},
      {id: 'id--board_games', viewName: t('leftMenu.tags.board_games'), ru: 'Настольные игры'},
      {id: 'id--curling', viewName: t('leftMenu.tags.curling'), ru: 'Кёрлинг'},
      {id: 'id--equestrian', viewName: t('leftMenu.tags.equestrian'), ru: 'Конный спорт'},
      {id: 'id--yoga', viewName: t('leftMenu.tags.yoga'), ru: 'Йога'},
      {id: 'id--darts', viewName: t('leftMenu.tags.darts'), ru: 'Дартс'},
      {id: 'id--rowing', viewName: t('leftMenu.tags.rowing'), ru: 'Гребной спорт'},
      {id: 'id--sailing', viewName: t('leftMenu.tags.sailing'), ru: 'Парусный спорт'},
      {id: 'id--rowing_slalom', viewName: t('leftMenu.tags.rowing_slalom'), ru: 'Гребной слалом'},
      {
        id: 'id--kayaking_and_canoeing',
        viewName: t('leftMenu.tags.kayaking_and_canoeing'),
        ru: 'Гребля на байдарках и каноэ'
      },
      {id: 'id--waterskiing', viewName: t('leftMenu.tags.waterskiing'), ru: 'Воднолыжный спорт'},
      {id: 'id--armlifting', viewName: t('leftMenu.tags.armlifting'), ru: 'Армлифтинг'},
      {id: 'id--gymnastics', viewName: t('leftMenu.tags.gymnastics'), ru: 'Гимнастика'},
      {id: 'id--mas_wrestling', viewName: t('leftMenu.tags.mas_wrestling'), ru: 'Мас-рестлинг'},
      {id: 'id--thai_boxing', viewName: t('leftMenu.tags.thai_boxing'), ru: 'Тайский бокс'},
      {id: 'id--cheerleading', viewName: t('leftMenu.tags.cheerleading'), ru: 'Черлидинг'},
      {id: 'id--bandy', viewName: t('leftMenu.tags.bandy'), ru: 'Хоккей с мячом'},
      {id: 'id--sports_aerobics', viewName: t('leftMenu.tags.sports_aerobics'), ru: 'Спортивная аэробика'},
      {id: 'id--football_freestyle', viewName: t('leftMenu.tags.football_freestyle'), ru: 'Футбольный фристайл'},
      {
        id: 'id--oriental_martial_arts',
        viewName: t('leftMenu.tags.oriental_martial_arts'),
        ru: 'Восточное боевое единоборство'
      },
      {id: 'id--kettlebell_zifting', viewName: t('leftMenu.tags.kettlebell_zifting'), ru: 'Гиревой спорт'},
      {id: 'id--mixed_martial_arts', viewName: t('leftMenu.tags.mixed_martial_arts'), ru: 'Смешанное боевое единоборство (ММА)'},
      {id: 'id--hand_to_hand_fight', viewName: t('leftMenu.tags.hand_to_hand_fight'), ru: 'Рукопашный бой'},
      {id: 'id--biathlon', viewName: t('leftMenu.tags.biathlon'), ru: 'Биатлон'},
      {id: 'id--kendo', viewName: t('leftMenu.tags.kendo'), ru: 'Кендо'},
      {id: 'id--mountaineering', viewName: t('leftMenu.tags.mountaineering'), ru: 'Альпинизм'},
      {id: 'id--practical_shooting', viewName: t('leftMenu.tags.practical_shooting'), ru: 'Практическая стрельба'},
      {id: 'id--billiard_sport', viewName: t('leftMenu.tags.billiard_sport'), ru: 'Бильярдный спорт'},
      {
        id: 'id--army_hand_to_hand_combat',
        viewName: t('leftMenu.tags.army_hand_to_hand_combat'),
        ru: 'Армейский рукопашный бой'
      },
      {id: 'id--mini_golf', viewName: t('leftMenu.tags.mini_golf'), ru: 'Мини-гольф'},
      {id: 'id--underwater', viewName: t('leftMenu.tags.underwater'), ru: 'Подводный спорт'},
      {id: 'id--water_pol', viewName: t('leftMenu.tags.water_pol'), ru: 'Водное поло'},
      {id: 'id--diving', viewName: t('leftMenu.tags.diving'), ru: 'Прыжки в воду'},
      {id: 'id--orienteering', viewName: t('leftMenu.tags.orienteering'), ru: 'Спортивное ориентирование'},
      {id: 'id--golf', viewName: t('leftMenu.tags.golf'), ru: 'Гольф'},
      {id: 'id--bowling', viewName: t('leftMenu.tags.bowling'), ru: 'Боулинг'},
      {id: 'id--bowlspor', viewName: t('leftMenu.tags.bowlspor'), ru: 'Боулспорт'},
      {id: 'id--paintball', viewName: t('leftMenu.tags.paintball'), ru: 'Пейнтбол'},
      {id: 'id--capoeira', viewName: t('leftMenu.tags.capoeira'), ru: 'Капоэйра'},
      {id: 'id--belt_wrestling', viewName: t('leftMenu.tags.belt_wrestling'), ru: 'Борьба на поясах'},
      {id: 'id--chir_sport', viewName: t('leftMenu.tags.chir_sport'), ru: 'Чир спорт'},
      {id: 'id--nordic_walking', viewName: t('leftMenu.tags.nordic_walking'), ru: 'Скандинавская ходьба'},
      {
        id: 'id--rowing_and_sailing_combined',
        viewName: t('leftMenu.tags.rowing_and_sailing_combined'),
        ru: 'Гребно-парусное двоеборье'
      },
      {id: 'id--zumba', viewName: t('leftMenu.tags.zumba'), ru: 'Зумба'},
      {id: 'id--american_football', viewName: t('leftMenu.tags.american_football'), ru: 'Американский футбол'},
      {
        id: 'id--shooting_from_electronic_weapons',
        viewName: t('leftMenu.tags.shooting_from_electronic_weapons'),
        ru: 'Стрельба из электронного оружия'
      },
      {id: 'id--skeet_shooting', viewName: t('leftMenu.tags.skeet_shooting'), ru: 'Стендовая стрельба'},
      {id: 'id--sports_of_the_Deaf', viewName: t('leftMenu.tags.sports_of_the_Deaf'), ru: 'Спорт глухих'},
      {id: 'id--cycling_highway', viewName: t('leftMenu.tags.cycling_highway'), ru: 'Велосипедный спорт - Шоссе'},
      {id: 'id--cycling_track', viewName: t('leftMenu.tags.cycling_track'), ru: 'Велосипедный спорт - Трек'},
      {
        id: 'id--sports_of_persons_with_oda_impairment',
        viewName: t('leftMenu.tags.sports_of_persons_with_oda_impairment'),
        ru: 'Спорт лиц с поражением ОДА'
      },
      {id: 'id--field_hocke', viewName: t('leftMenu.tags.field_hocke'), ru: 'Хоккей на траве'},
      {id: 'id--kyokushin', viewName: t('leftMenu.tags.kyokushin'), ru: 'Киокусинкай'},
      {id: 'id--sumo', viewName: t('leftMenu.tags.sumo'), ru: 'Сумо'},
      {id: 'id--softball', viewName: t('leftMenu.tags.softball'), ru: 'Софтбол'},
      {id: 'id--baseball', viewName: t('leftMenu.tags.baseball'), ru: 'Бейсбол'},
      {
        id: 'id--sports_for_persons_with_disabilities_of_all_categories',
        viewName: t('leftMenu.tags.sports_for_persons_with_disabilities_of_all_categories'),
        ru: 'Спорт для лиц с ограниченными возможностями здоровья всех категорий'
      },
      {id: 'id--boccia', viewName: t('leftMenu.tags.boccia'), ru: 'Бочча'},
      {id: 'id--modern_pentathlon', viewName: t('leftMenu.tags.modern_pentathlon'), ru: 'Современное пятиборье'},
      {id: 'id--all_style_karate', viewName: t('leftMenu.tags.all_style_karate'), ru: 'Всестилевое каратэ'},
      {id: 'id--scooter', viewName: t('leftMenu.tags.scooter'), ru: 'Самокатный спорт'},
      {id: 'id--ship_Modeling', viewName: t('leftMenu.tags.ship_Modeling'), ru: 'Судомодельный спорт'},
      {id: 'id--automodel_sport', viewName: t('leftMenu.tags.automodel_sport'), ru: 'Автомодельный спорт'},
      {id: 'id--novus', viewName: t('leftMenu.tags.novus'), ru: 'Новус'},
      {id: 'id--airsoft', viewName: t('leftMenu.tags.airsoft'), ru: 'Страйкбол'},
      {id: 'id--motorcycle_sport', viewName: t('leftMenu.tags.motorcycle_sport'), ru: 'Мотоциклетный спорт'},
      {id: 'id--parachuting', viewName: t('leftMenu.tags.parachuting'), ru: 'Парашютный спорт'},
      {id: 'id--computer_sports', viewName: t('leftMenu.tags.computer_sports'), ru: 'Компьютерный спорт'},
      {id: 'id--boating', viewName: t('leftMenu.tags.boating'), ru: 'Гребля на шлюпках'},
      {id: 'id--sports_of_the_blind', viewName: t('leftMenu.tags.sports_of_the_blind'), ru: 'Спорт слепых'},
    ];
  }, [t])

  const [activeSportTagIds, setActiveSportTagIds] = useState( [
    'id--football',
    'id--hockey',
    'id--boxing'
  ]) // null || [id--Хоккей]



  async function fetchData() {
    setRecommendedItems(DETAILT_RECOMENDED_ITEMS)
    setAllObjects(ALL_OBJECTS_JSON)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filtredRecommendedItems = useMemo(() => {
    if (!activeSportTagIds?.length) {
      return recommendedItems
    }
    let returnedItems = [...recommendedItems]
    const filteredTags = sportsTags.filter(sportTag => activeSportTagIds.some(activeTag => activeTag === sportTag.id))
    const tagsRuNames = {}
    if (!filteredTags.length) {
      return returnedItems
    }
    filteredTags.forEach((filterTag => tagsRuNames[filterTag.ru] = true))
    returnedItems = returnedItems.filter((item) =>
      filteredTags.every(filterTag => JSON.parse(item.sport_types_ru).some(sportTag => sportTag === filterTag.ru))
    )
    return returnedItems
  }, [activeSportTagIds, recommendedItems])

  const filtredAllObjects = useMemo(() => {
    if (!activeSportTagIds?.length) {
      return allObjects
    }
    const newReturnedItems = []

    const filteredTags = sportsTags.filter(sportTag => activeSportTagIds.some(activeTag => activeTag === sportTag.id))
    if (!filteredTags.length) {
      return allObjects
    }
    for (let i = 0, len = allObjects.length; i < len; i++) {
      const item = allObjects[i]
      const itemTags = JSON.parse(item.sport_type)
      if (filteredTags.every(filterTag => itemTags.includes(filterTag.ru))) {
        newReturnedItems.push(item)
      }
    }
    return newReturnedItems
  }, [activeSportTagIds, allObjects])

  return (
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
      <div className={styles.main__content}>
        <LeftPanel
          activeSportTagIds={activeSportTagIds}
          setActiveSportTagIds={setActiveSportTagIds}
          langKey={langKey}
          sportsTags={sportsTags}
        />
        <ContentMap
          recommendedItems={filtredRecommendedItems}
          allObjects={filtredAllObjects}
        />
      </div>
    </div>
  )
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
}

export default Main;
