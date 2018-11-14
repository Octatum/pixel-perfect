import React from 'react';
import styled from 'styled-components/macro';
import ReactBA from 'react-before-after-slider';

const Layout = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
`;

const SliderItem = styled('div')`
  margin-top: 5rem;

  > * {
    max-width: 100%;
  }
`;

const BeforeAfter = props => {
  const { beforeAfterImages } = props;

  return (
    <Layout>
      {beforeAfterImages.map(item => (
        <SliderItem key={item.before}>
          <ReactBA
            before={item.before}
            after={item.after}
            width={1024}
            height={576}
          />
        </SliderItem>
      ))}
    </Layout>
  );
};

export default BeforeAfter;
