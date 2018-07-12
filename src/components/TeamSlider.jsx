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
            picture="http://i.imgur.com/YdhUZdZ.png"
            linkedin="/nosotros"
            behance="/nosotros"/>
          <MemberPicture color="darkred"
            picture="https://texasbarblog.lexblogplatformtwo.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg"
            linkedin="/nosotros"/>
          <MemberPicture color="darkblue"
            picture="https://s3-us-west-2.amazonaws.com/s.cdpn.io/305956/profile/profile-512.jpg?6"
            behance="/nosotros"/>
          <MemberPicture color="green"
            picture="https://img.memecdn.com/only-google-why_fb_2508449.jpg"/>
          <MemberPicture color="purple" />
        </Slider>
      </SliderLayout>
    );
  }
}

export default SimpleSlider;
