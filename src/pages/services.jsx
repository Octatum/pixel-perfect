import React from 'react';
import styled from 'styled-components';

import InfoBoxes from '../components/Services/InfoBoxes';
import { device } from '../utils/device';
import Link from '../components/Link';
import bgImage from '../components/Services/assets/cgi.jpg';
import AppLayout from '../components/AppLayout';

const Layout = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 4rem;
  background: ${props => props.background};
  background-size: cover;

  ::before {
    content: '';
    background: black;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  ${device.tablet} {
    flex-wrap: wrap-reverse;
    padding: 2rem;
  }
`;

const RightTextbox = styled.div`
  position: relative;
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
    <AppLayout>
      <Layout background={`url("${bgImage}")`}>
        <InfoBoxes />
        <RightTextbox>
          <MainSlideText>What we do</MainSlideText>
          <SecondaryText>
            <p>
              Our services include training courses for those seeking a career
              in VFX industry. We also offer production and post-production
              services for visual media projects.
            </p>
            <br />
            <Link to="/portfolio">
              <strong>
                <em>Our projects</em>
              </strong>
            </Link>
          </SecondaryText>
        </RightTextbox>
      </Layout>
    </AppLayout>
  );
}

export default Services;
