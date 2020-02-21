import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import { fetchMovies, setRating } from './actions';

import MovieContent from 'containers/movies/common/moviesListDisplayer.jsx';
import RatingControl from 'components/RatingControl/index.jsx';

export default function DiscoverPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies(dispatch, {});
  }, []);

  const {
    genresList,
    imageUri,
    movies,
    rating,
  } = useSelector((state) => ({
    genresList: state.app.genres,
    imageUri: state.app.imageUri,
    movies: state.discover.movies,
    rating: state.discover.rating,
  }));

  return (
    <React.Fragment>
      <MovieContent
        genresList={genresList}
        imageUri={imageUri}
        movies={movies}
      >
        <Typography component="h4" variant="h2" align="center" color="textPrimary" gutterBottom>
          Discover
        </Typography>

        <RatingControl
          rating={rating}
          setRating={(newRating) => {
            dispatch(setRating(newRating));

            if (rating !== newRating) {
              fetchMovies(dispatch, { rating: newRating });
            }
          }}
        />
      </MovieContent>
    </React.Fragment>
  )
}

