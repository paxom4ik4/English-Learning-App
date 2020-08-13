import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from 'models';
import {
  faAngleRight,
  faAngleLeft,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  setUnLogged, setUserName, updateUserStoredSettings, updateUserLearnedWordsAmount, updateUserStoredStatistic, updateUserWordsAmount,
} from 'containers/Authorisation/actions';
import {
  pagesEng, pagesRu, eng, ru,
} from 'constants/main-page-constants';
import MainSection from '../MainSection';
import './index.scss';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: State) => state.authName.name);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const initialSettings = useSelector((state: State) => state.appUserSettings);
  const isLogged = useSelector((state: State) => state.authLog.isLogged);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  const [usedPages, setUsedPages] = lang === 'eng' ? useState(pagesEng) : useState(pagesRu);
  const [isOpen, setAsideOpen] = useState(false);
  const handleAsideMenu = () => setAsideOpen(!isOpen);
  const closeAsideMenu = () => setAsideOpen(false);
  const logout = () => {
    initialSettings.optional.firstVisit = true;
    dispatch(updateUserStoredSettings(initialSettings.optional));
    localStorage.removeItem('refToken');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch(setUnLogged());
    dispatch(setUserName(''));
    dispatch({ type: 'UPDATE_USER_WORDS', payload: [] });
    dispatch(updateUserWordsAmount(20));
    dispatch(updateUserStoredStatistic({
      playedGames: 0,
      bestAttempts: 0,
      correctRepeats: 0,
      totalDailyProgress: 0,
    }));
    dispatch(updateUserLearnedWordsAmount(0));
    dispatch(updateUserStoredSettings({
      level: 0,
      page: 0,
      cardsPerDay: 60,
      showTranscription: true,
      showImage: true,
      example: true,
      wordMeaning: true,
      autoPronounce: true,
      showTextTranslate: true,
      translate: true,
      showAnswerBtn: true,
      deleteWordBtn: true,
      difficultWordBtn: true,
      repeatBtn: true,
      firstVisit: true,
    }));
  };

  useEffect(() => {
    if (lang === 'eng') {
      setUsedPages(pagesEng);
      setUsedLang(eng);
    } else {
      setUsedPages(pagesRu);
      setUsedLang(ru);
    }
  }, [lang]);

  return (
    <div className="main-entire-wrapper">
      <div id="header" className={isOpen ? 'header open' : 'header'}>
        <ul className="header-nav">
          {usedPages.filter((pages) => (!isLogged
            ? pages.path === 'Promo'
            : pages)).map((pagesData) => (
              <li key={pagesData.page}>
                <Link
                  to={`/${pagesData.path === 'Team' ? '' : pagesData.path}`}
                  onClick={closeAsideMenu}
                >
                  <button
                    type="button"
                    className="main-aside-btn"
                  >
                    <FontAwesomeIcon
                      className="main-aside-point"
                      icon={pagesData.icon}
                    />
                    <span
                      id="statistic"
                      className={
                      isOpen
                        ? 'aside-menu-tooltip aside-tooltip-visible'
                        : 'aside-menu-tooltip'
                    }
                    >
                      {pagesData.page}
                    </span>
                  </button>
                </Link>
              </li>
          ))}
          <li>
            <button
              type="button"
              className="main-aside-btn"
              onClick={handleAsideMenu}
            >
              {isOpen
                ? <FontAwesomeIcon icon={faAngleLeft} />
                : <FontAwesomeIcon icon={faAngleRight} />}
            </button>
          </li>
        </ul>
        {isLogged
          && (
          <div className="profile">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="aside-logout"
              onClick={logout}
            />
            <span className="aside-menu-tooltip">
              {usedLang.logout}
            </span>
            <span>{name}</span>
          </div>
          )}
      </div>
      <MainSection />
    </div>
  );
};

export default Navigation;
