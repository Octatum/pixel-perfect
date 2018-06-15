import React, { Component } from 'react';
import styled from 'styled-components';

import screen from '../../assets/Services/screen.png';
import tablet from '../../assets/Services/tablet.png';
import thunder from '../../assets/Services/thunder.png';
import { Link, Shake } from './../Utils';

const Layout = styled.div`
  align-self: flex-end;
  display: flex;
  width: calc(50% - 3rem);
  justify-content: space-between;
  margin-left: 1rem;
  color: white;
`;

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

const Hoverbox = styled.div`
  --bg-color: rgb(7, 0, 109);
  position: absolute;
  height: 10rem;
  width: 18rem;
  max-width: 18rem;  
  top: -18rem;
  background: var(--bg-color);

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: -2rem;
    border: 2rem solid transparent;
  }
`;

const LeftHoverbox = Hoverbox.extend`
  left: 0;
  
  &::after {
    left: 0;
    border-left-color: var(--bg-color);
  }
`;

const RightHoverbox = Hoverbox.extend`
  right: 0;
  
  &::after {
    right: 0;
    border-right-color: var(--bg-color);
  }
`;

const MiddleHoverBox = Hoverbox.extend`
  left: -7rem;

  &::after {
    left: 10rem;
    border-left-color: var(--bg-color);
  }

  &::before {
    right: 10rem;
    border-right-color: var(--bg-color);
  }
`;


const Elements = [{
  img: screen,
  url: "/",
  title: 'Cursos',
  hoverBoxContent: `Entrenamos artistas de todo México con las técnicas y el software usado en la industria de efectos visuales internacionales`,
  hoverBoxRender: ({content}) => (<LeftHoverbox>{content}</LeftHoverbox>)
}, {
  img: tablet,
  url: "/",
  title: 'Cursos',
  hoverBoxContent: `Entrenamos artistas de todo México con las técnicas y el software usado en la industria de efectos visuales internacionales`,
  hoverBoxRender: ({content}) => (<MiddleHoverBox>{content}</MiddleHoverBox>)
}, {
  img: thunder,
  url: "/",
  title: 'Cursos',
  hoverBoxContent: `Entrenamos artistas de todo México con las técnicas y el software usado en la industria de efectos visuales internacionales`,
  hoverBoxRender: ({content}) => (<RightHoverbox>{content}</RightHoverbox>)
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
        {Elements.map(({url, img, hoverBoxContent, hoverBoxRender}, index) => (
          <Link key={index} to={url} onMouseEnter ={() => this.selectElement(index)} style={{position: 'relative'}}>
            {this.state.currentlySelected === index && hoverBoxRender({content: hoverBoxContent})}
            <Img src={img} />
          </Link>
        ))}
      </Layout>
    );
  }
}

export default InfoBoxes;