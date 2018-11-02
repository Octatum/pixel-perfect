import React from 'react';
import OurLayout from '../OurLayout';
import TextSection from '../TextSection';
import Text from '../../../components/Text';
import ProjectGrid from './ProjectGrid';

const OurProjects = () => {
  return (
    <OurLayout>
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
    </OurLayout>
  );
};

export default OurProjects;
