import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

function BackgroundVideoPlayer(props) {
  const { video, poster } = props;
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef && videoRef.current.paused) {
      videoRef.current.play();
    }
  });

  return (
    <Video playsInline ref={videoRef} muted loop poster={poster} autoPlay>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  );
}

BackgroundVideoPlayer.propTypes = {
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default BackgroundVideoPlayer;
