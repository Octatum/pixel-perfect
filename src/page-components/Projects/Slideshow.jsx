import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { numberValues } from '../../utils/device';

const Layout = styled('div')`
  margin: 5% 0;
`;

const Image = styled('img')`
  max-height: 30rem;
`;

const Dot = styled('div')`
  padding: 2px;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.5rem;
  transition: 0.3s ease-in-out all;

  .slick-active > & {
    opacity: 0.3;
  }
`;

const Slideshow = props => {
  const { images } = props;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: numberValues.mobile,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: i => <Dot />,
  };
  console.log(images);

  return (
    <Layout>
      <Slider {...settings}>
        {images.map(imageObject => (
          <Image src={imageObject.image} key={imageObject.image} />
        ))}
      </Slider>
    </Layout>
  );
};

export default Slideshow;
