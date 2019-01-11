import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../../components/Text';
import ContactForm from './ContactForm';
import { device } from '../../../utils/device';
import { navbarIds } from '../../../components/Navbar';
import FacebookIcon from './assets/facebook.svg';
import HomeIcon from './assets/home.svg';
import PhoneIcon from './assets/phone.svg';

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
  padding-bottom: 3rem;
`;

const Icon = styled('img')`
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const IconSpacer = styled('span')`
  display: inline-flex;
  width: 1.5em;
  height: 1.5em;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
`;

const Contact = () => {
  return (
    <Layout id={navbarIds.contact}>
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
          <IconSpacer>
            <Icon size={2} as="img" src={HomeIcon} />
          </IconSpacer>
        </Text>
        <Text align="right">
          8123541330{' '}
          <IconSpacer>
            <Icon size={2} as="img" src={PhoneIcon} />
          </IconSpacer>
        </Text>
        <Text align="right">
          /Pixelperfectvfx{' '}
          <IconSpacer>
            <Icon size={2} as="img" src={FacebookIcon} />
          </IconSpacer>
        </Text>
      </SocialsSection>
    </Layout>
  );
};

export default Contact;
