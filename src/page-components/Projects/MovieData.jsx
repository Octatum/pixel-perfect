import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';

const Layout = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5%;

  > div:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const TextContainer = styled('div')`
  width: 45%;
`;

const MovieData = props => {
  const { genre, studio, releaseDate, plot } = props.data;

  return (
    <Layout>
      <TextContainer>
        <Text bold>Genre</Text>
        <Text>{genre}</Text>
      </TextContainer>
      <TextContainer>
        <Text bold>Studio</Text>
        <Text>{studio}</Text>
      </TextContainer>
      <TextContainer>
        <Text bold>Release Date</Text>
        <Text>{releaseDate}</Text>
      </TextContainer>
      <TextContainer>
        <Text bold>Plot outline</Text>
        <Text>{plot}</Text>
      </TextContainer>
    </Layout>
  );
};

export default MovieData;
