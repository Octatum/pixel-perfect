import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Bold } from '../components/Utils'
import ProjectSlideshow from '../components/ProjectSlideshow'

const SlideshowLayout = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`

const TextLayout = styled.div`
  position: absolute;
  top: 26%;
  right: 5.5%;
  font-size: 4.5em;
  text-align: right;
  width: 5em;
  height: 2.2em;
`

const Header = MainText(styled.h2`
  font-weight: 200;
`)

export default () => (
  <SlideshowLayout>
    <ProjectSlideshow />
    <TextLayout>
      <Header>Nuestros <Bold>Proyectos</Bold></Header>
    </TextLayout>
  </SlideshowLayout>
)
