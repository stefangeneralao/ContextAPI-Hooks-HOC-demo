import React from 'react';
import { UrbanDictionaryConsumer } from 'contexts/UrbanDictionaryContext';

const withUrbanDictionary = Component => (
  props => (
    <UrbanDictionaryConsumer>
      { contexts => (
        <Component { ...props } { ...contexts } />
      ) }
    </UrbanDictionaryConsumer>
  )
);

export default withUrbanDictionary;