import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import MovieData from './MovieData';
import VideoShowcase from './VideoShowcase';
import Slideshow from './Slideshow';
import WhatWeDid from './WhatWeDid';
import BeforeAfter from './BeforeAfter';
import Share from './Share';
import { device } from '../../utils/device';
import getCurrentLocation from '../../utils/getCurrentLocation';
import NavigationButtons from './NavigationButtons';

const Banner = styled('img')`
  width: 100%;
`;

const Layout = styled('main')`
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    padding-top: 5rem;
  }
`;

const ProjectContainer = props => {
  const {
    banner = '',
    genre = '',
    studio = '',
    title = '',
    releaseDate = '',
    plot = '',
    videoData = undefined,
    slideshowImages = [],
    activities = '',
    beforeAfterImages = [],
  } = props.data;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta property="og:url" content={`${getCurrentLocation()}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${title} - A project by Pixel Perfect`}
        />
        <meta property="og:description" content={plot} />
        <meta property="og:image" content={banner} />
      </Helmet>
      <Banner src={banner} />
      <NavigationButtons />
      <MovieData
        data={{
          title,
          genre,
          studio,
          releaseDate,
          plot,
        }}
      />
      {videoData && <VideoShowcase videoData={videoData} />}
      {beforeAfterImages && (
        <BeforeAfter beforeAfterImages={beforeAfterImages} />
      )}
      {activities && <WhatWeDid activities={activities} />}
      {slideshowImages.length > 0 && <Slideshow images={slideshowImages} />}
      <Share title={`${title} - PixelPerfect's projects.`} description={plot} />
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
