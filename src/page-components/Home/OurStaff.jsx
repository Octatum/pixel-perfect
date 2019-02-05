import React from 'react';
import Text, { Markdown } from '../../components/Text';
import SlidesSection from './SlidesSection';
import TextSection from './TextSection';
import OurLayout from './OurLayout';
import { StaticQuery, graphql } from 'gatsby';

const OurStaff = props => {
  const { data } = props;
  const slides = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

  const { ourStaffContent } = data.content.frontmatter;

  return (
    <OurLayout>
      <TextSection>
        <Text size={4} mobileSize={4}>
          <Text as="span" bold>
            Our
          </Text>
          Staff
        </Text>
        <Markdown size={1}>{ourStaffContent}</Markdown>
      </TextSection>
      <SlidesSection items={slides} rtl />
    </OurLayout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "ourStaff" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image
              }
            }
          }
        }

        content: markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            ourStaffContent
          }
        }
      }
    `}
    render={data => <OurStaff data={data} {...props} />}
  />
);
