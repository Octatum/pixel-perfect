import React from 'react';
import styled from 'styled-components/macro';
import ReactCompare from 'react-compare-image';
import { device } from '../../utils/device';

const Layout = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5%;

  ${device.mobile} {
    padding: 0;
  }
`;

const SliderItem = styled('div')`
  margin-top: 5rem;
  max-width: 100%;

  ${device.tablet} {
    margin-top: 3rem;
  }
`;

const BeforeAfter = props => {
  const { beforeAfterImages } = props;

  return (
    <Layout>
      {beforeAfterImages.map(item => (
        <SliderItem key={item.before}>
          <ReactCompare leftImage={item.before} rightImage={item.after} hover />
        </SliderItem>
      ))}
    </Layout>
  );
};

export default BeforeAfter;
