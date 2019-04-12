import React, { useState } from 'react';
import Carousel from 'react-alice-carousel';
import styled from 'styled-components';

import 'react-alice-carousel/lib/alice-carousel.css';

import { numberValues } from '../../../utils/device';
import MemberPicture from './MemberPicture';

const SliderLayout = styled.div`
  height: calc((50vw - 8em) / 4);
  margin: auto 0;

  .slick-dots li button::before,
  .slick-dots li.slick-active button::before {
    color: white;
  }

  img {
  }
`;

function SimpleSlider(props) {
  const { teamMembers } = props;

  return (
    <SliderLayout>
      <Carousel
        responsive={{ 0: { items: 2 }, 767: { items: 3 }, 1023: { items: 4 } }}
        duration={400}
        dotsDisabled={true}
      >
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
      </Carousel>
    </SliderLayout>
  );
}

export default SimpleSlider;
