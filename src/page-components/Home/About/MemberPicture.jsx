import React from 'react';
import styled from 'styled-components';
import { device } from '../../../utils/device';
import Text from '../../../components/Text';

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
    width: calc((100vw - 6em) / 3);
  }

  ${device.mobile} {
    height: calc((100vw - 6em) / 2);
    width: calc((100vw - 6em) / 2);
  }

  :hover > div {
    opacity: 1;
  }
`;

const _Icons = ({ className, linkedin, imdb }) => {
  const result = [];
  let i = 0;

  if (linkedin !== undefined) {
    result.push(
      <Text
        as="a"
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        key={i++}
      >
        <i className="fab fa-linkedin-in fa-fw" />
      </Text>
    );
  }

  if (imdb !== undefined) {
    result.push(
      <Text
        as="a"
        href={imdb}
        target="_blank"
        rel="noopener noreferrer"
        key={i++}
      >
        <i className="fas fa-star fa-fw" />
      </Text>
    );
  }

  return <div className={className}>{result}</div>;
};

const Icons = styled(_Icons)`
  font-size: 1.2em;
`;

const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem;
  opacity: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out opacity;
`;

const Name = styled.div`
  color: white;
  font-family: ${props => props.theme.font.main};
  font-size: 0.8em;
`;

export default props => (
  <Layout bg={props.color} picture={props.picture}>
    <Overlay>
      <Name className="name">
        <Text bold>{props.name}</Text>
        <Text>{props.role}</Text>
      </Name>
      <Icons linkedin={props.linkedin} imdb={props.imdb} />
    </Overlay>
  </Layout>
);
