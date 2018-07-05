import React from 'react'
import styled from 'styled-components'

import { MainText } from '../styles/AppStyles'
import { Link, Bold } from '../components/Utils'

const Layout = MainText(styled.div`
  height: 100vh;
  width: 100vw;
`);

const CourseHeader = styled.div`
  position: relative;
  height: 62%;
  background-color: rgba(120, 12, 64, 0.5);
`;

const Title = styled.h1`
  position: absolute;
  top: 40%;
  right: 3%;
  font-size: 4em;
  font-weight: 200;
  text-align: right;
`;

const Question = styled.h2`
  position: absolute;
  bottom: 7%;
  left: 4%;
  font-size: 3.5em;
  font-weight: 200;
`;

const AttentionGrabber = styled.p`
  position: absolute;
  width: 40%;
  top: 72%;
  right: 3%;
  font-size: 1.2em;
  line-height: 1.3;
  text-align: right;
`;

const CourseDetails = styled.div`
  display: flex;
  height: 38%;
  background-color: white;
`;

const Description = styled.div`
  position: relative;
  flex: 2;
  color: ${props => props.theme.mainDarkText}

  p {
    padding: 1rem 3rem;
    font-size: 1.3em;
    line-height: 1.2;
  }
`;

const BookmarkIcon = styled.div`
  position: absolute;
  left: 3%;
  width: 1.2em;
  height: 4.2em;
  background-color: black;
`;

const Requirements = styled.div`
  flex: 1;
  background-color: black;

  p, h3 {
    text-align: center;
    padding: 1rem 2rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.2em;
    padding-top: 2rem;
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
      <Title>
        Roto<br />
        <Bold>Painting</Bold>
      </Title>
      <Question>
        What's this<br />
        <Bold>all about?</Bold>
      </Question>
      <AttentionGrabber>
        Ab qui malis iudicem, quae cohaerescant constias fore eiusmod. E singulis ita constias, ne illum incididunt aliquip. Illum appellat nostrud, nisi ut o duis quamquam. Pariatur ea duis mandaremus e aute deserunt iis singulis.
      </AttentionGrabber>
    </CourseHeader>
    <CourseDetails>
      <Description>
        <BookmarkIcon />
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
