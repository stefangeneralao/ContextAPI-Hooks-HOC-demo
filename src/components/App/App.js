import React from 'react';
import { compose } from 'recompose';
import Counter from 'components/Counter/Counter';
import UrbanDictionary from 'components/UrbanDictionary/UrbanDictionary';
import { provideCounter } from 'contexts/CounterContext';
import './App.scss';
import { provideUrbanDictionary } from 'contexts/UrbanDictionaryContext';

const App = () => (
  <div className="app">
    <Counter />
    <UrbanDictionary />
  </div>
);

export default compose(
  provideUrbanDictionary,
  provideCounter,
)(App);
