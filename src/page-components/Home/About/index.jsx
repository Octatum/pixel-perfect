import React from 'react';
import styled from 'styled-components';

import TeamSlider from './TeamSlider';
import bg from './assets/about-bg.jpg';
import { device } from '../../../utils/device';
import Text from '../../../components/Text';
import { navbarIds } from '../../../components/Navbar';

const Background = styled.div`
  position: relative;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4em;
  align-items: center;
  justify-content: center;

  ${device.tablet} {
    position: relative;
    padding: 2em 1em;
    flex-direction: column;
  }
`;

const TextLayout = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  padding: 0 1em;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    flex: 1;
    padding: 0 0.5em;
    font-size: 0.7em;
    width: 80%;
  }
`;

const Subtext = styled(Text)`
  margin-top: 1em;

  ${device.tablet} {
    margin: 0.7em 0;
  }
`;

const SliderLayout = styled.div`
  width: 50%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0 2em;

  ${device.tablet} {
    position: relative;
    padding: 0 2em;
    margin-top: 2em;
    flex: 1;
    width: 70%;
  }

  ${device.mobile} {
    width: 100%;
    min-width: 10rem;
  }
`;

function About() {
  return (
    <Background id={navbarIds.about}>
      <Layout>
        <TextLayout>
          <Text size={9}>Who are we?</Text>
          <Subtext size={2} mobileSize={3}>
            Pixel Perfect VFX is a visual effects studio and training center
            based in Monterrey, Mexico. This company was born by the idea of
            perfecting the industry in Monterrey, our mission is to deliver the
            highest quality product in the north of Mexico and eventually the
            whole country.
          </Subtext>
        </TextLayout>
        <SliderLayout>
          <TeamSlider />
        </SliderLayout>
      </Layout>
    </Background>
  );
}

export default About;
