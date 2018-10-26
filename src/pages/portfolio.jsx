import React from 'react';
import styled from 'styled-components';

import ProjectSlideshow from '../components/Portfolio/ProjectSlideshow';
import { device } from '../utils/device';
import AppLayout from '../components/AppLayout';
import { graphql } from 'gatsby';

const SlideshowLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const TextLayout = styled.div`
  position: absolute;
  top: 23%;
  right: 5.5%;
  font-size: 4em;
  text-align: right;
  width: 5em;
  height: 2.2em;

  ${device.tablet} {
    font-size: 3em;
    top: 30%;
  }
`;

const Header = styled.h2`
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
  font-weight: 200;
`;

function Portfolio({ data }) {
  const { projects: projectsData } = data;

  const projects = projectsData.edges.map(({ node }) => ({
    name: node.name,
    image: node.image,
    path: node.path,
  }));

  return (
    <AppLayout>
      <SlideshowLayout>
        <ProjectSlideshow projects={projects} />
        <TextLayout>
          <Header>Our Projects</Header>
        </TextLayout>
      </SlideshowLayout>
    </AppLayout>
  );
}

export default Portfolio;

export const query = graphql`
  query GetJsonCourses {
    projects: allProjectsJson {
      edges {
        node {
          name
          image
          path
        }
      }
    }
  }
`;
