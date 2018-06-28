import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'

const Container = MainText(styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2em;
`)

const Header = styled.h2`
  font-size: 3.2em;
  font-weight: 200;
  padding: 0.3em 0.4em;
`

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1.2em 5em;
`

const InfoList = styled.div`
  flex: 1;
  padding: 0.5em 1.5em;
  font-size: 1.1em;

  div {
    padding: 0.7em 0.3em;
  }

  p {
    display: inline-block;
    font-size: 1.3em;
    padding: 0 0 0 0.7em;
  }
`

const Message = styled.div`
  flex: 1.2;
  padding: 0.5em 1.5em;

  div {
    display: flex;
    align-items: center;
    padding: 0.9em 2em 1em 1em;
  }

  p {
    display: inline-block;
    padding: 0 2em 0 0;
  }

  span {
    flex: 1;
  }

  input {
    width: 100%;
    background: transparent;
    border: 0;
    border-bottom: 1px solid white;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
`

const ContactInfo = () => (
  <Container>
    <Header>Contáctanos</Header>
    <InnerContainer>
      <InfoList>
        <div>
          <i className="fas fa-home fa-fw" />
          <p>Lago Chapala #287, Monterrey, N.L.</p>
        </div>
        <div>
          <i className="fas fa-mobile-alt fa-fw" />
          <p>8123541330</p>
        </div>
        <div>
          <i className="fab fa-facebook-square fa-fw" />
          <p>/Pixelperfectvfx</p>
        </div>
      </InfoList>
      <Message>
        <div>
          <p>Nombre</p>
          <span><input type="text" name="Nombre" /></span>
        </div>
        <div>
          <p>Compañía</p>
          <span><input type="text" name="Empresa" /></span>
        </div>
        <div>
          <p>Mensaje</p>
        </div>
      </Message>
    </InnerContainer>
  </Container>
)

export default ContactInfo
