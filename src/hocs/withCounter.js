import React from 'react';
import { CounterConsumer } from 'contexts/CounterContext';

const withCounter = Component => (
  props => (
    <CounterConsumer>
      { contexts => (
        <Component { ...props } { ...contexts } />
      ) }
    </CounterConsumer>
  )
);

export default withCounter;