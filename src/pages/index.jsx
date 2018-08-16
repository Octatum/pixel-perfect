import React from 'react'
import styled from 'styled-components';

import backgroundVideo from '../components/Home/assets/demoreel.mp4'
import BackgroundVideoPlayer from '../components/Home/BackgroundVideoPlayer';
import backgroundImage from '../components/Home/assets/vfx.png'
import { device } from '../utils/device';

const Layout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("${backgroundImage}") no-repeat center center fixed;
  background-size: auto 100%;
  align-items: center;
  justify-content: flex-end;

  ${device.tablet} {
    justify-content: center;
  }
`;

const Header = styled.h1`
  color: ${props => props.theme.color.light};
  position: relative;
  font-family: ${props => props.theme.font.main};
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
  width: 30%;
  padding: 2rem;
  text-align: left;
  background: rgba(0, 0, 0, 0.3);
  margin-right: 3rem;
  transition: 500ms ease-in-out all;

  ${device.laptop} {
    font-size: 2.5rem;
  }
  
  ${device.tablet} {
    margin: 0;
    z-index: 0;
    text-align: center;
    opacity: 1;
    filter: none;
    width: 60%;
    justify-self: center;
  }
`;

const Subheader = styled.div`
  font-size: 0.5em;

  > a {
    font-weight: 700;
    color: white;
  }
`;

function Home() { 
  return (
    <Layout>
      <BackgroundVideoPlayer 
        video={backgroundVideo}
        poster={backgroundImage}
      />
      <Header >
        Perfecting the <br />VFX industry in <strong>Monterrey</strong>
        <Subheader>Watch our <a href="https://vimeo.com/256454623" target="_blank">Demo Reel</a></Subheader>
      </Header>
    </Layout>
  );
}

export default Home;