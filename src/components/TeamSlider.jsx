import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import MemberPicture from './MemberPicture';

const SliderLayout = styled.div`
  .slick-dots li button::before, .slick-dots li.slick-active button::before {
    color: white;
  }
`

class SimpleSlider extends Component {
  render() {
    const settings = {
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
          <MemberPicture
            color="grey"
            picture="http://i.imgur.com/YdhUZdZ.png" />
          <MemberPicture color="darkred" />
          <MemberPicture color="darkblue" />
          <MemberPicture color="green" />
          <MemberPicture color="purple" />
        </Slider>
      </SliderLayout>
    );
  }
}

export default SimpleSlider;
