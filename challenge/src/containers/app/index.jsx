import React, { useEffect } from 'react';

import { CssBaseline } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { fetchConfiguration } from './actions';

import Navbar from 'components/Navbar/index.jsx';
import DiscoverPage from 'containers/movies/discover/index.jsx';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchConfiguration(dispatch);
  }, []);

  const loading = useSelector((state) => state.app.loading);

  return (
    <React.Fragment>
      <CssBaseline />

      <Navbar showProgressBar={loading} />

      <DiscoverPage />
    </React.Fragment>
  )
}
