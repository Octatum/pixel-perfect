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

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    width: initial;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .alice-carousel__prev-btn {
    text-align: initial;
    left: -2.5em;
  }

  .alice-carousel__next-btn {
    text-align: initial;
    right: -2.5em;
  }

  .alice-carousel__prev-btn [data-area]::after,
  .alice-carousel__next-btn [data-area]::after {
    font-family: 'Font Awesome 5 Free';
    font-size: 1.2em;
    font-style: normal;
    font-weight: 900;
    color: white;
    text-decoration: inherit;
  }

  .alice-carousel__prev-btn [data-area]::after {
    content: '\f053';
  }

  .alice-carousel__next-btn [data-area]::after {
    content: '\f054';
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
