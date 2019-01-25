import React from 'react';
import Text from '../../../components/Text';
import SlideLayout from './SlideLayout';
import { StaticQuery, graphql } from 'gatsby';

const IntroSlide = props => {
  const {
    lowerText,
    upperText,
    title,
  } = props.data.markdownRemark.frontmatter.services.initialSlide;

  return (
    <SlideLayout background="darkred">
      <Text as="h1" align="right" size={10}>
        {title}
      </Text>
      <Text size={2} align="right">
        {upperText}
      </Text>
      <Text size={6} align="right" bold>
        {lowerText}
      </Text>
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
              }
            }
          }
        }
      }
    `}
    render={data => <IntroSlide data={data} {...props} />}
  />
);
