import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import * as React from 'react';
import GameTab from './gamesAbout';
import './index.scss';

interface Props {
  tabsInfo
}

const DescriptionTabsContainer: React.FC<Props> = ({ tabsInfo }) => (
  <div className="game-tab-wrapper">
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Overview">
        <GameTab tabInfo={tabsInfo.overview} />
      </Tab>
      <Tab eventKey="Audio Call" title="AudioCall">
        <GameTab tabInfo={tabsInfo.audioCall} />
      </Tab>
      <Tab eventKey="English Puzzle" title="EnglishPuzzle">
        <GameTab tabInfo={tabsInfo.englishBricks} />
      </Tab>
      <Tab eventKey="Savannah" title="Savannah">
        <GameTab tabInfo={tabsInfo.savannah} />
      </Tab>
      <Tab eventKey="Speak it" title="SpeakIt">
        <GameTab tabInfo={tabsInfo.speakIt} />
      </Tab>
      <Tab eventKey="Sprint" title="Sprint">
        <GameTab tabInfo={tabsInfo.sprint} />
      </Tab>
    </Tabs>
  </div>
);

export default DescriptionTabsContainer;
