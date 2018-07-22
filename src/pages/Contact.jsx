import React from 'react'
import styled from 'styled-components'

import ClientStrip from '../components/ClientStrip'
import ContactInfo from '../components/ContactInfo'
import { device } from '../utils/device'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  padding-top: calc(3vh + 8em);

  @media screen and ${device.tablet} {
    padding-top: calc(3vh + 11em);
  }

  @media screen and ${device.mobile} {
    padding-top: calc(3vh + 14em);
  }
`;

export default () => (
  <Layout>
    <ClientStrip />
    <ContactInfo />
  </Layout>
);
