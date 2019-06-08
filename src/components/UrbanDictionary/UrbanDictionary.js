import React from 'react';
import Card from 'components/Card/Card';
import withUrbanDictionary from 'hocs/withUrbanDictionary';
import './UrbanDictionary.scss';

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
        <p>Loading...</p>
      ) : (
        <>
          <h2>{ word || 'Urban Dictionary' }</h2>
          <p>{ definition }</p>
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

export default withUrbanDictionary(UrbanDictionary);