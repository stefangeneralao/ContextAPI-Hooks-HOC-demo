import React, { createContext, useState } from 'react';

const url = 'https://api.urbandictionary.com/v0/define?term=';

const UrbanDictionaryContext = createContext();

const UrbanDictionaryProvider = ({ children }) => {
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState({});
  const [ isFetching, setIsFetching ] = useState(false);

  const clearResult = () => setResult({});
  
  const clearValue = () => setValue('');
  
  const onSubmit = async e => {
    e.preventDefault();

    try {
      setIsFetching(true);
      clearValue();
      
      const response = await fetch(`${ url }${ value }`);
      const { list } = await response.json();
      const [{ word, definition }] = list;
      
      setResult({ word, definition });
    } catch {
      clearResult();
    } finally {
      setIsFetching(false);
    }
  }

  const onChange = e => setValue(e.target.value);
  
  return (
    <UrbanDictionaryContext.Provider
      value={{
        onSubmit,
        onChange,
        value,
        result,
        isFetching,
      }}
    >
      { children }
    </UrbanDictionaryContext.Provider>
  );
}

const UrbanDictionaryConsumer = UrbanDictionaryContext.Consumer;

export { UrbanDictionaryProvider, UrbanDictionaryConsumer };