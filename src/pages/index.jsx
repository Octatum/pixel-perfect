import React from 'react'
import styled from 'styled-components';

import backgroundVideo from './Home/assets/demoreel.mp4'
import BackgroundVideoPlayer from './Home/BackgroundVideoPlayer';
import backgroundImage from './Home/assets/vfx.png'

const Layout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("${backgroundImage}") no-repeat center center fixed;
  background-size: auto 100%;
`;


function Home () {
  return (
    <Layout>
      <BackgroundVideoPlayer 
        video={backgroundVideo}
        poster={backgroundImage}
      />
    </Layout>
  )
};

export default Home;