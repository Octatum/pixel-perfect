import React from 'react';
import styled from 'styled-components/macro';
import ProjectCell from './ProjectCell';
import { device } from '../../../utils/device';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 25vw;
  grid-auto-flow: row dense;

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 25vmax;
  }

  ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 25vmax;
  }
`;

const ProjectGrid = () => {
  return (
    <Layout>
      <ProjectCell color="darkblue" highlightVertical />
      <ProjectCell color="darkred" />
      <ProjectCell color="salmon" />
      <ProjectCell color="white" highlightHorizontal />
      <ProjectCell color="purple" />
      <ProjectCell color="#222" />
    </Layout>
  );
};

export default ProjectGrid;
