import React from 'react';
import styled from 'styled-components/macro';
import Text from '../../components/Text';
import { device } from '../../utils/device';
import { StaticQuery, graphql } from 'gatsby';

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
  align-items: center;
  justify-items: center;

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

const OurClients = props => {
  const { data } = props;
  const customers = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

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
        {customers.map(customer => (
          <CustomerCell src={customer.image} />
        ))}
      </CustomerSection>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "customer" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                image
              }
            }
          }
        }
      }
    `}
    render={data => <OurClients data={data} {...props} />}
  />
);
