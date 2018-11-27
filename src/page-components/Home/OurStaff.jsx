import React from 'react';
import Text from '../../components/Text';
import SlidesSection from './SlidesSection';
import TextSection from './TextSection';
import OurLayout from './OurLayout';

const OurStaff = () => {
  return (
    <OurLayout>
      <TextSection>
        <Text size={9}>
          <Text as="span" bold>
            Our
          </Text>
          Staff
        </Text>
        <Text size={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{' '}
        </Text>
      </TextSection>
      <SlidesSection rtl />
    </OurLayout>
  );
};

export default OurStaff;
