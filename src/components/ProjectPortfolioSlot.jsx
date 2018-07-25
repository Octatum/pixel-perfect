import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';

const Layout = styled.div`
  position: relative;
  background-color: ${props => props.bg};
  overflow: hidden;
  flex: 1;
  min-width: 20em;
  max-width: 30em;
  min-height: 40vh;
  height: 30em;

  ${device.tablet} {
    max-width: 100vw;
  }

  &:hover .list {
    padding: 2em 2.5em;
    opacity: 1;
  }
`

const ListDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2.5em;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.3s ease;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ul {
    list-style-type: '> ';
  }
`;

const grabNames = arr => {
  if (arr === undefined || arr.length === 0) {
    return null;
  }
  return arr.map(name => (<li>{name}</li>));
}

function ProjectPortfolioSlot(props) {
  return (
    <Layout bg={props.bg}>
      <ListDiv className="list">
        <ul>
          {grabNames(props.names)}
        </ul>
        <p><strong>...</strong></p>
      </ListDiv>
    </Layout>
  )
}

export default ProjectPortfolioSlot;