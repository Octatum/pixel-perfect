import styled from 'styled-components';
import { device } from '../utils/device';

const Button = styled('button')`
  background: inherit;
  color: ${props => props.theme.color.light};
  padding: 0.25em 0.5em;
  transition: 0.3s ease-in-out all;

  :disabled {
    opacity: 0.1;
  }

  ${device.mobile} {
    flex: 1;
  }
`;

export default Button;
