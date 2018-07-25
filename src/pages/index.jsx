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
  align-items: center;
  justify-content: flex-end;

  &:hover > h1,
  & > h1:hover {
    opacity: 1;
    filter: blur(0);
  }
`;

const Header = styled.h1`
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
  z-index: 1;
  font-size: 4em;
  font-weight: 400;
  width: 30%;
  padding: 2rem;
  text-align: left;
  background: rgba(0, 0, 0, 0.3);
  margin-right: 3rem;
  transition: 500ms ease-in-out all;
  opacity: 0;
  filter: blur(2em);
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
      </Header>
    </Layout>
  );
}

export default Home;