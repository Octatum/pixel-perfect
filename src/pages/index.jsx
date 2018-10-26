import React from 'react';
import styled from 'styled-components/macro';

import AppLayout from '../components/AppLayout';
import HomePresentation from '../page-components/Home/Presentation';
import About from '../page-components/Home/About';

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
      </Layout>
    </AppLayout>
  );
}

export default Home;
