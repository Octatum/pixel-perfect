import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../../components/Text';
import { device } from '../../../utils/device';

const Layout = styled.div`
  padding: 2em;
  min-height: 100vh;
  background: midnightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextSection = styled.div`
  margin-bottom: 3em;
  padding-left: 30%;
  box-sizing: border-box;

  ${device.tablet} {
    padding-left: 15%;
  }

  ${device.mobile} {
    padding-left: 5%;
  }
`;

const SlideHeader = styled(Text)`
  margin: 0.75em 0;
`;

const ServiceSlide = () => {
  return (
    <Layout>
      <Text bold size={9} as="h2">Services</Text>
      <TextSection>
        <SlideHeader align="right" bold size={7}>Screen Replacements</SlideHeader>
        <Text align="right">We assist in the post-production process with services like compositing, rotoscoping, cleanup, 3D tracking and CGI services like <Text bold as="span">3D modelling</Text> and animation, lighting, etc.</Text>
      </TextSection>
    </Layout>
  );
};

export default ServiceSlide;
