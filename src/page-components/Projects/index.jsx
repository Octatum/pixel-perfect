import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import MovieData from './MovieData';
import VideoShowcase from './VideoShowcase';
import Slideshow from './Slideshow';
import WhatWeDid from './WhatWeDid';
import BeforeAfter from './BeforeAfter';
import Share from './Share';

const Banner = styled('img')`
  width: 100%;
`;

const Layout = styled('main')`
  display: flex;
  flex-direction: column;
`;

const ProjectContainer = props => {
  const {
    banner,
    genre,
    studio,
    releaseDate,
    plot,
    videoData,
    slideshowImages,
    activities,
    beforeAfterImages,
  } = props.data;

  return (
    <Layout>
      <Banner src={banner} />
      <MovieData
        data={{
          genre,
          studio,
          releaseDate,
          plot,
        }}
      />
      <VideoShowcase videoData={videoData} />
      <Slideshow images={slideshowImages} />
      <WhatWeDid activities={activities} />
      <Share />
    </Layout>
  );
};

ProjectContainer.propTypes = {
  banner: PropTypes.string,
  genre: PropTypes.string,
  studio: PropTypes.string,
  releaseDate: PropTypes.string,
  plot: PropTypes.string,
  videoData: PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  slideshowImages: PropTypes.arrayOf(PropTypes.string),
  activities: PropTypes.string,
  beforeAfterImages: PropTypes.arrayOf(
    PropTypes.shape({
      before: PropTypes.string.isRequired,
      after: PropTypes.string.isRequired,
    })
  ),
};

ProjectContainer.defaultProps = {
  slideshowImages: [],
  beforeAfterImages: [],
  videoData: null,
};

export default ProjectContainer;
