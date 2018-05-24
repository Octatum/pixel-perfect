import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-static';

import { MainText } from '../styles/AppStyles';

const Navsection = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-height: 15vh;
  min-height: 110px;
  padding: 3vh 0;
`;

const Link = MainText(styled(_Link)`
  text-decoration: none;
  color: ${props => props.theme.mainLightText};

  &:visited {
    text-decoration: none;
  }
`);

const Logo = Link.extend`
  width: 280px;
  text-align: right;
  font-size: 2.3em;
  font-weight: bold;
  letter-spacing: -0.1em;
`;

const Links = styled.ul`
  display: flex;
  flex: 1;
  max-width: calc(40% - 12em);
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 6em;
`;

const ListElement = styled.li`
  font-size: 1.1em;
`;



const Navbar = () => (
  <Navsection>
    <Logo to="/">PIXELPERFECT</Logo>
    <Links>
      <ListElement><Link to="/">servicios</Link></ListElement>
      <ListElement><Link to="/">nosotros</Link></ListElement>
      <ListElement><Link to="/">contacto</Link></ListElement>
    </Links>
  </Navsection>
);

export default Navbar;