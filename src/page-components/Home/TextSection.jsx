import styled from 'styled-components';
import { device } from '../../utils/device';

const TextSection = styled('div')`
  --margin: 3rem;
  margin-bottom: 3em;
  margin-left: var(--margin);
  margin-right: var(--margin);
  width: 55%;
  align-self: ${({ align }) => (align === 'end' ? 'flex-end' : 'initial')};

  ${device.tablet} {
    width: 70%;
    --margin: 3rem;
  }

  ${device.mobile} {
    width: 80%;
    --margin: 2rem;
  }
`;

export default TextSection;
