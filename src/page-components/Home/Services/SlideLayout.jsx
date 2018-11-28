import styled from 'styled-components';

const SlideLayout = styled.div`
  padding: 5em;
  min-height: 80vh;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--margin);
`;

export default SlideLayout;
