import React from 'react';
import styled from 'styled-components/macro';
import OurLayout from '../OurLayout';
import TextSection from '../TextSection';
import Text from '../../../components/Text';
import ProjectGrid from './ProjectGrid';

const Layout = styled(OurLayout)`
  margin-bottom: 0;
`;

const OurProjects = () => {
  return (
    <Layout>
      <TextSection>
        <Text size={9}>
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
      <ProjectGrid />
    </Layout>
  );
};

export default OurProjects;
