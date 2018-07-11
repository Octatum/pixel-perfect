import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  position: relative;
  height: 30vh;
  max-height: 160px;
  background: ${props => props.bg};
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
  <Layout bg={props.color}>
    <Icons>
      <a href="/nosotros">
        <i className="fab fa-linkedin-in fa-fw" />
      </a>
      <a href="/nosotros">
        <i className="fas fa-star fa-fw" />
      </a>
    </Icons>
  </Layout>
)
