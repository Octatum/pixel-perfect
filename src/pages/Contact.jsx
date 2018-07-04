import React from 'react'
import styled from 'styled-components'

import ClientStrip from '../components/ClientStrip'
import ContactInfo from '../components/ContactInfo'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: calc(8em + 3vh);
`;

export default () => (
  <Layout>
    <ClientStrip />
    <ContactInfo />
  </Layout>
);
