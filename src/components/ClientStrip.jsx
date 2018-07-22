import React, { Component } from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Bold } from './Utils'
import { device, numberValues } from '../utils/device'

import toyotaLogo from '../assets/images/toyota-logo.jpg'
import tunaLogo from '../assets/images/la-tuna-group-logo.png'
import cemexLogo from '../assets/images/cemex_logo.png'
import monsantoLogo from '../assets/images/monsanto-logo.png'
import bengalaLogo from '../assets/images/bengala-logo.png'

const Container = styled.div`
  display: flex;
  position: relative;
  background: white;
  width: 100%;

  @media screen and ${device.tablet} {
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

  @media screen and ${device.tablet} {
    display: none;
  }
`;

const Header = MainText(styled.h2`
  align-self: center;
  font-size: 4.7vmax;
  flex: 1;
  box-sizing: border-box;
  padding: 0.3em 1em 0.3em 0.5em;
  text-align: right;

  @media screen and ${device.tablet} {
    display: none;
    padding-right: 0.5em;
  }
`, props => props.dark);

const WhiteHeader = MainText(Header.extend`
  display: none;

  @media screen and ${device.tablet} {
    display: block;
    position: absolute;
    bottom: 100%;
    right: 0;
    font-size: 2.5rem;
  }
`)

const ClientStrip = () => (
  <Container>
    <WhiteHeader>
      Nuestros<br />
      <Bold>Clientes</Bold>
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
      Nuestros<br />
      <Bold>Clientes</Bold>
    </Header>
  </Container>
)

export default ClientStrip
