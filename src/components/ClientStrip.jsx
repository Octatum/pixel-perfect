import React from 'react'
import styled from 'styled-components'

import { DarkText } from '../styles/AppStyles'
import { Bold } from './Utils'

import toyotaLogo from '../assets/images/toyota-logo.jpg'
import tunaLogo from '../assets/images/la-tuna-group-logo.png'
import cemexLogo from '../assets/images/cemex_logo.png'
import monsantoLogo from '../assets/images/monsanto-logo.png'
import bengalaLogo from '../assets/images/bengala-logo.png'

const Container = styled.div`
  display: flex;
  background: white;
  width: 100%;
  margin: 1vh 0;
  padding: 2.5vh 0;
`

const LogoList = styled.div`
  display: flex;
  flex: 5.2;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
`

const Logo = styled.img`
  height: 30%;
  width: auto;
  max-width: 100%;
`

const VerticalLine = styled.div`
  align-self: center;
  border-left: 2px solid black;
  height: 50%;
`

const Header = DarkText(styled.h2`
  align-self: center;
  font-size: 4.7vmax;
  flex: 1;
  box-sizing: border-box;
  padding: 0.3em 1em 0.3em 0.5em;
  text-align: right;
`)

const ClientStrip = () => (
  <Container>
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
