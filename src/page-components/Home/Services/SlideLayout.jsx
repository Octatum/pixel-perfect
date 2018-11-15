import styled from 'styled-components';

const SlideLayout = styled.div`
  padding: 2em;
  min-height: 100vh;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default SlideLayout;
