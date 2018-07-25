import React, { Component } from 'react';
import styled from 'styled-components';

import screen from './assets/screen.png';
import tablet from './assets/tablet.png';
import thunder from './assets/thunder.png';
import Hoverbox from './Hoverbox';
import { device } from '../../../utils/device';
import Link from '../../../components/Link';

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
      title: 'VFX',
      content: `We assist in the post-production process with services like compositing, rotoscoping, cleanup, 3D tracking, etc.`,
    }, {
      img: screen,
      url: "/",
      title: 'VFX',
      content: `We assist in the post-production process with services like compositing, rotoscoping, cleanup, 3D tracking, etc.`,
    }, {
      img: thunder,
      url: "/course",
      title: 'Courses',
      content: `We offer courses in Roto Paint and Matchmove for those interested in learning the basic skills.`,
    }];

    return (
      <Layout>
        <Hoverbox
          element={Elements[this.state.currentlySelected]}
          isFirstElement={this.state.currentlySelected === 0}
          isLastElement={this.state.currentlySelected === Elements.length - 1} 
        />
        <IconList>
          {Elements.map(({url, img, hoverBoxContent}, index) => (
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
