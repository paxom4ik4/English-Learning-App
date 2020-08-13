import * as React from 'react';
import Heart from './Heart/heart';
import './healthBar.scss';

const HealthBar: React.FC = () => (
  <div className="healthBar">
    <Heart />
    <Heart />
    <Heart />
    <Heart />
    <Heart />
  </div>
);

export default HealthBar;
