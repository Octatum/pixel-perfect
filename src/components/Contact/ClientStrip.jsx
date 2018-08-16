import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/device';

import toyotaLogo from './assets/toyota-logo.jpg';
import tunaLogo from './assets/la-tuna-group-logo.png';
import laysLogo from './assets/Lays_Chips.svg';
import oxxoLogo from './assets/OXXO_logo.svg';
import cemexLogo from './assets/cemex_logo.png';

const Container = styled.div`
  display: flex;
  position: relative;
  background: white;
  height: 15em;
  width: 100%;

  ${device.tablet} {
    height: 10em;
  }
`;

const LogoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
;

const Logo = styled.img`
  width: 20%;
  max-width: 7rem;
  max-height: 100%;
  padding: 1em 0;
`;

const VerticalLine = styled.div`
  align-self: center;
  border-left: 2px solid black;
  height: 50%;

  ${device.tablet} {
    display: none;
  }
`;

const Header = styled.h2`
  align-self: center;
  font-size: calc(3rem + 1vmax);
  flex: 1;
  box-sizing: border-box;
  padding: 0.3em 1em 0.3em 0.5em;
  text-align: right;
  color: ${props => props.theme.color.dark};
  font-family: ${props => props.theme.font.main};
  font-weight: lighter;

  ${device.tablet} {
    display: none;
    padding-right: 0.5em;
  }
`;

const WhiteHeader = Header.extend`
  display: none;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
  font-weight: lighter;

  ${device.tablet} {
    display: block;
    position: absolute;
    bottom: 100%;
    right: 0;
    font-size: 2.5rem;
  }
`;

function ClientStrip () {
  return (
    <Container>
      <WhiteHeader>
        Our <br/>
        <strong>Clients</strong>
      </WhiteHeader>
      <LogoList>
        <Logo src={toyotaLogo} />
        <Logo src={tunaLogo} />
        <Logo src={cemexLogo} />
        <Logo src={laysLogo} />
        <Logo src={oxxoLogo} />
      </LogoList>
      <VerticalLine />
      <Header>
        Our <strong>Clients</strong>
      </Header>
    </Container>
  );
}

export default ClientStrip;
