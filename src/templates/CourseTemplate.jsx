import React from 'react';
import AppLayout from '../components/AppLayout';
import ProjectContainer from '../page-components/Projects';
import { graphql } from 'gatsby';

const ProjectTemplate = props => {
  const data = props.data.markdownRemark.frontmatter;

  return (
    <AppLayout>
      <ProjectContainer data={data} />
    </AppLayout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(
      frontmatter: { type: { eq: "course" }, title: { eq: $title } }
    ) {
      frontmatter {
        title
        requirements
        description
        learnings
        programFile
      }
    }
  }
`;
