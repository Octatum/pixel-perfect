import React from 'react';
import styled from 'styled-components/macro';
import Slider from 'react-slick';

import Text from '../../../components/Text';
import ServiceSlide from './ServiceSlide';
import IntroSlide from './IntroSlide';
import SlideLayout from './SlideLayout';
import arrowImage from '../../assets/arrow.svg';
import { device } from '../../../utils/device';
import { StaticQuery, graphql } from 'gatsby';

const Layout = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  --margin: 5rem;

  ${device.laptop} {
    --margin: 4rem;
  }
  ${device.tablet} {
    --margin: 2.5rem;
  }
  ${device.tablet} {
    --margin: 2rem;
  }
`;

const Overlay = styled(SlideLayout)`
  position: absolute;
  justify-content: flex-start;
`;

const PreviousArrow = styled('img')`
  --arrow-width: 1.8rem;
  --arrow-height: calc(2 * var(--arrow-width));
  position: absolute;
  top: var(--margin);
  right: calc(1 * var(--arrow-width) + var(--margin));
  width: var(--arrow-width);
  height: var(--arrow-height);
  z-index: 1;
  cursor: pointer;

  ${device.tablet} {
    --arrow-width: 1.6rem;
  }

  ${device.mobile} {
    --arrow-width: 1.5rem;
  }
`;

const NextiArrow = styled(PreviousArrow)`
  right: var(--margin);
  transform: rotate(180deg);
`;

function PrevArrow(props) {
  const { onClick } = props;
  return <PreviousArrow onClick={onClick} src={arrowImage} />;
}

function NextArrow(props) {
  const { onClick } = props;
  return <NextiArrow onClick={onClick} src={arrowImage} />;
}

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Services = props => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { serviceList } = props.data.markdownRemark.frontmatter.services;

  return (
    <Layout>
      <Slider {...settings}>
        <IntroSlide />
        {serviceList.map(slide => (
          <ServiceSlide
            key={slide.name}
            name={slide.name}
            description={slide.content}
            background={slide.image}
          />
        ))}
      </Slider>
      <Overlay>
        <Text size={10} as="h1">
          {title}
        </Text>
      </Overlay>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query StartPageQuery {
        markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            title
            services {
              title
              serviceList {
                content
                image
                name
              }
            }
          }
        }
      }
    `}
    render={data => <Services data={data} {...props} />}
  />
);
