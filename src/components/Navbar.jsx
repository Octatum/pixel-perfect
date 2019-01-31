import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { device } from '../utils/device';
import Link from './Link';
import { FullpageContext } from './AppLayout';

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

const DropdownButton = styled.a`
  position: fixed;
  right: 1em;
  display: none;
  font-size: 2em;
  color: white;
  justify-self: flex-end;
  cursor: pointer;
  z-index: 1;
  transition: 0.5s all;

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

const Links = styled.ul`
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
    width: 100%;
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

export const navbarIds = {
  about: 'about',
  services: 'services',
  featured: 'featured',
  projects: 'projects',
  contact: 'contact',
};

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [fullpageApi] = useContext(FullpageContext);

  const moveToSection = (section) => {
    setNavOpen(false);
    if (!fullpageApi) return;

    fullpageApi.moveTo(section);
  }

  return (
    <Navsection>
      <LogoDiv>
        <Logo to="/">PIXELPERFECT</Logo>
      </LogoDiv>
      <DropdownButton onClick={() => setNavOpen(!navOpen)} open={navOpen}>
        <i className={navOpen ? 'fas fa-times' : 'fas fa-bars'} />
      </DropdownButton>
      <Links open={navOpen}>
        {Object.keys(navbarIds).map(key => {
          return (
            <ListElement key={key}>
              <Link onClick={() => moveToSection(key)} to={`/#${key}`}>
                {key}
              </Link>
            </ListElement>
          );
        })}
      </Links>
    </Navsection>
  );
}

export default Navbar;
