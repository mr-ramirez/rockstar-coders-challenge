import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  Typography,
} from '@material-ui/core';

import { setSearchResults } from './actions';

import MovieContent from 'containers/movies/common/moviesListDisplayer.jsx';

export default function SearchPage() {
  const dispatch = useDispatch();

  const {
    genresList,
    imageUri,
    results,
  } = useSelector((state) => ({
    genresList: state.app.genres,
    imageUri: state.app.imageUri,
    results: state.search.results,
  }));

  return (
    <React.Fragment>
      <MovieContent
        genresList={genresList}
        imageUri={imageUri}
        movies={results}
      >
        <Typography component="h4" variant="h2" align="center" color="textPrimary" gutterBottom>
          Search Results
        </Typography>

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Button
            variant="contained"
            color="primary" 
            component="span"
            onClick={() => dispatch(setSearchResults([]))}
          >
            Back to discover page
          </Button>
        </Box>
      </MovieContent>
    </React.Fragment>
  );
}
