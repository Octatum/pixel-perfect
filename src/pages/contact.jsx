import React from 'react';
import styled from 'styled-components';

import ClientStrip from '../components/Contact/ClientStrip';
import ContactInfo from '../components/Contact/ContactInfo';
import { device } from '../utils/device';
import AppLayout from '../components/AppLayout';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  overflow-x: hidden;
  padding-top: calc(3vh + 8em);

  ${device.tablet} {
    padding-top: calc(3vh + 11em);
  }

  ${device.mobile} {
    padding-top: calc(3vh + 14em);
  }
`;

function Contact() {
  return (
    <AppLayout>
      <Layout>
        <ClientStrip />
        <ContactInfo />
      </Layout>
    </AppLayout>
  );
}

export default Contact;
