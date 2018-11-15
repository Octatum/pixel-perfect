import React from 'react';
import Text from '../../../components/Text';
import SlideLayout from './SlideLayout';

const IntroSlide = () => {
  return (
    <SlideLayout background="black">
      <Text as="h1" align="right" size={10}>
        Title example
      </Text>
      <Text size={2} align="right">
        text example here
      </Text>
      <Text size={6} align="right" bold>
        important word
      </Text>
      <Text align="right">
        see our{' '}
        <Text bold as="span">
          works
        </Text>
      </Text>
    </SlideLayout>
  );
};

export default IntroSlide;
