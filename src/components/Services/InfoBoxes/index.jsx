import React, { Component } from 'react';
import styled from 'styled-components';

import screen from './assets/screen.png';
import tablet from './assets/tablet.png';
import thunder from './assets/thunder.png';
import Hoverbox from './Hoverbox';
import { device } from '../../../utils/device';
import Link from '../../Link';

const Layout = styled.div`
  flex: 1;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem 0 auto;
  position: relative;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  ${device.tablet} {
    flex: 1 1 100%;
    margin: 0;
    align-self: flex-start;
  }
`;

const Img = styled.img`
  max-height: 100%;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  transition: 0.2s ease transform;

  &:active {
    transform: scale(0.9);
  }
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-between;
`;



class InfoBoxes extends Component {
  state = {
    currentlySelected: 1,
  }

  selectElement = (elementIndex) => {
    this.setState({currentlySelected: elementIndex});
  }

  render () {
    const Elements = [{
      img: tablet,
      url: "/portfolio",
      title: 'Service: CGI / VFX',
      content: `We assist in the post-production process with services like compositing, rotoscoping, cleanup, 3D tracking and CGI services like 3D modelling and animation, lighting, etc. `,
      color: 'rgba(11, 120, 84, 0.6)'
    }, {
      img: screen,
      url: "/course/roto-painting",
      title: 'Course: Roto Painting',
      content: `A roto artist is able to trace areas from live action frames and remove objects from them through digital compositing.`,
      color: 'rgba(7, 0, 109, 0.6)'
    }, {
      img: thunder,
      url: "/course/matchmove",
      title: 'Course: Matchmove',
      content: `Allows to replicate the movement of a physical camera in live action shots in a 3D digital environment.`,
      color: 'rgba(7, 0, 109, 0.6)'
    }];

    return (
      <Layout>
        <Hoverbox
          element={Elements[this.state.currentlySelected]}
          isFirstElement={this.state.currentlySelected === 0}
          isLastElement={this.state.currentlySelected === Elements.length - 1}
        />
        <IconList>
          {Elements.map(({url, img}, index) => (
            <Link
              key={index}
              to={url}
              onMouseEnter={() => this.selectElement(index)}
            >
              <Img src={img} />
            </Link>
          ))}
        </IconList>
      </Layout>
    );
  }
}

export default InfoBoxes;
