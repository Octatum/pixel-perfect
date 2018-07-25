import React from 'react';
import styled from 'styled-components';

import ProjectSlideshow from './ProjectSlideshow';
import { device } from '../../utils/device'

const SlideshowLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const TextLayout = styled.div`
  position: absolute;
  top: 23%;
  right: 5.5%;
  font-size: 4em;
  text-align: right;
  width: 5em;
  height: 2.2em;

  @media screen and ${device.tablet} {
    font-size: 3em;
    top: 30%;
  }
`;

const Header = styled.h2`
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
  font-weight: 200;
`;

function Portfolio() {
  return (
    <SlideshowLayout>
      <ProjectSlideshow />
      <TextLayout>
        <Header>Nuestros <strong>Proyectos</strong></Header>
      </TextLayout>
    </SlideshowLayout>
  );
}

export default Portfolio;
