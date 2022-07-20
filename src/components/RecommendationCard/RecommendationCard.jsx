import React, {useMemo} from 'react';
import styles from './RecommendationCard.module.scss';

function RecommendationCard(props) {
  const {items} = props
  let [visibleBackCard, setVisibleBackCard] = React.useState(false);
  let onVisibleBackCard = () => {
    setVisibleBackCard(!visibleBackCard);
  }

  const formattedItems = useMemo(() => {
    if(!items.sport_types_ru){
      return []
    }
    return JSON.parse(items.sport_types_ru)
  }, [items])

  return (

    <div className={styles.recommendationCard} onClick={onVisibleBackCard}>
      {!visibleBackCard ?
        <div className={styles.recommendationCard__front}>
          <img src='img/cardTouchTip.png' width={880} height={880} alt='Touch Tip'/>
          <div className={styles.recommendationCard__top}>
            <div className={styles.recommendationCard__title}>
              <h3>{items.name_ru}</h3>
            </div>
            <div className={styles.recommendationCard__sportList}>
              <ul>

                {
                  formattedItems.map((sport, index) => <li key={index}>{sport}</li>)
                }
              </ul>
            </div>
          </div>
          <div className={styles.recommendationCard__address}>
            <svg width="206" height="292" viewBox="0 0 206 292" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M102.673 0C78.2018 0 54.5005 8.76948 35.895 24.7086C17.2894 40.6477 5.02402 62.6899 1.23182 86.8653C-2.56039 111.041 2.47614 135.808 15.3341 156.666L96.8073 287.971C98.3479 290.519 101.133 292 104.095 292C107.058 292 109.843 290.4 111.384 287.852L190.783 155.125C203.167 134.268 207.789 109.678 203.759 85.7395C199.73 61.8011 187.406 40.0552 168.918 24.3531C150.431 8.71023 126.967 0.0592532 102.673 0ZM176.147 146.474L103.977 266.995L29.8511 147.541C19.1856 130.239 14.9786 109.678 18.0597 89.5909C21.1409 69.5041 31.2732 51.1356 46.6198 37.8628C61.9664 24.5901 81.5792 17.1834 101.962 17.0057C122.345 16.8279 142.077 23.9383 157.66 36.974C173.244 50.0097 183.673 68.2005 187.05 88.2873C190.427 108.315 186.576 128.935 176.207 146.415L176.147 146.474Z"
                    fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M102.669 51.3125C89.0412 51.3125 76.0055 56.7046 66.3472 66.3628C56.7482 75.9619 51.2969 89.0568 51.2969 102.685C51.2969 116.313 56.6889 129.349 66.3472 139.007C75.9462 148.606 89.0412 154.058 102.669 154.058C116.298 154.058 129.333 148.666 138.992 139.007C148.591 129.408 154.042 116.313 154.042 102.685C154.042 89.0568 148.591 76.0211 138.992 66.4221C129.333 56.7638 116.298 51.3718 102.669 51.3125ZM102.669 136.993C93.5445 136.993 84.8342 133.378 78.3756 126.979C71.917 120.52 68.3026 111.81 68.3026 102.685C68.3026 93.5601 71.917 84.8498 78.3164 78.3912C84.775 71.9326 93.4852 68.3182 102.61 68.3182C111.735 68.3182 120.445 71.9326 126.904 78.3912C133.363 84.8498 136.977 93.5601 136.977 102.685C136.977 111.751 133.363 120.52 126.904 126.92C120.505 133.378 111.735 136.993 102.669 136.993Z"
                    fill="white"/>
            </svg>
            <p>{items.address}</p>
          </div>
        </div>
        :
        <div className={styles.recommendationCard__back}>
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