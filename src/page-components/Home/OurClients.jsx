import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';
import CustomerImage from '../../components/Contact/assets/cemex_logo.png';
import { device } from '../../utils/device';

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 3rem;
`;

const HeaderSection = styled.div`
  padding-bottom: 3rem;
`;

const CustomerSection = styled.div`
  display: grid;
  --row-gap: 5rem;

  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: 15vw;
  grid-column-gap: var(--row-gap);
  grid-row-gap: calc(var(--row-gap) * 1.5);
  padding-bottom: 1.5rem;

  ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    --row-gap: 4rem;
  }

  ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CustomerCell = styled.img`
  grid-column: span 1;
  grid-row: span 1;
  max-width: 100%;
  max-height: 100%;
`;

const OurClients = () => {
  return (
    <Layout>
      <HeaderSection>
        <Text size={9} align="center" dark>
          <Text as="span" bold dark>
            Our
          </Text>
          Clients
        </Text>
      </HeaderSection>
      <CustomerSection>
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
        <CustomerCell src={CustomerImage} />
      </CustomerSection>
    </Layout>
  );
};

export default OurClients;
