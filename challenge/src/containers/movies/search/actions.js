import ActionTypes from './actionTypes';
import MovieService from 'services/movieService';

import {
  finishFetching,
  startFetching,
} from 'containers/app/actions';

export function setSearchResults(results) {
  return {
    type: ActionTypes.SET_SEARCH_RESULTS,
    payload: { results },
  };
}

export async function search(dispatch, value) {
  dispatch(startFetching());
  const results = await MovieService.search({ value });

  dispatch(finishFetching());
  dispatch(setSearchResults(results));
}
