import * as React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="promo-header-container">
    <Link to="/" className="promo-header-link">
      <p>RSLang</p>
    </Link>
  </header>
);

export default Header;
