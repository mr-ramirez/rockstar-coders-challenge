import ActionTypes from './actionTypes';

const initialState = {
  results: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        results: payload.results,
      };

    default:
      return state;
  }
};
