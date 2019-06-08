import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App/App';
import { CounterProvider } from 'contexts/CounterContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
