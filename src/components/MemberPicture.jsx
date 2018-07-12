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

const _Icons = ({ className, linkedin, behance }) => {
  const result = [];

  if (linkedin !== undefined) {
    result.push(
      <a href={linkedin} target="_blank">
        <i className="fab fa-linkedin-in fa-fw" />
      </a>
    );
  }
  if (behance !== undefined) {
    result.push(
      <a href={behance} target="_blank">
        <i className="fas fa-star fa-fw" />
      </a>
    );
  }

  return (
    <div className={className}>
      {result}
    </div>
  );
}

const Icons = styled(_Icons)`
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
    <Icons linkedin={props.linkedin} behance={props.behance} />
  </Layout>
)
