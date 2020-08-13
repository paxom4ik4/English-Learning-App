import * as React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AudioCall from 'components/Games/AudioCall';
import EnglishPuzzle from 'components/Games/EnglishPuzzle';
import Savannah from 'components/Games/Savannah';
import SpeakIt from 'components/Games/SpeakIt';
import Sprint from 'components/Games/Sprint';
// import OurGame from 'components/Games/OurGame';
import Statistic from 'components/Statistic';
import Dictionary from 'components/Dictionary';
import Promo from 'components/Promo';
import AboutUs from 'components/AboutUs';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import Main from 'components/Main';
import {
  getProfileFetch, getUserStatistic, getUserSettings,
} from 'constants/athorization-constants';
import Training from 'components/TrainingCard';
import { getUserWords } from 'containers/TrainingCard/actions';
import Loader from '../Authorization/Loader';

const App: React.FC = () => {
  const loading = useSelector((state: State) => state.engPuzzleLoading.isLoading);
  const regOpen = useSelector((state: State) => state.mainReg.regOpen);
  const logOpen = useSelector((state: State) => state.mainLog.logOpen);
  const { userId } = localStorage;
  const dispatch = useDispatch();
  useEffect(() => {
    userId && getUserSettings(dispatch);
    userId && getUserStatistic(dispatch);
    userId && getUserWords(dispatch);
    userId && getProfileFetch(dispatch);
  }, []);
  if (loading && !regOpen && !logOpen) {
    return (
      <div className="app-loader-wrapper">
        <Loader />
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/Statistic">
          <Statistic />
        </Route>
        <Route path="/Dictionary">
          <Dictionary />
        </Route>
        <Route path="/Promo">
          <Promo />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/AudioCall">
          <AudioCall />
        </Route>
        <Route path="/EnglishPuzzle">
          <EnglishPuzzle />
        </Route>
        <Route path="/Savannah">
          <Savannah />
        </Route>
        <Route path="/SpeakIt">
          <SpeakIt />
        </Route>
        <Route path="/Sprint">
          <Sprint />
        </Route>
        {/* <Route path="/OurGame">
          <OurGame />
        </Route> */}
        <Route path="/Training">
          <Training />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
