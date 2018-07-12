import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  position: relative;
  height: 30vh;
  max-height: 160px;
  background: url(${props => props.picture ? props.picture : null}) no-repeat center center fixed;
  background-size: cover
  background-color: ${props => props.bg};
`

const Icons = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  font-size: 1.2em;

  a {
    display: inline-block;
    text-decoration: none;
    color: white;
  }
`

export default props => (
  <Layout bg={props.color} picture={props.picture}>
    <Icons>
      <a href="/nosotros" target="_blank">
        <i className="fab fa-linkedin-in fa-fw" />
      </a>
      <a href="/nosotros" target="_blank">
        <i className="fas fa-star fa-fw" />
      </a>
    </Icons>
  </Layout>
)
