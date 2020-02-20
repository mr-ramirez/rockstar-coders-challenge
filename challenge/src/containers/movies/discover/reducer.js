import ActionTypes from './actionTypes';

const initialState = {
  movies: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: payload.movies,
      };

    default:
      return state;
  }
}
