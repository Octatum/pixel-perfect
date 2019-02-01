import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { device } from '../../../utils/device';
import BackgroundVideoPlayer from './BackgroundVideoPlayer';
import backgroundImage from './assets/vfx.png';
import { FullpageContext } from '../../../components/AppLayout';
import { Markdown } from '../../../components/Text';

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
  position: relative;
  z-index: 1;
  font-weight: 400;
  width: 30%;
  padding: 2rem;
  margin-right: 3rem;

  ${device.tablet} {
    z-index: 0;
    text-align: center;
    opacity: 1;
    width: 60%;
    justify-self: center;
  }
`;

const Subheader = styled(Markdown)`
  line-height: 1;
  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }

  h1, h2, h3, h4 {
    font-weight: normal;
  }

  a {
    color: white;
  }

  * {
    color: inherit;
  }

  hr {
    border-color: transparent;
    margin: 0.25em;
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
  }, [value]);

  const {
    backgroundVideo,
    content,
  } = props.data.markdownRemark.frontmatter.demoReel;

  return (
    <Layout>
      <BackgroundVideoPlayer video={backgroundVideo} poster={backgroundImage} />
      <Header>
        <Subheader size={4}>{content}</Subheader>
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
