import React from 'react';
import Counter from 'components/Counter/Counter';
import UrbanDictionary from 'components/UrbanDictionary/UrbanDictionary';
import { provideCounter } from 'contexts/CounterContext';
import './App.scss';

const App = () => (
  <div className="app">
    <Counter />
    <UrbanDictionary />
  </div>
);

export default provideCounter(App);
