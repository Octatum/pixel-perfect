import React from 'react';
import AppLayout from '../components/AppLayout';
import { graphql } from 'gatsby';
import CoursePresentation from '../page-components/CoursePresentation';

const ProjectTemplate = props => {
  const data = props.data.markdownRemark.frontmatter;

  return (
    <AppLayout>
      <CoursePresentation data={data} />
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
