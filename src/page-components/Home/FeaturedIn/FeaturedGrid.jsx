import React from 'react';
import styled from 'styled-components';
import FeaturedCell from './FeaturedCell';
import { device } from '../../../utils/device';

const Layout = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: 19em;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;

  ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${device.tablet} {
    grid-auto-rows: minmax(15em, 33vw);
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.mobile} {
    grid-auto-rows: minmax(15em, 50vw);
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeaturedGrid = () => {
  return (
    <Layout>
      {[1, 2, 3, 4, 5, 6, 7].map(value => (
        <FeaturedCell
          name="E3 Conference"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://s3-alpha.figma.com/img/404f/4a3a/1fa836f13510ee6e09a0f467c3ade313"
          key={value}
          highlight={value % 2 === 0}
        />
      ))}
    </Layout>
  );
};

export default FeaturedGrid;
