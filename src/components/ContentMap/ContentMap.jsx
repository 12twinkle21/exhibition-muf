import React, {useMemo, useRef} from 'react';
import styles from './ContentMap.module.scss';
import Slider from "react-slick";
import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import i18n from "../../i18n";

function ContentMap(props) {
  const {allObjects, recommendedItems} = props
  const sliderContainer = useRef()

  const isRuLocal = useMemo(() => i18n.language === 'ru', [i18n.language])

  const SWIPER_SETTINGS = {
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    swipe: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.contentMap}>
      <MapComponent mapMarks={allObjects}/>
      {recommendedItems?.length
        ?       <div className={styles.contentMap__recommendation} ref={sliderContainer}>
          <Slider {...SWIPER_SETTINGS} infinite={recommendedItems?.length > 3} arrows={true}>
            {
              recommendedItems.map((items) => (
                <RecommendationCard isRuLocal={isRuLocal} items={items} data-key={`${items.name_ru}_${items.id}`} key={`${items.name_ru}_${items.id}`}/>)
              )
            }
          </Slider>
        </div>
        : ''
      }
    </div>
  )
}

export default ContentMap;