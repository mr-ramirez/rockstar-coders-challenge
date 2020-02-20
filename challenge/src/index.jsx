import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'babel-polyfill';

import App from 'containers/app/index.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement,
);
