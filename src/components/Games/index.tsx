import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import AudioCall from './AudioCall';
import EnglishPuzzle from './EnglishPuzzle';
import Savannah from './Savannah';
import SpeakIt from './SpeakIt';
import Sprint from './Sprint';
import OurGame from './OurGame';

const Games: React.FC = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/AudioCall">Audio-Call</Link>
        </li>
        <li>
          <Link to="/EnglishPuzzle">English-Puzzle</Link>
        </li>
        <li>
          <Link to="/Savannah">Savannah</Link>
        </li>
        <li>
          <Link to="/SpeakIt">SpeakIt</Link>
        </li>
        <li>
          <Link to="/Sprint">Sprint</Link>
        </li>
        <li>
          <Link to="/OurGame">OurGame</Link>
        </li>
      </ul>

      <Switch>
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
        <Route path="/OurGame">
          <OurGame />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Games;
