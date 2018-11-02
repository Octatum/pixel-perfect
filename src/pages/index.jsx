import React from 'react';
import styled from 'styled-components/macro';

import AppLayout from '../components/AppLayout';
import HomePresentation from '../page-components/Home/Presentation';
import About from '../page-components/Home/About';
import Services from '../page-components/Home/Services';
import FeaturedIn from '../page-components/Home/FeaturedIn';
import OurStaff from '../page-components/Home/OurStaff';
import OurStudents from '../page-components/Home/OurStudents';
import OurProjects from '../page-components/Home/OurProjects';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <AppLayout>
      <Layout>
        <HomePresentation />
        <About />
        <Services />
        <FeaturedIn />
        <OurStaff />
        <OurStudents />
        <OurProjects />
      </Layout>
    </AppLayout>
  );
}

export default Home;
