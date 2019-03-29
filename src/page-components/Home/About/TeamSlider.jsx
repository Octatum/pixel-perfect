import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { numberValues } from '../../../utils/device';
import MemberPicture from './MemberPicture';

const SliderLayout = styled.div`
  .slick-dots li button::before,
  .slick-dots li.slick-active button::before {
    color: white;
  }
`;

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
        slidesToShow: 2,
        arrows: true,
      },
    },
  ],
};

function SimpleSlider(props) {
  const { teamMembers } = props;

  return (
    <SliderLayout>
      <Slider {...settings}>
        {teamMembers.map(member => (
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
