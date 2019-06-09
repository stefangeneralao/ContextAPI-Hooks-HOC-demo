import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App/App';
import * as serviceWorker from './serviceWorker';
import { UrbanDictionaryProvider } from './contexts/UrbanDictionaryContext';

ReactDOM.render(
  <UrbanDictionaryProvider>
    <App />
  </UrbanDictionaryProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
