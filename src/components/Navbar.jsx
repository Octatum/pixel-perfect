import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../utils/device'
import Link from './Link';

const elasticTransitionTimingFunction = `
  -webkit-transition-timing-function: cubic-bezier(0.295, 0, 0.675, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); 
    -moz-transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); 
      -o-transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); 
          transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); /* custom */
`;

const Navsection = styled.nav`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3vh 0;
  background: rgba(0, 0, 0, 0.3);

  ${device.tablet} {
    box-sizing: border-box;
    padding: 3vh 1.5em;
  }
`;


const DropdownButton = styled.a.attrs({
  style: ({open}) => ({
    // transform: `rotate(${(open ? 0 : 360)}deg)`
  })
})`
  position: fixed;
  right: 1em;
  display: none;
  font-size: 2em;
  color: white;
  justify-self: flex-end;
  cursor: pointer;
  z-index: 1;
  transition: 0.5s all;
  ${elasticTransitionTimingFunction};

  ${device.mobile} {
    display: block;
  }
`;

const LogoDiv = styled.div`
  padding-left: 1.5em;
  font-size: 2.3em;

  ${device.tablet} {
    padding-left: 0;
    font-size: 2em;
  }
`;

const Logo = Link.extend`
  font-weight: bold;
  letter-spacing: -0.1em;

  ${device.tablet} {
    mix-blend-mode: hard-light;
  }
`;

const Links = styled.ul.attrs()`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 30%;
  padding-right: 5%;
  text-align: center;

  ${device.mobile} {
    display: ${({open}) => open ? 'flex' : 'none'};
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    flex-direction: column;
    left: 0;
    top: 0;
    justify-content: flex-start;
  }
`;

const ListElement = styled.li`
  font-size: 1.1em;
  padding: 0 0.5em;

  ${device.mobile} {
    font-size: calc(1rem + 2vw);
    text-align: center;
    height: 3em;
    width: 100%;

    :first-of-type ${Link} {
      border-top: 1px solid white;
    }

    ${Link} {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid white;
    }
  }
`;

class Navbar extends Component {
  state = {
    showNavMenu: false,
  }

  toggleNavMenu = () => {
    this.setState({showNavMenu: !this.state.showNavMenu});
  }

  closeNavbar = () => {
    this.setState({showNavMenu: false})
  }

  render() {
    return (
      <Navsection>
        <LogoDiv>
          <Logo to="/">PIXELPERFECT</Logo>
        </LogoDiv>
        <DropdownButton onClick={this.toggleNavMenu} open={this.state.showNavMenu}>
          <i className={this.state.showNavMenu ? "fas fa-times" : "fas fa-bars"} />
        </DropdownButton>
        <Links open={this.state.showNavMenu}>
          <ListElement><Link onClick={() => this.closeNavbar()} to="/">home</Link></ListElement>
          <ListElement><Link onClick={() => this.closeNavbar()} to="/about">about</Link></ListElement>
          <ListElement><Link onClick={() => this.closeNavbar()} to="/services">services</Link></ListElement>
          <ListElement><Link onClick={() => this.closeNavbar()} to="/contact">contact</Link></ListElement>
        </Links>
      </Navsection>
    )
  }
}

export default Navbar;
