import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import SlidesSection from './SlidesSection';
import TextSection from './TextSection';

const Layout = styled.div`
  background: ${({ theme }) => theme.color.black};
  margin: 3em 0;
  display: flex;
  flex-direction: column;
`;

const OurStudents = () => {
  return (
    <Layout>
      <TextSection align="end">
        <Text align="right" size={9} mobileSize={6}>
          <Text as="span" bold>
            Our
          </Text>
          Students
        </Text>
        <Text align="right" size={1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{' '}
        </Text>
      </TextSection>
      <SlidesSection />
    </Layout>
  );
};

export default OurStudents;
