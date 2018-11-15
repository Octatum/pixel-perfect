import React from 'react';
import styled from 'styled-components/macro';

const Layout = styled('div')`
  flex: 1;
  background-color: ${({ color }) => color};
  height: 32.36vw;
  position: relative;

  :hover > div {
    opacity: 1;
  }
`;

const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out opacity;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
`;

const HoverSlide = (props) => {
  const { color } = props;

  return (
    <Layout color={color}>
      <Overlay>

      </Overlay>
    </Layout>
  );
}

export default HoverSlide;
