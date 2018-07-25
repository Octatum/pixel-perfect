import React from 'react';
import styled from 'styled-components';

import InfoBoxes from './InfoBoxes';
import { device } from '../../utils/device';
import Link from '../../components/Link';

const Layout = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 4rem;

  ${device.tablet} {
    flex-wrap: wrap-reverse;
    padding: 2rem;
  }
`;

const RightTextbox = styled.div`
  flex: 1;
  align-self: center;
  justify-self: flex-end;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: right;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    flex: 1 1 100%;
    align-self: baseline;
    position: relative;
    top: 2em;
  }

  ${device.mobile} {
    top: 2.5em;
  }
`;

const MainSlideText = styled.div`
  font-size: 4rem;

  ${device.tablet} {
    font-size: 3rem;
  }

  ${device.mobile} {
    font-size: 2.5rem;
  }
`;

const SecondaryText = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 1.2em;
  width: 100%;

  ${device.tablet} {
    font-size: 1rem;
  }
`;


function Services() {
  return (
    <Layout background="black">
      <InfoBoxes />
      <RightTextbox>
        <MainSlideText>What we do</MainSlideText>
        <SecondaryText>
          <p>Our services include training courses for those seeking a career in VFX industry. We also offer production and post-production services for visual media projects.</p>
          <br />
          <Link to="/portfolio"><strong>Our projects</strong></Link>
        </SecondaryText>
      </RightTextbox>
    </Layout>
  );  
}

export default Services;