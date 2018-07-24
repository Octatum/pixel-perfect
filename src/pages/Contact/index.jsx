import React from 'react'
import styled from 'styled-components'

import ClientStrip from './ClientStrip'
import ContactInfo from './ContactInfo'
import { device } from '../../utils/device'

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

function Contact () {
  return (
    <Layout>
      <ClientStrip />
      <ContactInfo />
    </Layout>
  );
}

export default Contact;