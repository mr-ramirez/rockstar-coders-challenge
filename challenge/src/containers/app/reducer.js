import ActionTypes from './actionTypes';

const initialState = {
  genres: [],
  imageUri: '',
  loading: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FINISH_FETCHING:
      return {
        ...state,
        loading: false,
      };

    case ActionTypes.SET_IMAGE_URI:
      return {
        ...state,
        imageUri: payload.imageUri,
      };

    case ActionTypes.SET_GENRES_LIST:
      return {
        ...state,
        genres: payload.genres,
      };

    case ActionTypes.START_FETCHING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
    }
}
