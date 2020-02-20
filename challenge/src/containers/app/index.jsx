import React, { useEffect } from 'react';

import { CssBaseline } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { fetchConfiguration } from './actions';
import { search } from 'containers/movies/search/actions';

import Navbar from 'components/Navbar/index.jsx';
import DiscoverPage from 'containers/movies/discover/index.jsx';
import SearchPage from 'containers/movies/search/index.jsx';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchConfiguration(dispatch);
  }, []);

  const { loading, results } = useSelector((state) => ({
    loading: state.app.loading,
    results: state.search.results,
  }));

  return (
    <React.Fragment>
      <CssBaseline />

      <Navbar
        search={(value) => search(dispatch, value)}
        showProgressBar={loading}
      />

      {
        results.length > 0
          ? <SearchPage />
          : <DiscoverPage />
      }
    </React.Fragment>
  )
}
