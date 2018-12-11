import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../utils/device';

const Layout = styled('div')`
  flex: 1;
  height: 32.36vw;
  position: relative;
  background-color: red;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: cover;

  ${device.tablet} {
    min-height: 20rem;
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
  box-sizing: border-box;
`;

const HoverSlide = props => {
  const { src } = props;

  return (
    <Layout src={src}>
      <Overlay />
    </Layout>
  );
};

export default HoverSlide;
