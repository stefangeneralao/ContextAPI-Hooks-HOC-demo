import React, { createContext, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [ count, setCount ] = useState(0);

  const incrementCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  return (
    <CounterContext.Provider
      value={ {
        count,
        incrementCount,
        decreaseCount,
      } }
    >
      { children }
    </CounterContext.Provider>
  );
}

const CounterConsumer = CounterContext.Consumer;

export { CounterProvider, CounterConsumer };