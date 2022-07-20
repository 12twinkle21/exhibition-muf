import React from 'react';
import styles from './Main.module.scss';
import Slider from "react-slick";
import axios from "axios";

import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';

function Main() {

  const [recommendedItems, setRecommendedItems] = React.useState();
  const [mapItems, setMapItems] = React.useState();
  // console.log(mapItems)
  // console.log(recommendedItems)
  React.useEffect(() => {
    async function fetchData(){
      try {

        await axios.get('https://exhibition-muf-maps.truemachine.space/api/objects/recommended').then((resp) => {
        const recommendedPersons = resp.data.data;
        setRecommendedItems(recommendedPersons.items);
        });
        await axios.get('https://exhibition-muf-maps.truemachine.space/api/objects').then((resp) => {
        const mapPersons = resp.data.data;
        setMapItems(mapPersons.items);
        });
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    } 
    fetchData();
 }, []);

  let mapMarks = mapItems?.length&&mapItems.map((item, index) => [item.latitude, item.longitude]);
  

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
          <input type='text' placeholder='Искать'/>
          <img src='img/iconSearch.png' width={246} height={212} alt='Search icon'/>
          </div>
          <div className={styles.contentMenu__sports}>
            {
              sports.map((sport, index) => <span key={index}>{sport}</span>)
            }
          </div>
          <div className={styles.contentMenu__results}>
            <h3>Результаты поиска:</h3>
            <div className={styles.contentMenu__resultsItems}>
            {
              results.map((result, index) => <span key={index}>{result}</span>)
            }
            </div>
          </div>
        </div>
      <div className={styles.contentMap}>
        <MapComponent mapMarks={mapMarks}/>
        <div className={styles.contentMap__recommendation}>
            <h2>Рекомендации:</h2>
            <Slider {...settings}>
              { 
                recommendedItems?.length&&
                recommendedItems.map((items, index) => <RecommendationCard items={items} key={`${items.name_ru}_${index}`}/>)
              }
            </Slider>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main;