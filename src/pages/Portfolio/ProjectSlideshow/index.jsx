import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Link from './../../../components/Link';

const SliderLayout = styled.div`
  position: relative;

  .slick-list {
    height: 100vh;
    opacity: 0.8;
  }

  .slick-prev, .slide-next {
    z-index: 1;
  }

  .slick-prev {
    left: 2%;
  }

  .slick-next {
    right: 2%;
  }
`;

const ColorBox = styled.div`
  height: 100vh;
  width: 50vw;
  background: ${props => props.background};
`;

function ProjectSlideshow() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false
  }

  return (
    <SliderLayout>
      <Slider {...settings}>
        <Link to="/projectspotlight"><ColorBox background="darkred" /></Link>
        <Link to="/projectspotlight"><ColorBox background="darkblue" /></Link>
        <Link to="/projectspotlight"><ColorBox background="darkgreen" /></Link>
        <Link to="/projectspotlight"><ColorBox background="white" /></Link>
      </Slider>
    </SliderLayout>
  );
}

export default ProjectSlideshow
