import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';
import { Link, Bold } from './../components/Utils';
import InfoBoxes from './../components/Services/InfoBoxes';

const Layout = styled.div.attrs({
  style: (props) => ({...props})
})`
  position: relative;
  display: flex;
  width: calc(100% - 8rem);
  height: calc(100vh - 8rem);
  padding: 4rem;
`;

const RightTextbox = MainText(styled.div`
  flex: 1;
  align-self: center;
  justify-self: flex-end;
  text-align: right;
`);

const MainSlideText = styled.div`
  font-size: 4rem;
`;

const SecondaryText = styled.div`
  font-size: 1.5rem;  
  margin-top: 2rem;
  line-height: 1.2em;
`;


export default withRouteData(() => (
  <Layout background='slateblue'> 
    <InfoBoxes />  
    <RightTextbox>
      <MainSlideText>¿Qué<br/><Bold>hacemos?</Bold></MainSlideText>
      <SecondaryText>
        Somos una empresa dedicada a entrenar <Bold>artistas</Bold> de
        todo <Bold>México</Bold> con las técnicas y el software usado en la
        industria de efectos visuales internacionales.
        <br />
        <Link to="/portfolio"><Bold>Nuestros proyectos</Bold></Link>
      </SecondaryText>
    </RightTextbox>
  </Layout>     
));