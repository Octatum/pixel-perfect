import React from 'react';
import styled from 'styled-components/macro';
import Markdown from 'react-markdown';
import Text from '../../../components/Text';
import { device } from '../../../utils/device';
import SlideLayout from './SlideLayout';

const TextSection = styled.div`
  margin-bottom: 3em;
  padding-left: 30%;
  box-sizing: border-box;

  ${device.tablet} {
    padding-left: 15%;
  }

  ${device.mobile} {
    padding-left: 5%;
  }
`;

const SlideHeader = styled(Text)`
  margin: 0.75em 0;
`;

const MarkdownText = styled(Text)`
  p {
    margin-bottom: 0.5em;
  }

  a {
    color: white;
  }
`;

const ServiceSlide = props => {
  const { name, description, background } = props;
  console.log(description);
  return (
    <SlideLayout background={`url('${background}')`}>
      <TextSection>
        <SlideHeader align="right" bold size={7}>
          {name}
        </SlideHeader>
        <MarkdownText align="right" as={Markdown}>
          {description}
        </MarkdownText>
      </TextSection>
    </SlideLayout>
  );
};

export default ServiceSlide;
