import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled('section')`
  display: grid;
`;

const CoursePresentation = () => {
  return <Container data-testid="container" />;
};

CoursePresentation.proptypes = {
  title: PropTypes.string.isRequired,
  requirements: PropTypes.string.isRequired,
  learnings: PropTypes.string.isRequired,
  programFile: PropTypes.string.isRequired,
};

export default CoursePresentation;
