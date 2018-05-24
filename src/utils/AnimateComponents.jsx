import React from 'react';
import { NodeGroup } from 'react-move';

export default () => (
  <NodeGroup
    // React-move will handle the entry and exit of any items we pass in `data`
    data={[
      {
        // pass the current Comp, props, ID and router
        id: props.location.pathname,
        Comp,
        props,
        router,
      },
    ]}
    keyAccessor={d => d.id}
    start={() => ({
      opacity: [0],
      scale: 1,
      translateY: [-10],
    })}
    enter={() => ({
      opacity: [1],
      translateY: [0],
      timing: { duration: 600, delay: 200, ease: easeCubicInOut },
    })}
    update={() => ({
      opacity: [1],
    })}
    leave={() => ({
      opacity: [0],
      translateY: [-10],
      timing: { duration: 200, ease: easeCubicInOut },
    })}
  >
    {nodes => (
      {nodes}
    )}
  </NodeGroup>
);