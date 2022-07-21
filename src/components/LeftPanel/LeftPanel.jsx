import React, {useEffect, useState} from 'react';
import {VirtualKeyboard} from "../VirtualKeyboard/VirtualKeyboard";
import {useTranslation} from "react-i18next";
import styles from './LeftPanel.module.scss';

function LeftPanel(props) {
  const {
    allObjects,
    searchTerm,
    setSearchTerm,
    activeSportTagIds,
    setActiveSportTagIds,
    langKey,
    sportsTags,
    debouncedSearchTerm
  } = props
  const {t} = useTranslation();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setSearchResults(allObjects.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())));

      } else if (searchTerm) {
        setSearchResults([]);
      } else {
        setSearchResults(allObjects);
      }
    },
    [debouncedSearchTerm, allObjects]
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
        {sportsTags.length &&
          sportsTags.map(sportTag => (
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
        }
      </div>
      </div>
      <div className={styles.leftFloatMenu__resultsContainer}>
        <h3>{t('searchResultTitle')}</h3>
        <div className={styles.leftFloatMenu__resultsItemsScrollContainer}>
          <div className={styles.leftFloatMenu__resultsItems}>
            {searchResults?.length
              ? (
                searchResults.map(item => <span key={item.id}>{item.name}</span>)
              )
              : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel;