import React from 'react';
import AppLayout from '../components/AppLayout';
import ProjectContainer from '../page-components/Projects';
import { graphql } from 'gatsby';

const ProjectTemplate = props => {
  const data = {
    ...props.data.markdownRemark.frontmatter,
    ...props.data.markdownRemark.fields,
  };

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
      frontmatter: { type: { eq: "project" }, title: { eq: $title } }
    ) {
      fields {
        previousRoute
        nextRoute
      }
      frontmatter {
        title
        image
        dimensions {
          width
          height
        }
        banner
        genre
        studio
        images {
          image
        }
        releaseDate
        plot
        videoData {
          type
          id
        }
        beforeAfterImages {
          before
          after
        }
        activities
      }
    }
  }
`;
