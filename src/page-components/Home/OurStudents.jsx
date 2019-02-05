import React from 'react';
import styled from 'styled-components';

import Text, { Markdown } from '../../components/Text';
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

  const { ourStudentsContent } = data.content.frontmatter;

  return (
    <Layout>
      <TextSection align="end">
        <Text align="right" size={4} mobileSize={4}>
          <Text as="span" bold>
            Our
          </Text>
          Students
        </Text>
        <Markdown align="right" size={1}>
          {ourStudentsContent}
        </Markdown>
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

        content: markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            ourStudentsContent
          }
        }
      }
    `}
    render={data => <OurStudents data={data} {...props} />}
  />
);
