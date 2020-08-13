import * as React from 'react';
import './index.scss';

interface Props {
  text
}

const AboutUsText: React.FC<Props> = ({ text }) => (
  <div className="about-us-block">
    <h1>About US</h1>
    <p>{text}</p>
  </div>
);

export default AboutUsText;
