import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { numberValues } from '../../../utils/device';
import MemberPicture from './MemberPicture';

import rene from './assets/memberpictures/Rene.png';
import eden from './assets/memberpictures/eden.png';
import Ana from './assets/memberpictures/Ana.png';
import Ricky from './assets/memberpictures/Rikcy.png';
import Eduardo from './assets/memberpictures/eduardo.jpg';

const SliderLayout = styled.div`
  .slick-dots li button::before,
  .slick-dots li.slick-active button::before {
    color: white;
  }
`;

function SimpleSlider() {
  const settings = {
    dots: false,
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

  const members = [
    {
      name: 'Rene Allegretti',
      role: 'Co-founder',
      image: rene,
      linkedin: 'https://www.linkedin.com/in/rene-allegretti-4269b546/',
      imdb: 'https://www.imdb.com/name/nm5727065/',
    },
    {
      name: 'Edén Muñoz',
      role: 'Co-founder',
      image: eden,
      linkedin: 'https://www.linkedin.com/in/eden-mu%C3%B1oz-58496b36/',
      imdb: 'https://www.imdb.com/name/nm6097371/',
    },
    {
      name: 'Eduardo Parra',
      role: 'Visual Effects Executive Producer',
      image: Eduardo,
      linkedin: 'https://www.linkedin.com/in/edparrao/',
    },
    {
      name: 'Ricardo Santillana',
      role: 'CG Generalist',
      image: Ricky,
      linkedin: 'https://www.linkedin.com/in/rsantillana/',
    },
    {
      name: 'Ana Luisa López Segovia',
      role: 'Project Manager, CG Generalist',
      image: Ana,
      linkedin: 'https://www.linkedin.com/in/ana-luisa-lopez-segovia/',
    },
  ];

  return (
    <SliderLayout>
      <Slider {...settings}>
        {members.map(member => (
          <MemberPicture
            key={member.name + member.role}
            name={member.name}
            role={member.role}
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
