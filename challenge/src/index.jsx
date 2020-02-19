import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import 'babel-polyfill';

import DiscoverPage from 'containers/movies/discover/index.jsx';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
    <DiscoverPage />
  </div>,
  rootElement,
);
