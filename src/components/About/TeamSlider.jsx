import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';

import MemberPicture from './MemberPicture';
import { numberValues } from '../../utils/device';

import rene from './assets/memberpictures/Rene.png';
import eden from './assets/memberpictures/eden.png';
import Ana from './assets/memberpictures/Ana.png';
import Ricky from './assets/memberpictures/Rikcy.png';

const SliderLayout = styled.div`
  .slick-dots li button::before, .slick-dots li.slick-active button::before {
    color: white;
  }
`;

function SimpleSlider () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: numberValues.laptop,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: numberValues.tablet,
        settings: {
          slidesToShow: 3,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: numberValues.mobile,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  const members = [{
    name: 'Rene Allegretti',
    image: rene,
    linkedin: 'https://www.linkedin.com/in/rene-allegretti-4269b546/',
    imdb: 'https://www.imdb.com/name/nm5727065/'
  }, {
    name: 'Eden Muñoz',
    image: eden,
    linkedin: 'https://www.linkedin.com/in/eden-mu%C3%B1oz-58496b36/',
    imdb: 'https://www.imdb.com/name/nm6097371/'
  }, {
    name: 'Ricardo Santillana',
    image: Ricky,
    linkedin: 'https://www.linkedin.com/in/rsantillana/'
  }, {
    name: 'Ana Luisa López Segovia',
    image: Ana,
    linkedin: 'https://www.linkedin.com/in/ana-luisa-lopez-segovia/'
  }];

  return (
    <SliderLayout>
      <Slider {...settings}>
        {members.map(member => (
          <MemberPicture
            name={member.name}
            picture={member.image}
            linkedin={member.linkedin}
            imdb={member.imdb}
          />
        ))}
      </Slider>
    </SliderLayout>
  );
}

export default SimpleSlider;
