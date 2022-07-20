import React, {useMemo, useRef, useState} from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import engLand from "simple-keyboard-layouts/build/layouts/english";
import russianLang from "simple-keyboard-layouts/build/layouts/russian";
import styles from './VirtualKeyboard.module.scss';
import { useTranslation } from 'react-i18next';

const ENTER_KEY = '{enter}'
const CLOSE_KEY = '{close}'

const KEYBOARD_LANGUAGES_STORE = {
  'ru': russianLang,
  'en': engLand
}
export const VirtualKeyboard = (props) => {
  const {langKey = 'ru', onChange: onChangeFromProps} = props

  const [inputText, setInputText] = useState('')
  const [shiftInfo, setShiftInfo] = useState('default')
  const [showKeyboard, setShowKeyboard] = useState(false)

  const { t } = useTranslation();
  let keyboard = useRef()

  const onKeyPress = (buttonKey) => {
    if (buttonKey === ENTER_KEY) {
      toggleShowKeyboard()
      return
    }
    if (buttonKey === CLOSE_KEY) {
      setInputText('')
      keyboard?.current.clearInput()
      toggleShowKeyboard()
      return;
    }
    if (buttonKey === "{shift}" || buttonKey === "{lock}") handleShift();
  }

  const handleShift = () => {
    setShiftInfo(shiftInfo === "default" ? "shift" : "default")
  };

  const handleInputClick = () => {
    if (showKeyboard) {
      return
    }
    toggleShowKeyboard()
  }

  const toggleShowKeyboard = () => {
    setShowKeyboard(!showKeyboard)
  }

  const formatterLayout = useMemo(() => {
    const layoutWithCloseBtn = KEYBOARD_LANGUAGES_STORE[langKey].layout || {default: [], shift: []}
    const firstKeyRowDefault = layoutWithCloseBtn.default[0].split(' ').filter((key) => key !== '{close}').join(' ')
    const firstKeyRowShift = layoutWithCloseBtn.shift[0].split(' ').filter((key) => key !== '{close}').join(' ')
    const lastKeyRowDefault = layoutWithCloseBtn.default[layoutWithCloseBtn.default.length - 1]
    const lastKeyRowShift = layoutWithCloseBtn.shift[layoutWithCloseBtn.shift.length - 1]

    layoutWithCloseBtn.default[0] = `{close} ${firstKeyRowDefault}`
    layoutWithCloseBtn.shift[0] = `{close} ${firstKeyRowShift}`
    layoutWithCloseBtn.default[lastKeyRowDefault] = `{space}`
    layoutWithCloseBtn.shift[lastKeyRowShift] = `{space}`

    return layoutWithCloseBtn
  }, [langKey])

  const onKeyboardInputChange = (text) => {
    setInputText(text)
    onChangeFromProps(text)
  }

  return (
    <div
      className={styles.VirtualKeyboard}>
      <div className={styles.input}>
        <input
          value={inputText}
          onClick={handleInputClick}
          onChange={(e) => onKeyboardInputChange(e.target.value)}
          placeholder={t('not_found_title')}
        />
        <div className={styles.input__icon}>
          <img src='img/icon_search.svg' alt='Search icon'/>
        </div>
      </div>
      <div
        className={styles.VirtualKeyboard__keyboard + ' ' + (showKeyboard ? styles['VirtualKeyboard__keyboard--m-visible'] : styles['VirtualKeyboard__keyboard--m-hidden'])}>
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          layoutName={shiftInfo}
          onChange={onKeyboardInputChange}
          onKeyPress={onKeyPress}
          layout={formatterLayout}
        />
      </div>
    </div>
  )
}