import React from 'react';
import PropTypes from 'prop-types';

const ProjectContainer = (props) => {
  const {
    banner,
    genre,
    studio,
    releaseDate,
    plot,
    videoUrl,
    slideshowImages,
    activities,
    beforeAfterImages
  } = props;

  return <div />;
};

ProjectContainer.propTypes = {
  banner: PropTypes.string,
  genre: PropTypes.string,
  studio: PropTypes.string,
  releaseDate: PropTypes.string,
  plot: PropTypes.string,
  videoUrl: PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  slideshowImages: PropTypes.arrayOf(PropTypes.string),
  activities: PropTypes.string,
  beforeAfterImages: PropTypes.arrayOf(PropTypes.shape({
    before: PropTypes.string.isRequired,
    after: PropTypes.string.isRequired,
  })),
}

ProjectContainer.defaultProps = {
  slidwshowImages: [],
  beforeAfterImages: [],
  videoUrl: null,
}

export default ProjectContainer;
