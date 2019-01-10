import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../utils/device';
import Link from './Link';

const elasticTransitionTimingFunction = `
  -webkit-transition-timing-function: cubic-bezier(0.295, 0, 0.675, 1); /* older webkit */
  -webkit-transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); 
    -moz-transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); 
      -o-transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); 
          transition-timing-function: cubic-bezier(0.295, -0.545, 0.675, 1.490); /* custom */
`;

const Navsection = styled.nav`
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  ${device.tablet} {
    padding-left: 1.5em;
  }

  ${device.mobile} {
    padding: 1.5em;
  }
`;

const DropdownButton = styled.a.attrs({
  style: ({ open }) => ({
    // transform: `rotate(${(open ? 0 : 360)}deg)`
  }),
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

const Logo = styled(Link)`
  font-weight: bold;
  letter-spacing: -0.1em;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Links = styled.ul.attrs()`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 30%;
  padding-right: 5%;
  text-align: center;

  ${device.mobile} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    position: fixed;
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
  box-sizing: border-box;
  padding: 1.5em 0.5em;

  ${device.mobile} {
    font-size: calc(1rem + 2vw);
    text-align: center;
    height: 3em;
    width: 100%;
    padding: 0;

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

const HoverableListItem = styled(ListElement)`
  position: relative;

  :hover > ul {
    transform: translateX(-50%) translateY(0) scaleY(1);
    opacity: 1;
  }
`;

const SubmenuItems = styled.ul`
  position: absolute;
  min-width: 100%;
  border-top: 1px solid white;
  margin-top: 1.5em;
  left: 50%;
  transition: 300ms ease-in-out all;
  transform: translateX(-50%) translateY(-50%) scaleY(0);
  opacity: 0;

  > li:not(:first-of-type)::before {
    content: '';
    position: absolute;
    width: 70%;
    left: 15%;
    height: 1px;
    background: white;
    top: 0;
  }

  ${device.mobile} {
    display: none;
  }
`;

const SubmenuItem = styled.li`
  color: white;
  position: relative;
  text-align: center;
`;

const SubmenuLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  padding: 0.7rem;
  text-align: center;
  width: 100%;
  height: 100%;
  transition: background-color 300ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const navbarIds = {
  about: 'about',
  services: 'services',
  featured: 'featured',
  projects: 'projects',
  contact: 'contact'
};

class Navbar extends Component {
  state = {
    showNavMenu: false,
  };

  toggleNavMenu = () => {
    this.setState({ showNavMenu: !this.state.showNavMenu });
  };

  closeNavbar = () => {
    this.setState({ showNavMenu: false });
  };

  render() {
    return (
      <Navsection>
        <LogoDiv>
          <Logo to="/">PIXELPERFECT</Logo>
        </LogoDiv>
        <DropdownButton
          onClick={this.toggleNavMenu}
          open={this.state.showNavMenu}
        >
          <i
            className={this.state.showNavMenu ? 'fas fa-times' : 'fas fa-bars'}
          />
        </DropdownButton>
        <Links open={this.state.showNavMenu}>
          <ListElement>
            <Link onClick={() => this.closeNavbar()} to={`/#${navbarIds.about}`}>
              about
            </Link>
          </ListElement>
          <ListElement>
            <Link onClick={() => this.closeNavbar()} to={`/#${navbarIds.services}`}>
              services
            </Link>
          </ListElement>
          <ListElement>
            <Link onClick={() => this.closeNavbar()} to={`/#${navbarIds.featured}`}>
              featured
            </Link>
          </ListElement>
          <ListElement>
            <Link onClick={() => this.closeNavbar()} to={`/#${navbarIds.projects}`}>
              projects
            </Link>
          </ListElement>
          <ListElement>
            <Link onClick={() => this.closeNavbar()} to={`/#${navbarIds.contact}`}>
              contact
            </Link>
          </ListElement>
        </Links>
      </Navsection>
    );
  }
}

export default Navbar;
