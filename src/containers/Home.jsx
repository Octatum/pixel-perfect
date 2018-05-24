import React from 'react'
import { withSiteData } from 'react-static'
//
import styled from 'styled-components';

import Slideshow from '../components/Slideshow';

const Layout = styled.div`
  display: flex; 
  background: black;
  height: 100vh;
`;

const Bg = styled.div`
  background: ${props => props.background};
  width: 100%;
  height: 100%;
`;

export default withSiteData(() => (
  <Layout>
    <Slideshow 
      items={[{background:"darkred"}, 
              {background:"darkblue"},
              {background:"green"},
            ]}
      renderElement={data => <Bg background={data.background}/>}
    />
  </Layout>
))
