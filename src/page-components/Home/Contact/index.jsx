import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../../components/Text';
import ContactForm from './ContactForm';
import { device } from '../../../utils/device';

const Layout = styled.div`
  padding: 6em 4em;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  grid-template-areas:
    '. header'
    'contact-form socials';
  grid-gap: 2em;

  ${device.tablet} {
    padding: 3rem 2rem;
    grid-template-rows: repeat(3, min-content);
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'contact-form'
      'socials';
  }
`;

const HeaderSection = styled.div`
  grid-area: header;
`;

const ContactSection = styled.div`
  grid-area: contact-form;
`;

const SocialsSection = styled.div`
  grid-area: socials;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Icon = styled(Text)`
  margin-left: 0.5em;
`;

const Contact = () => {
  return (
    <Layout>
      <HeaderSection>
        <Text size={9} align="right">
          Contact
          <Text as="span" bold>
            Us
          </Text>
        </Text>
      </HeaderSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
      <SocialsSection>
        <Text align="right">
          Lago Chapala #287, Monterrey, N.L.{' '}
          <Icon size={2} as="i" className="fas fa-home fa-fw" />
        </Text>
        <Text align="right">
          8123541330{' '}
          <Icon size={2} as="i" className="fas fa-mobile-alt fa-fw" />
        </Text>
        <Text align="right">
          /Pixelperfectvfx{' '}
          <Icon size={2} as="i" className="fab fa-facebook fa-fw" />
        </Text>
      </SocialsSection>
    </Layout>
  );
};

export default Contact;
