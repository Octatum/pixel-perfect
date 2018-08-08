import React from 'react'
import styled from 'styled-components';

import TeamSlider from '../components/About/TeamSlider';
import bg from '../components/About/assets/about-bg.jpeg'
import { device } from '../utils/device'

const Background = styled.div`
  position: relative;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4em;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${device.tablet} {
    position: relative;
    top: 40%;
    height: 60%;
    padding: 0 1em;
    align-items: baseline;
  }
`;

const TextLayout = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  padding: 0 2em;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    flex: 1 1 100%;
    padding: 0 0.5em;
    font-size: 0.7em;
  }
`;

const Header = styled.div`
  font-size: 4em;
  width: 100%;
`;

const Subtext = styled.div`
  margin-top: 1em;
  line-height: 1.3em;
  font-size: 1.4em;

  ${device.tablet} {
    margin: 0.7em 0;
    font-size: 1.7em;
  }

  ${device.mobile} {
    font-size: 1.4em;
  }
`;

const SliderLayout = styled.div`
  width: 50%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0 2em;

  ${device.tablet} {
    position: relative;
    bottom: 5%;
    padding: 0 2em;
    flex: 1 1 100%;
  }
`;


function About() {
  return (
    <Background>
      <Layout>
        <TextLayout>
          <Header>Who we are</Header>
          <Subtext>We specialize in training artists from all over Mexico using the techniques and software used in the VFX industry.</Subtext>
        </TextLayout>
        <SliderLayout>
          <TeamSlider />
        </SliderLayout>
      </Layout>
    </Background>
  );  
}

export default About;