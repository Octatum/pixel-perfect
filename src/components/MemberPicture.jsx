import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/device'

const Layout = styled.div`
  position: relative;
  height: calc((50vw - 8em) / 4);
  background: url(${props => props.picture ? props.picture : null}) no-repeat center center;
  background-size: cover;
  background-color: ${props => props.bg};

  @media screen and ${device.laptop} {
    height: calc((50vw - 8em) / 3);
  }

  @media screen and ${device.tablet} {
    height: calc((100vw - 6em) / 3);
  }

  @media screen and ${device.mobile} {
    height: calc((100vw - 6em) / 2);
  }
`

const _Icons = ({ className, linkedin, behance }) => {
  const result = [];
  let i = 0;

  if (linkedin !== undefined) {
    result.push(
      <a href={linkedin} target="_blank" key={i++}>
        <i className="fab fa-linkedin-in fa-fw" />
      </a>
    );
  }
  if (behance !== undefined) {
    result.push(
      <a href={behance} target="_blank" key={i++}>
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
