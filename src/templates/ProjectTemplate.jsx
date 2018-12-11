import React from 'react';
import AppLayout from '../components/AppLayout';
import ProjectContainer from '../page-components/Projects';

const ProjectTemplate = (props) => {
  const data = props.data.markdownRemark;

  return (
    <AppLayout>
      <ProjectContainer data={data} />
    </AppLayout>
  );
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(
      frontmatter: { type: { eq: "project" }, title: { eq: $title } }
    ) {
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
        releaseDate
        plot
        videoData {
          type
          url
        }
        activities
        beforeAfterImages {
          before
          after
        }
      }
    }
  }
`;
