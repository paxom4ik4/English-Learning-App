import * as React from 'react';
import Footer from './footer';
import Body from './body';
import Header from './header';

const Promo: React.FC = () => (
  <div className="promo-wrapper">
    <Header />
    <Body />
    <Footer />
  </div>
);

export default Promo;
