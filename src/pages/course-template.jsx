import React from 'react';
import CoursePresentation from '../page-components/CoursePresentation';

const testData = {
  title: 'Matchmove',
  requirements: 'Basic knowledge of *3D software* (preferably *Autodesk Maya*)',
  learnings: `
    In this course you’ll learn to use camera and object *tracking techniques*,
    and the interaction between the *3D tracking* and *modelling softwares*.
    You’ll also be introduced to texturing, lighting and rendering techniques.
  `,
  programFile: 'http://www.orimi.com/pdf-test.pdf',
};

const CourseTemplate = () => {
  return <CoursePresentation {...testData} />;
};

export default CourseTemplate;
