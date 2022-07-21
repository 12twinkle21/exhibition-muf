import React, {useMemo} from 'react';
import styles from './RecommendationCard.module.scss';
import Slider from "react-slick";

function RecommendationCard(props) {
  const {items} = props

  const [visibleBackCard, setVisibleBackCard] = React.useState(false);

  const onVisibleBackCard = () => {
    setVisibleBackCard(!visibleBackCard);
  }

  let sliderImgs = ["http://dummyimage.com/3469x3453", "http://dummyimage.com/3469x3453", "http://dummyimage.com/3469x3453"];

  const SWIPER_SETTINGS = {
    dots: false,
    infinite: true,
    arrows: true,
    swipeToSlide: true,
    swipe: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const formattedItems = useMemo(() => {
    if (!items.sport_types_ru) {
      return []
    }
    return JSON.parse(items.sport_types_ru)
  }, [items])

  return (

    <div className={styles.recommendationCard}>
      {!visibleBackCard ?
        <div className={styles.recommendationCard__front}>
          <div
            className={styles.recommendationCard__frontLeft + ' ' + 'RecommendationCard_recommendationCard__frontLeft'}>
            {/*<Slider {...SWIPER_SETTINGS}>*/}
            {/*    {*/}
            {/*      sliderImgs?.length &&*/}
            {/*      sliderImgs.map((items, index) => (*/}
            {/*        <img src={items}/>)*/}
            {/*      )*/}
            {/*    }*/}
            {/*  </Slider>*/}
          </div>
          <div className={styles.recommendationCard__frontRight} onClick={onVisibleBackCard}>
            <div className={styles.recommendationCard__top}>
              <div className={styles.recommendationCard__title}>
                <h3>{items.name_ru}</h3>
              </div>
              <div className={styles.recommendationCard__sportList}>
                <ul>

                  {
                    formattedItems.map((sport) => <li key={`${sport}${items.id}`}>{sport}</li>)
                  }
                </ul>
              </div>
            </div>
            <div className={styles.recommendationCard__address}>
              <p>{items.address}</p>
            </div>
          </div>
        </div>
        :
        <div className={styles.recommendationCard__back} onClick={onVisibleBackCard}>
          <p>Большая спортивная арена «Лужники» — это главный стадион страны. Здесь проходили такие мероприятия как
            финал чемпионата мира по футболу в 2018 г., открытие XXII Олимпийских игр, финал Лиги Чемпионов УЕФА 2008,
            чемпионат мира по легкой атлетике и много другое. Арена является самым большим стадионом в Восточной Европе.
            В 2013 году началась реконструкция стадиона к чемпионату миру по футболу. В рамках реконструкции общая
            площадь арены увеличилась почти в два раза. Обновленный стадион стал вмещать 81 тысячу зрителей. Главным
            преимуществом арены стало уникальное футбольное поле с натуральным газоном, соответствующим всем стандартам
            ФИФА. На верхнем уровне арены появилась смотровая площадка. Важнейшей особенностью реконструкции стало
            полное обновление арены внутри при сохранении внешних стен. </p>
        </div>
      }
    </div>

  )
}

export default RecommendationCard;