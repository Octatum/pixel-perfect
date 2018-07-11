import React from 'react'
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';
import TeamSlider from '../components/TeamSlider';
import FadeInOnEnter from '../utils/FadeInOnEnter';
import { Bold } from '../components/Utils';

import bg from '../assets/images/about-bg.jpeg'

const Layout = styled.div`
  display: flex;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  width: calc(100vw - 8em);
  height: calc(100vh - 8em);
  max-width: calc(100vw - 8em);
  padding: 4em;
  align-items: center;
  justify-content: center;
`;

const TextLayout = MainText(styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
`);

const Header = styled.div`
  font-size: 3.9em;
  width: 50%;
`;

const Subtext = styled.div`
  margin-top: 1em;
  line-height: 1.3em;
  font-size: 1.4em;
`;

const SliderLayout = styled.div`
  width: 51.5%;
  min-width: 400px;
  margin-left: 2.5%;
  margin-right: 1%;
  flex: 1;
`;


export default () => (
  <Layout>
    <TextLayout>
      <Header>¿Quiénes <Bold>somos</Bold>?</Header>
      <Subtext>Somos una empresa dedicada a entrenar <Bold>artistas</Bold> de todo <Bold>México</Bold> con las técnicas y el software usado en la industria de efectos visuales internacionales</Subtext>
    </TextLayout>
    <SliderLayout>
      <TeamSlider />
    </SliderLayout>
  </Layout>
);
