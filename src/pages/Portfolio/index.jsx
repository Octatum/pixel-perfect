import React from 'react';
import styled from 'styled-components';

import ProjectSlideshow from './ProjectSlideshow';

const SlideshowLayout = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const TextLayout = styled.div`
  position: absolute;
  top: 26%;
  right: 5.5%;
  font-size: 4.5em;
  text-align: right;
  width: 5em;
  height: 2.2em;
`;

const Header = styled.h2`
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
`;

function Portfolio() {
  return (
    <SlideshowLayout>
      <ProjectSlideshow />
      <TextLayout>
        <Header>Nuestros Proyectos</Header>
      </TextLayout>
    </SlideshowLayout>
  );  
}

export default Portfolio;