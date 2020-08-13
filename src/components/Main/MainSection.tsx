import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { eng, ru, cardsNames } from 'constants/main-page-constants';
import LoginForm from 'components/Authorization/Login';
import RegisterForm from 'components/Authorization/Register';
import UserInfo from './UserInfo';
import GameCard from './GameCard';
import CardGame from './CardState';
import Settings from './MainSettings';
import ModalMain from './Modal';
import CardSettings from './CardSettings';
import MainModal from './MainModal';
import Training from '../TrainingCard';

const MainInformation: React.FC = () => {
  const settingOpen = useSelector((state: State) => state.mainSettings.isOpen);
  const isOpen = useSelector((state: State) => state.mainModal.isOpen);
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const regOpen = useSelector((state: State) => state.mainReg.regOpen);
  const logOpen = useSelector((state: State) => state.mainLog.logOpen);
  const logged = useSelector((state: State) => state.authLog.isLogged);
  const trainingOpen = useSelector((state: State) => state.appTraining.trainingOpen);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  useEffect(() => (lang === 'eng' ? setUsedLang(eng) : setUsedLang(ru)), [lang]);
  return (
    <>
      {trainingOpen && logged
        ? <Training />
        : (
          <div>
            <MainModal />
            <div
              className={
          theme === 'light'
            ? 'main-wrapper main-light'
            : 'main-wrapper main-dark'
        }
            >
              {logged && (
              <p className="header-text">
                {usedLang.mainSentence1}
              </p>
              )}
              <div className="main-stat-container">
                {logged && <UserInfo />}
              </div>
              <div className="main-information">
                <Settings />
                <CardGame />
              </div>
              <p className="header-text-2">
                {usedLang.mainSentence2}
              </p>
              <div className="games-container">
                {cardsNames.map((card, idx) => (
                  <GameCard
                    key={card}
                    route={card}
                    name={usedLang.games[card].name}
                    desc={usedLang.games[card].description}
                    imgSrc={usedLang.games[card].imgSrc}
                    modalId={`modal-${7 + idx}`}
                    cardId={`card-${7 + idx}`}
                  />
                ))}
              </div>
              {settingOpen && <CardSettings />}
              {isOpen && <ModalMain />}
              {regOpen && <RegisterForm />}
              {logOpen && <LoginForm />}
            </div>
          </div>
        )}
    </>
  );
};

export default MainInformation;
