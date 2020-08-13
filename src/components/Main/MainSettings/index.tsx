import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { faSun, faMoon, faFont } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTheme, changeAppLang, updateStudySettings } from 'containers/Main/actions';
import {
  eng, ru, studyModesRu, studyModesEng,
} from 'constants/main-page-constants';
import './index.scss';

const Settings: React.FC = () => {
  const [fontSize, setFontSize] = useState((Number(localStorage.getItem('font-size'))) || 1);
  document.body.style.fontSize = `${fontSize}rem`;
  const increaseFontSize = () => {
    if (fontSize >= 1.2) {
      setFontSize(fontSize);
    } else {
      setFontSize(fontSize + 0.1);
    }
  };
  const decreaseFontSize = () => {
    if (fontSize <= 0.8) {
      setFontSize(fontSize);
    } else {
      setFontSize(fontSize - 0.1);
    }
  };
  localStorage.setItem('font-size', String(fontSize));
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const lang: string = useSelector((state: State) => state.mainLang.lang);
  const logged: boolean = useSelector((state: State) => state.authLog.isLogged);
  const studyMode = useSelector((state: State) => state.mainStudyMode.studyModes);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const [usedModes, setModes] = lang === 'eng' ? useState(studyModesEng) : useState(studyModesRu);
  const changeToRus = () => dispatch(changeAppLang('ru'));
  const changeToEng = () => dispatch(changeAppLang('eng'));
  const langHandler = () => {
    if (lang === 'ru') {
      changeToEng();
      localStorage.setItem('lang', 'eng');
    } else {
      changeToRus();
      localStorage.setItem('lang', 'ru');
    }
  };

  const setDarkMode = () => {
    dispatch(setTheme('dark'));
    localStorage.setItem('theme', JSON.stringify({ theme: 'dark' }));
  };
  const setLightMode = () => {
    dispatch(setTheme('light'));
    localStorage.setItem('theme', JSON.stringify({ theme: 'light' }));
  };
  const modesToApply: [string, boolean][] = Object.entries(studyMode);

  let usedMode;
  // eslint-disable-next-line no-return-assign
  modesToApply.forEach((mode) => (studyMode[mode[0]] ? usedMode = modesToApply.indexOf(mode) : 0));
  const modesToChoose = ['trainAllWords', 'onlyNew', 'onlyRepeat', 'onlyDifficult'];
  const [selected, setSelected] = useState(modesToChoose[usedMode]);
  const modeHandler = (e: any) => {
    const target = e.currentTarget;
    setSelected(target.value);
    studyMode[target.id] = true;
    const modesToChange: [string, boolean][] = Object.entries(studyMode);
    modesToChange.forEach((mode) => {
      if (mode[0] === target.id) {
        mode[1] = true;
      } else {
        mode[1] = false;
      }
    });
    const newModes = Object.fromEntries(modesToChange);
    dispatch(updateStudySettings(newModes));
  };

  useEffect(() => {
    if (lang === 'eng') {
      setUsedLang(eng);
      setModes(studyModesEng);
    } else {
      setUsedLang(ru);
      setModes(studyModesRu);
    }
  }, [lang]);
  return (
    <div className={theme === 'light' ? 'main-control-center' : 'main-control-center main-control-center-dark'}>
      <h1>{usedLang.settings.name}</h1>
      <div className="settings-block">
        <div className="settings-block-option">
          <span>{usedLang.settings.mode}</span>
          <div className="settings-block-theme-switch">
            <button
              type="button"
              className={
              theme === 'light'
                ? 'theme-btn sun'
                : 'theme-btn'
            }
              onClick={setLightMode}
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
            {' | '}
            <button
              type="button"
              className={
              theme === 'dark'
                ? 'theme-btn moon'
                : 'theme-btn'
            }
              onClick={setDarkMode}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>
        <div className="settings-block-option">
          <span>{usedLang.settings.lang}</span>
          <div className="settings-block-lang-switch">
            <button
              className="settings-btn-lang"
              type="button"
              onClick={langHandler}
            >
              <span
                className={
                lang === 'eng'
                  ? 'settings-block-lang-active'
                  : 'settings-block-lang-disabled'
              }
              >
                Eng
              </span>
            </button>
            {' | '}
            <button
              className="settings-btn-lang"
              type="button"
              onClick={langHandler}
            >
              <span
                className={
                lang === 'ru'
                  ? 'settings-block-lang-active'
                  : 'settings-block-lang-disabled'
              }
              >
                Рус
              </span>
            </button>
          </div>
        </div>
        <div className="settings-block-option">
          <span>{usedLang.settings.fontSize}</span>
          <div className="settings-block-font-handler">
            <button
              type="button"
              className="main-font-btn"
              onClick={increaseFontSize}
            >
              <FontAwesomeIcon icon={faFont} />
              +
            </button>
            <span> | </span>
            <button
              type="button"
              className="main-font-btn"
              onClick={decreaseFontSize}
            >
              <FontAwesomeIcon icon={faFont} />
              -
            </button>
          </div>
        </div>
        {logged && (
        <div className="settings-block-modes">
          <ul className="settings-study-modes">
            {usedModes.map((modes) => (
              <li key={modes.name} className="study-option">
                <span>{modes.name}</span>
                <label className="study-option-container">
                  <input
                    type="radio"
                    className="mode-check"
                    value={modes.id}
                    id={modes.id}
                    checked={selected === modes.id}
                    onChange={modeHandler}
                  />
                  <span className="study-option-checkmark" />
                </label>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
