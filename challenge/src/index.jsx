import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'typeface-roboto';
import 'babel-polyfill';

import Store from './store';

import App from 'containers/app/index.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement,
);
