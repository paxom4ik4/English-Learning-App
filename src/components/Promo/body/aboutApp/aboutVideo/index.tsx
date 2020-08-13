import * as React from 'react';
import './index.scss';
import ReactPlayer from 'react-player/youtube';

interface Props {
  videoLink
}

const DemoVideo: React.FC<Props> = ({ videoLink }) => (
  <div className="player-wrapper">
    <ReactPlayer url={videoLink} />
  </div>
);

export default DemoVideo;
