import styled, { keyframes } from 'styled-components';
import { Link as _Link } from 'react-static';

import { MainText } from '../styles/AppStyles';

export const Link = MainText(styled(_Link).attrs({
  style: ({style}) => ({...style})
})`
  text-decoration: none;
  color: ${props => props.color || props.theme.mainLightText};

  &:visited {
    text-decoration: none;
  }
`);

export const Bold = styled.span`
  font-weight: 700;
`;

export const Shake = keyframes`
  0%, 75%, 100% {
    transform: rotate(0);
  }

  15% {
    transform: rotate(-15deg);
  }
  
  30% {
    transform: rotate(15deg);
  }

  45% {
    transform: rotate(-8deg);
  }

  60% {
    transform: rotate(4deg);
  }
`;