import React from 'react'
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';
import TeamSlider from '../components/TeamSlider';
import FadeInOnEnter from '../utils/FadeInOnEnter';
import { Bold } from '../components/Utils';

import bg from '../assets/images/about-bg.jpeg'
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

  @media screen and ${device.tablet} {
    position: relative;
    top: 40%;
    height: 60%;
    padding: 0 1em;
    align-items: baseline;
  }
`

const TextLayout = MainText(styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  padding: 0 2em;

  @media screen and ${device.tablet} {
    flex: 1 1 100%;
    padding: 0 0.5em;
    font-size: 0.7em;
  }
`);

const Header = styled.div`
  font-size: 3.9em;
  width: 50%;
`;

const Subtext = styled.div`
  margin-top: 1em;
  line-height: 1.3em;
  font-size: 1.4em;

  @media screen and ${device.tablet} {
    margin: 0.7em 0;
    font-size: 1.7em;
  }

  @media screen and ${device.mobile} {
    font-size: 1.4em;
  }
`;

const SliderLayout = styled.div`
  width: 50%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0 2em;

  @media screen and ${device.tablet} {
    position: relative;
    bottom: 5%;
    padding: 0 2em;
    flex: 1 1 100%;
  }
`;


export default () => (
  <Background>
    <Layout>
      <TextLayout>
        <Header>¿Quiénes <Bold>somos</Bold>?</Header>
        <Subtext>Somos una empresa dedicada a entrenar <Bold>artistas</Bold> de todo <Bold>México</Bold> con las técnicas y el software usado en la industria de efectos visuales internacionales</Subtext>
      </TextLayout>
      <SliderLayout>
        <TeamSlider />
      </SliderLayout>
    </Layout>
  </Background>
);
