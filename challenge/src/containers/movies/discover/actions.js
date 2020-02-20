import ActionTypes from './actionTypes';
import Constants from 'constants';
import MovieService from 'services/movieService';

import {
  finishFetching,
  startFetching,
} from 'containers/app/actions';

export function setRating(rating) {
  return {
    type: ActionTypes.SET_RATING,
    payload: { rating },
  };
}

export function setMovies(movies) {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: { movies },
  };
}

export async function fetchMovies(dispatch, filters) {
  dispatch(startFetching());

  const moviesFetched = await MovieService.discover({
    ...filters,
    sortBy: Constants.MovieService.Filters.PopularityDesc,
  });

  dispatch(finishFetching());
  dispatch(setMovies(moviesFetched));
}
