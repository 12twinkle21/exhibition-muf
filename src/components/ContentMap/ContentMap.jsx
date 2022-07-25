import React, {useRef} from 'react';
import styles from './ContentMap.module.scss';
import Slider from "react-slick";
import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';

function ContentMap(props) {
  const {allObjects, recommendedItems} = props
  const sliderContainer = useRef()
  
  const SWIPER_SETTINGS = {
    dots: false,
    arrows: true,
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
          <Slider {...SWIPER_SETTINGS} infinite={recommendedItems?.length > 3}>
            {
              recommendedItems.map((items) => (
                <RecommendationCard items={items} data-key={`${items.name_ru}_${items.id}`} key={`${items.name_ru}_${items.id}`}/>)
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