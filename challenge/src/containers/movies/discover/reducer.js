import ActionTypes from './actionTypes';

const initialState = {
  movies: [],
  rating: 5,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: payload.movies,
      };

    case ActionTypes.SET_RATING:
      return {
        ...state,
        rating: payload.rating,
      };

    default:
      return state;
  }
}
