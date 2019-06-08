import React from 'react';
import withCounter from 'hocs/withCounter';
import Card from 'components/Card/Card';
import './Counter.scss';

const Counter = ({ count, incrementCount, decreaseCount }) => (
  <div className="counter">
    <Card>
      <p>Count: { count }</p>
      <button onClick={ decreaseCount }>-1</button>
      <button onClick={ incrementCount }>+1</button>
    </Card>
  </div>
);

export default withCounter(Counter);