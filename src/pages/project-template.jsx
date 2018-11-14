import React from 'react';
import ProjectContainer from '../page-components/Projects';
import AppLayout from '../components/AppLayout';

const mockData = {
  banner:
    'https://s3-alpha.figma.com/img/a38e/2ba4/37d8073d34cb67a400a2e112902be274',
  genre: 'Drama / Thriller',
  studio: 'Faceless Films',
  releaseDate: '2018',
  plot:
    'A teenager with behavioral disorders engages in murky worlds in order to find a solution at the expense of everything.',
  videoData: {
    type: 'vimeo',
    url: 'https://vimeo.com/234437323',
  },
  slideshowImages: [
    'https://s3-alpha.figma.com/img/18bb/1625/81ce2c25c06fc39d920f6b0cff5332be',
    'https://s3-alpha.figma.com/img/abe4/870d/1197de7e3c631a09978972d1ec609a80',
    'https://s3-alpha.figma.com/img/ed70/a326/1982cd7b163ebe6604c0cead87a03baf',
  ],
  activities: `
Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in.
  `,
  beforeAfterImages: [
    {
      before:
        'https://s3-alpha.figma.com/img/ed70/a326/1982cd7b163ebe6604c0cead87a03baf',
      after:
        'https://s3-alpha.figma.com/img/abe4/870d/1197de7e3c631a09978972d1ec609a80',
    },
    {
      before:
        'https://s3-alpha.figma.com/img/ed70/a326/1982cd7b163ebe6604c0cead87a03baf',
      after:
        'https://s3-alpha.figma.com/img/abe4/870d/1197de7e3c631a09978972d1ec609a80',
    },
  ],
};

const ProjectTemplate = () => {
  return (
    <AppLayout>
      <ProjectContainer data={mockData} />
    </AppLayout>
  );
};

export default ProjectTemplate;
