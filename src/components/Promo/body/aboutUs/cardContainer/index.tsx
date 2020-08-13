import * as React from 'react';
import './index.scss';
import DevCard from './card';

interface Props {
  devCardSInfo
}

const CardContainer: React.FC<Props> = ({ devCardSInfo }) => (
  <div className="card-container">
    <DevCard cardInfo={devCardSInfo.artemDrushchyts} />
    <DevCard cardInfo={devCardSInfo.lactivka} />
    <DevCard cardInfo={devCardSInfo.paxom4ik4} />
    <DevCard cardInfo={devCardSInfo.zzh0c} />
    <DevCard cardInfo={devCardSInfo.yanBlack} />
    <DevCard cardInfo={devCardSInfo.oksanaHulyaeva} />
    <DevCard cardInfo={devCardSInfo.ilichka} />
  </div>
);

export default CardContainer;
