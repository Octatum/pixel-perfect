import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

const SliderLayout = styled.div`
  .slick-dots li button::before, .slick-dots li.slick-active button::before {
    color: white;
  }
`

const ColorBox = styled.div`
  height: 180px;
  background: ${props => props.background};
`;

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 2000,
      autoplay: true,
    };
    return (
      <SliderLayout>
        <Slider {...settings}>
          <ColorBox background="black"/>
          <ColorBox background="darkRed"/>
          <ColorBox background="darkBlue"/>
          <ColorBox background="green"/>
          <ColorBox background="white"/>
        </Slider>
      </SliderLayout>
    );
  }
}

export default SimpleSlider;
