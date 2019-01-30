import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';

const Layout = styled('div')`
  display: flex;
  padding: 0 5%;
  width: 70%;
  margin: 0 auto;
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
  height: calc(60vw * 0.5625);
`;

const VideoShowcase = props => {
  const { id, type } = props.videoData;

  return type === 'sin video' ? <div /> : (
    <Layout>
      <Iframe
        title="videoPlayer"
        src={type === 'vimeo' ? `//player.vimeo.com/video/${id}` : `//www.youtube.com/embed/${id}`}
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </Layout>
  );
};

export default VideoShowcase;
