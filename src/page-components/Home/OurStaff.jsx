import React from 'react';
import Text from '../../components/Text';
import SlidesSection from './SlidesSection';
import TextSection from './TextSection';
import OurLayout from './OurLayout';
import { StaticQuery, graphql } from 'gatsby';
import { navbarIds } from '../../components/Navbar';

const OurStaff = props => {
  const { data } = props;
  const slides = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

  return (
    <OurLayout>
      <TextSection>
        <Text size={6} mobileSize={4}>
          <Text as="span" bold>
            Our
          </Text>
          Staff
        </Text>
        <Text size={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{' '}
        </Text>
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
      }
    `}
    render={data => <OurStaff data={data} {...props} />}
  />
);
