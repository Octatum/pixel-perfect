import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Component } from 'react';

const Container = MainText(styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 2em;
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
    display: inline;
    padding: 0 2em 0 0;
  }

  span {
    flex: 1;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  resize: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  resize: none;
  height: 4em;
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
            <div>
              <p>Nombre</p>
              <span><Input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></span>
            </div>
            <div>
              <p>Compañía</p>
              <span><Input type="text" name="company" value={this.state.company} onChange={this.handleChange} /></span>
            </div>
            <div>
              <p>Mensaje</p>
              <span><TextArea value={this.state.message} name="message" onChange={this.handleChange} /></span>
            </div>
          </Message>
        </InnerContainer>
      </Container>
    )
  }
}

export default ContactInfo
