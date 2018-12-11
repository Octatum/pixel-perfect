import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';
import { device } from '../../utils/device';

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

  ${device.tablet} {
    margin-bottom: 2rem;
  }
`;

const TextContainer = styled('div')`
  width: 45%;

  ${device.tablet} {
    width: 80%;
  }
`;

const MovieData = props => {
  const { genre, title, studio, releaseDate, plot } = props.data;

  return (
    <Layout>
      <TextContainer>
        <Text bold>Title</Text>
        <Text>{title}</Text>
      </TextContainer>

      {genre && (
        <TextContainer>
          <Text bold>Genre</Text>
          <Text>{genre}</Text>
        </TextContainer>
      )}
      {studio && (
        <TextContainer>
          <Text bold>Studio</Text>
          <Text>{studio}</Text>
        </TextContainer>
      )}

      {releaseDate && (
        <TextContainer>
          <Text bold>Release Date</Text>
          <Text>{releaseDate}</Text>
        </TextContainer>
      )}

      {plot && (
        <TextContainer>
          <Text bold>Plot outline</Text>
          <Text>{plot}</Text>
        </TextContainer>
      )}
    </Layout>
  );
};

export default MovieData;
