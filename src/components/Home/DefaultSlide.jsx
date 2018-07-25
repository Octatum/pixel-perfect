import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/device';

const Bg = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: flex-end;

  ${device.tablet} {
    justify-content: flex-start;
  }
`;

const Textbox = styled.div`
  width: 30%;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
  min-width: 450px;
  margin: 0 2em;
  box-sizing: border-box;

  ${device.tablet} {
    position: absolute;
    width: auto;
    min-width: 0;
    max-width: 30em;
    top: 49%;
  }

  ${device.mobile} {
    font-size: 0.8em;
  }
`;

const MainSlideText = styled.div`
  font-size: 4em;
`;

const SecondaryText = styled.div`
  font-size: 1.2em;
  margin-top: 1em;
  line-height: 1.3em;
`;

const Bold = styled.span`
  font-weight: bold;
`;


const DefaultSlide = (data) => (
  <Bg {...data}>
    <Textbox>
      <MainSlideText>Perfeccionando la industria en <strong>Monterrey</strong></MainSlideText>
      <SecondaryText>demo <strong>reel</strong></SecondaryText>
    </Textbox>
  </Bg>
);

export default DefaultSlide;

export const SlideOne = (data) => (
  <Bg background={data.background}>
    <Textbox>
      <MainSlideText>Lorem ipsum dolor sit amet</MainSlideText>
      <SecondaryText>Lorem dolor sit amet.</SecondaryText>
    </Textbox>
  </Bg>
);

export const SlideTwo = (data) => (
  <Bg background={data.background}>
    <Textbox>
      <MainSlideText>Consectetur adipisicing elit</MainSlideText>
      <SecondaryText>Aspernatur corrupti excepturi vel, esse consequatur eaque porro!</SecondaryText>
    </Textbox>
  </Bg>
);
