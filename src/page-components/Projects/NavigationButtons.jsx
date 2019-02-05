import React from 'react';
import styled from 'styled-components';
import backArrow from './assets/back-arrow.svg';
import arrow from './assets/arrow.svg';
import GatsbyLink from 'gatsby-link';
import { navbarIds } from '../../components/Navbar';

const Layout = styled('div')`
  display: flex;
  padding: 2rem 5%;
  justify-content: space-between;
`;

const ImageIcon = styled('img')`
  height: 1.2rem;
`;

const NavigationButtons = props => {
  const { previousProjectRoute, nextProjectRoute } = props;

  return (
    <Layout>
      <div>
        <GatsbyLink to={`/#${navbarIds.projects}`}>
          <ImageIcon src={backArrow} alt="Go back" />
        </GatsbyLink>
      </div>
      <div>
        <GatsbyLink to={`/project/${previousProjectRoute}`}>
          <ImageIcon src={arrow} alt="Previous project" />
        </GatsbyLink>
        <GatsbyLink to={`/project/${nextProjectRoute}`}>
          <ImageIcon
            style={{ transform: 'rotate(180deg)' }}
            src={arrow}
            alt="Next project"
          />
        </GatsbyLink>
      </div>
    </Layout>
  );
};

export default NavigationButtons;
