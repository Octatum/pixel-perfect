import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../../utils/device';
import Text from '../../../components/Text';
import FeaturedGrid from './FeaturedGrid';
import { StaticQuery, graphql } from 'gatsby';

const Layout = styled.section`
  background: ${({ theme }) => theme.color.black};
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled.div`
  width: 40%;
  text-align: center;
  margin-bottom: 6em;

  ${device.laptop} {
    width: 40%;
  }

  ${device.tablet} {
    width: 60%;
  }

  ${device.mobile} {
    width: 80%;
  }
`;

const FeaturedIn = props => {
  const data = props.data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
  }));

  return (
    <Layout>
      <HeaderSection>
        <Text size={10} mobileSize={8}>
          Featured
          <Text as="span" bold size={2}>
            in
          </Text>
        </Text>
        <Text size={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Text>
      </HeaderSection>
      <FeaturedGrid items={data} />
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "featured" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                backgroundImage
                description
                url
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }
      }
    `}
    render={data => <FeaturedIn data={data} {...props} />}
  />
);
