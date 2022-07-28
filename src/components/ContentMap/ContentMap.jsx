import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './ContentMap.module.scss';
import Slider from "react-slick";
import MapComponent from '../../components/MapComponent';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import i18n from "../../i18n";

function ContentMap(props) {
  const {allObjects, recommendedItems} = props
  const sliderContainerRef = useRef(null)

  const [activeRecomendCard, setActiveRecomendCard] = useState(null)

  const isRuLocal = useMemo(() => i18n.language === 'ru', [i18n.language])
  const SWIPER_SETTINGS = useMemo(() => {
    return {
      dots: false,
      swipeToSlide: true,
      centerMode: true,
      swipe: false,
      speed: 500,
      slidesToShow: 2.3,
      slidesToScroll: 1,
      slide: 'aside',
      onReInit: (container) => console.log(container),
      // className: recommendedItems?.length < 3 ? 'slice-center-fork' : ''
      className:'slider-container'
    };
  }, [recommendedItems])

  useEffect(() => {
    if(!sliderContainerRef.current){
      return
    }
    const excludedNodeClass = 'RecommendationCard_recommendationCard__frontLeft'
    const allSlidesNodes = Array.from(sliderContainerRef.current.querySelectorAll('.slick-slide'))
    console.log(allSlidesNodes);
    const filteredSlidersNodes = []
    allSlidesNodes.forEach(slideNode => {
      const sliderContainerNode = slideNode?.parentNode?.parentNode?.parentNode
      if(sliderContainerNode && sliderContainerNode.classList.contains('slider-container')){
        filteredSlidersNodes.push(slideNode)
      }
    })
    console.log(filteredSlidersNodes);
    if(!filteredSlidersNodes.length || recommendedItems?.length >= 3){
      filteredSlidersNodes.map(filteredNode => filteredNode.classList.remove('slick-center-fork'))
      return;
    }
    filteredSlidersNodes.forEach(filteredNode => filteredNode.classList.add('slick-center-fork'))

  }, [recommendedItems, sliderContainerRef])

  return (
    <div className={styles.contentMap}>
      <MapComponent mapMarks={allObjects} activeRecomendCard={activeRecomendCard}/>
      {recommendedItems?.length
        ?       <div className={styles.contentMap__recommendation} ref={sliderContainerRef}>
          <Slider {...SWIPER_SETTINGS} infinite={recommendedItems?.length >= 3} arrows={true}>
            {
              recommendedItems.map((items) => (
                <RecommendationCard activeRecomendCard={activeRecomendCard} setActiveRecomendCard={setActiveRecomendCard} isRuLocal={isRuLocal} items={items} data-key={`${items.name_ru}_${items.id}`} key={`${items.name_ru}_${items.id}`}/>)
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