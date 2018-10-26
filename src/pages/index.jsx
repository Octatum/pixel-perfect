import React from 'react';
import styled from 'styled-components/macro';

import AppLayout from '../components/AppLayout';
import HomePresentation from '../page-components/Home/Presentation';
import About from '../page-components/Home/About';
import Services from '../page-components/Home/Services';

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
      </Layout>
    </AppLayout>
  );
}

export default Home;
