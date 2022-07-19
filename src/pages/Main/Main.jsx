import React, {startTransition, useEffect, useMemo, useState, useTransition} from 'react';
import styles from './Main.module.scss';
import Slider from "react-slick";

//1. Прикрутить апи рекомендаций +
//2. Сделать дебаунс на 1.5сек +
//3. Поправить дизайн рекомендаций в панели +
//4. Сделать теги 



import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import {VirtualKeyboard} from "../../components/VirtualKeyboard/VirtualKeyboard";
import axios from "axios";


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

function Main() {

  let sports = ['Хоккей', 'Футбол', 'Сквош', 'Теннис', 'Айкидо', 'Аквааэробика', 'Альпинизм', 'Бадминтон', 'Армлифтинг', 'Аэробика', 'Баскетбол', 'Бейсбол', 'Волейбол', 'Бокс'];

  let results = ['Название объекта №1', 'Название объекта №2', 'Название объекта №3', 'Название объекта №4', 'Название объекта №5', 'Название объекта №6', 'Название объекта №7', 'Название объекта №8', 'Название объекта №9', 'Название объекта №10', 'Название объекта №11', 'Название объекта №12', 'Название объекта №13', 'Название объекта №14', 'Название объекта №15'];

  let settings = {
    dots: true,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    swipe: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


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


  return (
    <div className={styles.main}>
      <div className={styles.main__top}>
        <h1>Где мне заняться спортом?</h1>
      </div>
      <div className={styles.main__content}>
        <div className={styles.contentMenu}>
          <h2>Поиск</h2>
          <h3>Виды спорта</h3>
          <div className={styles.contentMenu__search}>
            <VirtualKeyboard langKey={'ru'} onChange={text => setSearchTerm(text)}/>
            {/*<input type='text' placeholder='Искать'/>*/}
            {/*<img src='img/iconSearch.png' width={246} height={212} alt='Search icon'/>*/}
          </div>
          <div className={styles.contentMenu__sports}>
            {/*{*/}
            {/*  sports.map(sport => <span>{sport}</span>)*/}
            {/*}*/}
          </div>
          <div className={styles.contentMenu__results}>
            <h3>Результаты поиска:</h3>
            <div className={styles.contentMenu__resultsItems}>
              {searchResults?.length && (
                searchResults.map(item => <span key={item.id}>{item.name}</span>)
              )}
            </div>
          </div>
        </div>
        <div className={styles.contentMap}>
          {/*<MapComponent/>*/}
          <div className={styles.contentMap__recommendation}>
            <h2>Рекомендации:</h2>
            <Slider {...settings}>
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