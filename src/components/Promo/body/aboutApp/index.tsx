import * as React from 'react';
import DemoVideo from './aboutVideo';

import DescriptionTabsContainer from './aboutDescription';

interface Props {
  aboutGames
}

const AboutApp: React.FC<Props> = ({ aboutGames }) => (
  <div>
    <DemoVideo videoLink={aboutGames.promoVideoHref} />
    <DescriptionTabsContainer tabsInfo={aboutGames.gameTabs} />
  </div>
);

export default AboutApp;
