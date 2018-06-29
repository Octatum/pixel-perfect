import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

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
`

const ColorBox = styled.div`
  height: 100vh;
  width: 50vw;
  background: ${props => props.background}
`

class ProjectSlideshow extends Component {
  render() {
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
          <ColorBox background="darkred" />
          <ColorBox background="darkblue" />
          <ColorBox background="darkgreen" />
          <ColorBox background="white" />
        </Slider>
      </SliderLayout>
    );
  }
}

export default ProjectSlideshow
