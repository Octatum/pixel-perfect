import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Markdown from 'react-markdown';

import { device } from '../../../utils/device';
import BackgroundVideoPlayer from './BackgroundVideoPlayer';
import backgroundImage from './assets/vfx.png';
import { FullpageContext } from '../../../components/AppLayout';

const Layout = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
  background-size: auto 100%;
  align-items: center;
  justify-content: flex-end;

  ${device.tablet} {
    background: url("${backgroundImage}") no-repeat center center;
    background-size: cover;
    justify-content: center;
  }
`;

const Header = styled.h1`
  color: ${props => props.theme.color.light};
  position: relative;
  font-family: ${props => props.theme.font.main};
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
  width: 30%;
  padding: 2rem;
  text-align: left;
  margin-right: 3rem;
  transition: 500ms ease-in-out all;

  ${device.laptop} {
    font-size: 2.5rem;
  }

  ${device.tablet} {
    margin: 0;
    z-index: 0;
    text-align: center;
    opacity: 1;
    filter: none;
    width: 60%;
    justify-self: center;
  }
`;

const Subheader = styled(Markdown)`
  > a {
    font-weight: 700;
    color: white;
  }
`;

function Presentation(props) {
  const { api } = props;
  const [value, setValue] = useContext(FullpageContext);

  useEffect(() => {
    setValue(api);

    return () => {
      setValue(null);
    }
  });

  const {
    backgroundVideo,
    content,
  } = props.data.markdownRemark.frontmatter.demoReel;

  return (
    <Layout>
      <BackgroundVideoPlayer video={backgroundVideo} poster={backgroundImage} />
      <Header>
        <Subheader>{content}</Subheader>
      </Header>
    </Layout>
  );
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
          frontmatter {
            demoReel {
              backgroundVideo
              content
            }
          }
        }
      }
    `}
    render={data => <Presentation {...props} data={data} />}
  />
);
