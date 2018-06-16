import React, { Component } from 'react';
import styled from 'styled-components';

import screen from '../../assets/Services/screen.png';
import tablet from '../../assets/Services/tablet.png';
import thunder from '../../assets/Services/thunder.png';
import { Link, Shake } from './../Utils';
import Hoverbox from './Hoverbox';
import { MainText } from './../../styles/AppStyles';

const Layout = MainText(styled.div`
  align-self: flex-end;
  display: flex;
  width: calc(50% - 3rem);
  justify-content: space-between;
  margin-left: 1rem;
  color: white;
  position: relative;
`);

const Img = styled.img`
  max-height: 100%;
  cursor: pointer;
  height: 4rem;
  transition: 0.2s ease transform;

  &:hover {
    animation: ${Shake} 1s ease;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Elements = [{
  img: screen,
  url: "/",
  title: 'Cursos',
  content: `Entrenamos artistas de todo México con las técnicas y el software usado en la industria de efectos visuales internacionales.`,
}, {
  img: tablet,
  url: "/",
  title: 'Cursos',
  content: `Entrenamos artistas de todo México con las técnicas y el software usado en la industria de efectos visuales internacionales.`,
}, {
  img: thunder,
  url: "/",
  title: 'Cursos',
  content: `Entrenamos artistas de todo México con las técnicas y el software usado en la industria de efectos visuales internacionales.`,
}];

class InfoBoxes extends Component {
  state = {
    currentlySelected: 1,
  }

  selectElement = (elementIndex) => {
    this.setState({currentlySelected: elementIndex});
  }

  render () {
    return (
      <Layout>
        <Hoverbox
          element={Elements[this.state.currentlySelected]}
          isFirstElement={this.state.currentlySelected === 0}
          isLastElement={this.state.currentlySelected === Elements.length - 1} />
        {Elements.map(({url, img, hoverBoxContent}, index) => (
          <Link
            key={index}
            to={url}
            onMouseEnter={() => this.selectElement(index)}>
              <Img 
                src={img} />
          </Link>
        ))}
      </Layout>
    );
  }
}

export default InfoBoxes;