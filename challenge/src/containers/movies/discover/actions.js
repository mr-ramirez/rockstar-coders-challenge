import ActionTypes from './actionTypes';
import MovieService from 'services/movieService';

import {
  finishFetching,
  startFetching,
} from 'containers/app/actions';

export function setMovies(movies) {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: { movies },
  };
}

export async function fetchMovies(dispatch) {
  dispatch(startFetching());
  const moviesFetched = await MovieService.discover(
    '/discover/movie',
    { sort_by: 'popularity.desc' },
  );

  dispatch(finishFetching());
  dispatch(setMovies(moviesFetched));
}
