import React, {useEffect, useMemo, useState} from 'react';
import styles from './Main.module.scss';
import Slider from "react-slick";

//8. Добавить статичные текста в конфиги переводов

import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import {VirtualKeyboard} from "../../components/VirtualKeyboard/VirtualKeyboard";
import axios from "axios";
import {useTranslation} from "react-i18next";


const DEFAULT_LANG_KEY = 'ru'

const TRANSLATION_LANGUAGES = {
  en: {viewName: 'RUS', nativeName: 'English'},
  ru: {viewName: 'ENG', nativeName: 'Russian'}
};

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

const SWIPER_SETTINGS = {
  dots: true,
  infinite: false,
  arrows: false,
  swipeToSlide: true,
  swipe: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

function Main() {
  const [langKey, setLangKey] = useState(DEFAULT_LANG_KEY)
  const {t, i18n} = useTranslation();


  const sportsTag = useMemo(() => {
    return [
      {id: 'id--Хоккей', viewName: t('leftMenu.tags.hockey')},
      {id: 'id--Футбол', viewName: t('leftMenu.tags.soccer')},
      {id: 'id--Сквош', viewName: t('leftMenu.tags.squash')},
      {id: 'id--Теннис', viewName: t('leftMenu.tags.tennis')},
      {id: 'id--Айкидо', viewName: t('leftMenu.tags.aikido')},
      {id: 'id--Бокс', viewName: t('leftMenu.tags.boxing')},
      {id: 'id--Аквааэробика', viewName: t('leftMenu.tags.aqua_aerobicsot')},
      {id: 'id--Альпинизм', viewName: t('leftMenu.tags.mountaineering')},
      {id: 'id--Бадминтон', viewName: t('leftMenu.tags.badminton')},
      {id: 'id--Армлифтинг', viewName: t('leftMenu.tags.armlifting')},
      {id: 'id--Аэробика', viewName: t('leftMenu.tags.aerobics')},
      {id: 'id--Баскетбол', viewName: t('leftMenu.tags.basketball')},
      {id: 'id--Бейсбол', viewName: t('leftMenu.tags.baseball')},
      {id: 'id--Волейбол', viewName: t('leftMenu.tags.volleyball')},
    ];
  }, [t])

  const [activeSportTagId, setActiveSportTagId] = useState(null)

  const [allItems, setAllItems] = useState()

  const RECOMENDED_API_URL = 'https://exhibition-muf-maps.truemachine.space/api/objects'


  async function fetchData() {
    try {
      await axios.get(RECOMENDED_API_URL).then((response) => {
        const allItemsFromResponse = response.data.data
        setAllItems(allItemsFromResponse.items)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 1500);


  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setSearchResults(allItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())));

      } else if (searchTerm) {
        setSearchResults([]);
      } else {
        setSearchResults(allItems);
      }
    },
    [debouncedSearchTerm, allItems]
  );

  function handleSportTagClick(sportTagId) {
    if (sportTagId === activeSportTagId) {
      setActiveSportTagId(null)
      return
    }
    setActiveSportTagId(sportTagId)
  }

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
        <div className={styles.leftFloatMenu}>
          <h3>{t('leftMenu.sportsTypeTitle')}</h3>
          <div className={styles.leftFloatMenu__search}>
            <VirtualKeyboard langKey={langKey} onChange={text => setSearchTerm(text)}/>
          </div>
          <div className={styles.leftFloatMenu__sportsTag}>
            {
              sportsTag.map(sportTag => (
                  <div key={sportTag.id}
                       onClick={() => handleSportTagClick(sportTag.id)}
                       className={
                         styles.sportTag + ' ' +
                         (sportTag.id === activeSportTagId ? styles['sportTag--m-active'] : '')
                       }>
                    {sportTag.viewName}
                  </div>
                )
              )
            }
          </div>
          <div className={styles.leftFloatMenu__resultsContainer}>
            <h3>{t('searchResultTitle')}</h3>
            <div className={styles.leftFloatMenu__resultsItems}>
              {searchResults?.length && (
                searchResults.map(item => <span key={item.id}>{item.name}</span>)
              )}
            </div>
          </div>
        </div>
        <div className={styles.contentMap}>
          {/*<MapComponent/>*/}
          <div className={styles.contentMap__recommendation}>
            <h2>{t('map.recomendationTitle')}</h2>
            <Slider {...SWIPER_SETTINGS}>
              <RecommendationCard/>
              <RecommendationCard/>
              <RecommendationCard/>
              <RecommendationCard/>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;