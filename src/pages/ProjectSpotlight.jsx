import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/device'

const SpotlightLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  min-height: 100vh;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: red;
  opacity: 0.15;
  z-index: -1;
`

const FillerDiv = styled.div`
  max-height: 15vh;
  min-height: 40px;
  width: 100vw;
  padding: 3vh 0;
`

const ProjectContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1em 3em;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};
`;

const BigPicture = styled.div`
  background-color: darkcyan;
  height: 37em;
  min-width: 25em;
`

const InfoGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 30% 20% 20% 30%;
  padding: 3.8em 1em;
  font-size: 1.1em;
  line-height: 1.3;

  @media screen and ${device.laptop} {
    padding: 2em 1em;
  }
`

const Info = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  padding-bottom: 1em;

  @media screen and ${device.laptop} {
    grid-column: 1 / 5;
    grid-row: 3 / 4;
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

  @media screen and ${device.laptop} {
    grid-column: 1 / 5;;

    h1 {
      font-size: 2.5em;
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

  @media screen and ${device.laptop} {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    justify-content: center;
    padding: 1em 0;
  }
`

const SmallPicture = styled.div`
  height: 5em;
  width: 9em;
  margin: 0.2em;
  background-color: ${props => props.bg};

  @media screen and ${device.laptop} {
    height: calc(5em * 0.8);
    width: calc(9em * 0.8);
  }
`

const PlotOutline = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;

  @media screen and ${device.laptop} {
    grid-column: 1 / 5;
    grid-row: 4 / 5;
  }
`

function ProjectSpotlight() {
  return (
    <div>
      <SpotlightLayout>
        <Background/>
        <FillerDiv />
        <ProjectContainer>
          <BigPicture />
          <InfoGrid>
            <Info>
              <h3>Release Date</h3>
              <p>XXXX</p>
              <br />
              <h3>Genre</h3>
              <p>The best genre</p>
              <br />
              <h3>Studio</h3>
              <p>A galaxy far, far away...</p>
              <br />
              <h3>About</h3>
              <p>It's a movie, 'nuff said</p>
            </Info>
            <Title>
              <h1>
                INTERESTING<br />
                <strong>NAME</strong>
              </h1>
            </Title>
            <PictureGallery>
              <SmallPicture bg='darkred' />
              <SmallPicture bg='darkblue' />
              <SmallPicture bg='darkgreen' />
            </PictureGallery>
            <PlotOutline>
              <h3>Plot Outline</h3>
              <p>Enim aliquip exercitation, et occaecat firmissimum. Cupidatat elit nam mentitum imitarentur, amet coniunctione mentitum quamquam. Iis fore quibusdam consequat, hic labore occaecat consectetur.</p>
            </PlotOutline>
          </InfoGrid>
        </ProjectContainer>
      </SpotlightLayout>
    </div>
  );
}

export default ProjectSpotlight;
