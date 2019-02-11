import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';

import TeamSlider from './TeamSlider';
import { device } from '../../../utils/device';
import Text, { withTextStyle } from '../../../components/Text';
import { StaticQuery, graphql } from 'gatsby';
import { navbarIds } from '../../../components/Navbar';

const Background = styled.div`
  position: relative;
  background-color: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${({ backgroundImage }) => backgroundImage}');
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4em;
  align-items: center;
  justify-content: center;

  ${device.tablet} {
    position: relative;
    padding: 2em 1em;
    flex-direction: column;
  }
`;

const TextLayout = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;
  padding: 0 1em;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    flex: 1;
    padding: 0 0.5em;
    font-size: 0.7em;
    width: 80%;
  }
`;

const MarkdownContent = withTextStyle(Markdown);

const MarkdownBlock = styled(MarkdownContent)`
  margin-top: 1em;

  ${device.tablet} {
    margin: 0.7em 0;
  }
`;

const SliderLayout = styled.div`
  width: 50%;
  min-width: 0;
  box-sizing: border-box;
  padding: 0 2em;

  ${device.tablet} {
    position: relative;
    padding: 0 2em;
    margin-top: 2em;
    flex: 1;
    width: 70%;
  }

  ${device.mobile} {
    width: 100%;
    min-width: 10rem;
  }
`;

function About(props) {
  const {
    content,
    title,
    backgroundImage,
    teamMembers,
  } = props.data.markdownRemark.frontmatter.whoAreWe;
  return (
    <Background id={navbarIds.about} backgroundImage={backgroundImage}>
      <Layout>
        <TextLayout>
          <Text size={9}>{title}</Text>
          <MarkdownBlock size={2} mobileSize={3}>
            {content}
          </MarkdownBlock>
        </TextLayout>
        <SliderLayout>
          <TeamSlider teamMembers={teamMembers} />
        </SliderLayout>
      </Layout>
    </Background>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            whoAreWe {
              title
              content
              backgroundImage
              teamMembers {
                name
                role
                linkedin
                imdb
                image
              }
            }
          }
        }
      }
    `}
    render={data => <About {...props} data={data} />}
  />
);
