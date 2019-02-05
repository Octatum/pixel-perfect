import styled from 'styled-components';

const SlideLayout = styled.div`
  padding: 5em;
  min-height: 100vh;
  background: ${({ background }) => background};
  background-position: center;
  background-size: cover;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--margin);
`;

export default SlideLayout;
