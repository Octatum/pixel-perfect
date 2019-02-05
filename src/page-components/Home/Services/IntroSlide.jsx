import React from 'react';
import Text from '../../../components/Text';
import SlideLayout from './SlideLayout';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { device } from '../../../utils/device';

const TextBox = styled(Text)`
  width: 50%;
  margin-bottom: 1.5rem;

  ${device.tablet} {
    width: 80%;
  }

  ${device.mobile} {
    width: 100%;
    text-align: justify;
  }
`;

const IntroSlide = props => {
  const {
    lowerText,
    upperText,
    title,
    image,
  } = props.data.markdownRemark.frontmatter.services.initialSlide;

  return (
    <SlideLayout
      style={{ alignItems: 'flex-end' }}
      background={`url('${image}')`}
    >
      <Text as="h1" align="right" size={10}>
        {title}
      </Text>
      <Text size={2} align="right">
        {upperText}
      </Text>
      <TextBox size={2} align="right" bold>
        {lowerText}
      </TextBox>
    </SlideLayout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query IntroSlide {
        markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            title
            services {
              title
              initialSlide {
                lowerText
                upperText
                title
                image
              }
            }
          }
        }
      }
    `}
    render={data => <IntroSlide data={data} {...props} />}
  />
);
