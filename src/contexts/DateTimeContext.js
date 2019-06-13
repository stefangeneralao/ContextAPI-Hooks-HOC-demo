import React, { createContext, useState, useEffect } from 'react';
import contextHOC from 'utils/contextHOC';

const DateTimeContext = createContext();

const DateTimeProvider = ({ children }) => {
  const [ date, setDate ] = useState(new Date());
  
  useEffect(() => {
    const timeout = setInterval(() => {
      const currentDate = new Date();
      if (currentDate.getSeconds() !== date.getSeconds()) {
        setDate(currentDate);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [ date ]);
  
  return (
    <DateTimeContext.Provider
      value={{ date }}
    >
      { children }
    </DateTimeContext.Provider>
  );
};

const DateTimeConsumer = DateTimeContext.Consumer;

export const [
  provideDateTime,
  consumeDateTime,
] = contextHOC(DateTimeProvider, DateTimeConsumer);