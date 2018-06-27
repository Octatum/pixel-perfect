import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import ClientStrip from '../components/ClientStrip'

const Background = styled.div`
  background: black;
  position: relative;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(97vh - 8em);
  width: 100vw;
  margin-top: calc(8em + 3vh);
`

const TextLayout = MainText(styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
`)

export default () => (
  <Background>
    <Layout>
      <ClientStrip />
    </Layout>
  </Background>
)
