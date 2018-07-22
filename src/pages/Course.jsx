import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Link, Bold } from '../components/Utils'
import { device } from '../utils/device'

const Layout = MainText(styled.div`
  height: 100vh;
  width: 100vw;
`);

const CourseHeader = styled.div`
  position: relative;
  height: 62%;
  background-color: rgba(120, 12, 64, 0.5);

  @media screen and ${device.tablet} {
    font-size: 0.8em;
  }

  @media screen and ${device.mobile} {
    font-size: 1em;
  }
`;

const LeftTitle = styled.h2`
  position: absolute;
  bottom: 1.5rem;
  left: 3.5rem;
  font-size: 3.5em;
  font-weight: 200;

  @media screen and ${device.tablet} {
    left: 1.5rem;
  }

  @media screen and ${device.mobile} {
    display: none;
  }
`;

const RightTextbox = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 3.5rem;
  width: 40%;
  text-align: right;

  h1 {
    font-size: 4em;
    font-weight: 200;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.2em;
    line-height: 1.3;
  }

  @media screen and ${device.tablet} {
    right: 1.5rem;
  }

  @media screen and ${device.mobile} {
    position: absolute;
    right: initial;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.5em;
      line-height: 1;
    }
  }
`

const CourseDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  min-height: 38%;
  background-color: white;
`;

const Description = styled.div`
  position: relative;
  flex: 2;
  color: ${props => props.theme.mainDarkText};

  h2 {
    display: none;
    font-size: 2.8em;
    font-weight: 200;
    padding-bottom: 1rem;
  }

  p {
    padding: 1rem 3rem;
    font-size: 1.3em;
    line-height: 1.2;
  }

  @media screen and ${device.tablet} {
    flex: 1 1 100%;
  }

  @media screen and ${device.mobile} {
    padding: 1rem;

    h2 {
      display: block;
    }

    p {
      padding: 0;
    }
  }
`;

const BookmarkIcon = styled.div`
  position: absolute;
  left: 1em;
  width: 1.2em;
  height: 4.2em;
  background-color: black;

  @media screen and ${device.mobile} {
    display: none;
  }
`;

const Requirements = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;

  p, h3 {
    text-align: center;
    padding: 1rem 2rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.3em;
  }

  @media screen and ${device.mobile} {
    flex: 1 1 100%;
  }
`;

const LearnMore = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.mainDarkText}
`;

const LMBlock = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  padding: 1em;
  align-items: center;
  justify-content: center;
  background-color: #494949;
  color: white;

  * {
    text-align: center;
  }

  h3 {
    font-size: 1.8em;
    font-weight: 200;
  }

  p {
    line-height: 1.5;
  }
`;

const LMWhiteBlock = LMBlock.extend`
  background-color: white;

  i {
    color: black;
  }
`;

export default () => (
  <Layout>
    <CourseHeader>
      <LeftTitle>
        What's this<br />
        <Bold>all about?</Bold>
      </LeftTitle>
      <RightTextbox>
        <h1>
          Roto<br />
          <Bold>Painting</Bold>
        </h1>
        <p>
          Ab qui malis iudicem, quae cohaerescant constias fore eiusmod. E singulis ita constias, ne illum incididunt aliquip. Illum appellat nostrud, nisi ut o duis quamquam. Pariatur ea duis mandaremus e aute deserunt iis singulis.
        </p>
      </RightTextbox>
    </CourseHeader>
    <CourseDetails>
      <Description>
        <BookmarkIcon />
        <h2>
          What's this<br />
          <Bold>all about?</Bold>
        </h2>
        <p>Velit occaecat te tempor elit, illum occaecat <Bold>cohaerescant</Bold>. Ad dolore export ab constias id in quae reprehenderit. Magna adipisicing iudicem ipsum <Bold>ullamco</Bold> e <Bold>appellat</Bold> eram laborum. Sint eiusmod a incididunt nam culpa pariatur et elit legam. Et irure possumus hic tamen probant consequat. Culpa id aut aute officia ut eu in quae esse <Bold>cillum</Bold>.</p>
        <p><Bold>This is what we've worked on...</Bold></p>
      </Description>
      <Requirements>
        <h3>Requirements</h3>
        <p>Non quis voluptate ad <Bold>ingeniis ipsum</Bold> quis hic elit. A irure cupidatat ea de <Bold>ipsum quibusdam</Bold>.</p>
        <p>Iis quem despicationes si admodum magna expetendis expetendis.</p>
      </Requirements>
      <LearnMore>
        <LMBlock>
          <h3>
            Know our<br />
            <Bold>stuff</Bold>
          </h3>
        </LMBlock>
        <LMWhiteBlock>
          <Link to='/course'><i className="fas fa-download fa-2x"></i></Link>
        </LMWhiteBlock>
        <LMBlock>
          <p>
            Need more info?<br />
            <Link to='/course'><Bold>Write us!</Bold></Link>
          </p>
        </LMBlock>
      </LearnMore>
    </CourseDetails>
  </Layout>
)
