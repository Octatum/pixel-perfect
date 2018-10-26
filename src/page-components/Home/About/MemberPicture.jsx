import React from 'react';
import styled from 'styled-components';
import { device } from '../../../utils/device';


const Layout = styled.div`
  position: relative;
  height: calc((50vw - 8em) / 4);
  background: url(${props => (props.picture ? props.picture : null)}) no-repeat
    center center;
  background-size: cover;
  background-color: ${props => props.bg};

  ${device.laptop} {
    height: calc((50vw - 8em) / 3);
  }

  ${device.tablet} {
    height: calc((100vw - 6em) / 3);
  }

  ${device.mobile} {
    height: calc((100vw - 6em) / 2);
  }

  div {
    opacity: 0;
    transition: all 0.5s;
  }

  .name {
    max-height: 0;
  }

  &:hover div {
    opacity: 1;
  }

  &:hover .name {
    max-height: 40%;
  }
`;

const _Icons = ({ className, linkedin, imdb }) => {
  const result = [];
  let i = 0;

  if (linkedin !== undefined) {
    result.push(
      <a href={linkedin} target="_blank" key={i++}>
        <i className="fab fa-linkedin-in fa-fw" />
      </a>
    );
  }
  if (imdb !== undefined) {
    result.push(
      <a href={imdb} target="_blank" key={i++}>
        <i className="fas fa-star fa-fw" />
      </a>
    );
  }

  return <div className={className}>{result}</div>;
};

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
`;

const Name = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-family: ${props => props.theme.font.main};
  font-size: 0.8em;
  text-align: center;
`;

export default props => (
  <Layout bg={props.color} picture={props.picture}>
    <Icons linkedin={props.linkedin} imdb={props.imdb} />
    <Name className="name">
      <p>
        <b>{props.name}</b>
        <br />
        <i>{props.role}</i>
      </p>
    </Name>
  </Layout>
);
