import * as React from 'react';
import './loadingImg.scss';

const LoadingImg: React.FC = () => (
  <div className="cssload-loader-savannah">
    <div className="cssload-inner-savannah cssload-one-savannah" />
    <div className="cssload-inner-savannah cssload-two-savannah" />
    <div className="cssload-inner-savannah cssload-three-savannah" />
  </div>
);

export default LoadingImg;
