import React from 'react';
import styled from 'styled-components';

const Layout = styled('div')`
  display: flex;
`;

const Slide = styled('div')`
  flex: 1;
  background-color: ${({color}) => color};
  height: 32.36vw;
`;

const SlidesSection = () => {
  return (
    <Layout>
      <Slide color="darkred"/>
      <Slide color="teal"/>
      <Slide color="magenta"/>
      <Slide color="darkslateblue"/>
      <Slide color="DarkSlateGray"/>
    </Layout>
  );
}

export default SlidesSection;
