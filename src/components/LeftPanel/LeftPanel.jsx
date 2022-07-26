import React, {useEffect, useState} from 'react';
import {VirtualKeyboard} from "../VirtualKeyboard/VirtualKeyboard";
import {useTranslation} from "react-i18next";
import styles from './LeftPanel.module.scss';
import {useDebounce} from "../../pages/Main/Main";

function LeftPanel(props) {
  const {
    activeSportTagIds,
    setActiveSportTagIds,
    langKey,
    sportsTags,
  } = props
  const {t} = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setSearchResults(sportsTags.filter((item) => item.viewName.toLowerCase().includes(searchTerm.toLowerCase()) || item.ru.toLowerCase().includes(searchTerm.toLowerCase()) || activeSportTagIds.includes(item.id)));
      } else if (searchTerm) {
        setSearchResults([]);
      } else {
        setSearchResults(sportsTags);
      }
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

export default LeftPanel;