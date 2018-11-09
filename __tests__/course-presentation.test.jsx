import React from 'react';
import {render, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import CoursePresentation from '../src/page-components/CoursePresentation';

afterEach(cleanup);

describe("Presentación de curso", () => {
  test('Recibe los datos correctamente', async () => {
    const testData = {
      title: 'Matchmove',
      requirements: 'Basic knowledge of *3D software* (preferably *Autodesk Maya*)',
      learnings: `
        In this course you’ll learn to use camera and object *tracking techniques*,
        and the interaction between the *3D tracking* and *modelling softwares*.
        You’ll also be introduced to texturing, lighting and rendering techniques.
      `,
      programFile: 'http://www.orimi.com/pdf-test.pdf'
    };
  
    const {getByText, getByTestId} = render(
      <CoursePresentation {...testData} />,
    );
  

    const mainContainer = getByTestId('container');
    expect(mainContainer.tagName.toLowerCase()).toEqual('section');
    expect(mainContainer).toHaveStyle('display: grid');

    expect(getByText('Matchmove').tagName.toLowerCase()).toEqual('h2');
    expect(getByText('Requirements').tagName.toLowerCase()).toEqual('h2');
    expect(getByText(/What will/ig).tagName.toLowerCase()).toEqual('h2');
    expect(getByText(/Full program/ig).tagName.toLowerCase()).toEqual('h2');
    
    const programDownloadButton = getByTestId('course-program');
    expect(programDownloadButton.tagName.toLowerCase()).toEqual('a');
    expect(programDownloadButton).toHaveAttribute('aria-label');

    const writeusText = getByText("Write us!");
    expect(writeusText.tagName.toLowerCase()).toEqual('a');
    expect(writeusText).toHaveAttribute('aria-label'); 
  });
});