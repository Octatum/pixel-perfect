import React from 'react';
import styled from 'styled-components';
import HoverSlide from './HoverSlide';

const Layout = styled('div')`
  display: flex;
`;

const SlidesSection = () => {
  return (
    <Layout>
      <HoverSlide color="darkred" />
      <HoverSlide color="teal" />
      <HoverSlide color="magenta" />
      <HoverSlide color="darkslateblue" />
      <HoverSlide color="DarkSlateGray" />
    </Layout>
  );
};

export default SlidesSection;
