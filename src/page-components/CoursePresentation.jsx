import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import slideArrow from './assets/arrow.svg';
import Text from '../components/Text';
import downloadButton from './assets/download.svg';
import { device } from '../utils/device';
import backArrow from './assets/back-arrow.svg';
import { navbarIds } from '../components/Navbar';
import getCurrentLocation from '../utils/getCurrentLocation';

const BackgroundImageContainer = styled('div')`
  --padding: 3.5rem;
  --padding-vertical: 2rem;

  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  ${device.tablet} {
    --padding: 2rem;
    background-position: center;
  }
`;

const Container = styled('section')`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-template-rows: 0.5fr 1fr 1.5fr;
  grid-column-gap: 25%;
  grid-template-areas:
    'back-arrow arrows'
    '. title'
    'requirements learnings';
  box-sizing: border-box;
  padding: var(--padding);
  padding-bottom: var(--padding-vertical);
  padding-top: 5rem;
  min-height: 100vh;
  position: inherit;

  ${device.tablet} {
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      'back-arrow arrows'
      'title title'
      'requirements requirements'
      'learnings learnings';
  }
`;

const WhiteLine = styled.div`
  height: 1px;
  background: white;
  position: inherit;
`;

const GridCell = styled('div')`
  grid-area: ${({ area }) => area};
  align-self: ${({ align }) => align || 'initial'};
  justify-self: ${({ justify }) => justify || 'initial'};
`;

const ProgramSection = styled('div')`
  position: inherit;
  padding: var(--padding-vertical) var(--padding);
`;

const SectionHeader = styled(Text)`
  margin-bottom: 1rem;
`;

const RightSlideArrow = styled('span')`
  > * {
    transform: rotate(180deg);
  }
`;

const Img = styled('img')`
  height: ${({ height }) => height || '1em'};
`;

const CoursePresentation = props => {
  const {
    title,
    description,
    requirements,
    learnings,
    programFile,
    image,
    previousRoute,
    nextRoute,
  } = props.data;

  return (
    <BackgroundImageContainer image={image}>
      <Helmet>
        <title>{title}</title>
        <meta property="og:url" content={`${getCurrentLocation()}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${title} - A project by Pixel Perfect`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
      <Container data-testid="container">
        <GridCell area="back-arrow" align="center" justify="start">
          <GatsbyLink to={`/#${navbarIds.services}`}>
            <Img height="2rem" src={backArrow} alt="Go back" />
          </GatsbyLink>
        </GridCell>
        <GridCell area="arrows" align="center" justify="flex-end">
          <Text size={2}>
            <GatsbyLink to={`/course/${previousRoute}`}>
              <Img height="1.5rem" src={slideArrow} />
            </GatsbyLink>
            <RightSlideArrow as={GatsbyLink} to={`/course/${nextRoute}`}>
              <Img height="1.5rem" src={slideArrow} />
            </RightSlideArrow>
          </Text>
        </GridCell>
        <GridCell area="title">
          <SectionHeader size={6} bold align="right">
            {title}
          </SectionHeader>
          <Text as={ReactMarkdown} size={1.5} align="right">
            {description}
          </Text>
        </GridCell>
        <GridCell area="requirements" align="flex-end">
          <SectionHeader size={6} bold>
            Requirements{' '}
          </SectionHeader>
          <Text size={1.5} as={ReactMarkdown}>
            {requirements}
          </Text>
        </GridCell>
        <GridCell area="learnings" align="flex-end">
          <SectionHeader size={6} align="right">
            What will
            <Text as="span" bold>
              <br /> you learn
            </Text>
          </SectionHeader>
          <Text size={1.5} as={ReactMarkdown} align="right">
            {learnings}
          </Text>
        </GridCell>
      </Container>
      <WhiteLine />
      <ProgramSection>
        <Text size={6} bold>
          Full
          <br />
          program{' '}
          <a href={programFile} target="_blank" rel="noopener noreferrer">
            <Img height="0.8em" src={downloadButton} alt="download program" />
          </a>
        </Text>
        <Text>
          <br />
          Need more info?
          <Text as={GatsbyLink} to={`/#${navbarIds.contact}`} bold>
            <br /> Write us!
          </Text>
        </Text>
      </ProgramSection>
    </BackgroundImageContainer>
  );
};

CoursePresentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  requirements: PropTypes.string.isRequired,
  learnings: PropTypes.string.isRequired,
  programFile: PropTypes.string.isRequired,
};

export default CoursePresentation;
