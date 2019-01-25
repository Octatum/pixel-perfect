import styled from 'styled-components';

const OurLayout = styled.div`
  background: ${({ theme }) => theme.color.black};
  padding: 5rem 0;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
`;

export default OurLayout;
