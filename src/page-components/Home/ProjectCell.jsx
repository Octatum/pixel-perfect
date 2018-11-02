import React from 'react';
import styled from 'styled-components/macro';

const Cell = styled.div`
  grid-column: span ${({ highlightHorizontal }) => highlightHorizontal ? 2 : 1};
  grid-row: span ${({ highlightVertical }) => highlightVertical ? 2 : 1};
  background-color: ${({ color }) => color};
  position: relative;

  &:hover > div {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  background: black;
  padding: 1em;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: 0.3s ease all;
`;

function ProjectCell(props) {

  return (
    <Cell {...props}>
      <Overlay>

      </Overlay>
    </Cell>
  )
}

export default ProjectCell;