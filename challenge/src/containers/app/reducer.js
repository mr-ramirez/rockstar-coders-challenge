import ActionTypes from './actionTypes';

const initialState = {
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

    case ActionTypes.START_FETCHING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
    }
}
