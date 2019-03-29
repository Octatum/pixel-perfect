import React from 'react';
import { graphql } from 'gatsby';
import AppLayout from '../components/AppLayout';
import CoursePresentation from '../page-components/CoursePresentation';

const ProjectTemplate = props => {
  const data = props.data.markdownRemark;

  return (
    <AppLayout>
      <CoursePresentation data={{ ...data.fields, ...data.frontmatter }} />
    </AppLayout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(
      frontmatter: { type: { eq: "courses" }, title: { eq: $title } }
    ) {
      fields {
        previousRoute
        nextRoute
      }
      frontmatter {
        title
        image
        requirements
        description
        learnings
        programFile
      }
    }
  }
`;
