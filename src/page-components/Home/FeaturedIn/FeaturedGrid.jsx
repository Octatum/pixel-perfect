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

const FeaturedGrid = props => {
  const { items } = props;

  return (
    <Layout>
      {items.map(item => (
        <FeaturedCell
          key={item.title}
          {...item}
          title={item.title}
          description={item.description}
          backgroundImage={item.backgroundImage}
          dimensions={item.dimensions}
        />
      ))}
    </Layout>
  );
};

export default FeaturedGrid;
