import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';

const Layout = styled('div')`
  display: flex;
  padding: 5%;
  padding-top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: white;
    width: 10%;
  }
`;

const Header = styled(Text)`
  margin-bottom: 1rem;
`;

const WhatWeDid = props => {
  const { activities } = props;

  return (
    <Layout>
      <Header as="h2" size={9}>
        What we{' '}
        <Text as="span" bold>
          did
        </Text>
      </Header>
      <Text size={1} lineHeight="1.4em">
        {activities}
      </Text>
    </Layout>
  );
};

export default WhatWeDid;
