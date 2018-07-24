import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectPortfolioSlot from './ProjectPortfolioSlot'

const Layout = styled.div`
  display: flex;
  position: relative;
`;

const OpaqueDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: 5em;
  background: rgba(0, 0, 0, 0.3);
`;

const MovieGrid = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100vw;
  flex-flow: row wrap;
`;

class StudentPortfolio extends Component {
  render() {
    return (
      <Layout>
        <MovieGrid>
          {/* TEMPLATE FOR TESTING */}
          <ProjectPortfolioSlot
            bg="darkred"
            names={[
              "Hi",
              "I'm a name",
            ]} />
          <ProjectPortfolioSlot
            bg="darkblue"
            names={[
              "I'm all alone"
            ]} />
          <ProjectPortfolioSlot
            bg="darkgreen" />
          <ProjectPortfolioSlot
            bg="darkcyan"
            names={[
              "A-one",
              "A-two",
              "A-one-two-three-four"
            ]} />
          <ProjectPortfolioSlot
            bg="darksalmon"
            names={[
              "Yello there"
            ]} />
          <ProjectPortfolioSlot
            bg="dodgerblue"
            names={[
              "ROLLIN' AROUND",
              "AT THE SPEED OF SOUND",
              "GOT PLACES TO GO",
              "GOTTA FOLLOW MY RAINBOW"
            ]} />
            <ProjectPortfolioSlot
              bg="darkred"
              names={[
                "Hi",
                "I'm a name",
              ]} />
            <ProjectPortfolioSlot
              bg="darkblue"
              names={[
                "I'm all alone"
              ]} />
            <ProjectPortfolioSlot
              bg="darkgreen" />
            <ProjectPortfolioSlot
              bg="darkcyan"
              names={[
                "A-one",
                "A-two",
                "A-one-two-three-four"
              ]} />
            <ProjectPortfolioSlot
              bg="darksalmon"
              names={[
                "Yello there"
              ]} />
            <ProjectPortfolioSlot
              bg="dodgerblue"
              names={[
                "ROLLIN' AROUND",
                "AT THE SPEED OF SOUND",
                "GOT PLACES TO GO",
                "GOTTA FOLLOW MY RAINBOW"
              ]} />
        </MovieGrid>
        <OpaqueDiv />
      </Layout>
    )
  }
}

export default StudentPortfolio