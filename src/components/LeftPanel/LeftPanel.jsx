import React, {useEffect, useRef, useState} from 'react';
import {VirtualKeyboard} from "../VirtualKeyboard/VirtualKeyboard";
import {useTranslation} from "react-i18next";
import styles from './LeftPanel.module.scss';

function LeftPanel(props) {
  const {
    activeSportTagIds,
    setActiveSportTagIds,
    langKey,
    sportsTags,
    startTransition
  } = props
  const {t} = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useThrottle(searchTerm, 1000);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(
    () => {
      startTransition(() => {
        if (debouncedSearchTerm) {
          setSearchResults(
            sportsTags
              .filter((item) =>
                item.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.ru.toLowerCase().includes(searchTerm.toLowerCase()) ||
                activeSportTagIds.includes(item.id))
              .sort((item1, item2) => {
                const isFirstItemActive = activeSportTagIds.includes(item1.id)
                const isSecondItemActive = activeSportTagIds.includes(item2.id)
                if (isFirstItemActive > isSecondItemActive) {
                  return -1
                } else if (isFirstItemActive > isSecondItemActive) {
                  return 1
                } else {
                  return 0
                }
              }));
        } else if (searchTerm) {
          setSearchResults([]);
        } else {
          setSearchResults(sportsTags.sort((item1, item2) => {
            const isFirstItemActive = activeSportTagIds.includes(item1.id)
            const isSecondItemActive = activeSportTagIds.includes(item2.id)
            if (isFirstItemActive > isSecondItemActive) {
              return -1
            } else if (isFirstItemActive > isSecondItemActive) {
              return 1
            } else {
              return 0
            }
          }))
        }
      })
    },
    [debouncedSearchTerm, sportsTags, activeSportTagIds]
  );

  function handleSportTagClick(newTagId) {
    if (activeSportTagIds && activeSportTagIds?.some(activeTag => activeTag === newTagId)) {
      const tagsWithoutEventTag = activeSportTagIds.filter(activeTag => activeTag !== newTagId)
      setActiveSportTagIds(tagsWithoutEventTag)
      return
    }
    if (activeSportTagIds?.length) {
      setActiveSportTagIds([newTagId, ...activeSportTagIds])
      return;
    }
    setActiveSportTagIds([newTagId])
  }

  return (
    <div className={styles.leftFloatMenu}>
      <h3>{t('leftMenu.sportsTypeTitle')}</h3>
      <div className={styles.leftFloatMenu__search}>
        <VirtualKeyboard langKey={langKey} onChange={text => setSearchTerm(text)}/>
      </div>
      <div className={styles.leftFloatMenu__sportsTagsScrollContainer}>
        <div className={styles.leftFloatMenu__sportsTags}>
          {searchResults.length
            ? searchResults.map(sportTag => (
                <div key={sportTag.id}
                     onClick={() => handleSportTagClick(sportTag.id)}
                     className={
                       styles.sportTag + ' ' +
                       (activeSportTagIds?.some(activeTag => activeTag === sportTag.id) ? styles['sportTag--m-active'] : '')
                     }>
                  {sportTag.viewName}
                </div>
              )
            )
            : <div>
              <h4>{t('leftMenu.notFound')}</h4>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

function useThrottle(value, interval = 500) {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastExecuted = useRef(Date.now())

  useEffect(() => {
    if (Date.now() >= lastExecuted.current + interval) {
      lastExecuted.current = Date.now()
      setThrottledValue(value)
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now()
        setThrottledValue(value)
      }, interval)

      return () => clearTimeout(timerId)
    }
  }, [value, interval])

  return throttledValue
}


export default LeftPanel;