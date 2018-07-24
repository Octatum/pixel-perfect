import React from 'react';
import styled from 'styled-components';

import { device, numberValues } from '../../utils/device';

import toyotaLogo from './assets/toyota-logo.jpg';
import tunaLogo from './assets/la-tuna-group-logo.png';
import cemexLogo from './assets/cemex_logo.png';
import monsantoLogo from './assets/monsanto-logo.png';
import bengalaLogo from './assets/bengala-logo.png';

const Container = styled.div`
  display: flex;
  position: relative;
  background: white;
  width: 100%;

  ${device.tablet} {
    height: 25%;
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
  width: 12%;
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
  font-size: 4.7vmax;
  flex: 1;
  box-sizing: border-box;
  padding: 0.3em 1em 0.3em 0.5em;
  text-align: right;
  color: ${props => props.theme.color.dark};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    display: none;
    padding-right: 0.5em;
  }
`;

const WhiteHeader = Header.extend`
  display: none;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

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
        Nuestros<br />Clientes
      </WhiteHeader>
      <LogoList>
        <Logo src={toyotaLogo} />
        <Logo src={tunaLogo} />
        <Logo src={cemexLogo} />
        <Logo src={monsantoLogo} />
        <Logo src={bengalaLogo} />
      </LogoList>
      <VerticalLine />
      <Header>
        Nuestros<br />Clientes
      </Header>
    </Container>
  );
}

export default ClientStrip;
