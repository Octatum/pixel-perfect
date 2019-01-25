import React from 'react';
import styled from 'styled-components/macro';
import OurLayout from '../OurLayout';
import TextSection from '../TextSection';
import Text from '../../../components/Text';
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

  return (
    <Layout>
      <TextSection>
        <Text size={7} mobileSize={6}>
          <Text as="span" bold>
            Our
          </Text>
          Projects
        </Text>
        <Text size={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{' '}
        </Text>
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
      }
    `}
    render={data => <OurProjects data={data} {...props} />}
  />
);
