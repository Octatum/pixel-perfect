import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../../../utils/device';

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  max-width: 100vw;
  width: auto;
  height: auto;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background-size: cover;

  ${device.tablet} {
    display: none;
  }
`;

class BackgroundVideoPlayer extends React.Component {
  state = {
    videoIsPlaying: false,
  };

  constructor(props) {
    super(props);

    this.videoRef = null;
  }

  setVideoRef = videoRef => {
    this.videoRef = videoRef;
  };

  toggleVideoState() {
    this.setState(prevstate => {
      if (this.state.videoIsPlaying) {
        this.videoRef.pause();
      } else {
        this.videoRef.play();
      }

      return {
        videoIsPlaying: !prevstate.videoIsPlaying,
      };
    });
  }

  render() {
    const { video } = this.props;

    return (
      <Video
        ref={this.videoRef}
        playsInLine
        muted
        loop
        poster=""
        autoPlay
        preload="none"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    );
  }
}

BackgroundVideoPlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default BackgroundVideoPlayer;
