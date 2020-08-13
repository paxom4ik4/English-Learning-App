import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../models/state';
import devData from '../config/config';
import './index.scss';

import BodyCarousel from './carousel';
import AboutUs from './aboutUs';
import AboutApp from './aboutApp';

const Body: React.FC = () => {
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const promoTheme = `promo-body-${theme}`;
  return (
    <div className={promoTheme}>
      <BodyCarousel />
      <AboutApp aboutGames={devData.aboutGames} />
      <AboutUs aboutUs={devData.aboutUs} />
    </div>
  );
};

export default Body;
