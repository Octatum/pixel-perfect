import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';
import { Link, Bold } from './../components/Utils';
import { device } from '../utils/device';
import InfoBoxes from './../components/Services/InfoBoxes';

const Layout = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 4rem;

  @media screen and ${device.tablet} {
    flex-wrap: wrap-reverse;
    padding: 2rem;
  }
`;

const RightTextbox = MainText(styled.div`
  flex: 1;
  align-self: center;
  justify-self: flex-end;
  text-align: right;

  @media screen and ${device.tablet} {
    flex: 1 1 100%;
    align-self: baseline;
    position: relative;
    top: 2em;
  }

  @media screen and ${device.mobile} {
    top: 3.5em;
  }
`);

const MainSlideText = styled.div`
  font-size: 4rem;

  @media screen and ${device.tablet} {
    font-size: 3rem;
  }
`;

const SecondaryText = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
  line-height: 1.2em;

  @media screen and ${device.tablet} {
    font-size: 1rem;
  }
`;


export default withRouteData(() => (
  <Layout background="black">
    <InfoBoxes />
    <RightTextbox>
      <MainSlideText>¿Qué<br/><Bold>hacemos?</Bold></MainSlideText>
      <SecondaryText>
        <p>Somos una empresa dedicada a entrenar <Bold>artistas</Bold> de
        todo <Bold>México</Bold> con las técnicas y el software usado en la
        industria de efectos visuales internacionales.</p>
        <br />
        <Link to="/portfolio"><Bold>Nuestros proyectos</Bold></Link>
      </SecondaryText>
    </RightTextbox>
  </Layout>
));
