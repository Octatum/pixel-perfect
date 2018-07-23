import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Component } from 'react';
import { device } from '../utils/device'

const Container = MainText(styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 2em;

  @media screen and ${device.tablet} {
    font-size: 0.8em;
  }

  @media screen and ${device.mobile} {
    font-size: 0.7em;
    padding-top: 4.5em;
  }
`)

const Header = styled.h2`
  font-size: 3.2em;
  font-weight: 200;
  padding: 0 1.4rem;
`

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 1.2em 5em;

  @media screen and ${device.tablet} {
    flex-wrap: wrap;
    padding: 1.2em 3em;
  }

  @media screen and ${device.mobile} {
    padding: 1.2em 1em;
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.5em 1.5em;
  font-size: 1.1em;

  div, a {
    display: flex;
    padding: 0.7em 0;
  }

  a {
    color: white;
    text-decoration: none;

    :visited {
      color: white;
    }
  }

  p {
    display: inline-block;
    font-size: 1.3em;
    padding: 0 0 0 0.7em;
  }

  @media screen and ${device.tablet} {
    flex: 1 1 100%;
  }
`

const Message = styled.form`
  flex: 1.2;
  padding: 0.5em 1.5em;

  @media screen and ${device.tablet} {
    flex: 1 1 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 0;
  border-bottom: 1px solid white;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  resize: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 0;
  border-bottom: 1px solid white;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  resize: none;
  height: 4em;
`;

const Label = styled.label`
  display: flex;
  font-size: 1rem;
  padding: 0.5em 0;
  
  span {
    flex: 1;
    padding-bottom: 0.5em;
  }

  @media screen and ${device.mobile} {
    flex-direction: column;
  }
`;

const InputName = styled.span`
  max-width: 30%;
  font-size: 1.2em;
  font-weight: 700;
`;

class ContactInfo extends Component {
  state = {
    name: '',
    company: '',
    message: '',
  };

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
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
            <a href="http://facebook.com/Pixelperfectvfx" target="_blank">
              <i className="fab fa-facebook-square fa-fw" />
              <p>/Pixelperfectvfx</p>
            </a>
          </InfoList>
          <Message>
            <Label>
              <InputName>Nombre</InputName>
              <span><Input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></span>
            </Label>
            <Label>
              <InputName>Compañía</InputName>
              <span><Input type="text" name="company" value={this.state.company} onChange={this.handleChange} /></span>
            </Label>
            <Label>
              <InputName>Mensaje</InputName>
              <span><TextArea value={this.state.message} name="message" onChange={this.handleChange} /></span>
            </Label>
          </Message>
        </InnerContainer>
      </Container>
    )
  }
}

export default ContactInfo
