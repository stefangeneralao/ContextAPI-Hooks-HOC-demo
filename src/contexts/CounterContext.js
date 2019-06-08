import React, { createContext, useState, useEffect, useRef } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [ count, setCount ] = useState(
    parseInt(localStorage.getItem('count')) || 0
  );
  const isInitialMount = useRef(true);

  const incrementCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem('count', count);
    }
  }, [ count ]);
  
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