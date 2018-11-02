import styled from 'styled-components';

const OurLayout = styled.div`
  background: ${({theme}) => theme.color.black};
  margin: 3em 0;
  display: flex;
  flex-direction: column;
`;

export default OurLayout;