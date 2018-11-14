import React from 'react';
import styled from 'styled-components/macro';

const Layout = styled('div')`
  padding: 0 5%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-top: 1%;
`;

const Iframe = styled('iframe')`
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
