import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import SlidesSection from './SlidesSection';
import TextSection from './TextSection';
import { graphql, StaticQuery } from 'gatsby';

const Layout = styled.div`
  background: ${({ theme }) => theme.color.black};
  margin: 2em 0;
  display: flex;
  flex-direction: column;
`;

const OurStudents = props => {
  const { data } = props;
  const slides = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

  return (
    <Layout>
      <TextSection align="end">
        <Text align="right" size={4} mobileSize={4}>
          <Text as="span" bold>
            Our
          </Text>
          Students
        </Text>
        <Text align="right" size={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{' '}
        </Text>
      </TextSection>
      <SlidesSection items={slides} />
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "ourStudents" } } }
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
    render={data => <OurStudents data={data} {...props} />}
  />
);
