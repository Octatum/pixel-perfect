import React from 'react';
import styled from 'styled-components/macro';

import Text from '../../../components/Text';
import ServiceSlide from './ServiceSlide';

const Layout = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  padding: 4em 3em;
  background: ${({ theme }) => theme.color.black};
`;

const Services = () => {
  return (
    <Layout>
      <TitleSection>
        <Text as="h1" align="right" size={10}>Title example</Text>
        <Text size={2} align="right">text example here</Text>
        <Text size={6} align="right" bold>
          important word
        </Text>
        <Text>
          see our <Text bold as="span" align="right">works</Text>
        </Text>
      </TitleSection>
      <ServiceSlide />
    </Layout>
  );
};

export default Services;
