import React, {useEffect, useMemo, useRef, useState} from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import engLand from "simple-keyboard-layouts/build/layouts/english";
import russianLang from "simple-keyboard-layouts/build/layouts/russian";
import styles from './VirtualKeyboard.module.scss';

const ENTER_KEY = '{enter}'
const CLOSE_KEY = '{close}'

const LANGUAGES_STORE = {
  'ru': russianLang,
  'eng': engLand
}

export const VirtualKeyboard = (props) => {
  const {langKey: langKeyFromProps = 'ru', onChange: onChangeFromProps} = props

  const [inputText, setInputText] = useState('')
  const [shiftInfo, setShiftInfo] = useState('default')
  const [langKey, setLangKey] = useState(langKeyFromProps)
  const [showKeyboard, setShowKeyboard] = useState(false)
  console.log(inputText);

  // useEffect(() => {
  //   setInputText(inputText);
  //   onChangeFromProps(inputText)
  //
  // }, [inputText])
  let keyboard = useRef()

  // const onChange = (text) => {
  //   setInputText(text);
  //   onChangeFromProps(text)
  // }

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

  const onChangeInput = event => {
    const input = event.target.value;
    setInputText(input)
    keyboard?.current.setInput(input);
  };

  const toggleShowKeyboard = () => {
    setShowKeyboard(!showKeyboard)
  }

  useEffect(() => setLangKey(langKeyFromProps), [langKeyFromProps])
  const formatterLayout = useMemo(() => {
    const layoutWithCloseBtn = LANGUAGES_STORE[langKey].layout || {default: [], shift: []}
    layoutWithCloseBtn.default[0] = `{close} ${layoutWithCloseBtn.default[0]}`
    layoutWithCloseBtn.shift[0] = `{close} ${layoutWithCloseBtn.shift[0]}`
    layoutWithCloseBtn.default[layoutWithCloseBtn.default.length - 1] = `{space}`
    layoutWithCloseBtn.shift[layoutWithCloseBtn.shift.length - 1] = `{space}`

    return layoutWithCloseBtn
  }, [langKey])

  const onKeyboardInputChange = (text) => {
    setInputText(text)
    onChangeFromProps(text)
  }
  return (
    <div
      className={styles.VirtualKeyboard}>
      <div className={styles.VirtualKeyboard__input + ' ' + styles.input}>
        <input
          value={inputText}
          onClick={handleInputClick}
          onChange={(e) => onKeyboardInputChange(e.target.value)}
          placeholder={"Поиск"}
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