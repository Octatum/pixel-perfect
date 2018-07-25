import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import Link from '../Link';
import { device, numberValues } from '../../utils/device'

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
  background: ${props => props.background};
  background-size: 100% auto;

  ${device.tablet} {
    opacity: 0.6;
  }
`;

function ProjectSlideshow({projects}) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: numberValues.tablet,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <SliderLayout>
      <Slider {...settings}>
        {projects.map(project => (
          <Link to={`/portfolio/${project.path}`}><ColorBox background={`url("/images/${project.image}") center`} /></Link>
        ))}
      </Slider>
    </SliderLayout>
  );
}

export default ProjectSlideshow
