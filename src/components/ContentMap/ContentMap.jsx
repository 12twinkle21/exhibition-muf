import React from 'react';
import styles from './ContentMap.module.scss';
import Slider from "react-slick";
import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import {useTranslation} from "react-i18next";

const SWIPER_SETTINGS = {
  dots: false,
  arrows: true,
  centerMode: true,
  infinite: true,
  swipeToSlide: true,
  swipe: false,
  speed: 500,
  slidesToShow: 2.3,
  slidesToScroll: 1
};

function ContentMap(props) {
  const {allObjects, recommendedItems} = props
  const {t} = useTranslation();

  return (
    <div className={styles.contentMap}>
      <MapComponent mapMarks={allObjects}/>
      <div className={styles.contentMap__recommendation}>
        <h2>{t('map.recomendationTitle')}</h2>
        <Slider {...SWIPER_SETTINGS}>
          {
            recommendedItems?.length &&
            recommendedItems.map((items) => (
              <RecommendationCard items={items} key={`${items.name_ru}_${items.id}`}/>)
            )
          }
        </Slider>
      </div>
    </div>
  )
}

export default ContentMap;