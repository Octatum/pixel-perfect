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

const ProjectGrid = props => {
  const { projects } = props;

  return (
    <Layout>
      {projects.map(project => (
        <ProjectCell key={project.title} data={project} />
      ))}
    </Layout>
  );
};

export default ProjectGrid;
