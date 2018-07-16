import React from 'react'
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';
import { device } from '../utils/device'


const Bg = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;

  @media screen and ${device.tablet} {
    justify-content: flex-start;
  }
`;

const Textbox = MainText(styled.div`
  width: 30%;
  min-width: 450px;
  margin: 0 2em;
  box-sizing: border-box;

  @media screen and ${device.tablet} {
    position: absolute;
    width: auto;
    min-width: 0;
    max-width: 30em;
    top: 49%;
  }

  @media screen and ${device.mobile} {
    font-size: 0.8em;
  }
`);

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
      <MainSlideText>Perfeccionando la industria en <Bold>Monterrey</Bold></MainSlideText>
      <SecondaryText>demo <Bold>reel</Bold></SecondaryText>
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
