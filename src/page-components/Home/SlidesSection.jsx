import React from 'react';
import styled from 'styled-components';
import Slick from 'react-slick';
import HoverSlide from './HoverSlide';
import { numberValues } from '../../utils/device';

const Layout = styled('div')`
  width: 100%;
  max-width: 100%;
`;

const SlidesSection = props => {
  const { items = [], rtl } = props;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl,
    responsive: [
      {
        breakpoint: numberValues.laptop,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: numberValues.tablet,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: numberValues.mobile,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Layout>
      <Slick {...settings}>
        {items.map(item => (
          <HoverSlide key={item.title} src={item.image} />
        ))}
      </Slick>
    </Layout>
  );
};

export default SlidesSection;
