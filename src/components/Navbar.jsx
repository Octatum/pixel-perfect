import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from './Utils';
import { device } from '../utils/device'

const Navsection = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-height: 15vh;
  min-height: 110px;
  padding: 3vh 0;

  @media screen and ${device.mobile} {
    display: block;
  }
`;

const DropdownButton = styled.a`
  display: none;
  font-size: 1.7em;
  color: white;
  margin: 0.2rem 0 0 1.3rem;
  cursor: pointer;

  @media screen and ${device.mobile} {
    display: inline-block;
  }
`

const LogoDiv = styled.div`
  padding-left: 1.5em;
  font-size: 2.3em;

  @media screen and ${device.tablet} {
    padding-left: 1.3rem;
    font-size: 2em;
  }
`;

const Logo = Link.extend`
  font-weight: bold;
  letter-spacing: -0.1em;
`

const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 30%;
  padding-right: 5%;
  text-align: center;
  text-shadow: 0 0 5px black;

  @media screen and ${device.mobile} {
    display: none;

    &.open {
      display: block;
      width: 40%;
      padding: 0 0 0 3em;
      text-align: left;
    }
  }
`;

const ListElement = styled.li`
  font-size: 1.1em;
  padding: 0 0.5em;

  @media screen and ${device.mobile} {
    font-size: 0.9em;
    padding: 1.2em 0;
  }
`;

class Navbar extends Component {
  state = {
    showNavMenu: false,
  }

  navMenuHandler = () => {
    this.setState({showNavMenu: !this.state.showNavMenu});
  }

  render() {
    let LinksClass = (this.state.showNavMenu ? 'open' : '');

    return (
      <Navsection>
        <LogoDiv>
          <Logo to="/">PIXELPERFECT</Logo>
        </LogoDiv>
        <DropdownButton onClick={this.navMenuHandler}>
          <i className="fas fa-bars" />
        </DropdownButton>
        <Links className={LinksClass}>
          <ListElement><Link to="/nosotros">nosotros</Link></ListElement>
          <ListElement><Link to="/servicios">servicios</Link></ListElement>
          <ListElement><Link to="/contacto">contacto</Link></ListElement>
        </Links>
      </Navsection>
    )
  }
}

export default Navbar;
