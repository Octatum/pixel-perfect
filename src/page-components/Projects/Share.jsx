import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';
import facebookIcon from './assets/facebook.svg';
import twitterIcon from './assets/twitter.svg';
import linkedinIcon from './assets/linkedin.svg';

const Layout = styled('div')`
  padding-top: 5rem;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled(Text)`
  margin-bottom: 3rem;
`;

const IconsContainer = styled('div')`
  display: flex;

  > :not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Icon = styled('img')`
  height: 2rem;
`;

const Share = () => {
  return (
    <Layout>
      <Header size={2}>SHARE</Header>
      <IconsContainer>
        <Icon src={facebookIcon} />
        <Icon src={twitterIcon} />
        <Icon src={linkedinIcon} />
      </IconsContainer>
    </Layout>
  );
};

export default Share;
