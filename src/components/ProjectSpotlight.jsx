import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Bold } from './Utils'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: darkred;
  opacity: 0.15;
  z-index: -1;
`

const SpotlightLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const FillerDiv = styled.div`
  max-height: 15vh;
  min-height: 40px;
  width: 100vw;
  padding: 3vh 0;
`

const ProjectContainer = MainText(styled.div`
  display: flex;
  flex: 1;
  padding: 1em 3em;
`)

const BigPicture = styled.div`
  background-color: darkcyan;
  height: 95%;
  width: 25em;
  margin-top: 3px;
`

const InfoGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 30% 20% 20% auto;
  grid-template-rows: 30% 27% auto;
  padding: 3.8em 1.5em;
  font-size: 1.1em;
  line-height: 1.3;
`

const Info = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`

const Title = styled.div`
  grid-column: 3 / 5;
  grid-row: 1 / 2;
`

const PictureGallery = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding: 1em 0;
`

const PlotOutline = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / 4;
`

const TitleName = styled.h1`
  text-align: right;
  font-size: 3.3em;
  font-weight: 200;
  line-height: 1.1;
`

const Header = styled.h3`
  font-weight: 700;
`

const SmallPicture = styled.div`
  height: 100%;
  width: 28%;
  margin: 0 1%;
  background-color: ${props => props.bg}
`

export default () => (
  <div>
    <Background />
    <SpotlightLayout>
      <FillerDiv />
      <ProjectContainer>
        <BigPicture />
        <InfoGrid>
          <Info>
            <Header>Release Date</Header>
            <p>XXXX</p>
            <br />
            <Header>Genre</Header>
            <p>The best genre</p>
            <br />
            <Header>Studio</Header>
            <p>A galaxy far, far away...</p>
            <br />
            <Header>About</Header>
            <p>It's a movie, 'nuff said</p>
          </Info>
          <Title>
            <TitleName>
              INTERESTING<br />
              <Bold>NAME</Bold>
            </TitleName>
          </Title>
          <PictureGallery>
            <SmallPicture bg='darkred' />
            <SmallPicture bg='darkblue' />
            <SmallPicture bg='darkgreen' />
          </PictureGallery>
          <PlotOutline>
            <Header>Plot Outline</Header>
            <p>Enim aliquip exercitation, et occaecat firmissimum. Cupidatat elit nam mentitum imitarentur, amet coniunctione mentitum quamquam. Iis fore quibusdam consequat, hic labore occaecat consectetur.</p>
          </PlotOutline>
        </InfoGrid>
      </ProjectContainer>
    </SpotlightLayout>
  </div>
)
