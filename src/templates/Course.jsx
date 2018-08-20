import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/device'
import Link from '../components/Link';

const Layout = styled.div`
  height: 100vh;
  color: ${props => props.dark ? props.theme.color.dark : props.theme.color.light};
  font-family: ${props => props.theme.font.main};
  display: flex;
  flex-direction: column;
`;

const CourseHeader = styled.div`
  position: relative;
  height: 62%;
  background: ${props => props.background};
  background-size: cover;

  ::before {
    content: "";
    background: black;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  ${device.tablet} {
    font-size: 0.8em;
  }

  ${device.mobile} {
    position: relative;
    flex-flow: row wrap;
    font-size: 1em;
    background-position: top;
    display: flex;
    padding: 0 1em;
    padding-top: 5em;

    > * {
      z-index: 1;
    }
  }
`;

const LeftTitle = styled.h2`
  position: absolute;
  bottom: 1.5rem;
  left: 3.5rem;
  font-size: 3.5em;
  font-weight: 200;

  ${device.tablet} {
    left: 1.5rem;
  }

  ${device.mobile} {
    display: none;
  }
`;

const CourseTitle = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 3.5rem;
  width: 40em;
  text-align: left;

  h1 {
    font-size: 4em;
    font-weight: bold;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.3em;
    line-height: 1.3;
  }

  ${device.tablet} {
    right: 1.5rem;
    max-width: 80%;
  }

  ${device.mobile} {
    position: relative;
    left: 0;
    bottom: 0;
    min-width: 100%;
    box-sizing: border-box;
    padding: 1rem 0;

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.5em;
      line-height: 1;
      padding: 0;
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
  color: ${props => props.theme.color.dark};
  padding: 1rem 9rem 0 3rem;

  h2 {
    display: block;
    font-size: 2.8em;
    font-weight: 200;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.3em;
    line-height: 1.2;
  }

  ${device.tablet} {
    flex: 1 1 100%;
  }

  ${device.mobile} {
    padding: 1rem;

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
  top: 0;

  ${device.mobile} {
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

  ${device.mobile} {
    flex: 1 1 100%;
  }
`;

const LearnMore = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.dark};
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

const Arrow = styled.i`
  position: absolute;
  font-size: 2em;
  top: 6rem;
  left: ${props => props.previous ? '1rem' : 'initial'};
  right: ${props => props.next ? '1rem' : 'initial'};

  ${device.mobile} {
    position: initial;
  }
`;

const CustomArrowLink = Link.extend`
  ${({textAlign}) => textAlign && `text-align: ${textAlign}`};

  ${device.mobile} {
    flex: 1;
  }
`;

const adjacentPath = (allCoursesJson, targetIndex) => {
  const courseCount = allCoursesJson.edges.length;

  if (targetIndex < 0) {
    return `/course/${allCoursesJson.edges[courseCount - 1].node.path}`;
  }
  return `/course/${allCoursesJson.edges[targetIndex % courseCount].node.path}`;
}

function Course ({data: {coursesJson, allCoursesJson}}) {
  const { index, name, description, about, requirements, image, courseFile } = coursesJson;

  return (
    <Layout>
      <CourseHeader background={`url("/images/${image}")`}>
        <CustomArrowLink to={adjacentPath(allCoursesJson, index - 1)} textAlign="left">
          <Arrow previous className="fas fa-chevron-circle-left"/>
        </CustomArrowLink>
        <CustomArrowLink to={adjacentPath(allCoursesJson, index + 1)} textAlign="right">
          <Arrow next className="fas fa-chevron-circle-right"/>
        </CustomArrowLink>
        <CourseTitle>
          <h1>
            {name}
          </h1>
          <p>
            {description}
          </p>
        </CourseTitle>
      </CourseHeader>
      <CourseDetails>
        <Description>
          <BookmarkIcon />
          <h2>
            What will <br />
            <strong>you learn</strong>
          </h2>
          <p>{about}</p>
        </Description>
        <Requirements>
          <h3>Requirements</h3>
          <p>{requirements}</p>
        </Requirements>
        <LearnMore>
          <LMBlock>
            <h3>
              Full<br />
              <strong>program</strong>
            </h3>
          </LMBlock>
          <LMWhiteBlock>
            <Link to={`/files/${courseFile}`} target="_blank"><i className="fas fa-download fa-2x"></i></Link>
          </LMWhiteBlock>
          <LMBlock>
            <p>
              Need more info?<br />
              <Link to='/contact'><strong>Write us!</strong></Link>
            </p>
          </LMBlock>
        </LearnMore>
      </CourseDetails>
    </Layout>
  );
}

export default Course;

export const pageQuery = graphql`
  query GetCourseData($route: String!) {
    coursesJson(path: {eq: $route}) {
      index
      name
      description
      about
      requirements
      image
      courseFile
    }

    allCoursesJson {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`;
