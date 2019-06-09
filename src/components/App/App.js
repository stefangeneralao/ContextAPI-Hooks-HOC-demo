import React from 'react';
import { compose } from 'recompose';
import Counter from 'components/Counter/Counter';
import UrbanDictionary from 'components/UrbanDictionary/UrbanDictionary';
import DateTime from 'components/DateTime/DateTime'
import TodoList from 'components/TodoList/TodoList';
import { provideCounter } from 'contexts/CounterContext';
import { provideDateTime } from 'contexts/DateTimeContext';
import { provideUrbanDictionary } from 'contexts/UrbanDictionaryContext';
import { provideTodos } from 'contexts/TodosContext';
import './App.scss';

const App = () => (
  <div className="app">
    <Counter />
    <UrbanDictionary />
    <DateTime />
    <TodoList />
  </div>
);

export default compose(
  provideUrbanDictionary,
  provideCounter,
  provideDateTime,
  provideTodos,
)(App);
