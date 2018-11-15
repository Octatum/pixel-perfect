import React from 'react';
import styled from 'styled-components';
import Slick from 'react-slick';
import HoverSlide from './HoverSlide';

const Layout = styled('div')`
  width: 100%;
  max-width: 100%;
`;

const colors = [
  "darkred",
  "teal",
  "magenta",
  "darkslateblue",
  "midnightblue",
  "darkslategray",
  "red",
  "white"
];

const SlidesSection = (props) => {
  const { rtl } = props;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl
  };

  return (
    <Layout>
      <Slick {...settings}>
        {colors.map(color => (
          <HoverSlide key={color} color={color} />
        ))}
      </Slick>
    </Layout>
  );
};

export default SlidesSection;
