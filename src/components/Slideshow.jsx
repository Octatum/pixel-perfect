import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { NodeGroup } from 'react-move';

const timeBetweenSlides = 5000;

const Controllers = styled.div`
  position: absolute; 
  display: flex;
  bottom: 0;
  height: 10vh;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const FullscreenDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideButton = styled.div.attrs({
  style: ({selected}) => ({
    background: `${selected ? 'white' : 'transparent'}`
  })
})`
  margin: 0 2px;
  width: 10px;
  height: 10px;
  border: 2px solid white;
  border-radius: 100%;
  transition: 0.3s linear all;
`;

class Slideshow extends Component {
  state = {
    currentSlide: 0
  }

  componentDidMount() {
    this.slideTimer = setInterval(this.nextSlide, timeBetweenSlides); 
  }

  componentWillUnmount() {
    clearInterval(this.slideTimer);
  }

  nextSlide = () => {
    console.log("next slide");
    const currentSlide = (this.state.currentSlide + 1) % this.props.items.length;

    this.setState({currentSlide});
  }

  previousSlide = () => {
    console.log("previous slide");
    const currentSlide = (this.state.currentSlide + this.props.items.length - 1) % this.props.items.length;

    this.setState({currentSlide});
  }

  resetTimer = () => {
    // Clear interval if it exists, then create it again
    if(!this.slideTimer) return;

    clearInterval(this.slideTimer);
    this.slideTimer = setInterval(this.nextSlide, timeBetweenSlides);     
  }

  setCurrentSlide = (slideIndex) => {
    console.log(`Changed slide index to ${slideIndex}`)
    this.setState({
      currentSlide: slideIndex
    });
    this.resetTimer();
  }

  render() {
    const SlideButtons = this.props.items.map((_, index) => (
      <SlideButton 
        selected={index === this.state.currentSlide}
        key={index}
        onClick={() => this.setCurrentSlide(index)}
      />
    ));

    return (
      <Fragment>
        <NodeGroup
          data={[{
            id: this.props.items[this.state.currentSlide].background,
            current: this.state.currentSlide
          }]}
          keyAccessor={(c) => c.id}
          start={() => ({
            opacity: [0],
            scale: 1,
          })}
          enter={() => ({
            opacity: [1],
            timing: { duration: 600, delay: 200 },
          })}
          update={() => ({
            opacity: [1],
          })}
          leave={() => ({
            opacity: [0],
            timing: { duration: 200 },
          })}>
            {(nodes) => (
              <FullscreenDiv>
                {nodes.map(({key, data, state: { opacity, translateY } }) => (
                  <div
                    key={key}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: data.id,
                      opacity,
                  }}>
                    {this.props.renderElement(data.id)}
                  </div>
                ))}
              </FullscreenDiv>)} 
        </NodeGroup>
        <Controllers>
          {SlideButtons}
        </Controllers>
      </Fragment>
    );
  }
}

export default Slideshow;