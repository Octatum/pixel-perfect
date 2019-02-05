import React from 'react';
import styled from 'styled-components/macro';
import OurLayout from '../OurLayout';
import TextSection from '../TextSection';
import Text, { Markdown } from '../../../components/Text';
import ProjectGrid from './ProjectGrid';
import { StaticQuery, graphql } from 'gatsby';

const Layout = styled(OurLayout)`
  padding-bottom: 0;
  margin-bottom: 0;
`;

const OurProjects = props => {
  const projects = props.data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

  const { ourProjectsContent } = props.data.content.frontmatter;


  return (
    <Layout>
      <TextSection>
        <Text size={7} mobileSize={6}>
          <Text as="span" bold>
            Our
          </Text>
          Projects
        </Text>
        <Markdown size={1}>
          {ourProjectsContent}
        </Markdown>
      </TextSection>
      <ProjectGrid projects={projects} />
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "project" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }

        content: markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            ourProjectsContent
          }
        }
      }
    `}
    render={data => <OurProjects data={data} {...props} />}
  />
);
