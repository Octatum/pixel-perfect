import React from 'react';
import CoursePresentation from '../page-components/CoursePresentation';
import AppLayout from '../components/AppLayout';

const testData = {
  title: 'Matchmove',
  requirements:
    'Basic knowledge of **3D software** (preferably **Autodesk Maya**)',
  description:
    'Allows to replicate the movement of a physical camera in live action shots in a **3D digital environment**.',
  learnings: `
In this course you’ll learn to use camera and object **tracking techniques**,
and the interaction between the **3D tracking** and **modelling softwares**.
You’ll also be introduced to texturing, lighting and rendering techniques.
  `,
  programFile: 'http://www.orimi.com/pdf-test.pdf',
};

const CourseTemplate = () => {
  return (
    <AppLayout>
      <CoursePresentation {...testData} />
    </AppLayout>
  );
};

export default CourseTemplate;
