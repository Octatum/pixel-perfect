import React from 'react';
import { NodeGroup } from 'react-move';
import styled from 'styled-components';

const FullSizeDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const FadeInOnEnter = ({item}) => (
  <NodeGroup
    data={[{
      // Required. Identifier for each element
      key: item.key,
      // Spread remaining props
      ...item
    }]}
    keyAccessor={(c) => c.key}
    start={() => ({
      opacity: [0],
      translateY: [-10],
    })}
    enter={() => ({
      opacity: [1],
      timing: { duration: 600, delay: 200 },
      translateY: [0],
    })}
    update={() => ({
      opacity: [1],
    })}
    leave={() => ({
      opacity: [0],
      translateY: [10],
      timing: { duration: 200 },
    })}>
      {(nodes) => (
        <FullSizeDiv>
          {nodes.map(({key, data, state: { opacity } }) => (
            <div
              key={key}
              style={{
                position: 'absolute',
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                opacity,
              }}>
              {data.render()}
            </div>
          ))}
        </FullSizeDiv>)} 
  </NodeGroup>
);

export default FadeInOnEnter;