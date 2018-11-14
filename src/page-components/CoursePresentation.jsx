import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Text from '../components/Text';



const Container = styled('section')`
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.8fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 0.8fr 1fr;
  grid-template-areas:
   ". . t"
   ". . ."
   ". . s"
   "r . l"
   ". . ."
   "p . .";
   padding: 10rem 5rem;
`;

const TitleContainer = styled('div')`
  grid-area: t;
  text-align: right;
`
const SubtitleContainer = styled('div')`
  grid-area: s;
  text-align: right;
`
const DescriptionContainer = styled('div')`
  grid-area: l;
  text-align: right;
  margin-top: 1rem;
`
const RequirementsContainer = styled('div')`
  grid-area: r;
`

const ProgramContainer = styled('div')`
  grid-area: p;
`
const CoursePresentation = props => {
  const { title, description,  requirements, learnings, programFile } = props;
  return <Container data-testid="container">
  <TitleContainer>
    <Text size={6} bold>{title}</Text>
    <Text><br/>{description}</Text>
  </TitleContainer>

  <SubtitleContainer>
    <Text size={6}>What will <Text as ="span" bold> <br/> you learn</Text></Text>
  </SubtitleContainer>

  <DescriptionContainer>
    <Text>{learnings}</Text>
  </DescriptionContainer>

  <RequirementsContainer>
    <Text size={6} bold>Requirements </Text>
    <Text><br/>{requirements}</Text>
  </RequirementsContainer>;

  <ProgramContainer>
    <Text size={6} bold>Full program </Text>
    <Text><br/>Need more info?<Text as ="span" bold><br/> Write us!</Text></Text>
  </ProgramContainer>;
  </Container>;
};

CoursePresentation.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  requirements: PropTypes.string.isRequired,
  learnings: PropTypes.string.isRequired,
  programFile: PropTypes.string.isRequired,
};

export default CoursePresentation;
