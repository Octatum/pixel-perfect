import React from 'react';
import styled from 'styled-components/macro';
import ProjectCell from './ProjectCell';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 25vw;
  grid-auto-flow: row dense;
`;

const ProjectGrid = () => {
  return (
    <Layout>
      <ProjectCell color="darkblue" highlightVertical />
      <ProjectCell color="darkred" />
      <ProjectCell color="salmon" />
      <ProjectCell color="purple" />
      <ProjectCell color="#222" />
      <ProjectCell color="white" highlightHorizontal />
    </Layout>
  );
};

export default ProjectGrid;
