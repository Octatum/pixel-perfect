import React from 'react'
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';


const Bg = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const RightTextbox = MainText(styled.div`
  min-width: 450px;
  width: 30%;
  margin-right: 60px;
`);

const MainSlideText = styled.div`
  font-size: 4em;
`;

const SecondaryText = styled.div`
  font-size: 2em;
  margin-top: 1em;
  line-height: 1.3em;
`;

const Bold = styled.span`
  font-weight: bold;
`;


const DefaultSlide = (data) => (
  <Bg {...data}>
    <RightTextbox>
      <MainSlideText>Perfeccionando la industria en <Bold>Monterrey</Bold></MainSlideText>
      <SecondaryText>demo <Bold>reel</Bold></SecondaryText>
    </RightTextbox>
  </Bg>
);

export default DefaultSlide;

export const SlideOne = (data) => (
  <Bg background={data.background}>
    <RightTextbox>
      <MainSlideText>Lorem ipsum dolor sit amet</MainSlideText>
      <SecondaryText>Lorem dolor sit amet.</SecondaryText>
    </RightTextbox>
  </Bg>
);

export const SlideTwo = (data) => (
  <Bg background={data.background}>
    <RightTextbox>
      <MainSlideText>Consectetur adipisicing elit</MainSlideText>
      <SecondaryText>Aspernatur corrupti excepturi vel, esse consequatur eaque porro!</SecondaryText>
    </RightTextbox>
  </Bg>
);