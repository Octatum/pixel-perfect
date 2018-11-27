import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';

const Layout = styled('div')`
  display: flex;
  padding: 0 5%;
  width: 100%;
  box-sizing: border-box;
  margin-top: 1%;
  justify-content: center;

  ${device.mobile} {
    padding: 0;
  }
`;

const Iframe = styled('iframe')`
  display: block;
  flex: 1;
  height: calc(99vw * 0.5625);
`;

const VideoShowcase = props => {
  const { videoData } = props;
  const videoId = videoData.url.replace(/\D/g, '');

  return (
    <Layout>
      <Iframe
        title="vimeoVideo"
        src={`https://player.vimeo.com/video/${videoId}`}
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </Layout>
  );
};

export default VideoShowcase;
