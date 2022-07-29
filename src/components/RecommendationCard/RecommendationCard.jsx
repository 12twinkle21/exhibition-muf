import React, {useMemo} from 'react';
import styles from './RecommendationCard.module.scss';
import Slider from "react-slick";

function RecommendationCard(props) {
  const {items, isRuLocal, setActiveRecomendCard} = props;
  const [visibleBackCard, setVisibleBackCard] = React.useState(false);
  const onVisibleBackCard = (e) => {
    if(!e.nativeEvent.path.some(node => node.classList.contains('slick-center') || node.classList.contains('slick-center-fork'))){
      return
    }
    if(!visibleBackCard){
      setActiveRecomendCard(items.object_id)
    }else{
      setActiveRecomendCard(null)
    }
    setVisibleBackCard(!visibleBackCard)
  }
  console.log(items)
  const SWIPER_SETTINGS = {
    dots: true,
    infinite: true,
    arrows: true,
    swipeToSlide: true,
    swipe: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const formattedItems = useMemo(() => {
    if (!items.sport_types_ru || !items.sport_types_en) {
      return []
    }
    return isRuLocal ? JSON.parse(items.sport_types_ru) : JSON.parse(items.sport_types_en)
  }, [items, isRuLocal])

  return (

    <div className={styles.recommendationCard + ' ' + (visibleBackCard && 'recommendationCard--m-active')}>
      <div className={styles.recommendationCard__front + ' ' + 'recommendationCard__front'}>
        <div
          className={styles.recommendationCard__frontLeft + ' ' + 'RecommendationCard_recommendationCard__frontLeft'}>
          <Slider {...SWIPER_SETTINGS} className={styles.innerSlider}>
            {
              items.images?.length &&
              items.images.map((item,) => (
                <img key={`${items.id}${item}`} src={item}/>)
              )
            }
          </Slider>

        </div>
        <div className={styles.recommendationCard__frontRight + ' ' + 'recommendationCard__frontRight'}
             onClick={onVisibleBackCard}>
          <div className={styles.recommendationCard__top}>
            <div className={styles.recommendationCard__title}>
              <h3>{isRuLocal ? items.name_ru : items.name_en}</h3>
            </div>
            <div className={styles.recommendationCard__sportList}>
              <ul>
                {
                  formattedItems.map((sport) => <li key={`${items.id}${sport}`}>
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M125 90L55 50V130L125 90Z" fill="white"/>
                    </svg>
                    {sport}</li>)
                }
              </ul>
            </div>
          </div>
          <div className={styles.recommendationCard__address}>
            <svg width="146" height="186" viewBox="0 0 146 186" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M73.0859 41.4375C66.9671 41.4375 60.9856 43.252 55.898 46.6514C50.8103 50.0509 46.845 54.8826 44.5034 60.5357C42.1618 66.1888 41.5492 72.4093 42.7429 78.4106C43.9366 84.4119 46.8831 89.9244 51.2098 94.2511C55.5365 98.5778 61.049 101.524 67.0503 102.718C73.0516 103.912 79.2721 103.299 84.9252 100.958C90.5783 98.6159 95.4101 94.6506 98.8095 89.563C102.209 84.4753 104.023 78.4939 104.023 72.375C104.023 64.1699 100.764 56.3008 94.9621 50.4989C89.1601 44.697 81.2911 41.4375 73.0859 41.4375ZM73.0859 96.4375C68.3268 96.4375 63.6746 95.0263 59.7175 92.3822C55.7605 89.7382 52.6763 85.9802 50.8551 81.5833C49.0339 77.1865 48.5573 72.3483 49.4858 67.6806C50.4143 63.013 52.706 58.7254 56.0712 55.3602C59.4364 51.995 63.7239 49.7033 68.3916 48.7749C73.0592 47.8464 77.8974 48.3229 82.2943 50.1441C86.6911 51.9654 90.4492 55.0495 93.0932 59.0066C95.7372 62.9636 97.1484 67.6159 97.1484 72.375C97.1258 78.7498 94.5834 84.857 90.0757 89.3647C85.568 93.8724 79.4607 96.4149 73.0859 96.4375ZM73.0859 0.1875C53.9476 0.210243 35.5996 7.82299 22.0668 21.3558C8.53393 34.8887 0.921181 53.2367 0.898438 72.375C0.898438 98.5 13.1016 126.344 36.1328 152.812C46.5807 164.85 58.3087 175.714 71.1094 185.211C71.6927 185.606 72.3812 185.818 73.0859 185.818C73.7906 185.818 74.4791 185.606 75.0625 185.211C87.8632 175.714 99.5912 164.85 110.039 152.812C133.07 126.344 145.273 98.5 145.273 72.375C145.251 53.2367 137.638 34.8887 124.105 21.3558C110.572 7.82299 92.2243 0.210243 73.0859 0.1875ZM104.969 148.172C95.4185 159.23 84.7322 169.254 73.0859 178.078C61.4594 169.231 50.7754 159.209 41.2031 148.172C25.9922 130.641 7.77344 103.227 7.77344 72.375C7.77344 55.053 14.6546 38.4406 26.903 26.1921C39.1515 13.9436 55.764 7.0625 73.0859 7.0625C90.4079 7.0625 107.02 13.9436 119.269 26.1921C131.517 38.4406 138.398 55.053 138.398 72.375C138.398 103.227 120.266 130.641 104.969 148.172Z"
                fill="white"/>
            </svg>
            <p>{items.address}</p>
          </div>
        </div>
      </div>
      <div className={styles.recommendationCard__back + ' ' + 'recommendationCard__back'} onClick={onVisibleBackCard}>
        <p>{isRuLocal ? items.description_ru : items.description_en}</p>
      </div>
    </div>

  )
}

export default RecommendationCard;