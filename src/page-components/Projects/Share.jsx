import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';
import facebookIcon from './assets/facebook.svg';
import twitterIcon from './assets/twitter.svg';
import linkedinIcon from './assets/linkedin.svg';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import getCurrentLocation from '../../utils/getCurrentLocation';
import { device } from '../../utils/device';

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
  width: 20%;
  justify-content: space-between;

  > * {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${device.tablet} {
    width: 30%;
  }

  ${device.mobile} {
    width: 45%;
  }
`;

const Icon = styled('img')`
  max-height: 100%;
  max-width: 100%;
`;

const quoteText = "Check out this project on PixelPerfectvfx's website!";

const Share = props => {
  const { title, description } = props;

  return (
    <Layout>
      <Header size={2}>SHARE</Header>
      <IconsContainer>
        <FacebookShareButton url={getCurrentLocation()} quote={quoteText}>
          <Icon src={facebookIcon} />
        </FacebookShareButton>
        <TwitterShareButton title={title} url={getCurrentLocation()}>
          <Icon src={twitterIcon} />
        </TwitterShareButton>
        <LinkedinShareButton
          title={title}
          description={description}
          url={getCurrentLocation()}
        >
          <Icon src={linkedinIcon} />
        </LinkedinShareButton>
      </IconsContainer>
    </Layout>
  );
};

export default Share;
