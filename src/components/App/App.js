import React from 'react';
import { compose } from 'recompose';
import Counter from 'components/Counter/Counter';
import UrbanDictionary from 'components/UrbanDictionary/UrbanDictionary';
import DateTime from 'components/DateTime/DateTime'
import { provideCounter } from 'contexts/CounterContext';
import { provideDateTime } from 'contexts/DateTimeContext';
import './App.scss';
import { provideUrbanDictionary } from 'contexts/UrbanDictionaryContext';

const App = () => (
  <div className="app">
    <Counter />
    <UrbanDictionary />
    <DateTime />
  </div>
);

export default compose(
  provideUrbanDictionary,
  provideCounter,
  provideDateTime,
)(App);
