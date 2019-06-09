import React from 'react';
import Card from 'components/Card/Card';
import './UrbanDictionary.scss';
import { consumeUrbanDictionary } from 'contexts/UrbanDictionaryContext';

const UrbanDictionary = ({
  onSubmit,
  onChange,
  value,
  result: { word, definition },
  isFetching,
}) => (
  <div className="urban-dictionary">
    <Card>
      { isFetching ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          <h2 className="title">{ word || 'Urban Dictionary' }</h2>
          <p className="definition">{ definition }</p>
        </>
      ) }
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          onChange={ onChange }
          value={ value }
          placeholder="Type any word..."
        />
      </form>
    </Card>
  </div>
);

export default consumeUrbanDictionary(UrbanDictionary);