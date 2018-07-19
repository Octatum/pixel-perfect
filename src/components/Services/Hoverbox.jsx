import React from 'react';
import styled from 'styled-components';

import { Bold, Link } from '../Utils';
import { device } from '../../utils/device';

const _Hoverbox = styled.div`
  --bg-color: rgba(7, 0, 109, 0.6);
  --transition: 0.5s ease all;
  display: flex;
  position: relative;
  height: 10rem;
  max-width: 20rem;
  margin-bottom: 4rem;
  background: var(--bg-color);
  transition: var(--transition);
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.1em;
  font-size: 1.1rem;
  flex-direction: column;
  padding: 0 1rem;
  z-index: 1;

  @media screen and ${device.tablet} {

  }

  @media screen and ${device.mobile} {
    
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: -2rem;
    border: 2rem solid transparent;
    transition: var(--transition), 0.3s ease-out opacity;
    opacity: 1;
    z-index: -1;
  }

  &::before {
    border-left-color: var(--bg-color);
  }

  &::after {
    border-right-color: var(--bg-color);
  }

  ${props => props.isFirstElement ? `
    left: 0;

    &::before,
    &::after {
      left: 0;
    }

    &::after {
      opacity 0;
    }
    `: ``}

  ${props => props.isLastElement ? `
    left: 100%;
    transform: translateX(-100%);

    &::before,
    &::after {
      left: calc(100% - 4rem);
    }

    &::before {
      opacity 0;
    }
    `: ``}

  ${props => !props.isLastElement && !props.isFirstElement ? `
    left: 50%;
    transform: translateX(-50%);

    &::before {
      left: 11rem;
    }

    &::after {
      left: 7rem;
    }
  ` : ''}
`;

const Spacer = styled.div`
  margin: 0.5em 0;
  height: 2px;
  width: 10%;
  background: white;
`;

const Hoverbox = ({element: {content, title, url}, ...rest}) => (
  <_Hoverbox {...rest}>
    <Bold>{title}</Bold>
    <Spacer />
    <div>
      {content}<Bold><Link to={url}> Más información</Link></Bold>
    </div>
  </_Hoverbox>
);

export default Hoverbox;
