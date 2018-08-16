import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/device'
import Link from '../components/Link';

const SpotlightLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: red;
  opacity: 0.15;
  z-index: -1;
`;

const FillerDiv = styled.div`
  max-height: 15vh;
  min-height: 40px;
  padding: 3vh 0;

  ${device.tablet} {
    display: none;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1em 3em;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    padding: 0;
  }
`;

const BigPicture = styled.div`
  background: ${props => props.background};
  height: 37em;
  min-width: 25em;
  background-size: 100% auto;

  ${device.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

const InfoGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 30% 20% 20% 30%;
  padding: 3.8em 1em;
  font-size: 1.1em;
  line-height: 1.3;

  ${device.laptop} {
    padding: 0;
    grid-template-columns: 55% 45%;
    grid-template-rows: 10em;

    > div {
      padding: 2em 1em;
    }
  }

  ${device.mobile} {
    grid-template-rows: 15em;
  }
`

const OpaqueDiv = styled.div`
  display: none;
  grid-column: 1 / 3;
  grid-row: ${props => props.start} / ${props => props.end};
  background: rgba(0, 0, 0, ${props => props.opacity});
  z-index: -1;

  ${device.tablet} {
    display: block;
  }
`

const Info = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  padding-bottom: 1em;

  ${device.laptop} {
    grid-column: 1 / 5;
    grid-row: 3 / 4;
  }

  ${device.tablet} {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  ${device.mobile} {
    font-size: 0.8em;
  }
`

const Title = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 2;

  h1 {
    text-align: right;
    font-size: 3em;
    font-weight: lighter;
    line-height: 1.1;
  }

  ${device.laptop} {
    grid-column: 1 / 5;

    h1 {
      font-size: 2.5em;
    }
  }

  ${device.tablet} {
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    h1 {
      float: right;
    }
  }

  ${device.mobile} {
    h1 {
      font-size: 2em;
    }
  }
`

const PictureGallery = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0.3em 0;

  ${device.laptop} {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    justify-content: center;
    padding: 1em 0;
  }

  ${device.tablet} {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    justify-content: center;
  }

  ${device.mobile} {
    padding: 0.5em 0 !important;
  }
`

const SmallPicture = styled.div`
  height: 5em;
  width: 9em;
  margin: 0.2em;
  background-color: ${props => props.bg};

  ${device.laptop} {
    height: calc(5em * 0.8);
    width: calc(9em * 0.8);
  }

  ${device.tablet} {
    height: 5em;
    width: 9em;
  }

  ${device.mobile} {
    height: calc(5em * 0.6);
    width: calc(9em * 0.6);
  }
`;

const PlotOutline = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;

  ${device.laptop} {
    grid-column: 1 / 3;
    max-width: 65%;
    grid-row: 4 / 5;
  }

  ${device.tablet} {
    grid-column: 1 / 3;
    padding-top: 0 !important;
  }

  ${device.mobile} {
    font-size: 0.8em;
  }
`;

const BackToProjectsUrl = Link.extend`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  font-size: 3rem;
  border: 0.1em solid white;
  border-radius: 100%;
  padding: 0.3em;
`;

const ExternalLink = styled.a`
  color: white;
`;

function ProjectSpotlight({data: {projectsJson}}) {
  const { name, release, genre, studio, about, image, plot, link } = projectsJson;

  return (
    <div>
      <SpotlightLayout>
        <Background />
        <FillerDiv />
        <ProjectContainer>
          <BigPicture background={`url("/images/${image}") center repeat-x`}/>
          <InfoGrid>
            <Info>
              <h3>Release Date</h3>
              <p>{release}</p>
              <br />
              <h3>Genre</h3>
              <p>{genre}</p>
              <br />
              <h3>Studio</h3>
              <p>{studio}</p>
              {link && (
                <span>
                  <br />
                  <h3>
                    <ExternalLink target="_blank" href={link.url}>{link.header}</ExternalLink>
                  </h3>
                </span>
              )}
            </Info>
            <Title>
              <h1>
                {name}
              </h1>
            </Title>
            <PlotOutline>
              {plot.length > 0 && (
                <span>
                  <h3>Plot Outline</h3>
                  <p>{plot}</p>
                </span>
              )}
            </PlotOutline>
            <OpaqueDiv start='3' end='5' opacity='1'/>
          </InfoGrid>
        </ProjectContainer>
        <BackToProjectsUrl to="/portfolio">
          <i className="fa fa-arrow-left"/>
        </BackToProjectsUrl>
      </SpotlightLayout>
    </div>
  );
}

export default ProjectSpotlight;

export const pageQuery = graphql`
  query GetProjectData($route: String!){
    projectsJson(path: {eq: $route}) {
      name
      release
      genre
      studio
      about
      image
      plot
      link {
        header
        url
      }
    }
  }
`;
