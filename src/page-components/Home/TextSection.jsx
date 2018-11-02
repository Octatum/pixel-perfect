import styled from 'styled-components';

const TextSection = styled('div')`
  margin-bottom: 6em;
  margin-left: 3em;
  margin-right: 3em;
  width: 55%;
  align-self: ${({ align }) => (align === 'end' ? 'flex-end' : 'initial')};
`;

export default TextSection;
