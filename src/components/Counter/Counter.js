import React from 'react';
import { consumeCounter } from 'contexts/CounterContext';
import Card from 'components/Card/Card';
import './Counter.scss';

const Counter = ({ count, incrementCount, decreaseCount }) => (
  <div className="counter">
    <Card>
      <h2>Simple Counter { count }</h2>
      <button onClick={ decreaseCount }>-1</button>
      <button onClick={ incrementCount }>+1</button>
    </Card>
  </div>
);

export default consumeCounter(Counter);