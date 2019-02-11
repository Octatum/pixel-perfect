import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../../utils/device';
import Text, { Markdown } from '../../../components/Text';
import FeaturedGrid from './FeaturedGrid';
import { StaticQuery, graphql } from 'gatsby';
import { navbarIds } from '../../../components/Navbar';

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

  const { featuredInContent } = props.data.content.frontmatter;

  return (
    <Layout id={navbarIds.featured}>
      <HeaderSection>
        <Text size={10} mobileSize={8}>
          Featured
          <Text as="span" bold size={2}>
            in
          </Text>
        </Text>
        <Markdown size={2}>{featuredInContent}</Markdown>
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

        content: markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            featuredInContent
          }
        }
      }
    `}
    render={data => <FeaturedIn data={data} {...props} />}
  />
);
