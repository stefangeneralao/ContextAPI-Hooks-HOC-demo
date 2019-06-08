import React from 'react';
import Counter from 'components/Counter/Counter';
import UrbanDictionary from 'components/UrbanDictionary/UrbanDictionary';
import './App.scss';

const App = () => (
  <div className="app">
    <Counter />
    <UrbanDictionary />
  </div>
);

export default App;
