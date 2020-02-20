import ActionTypes from './actionTypes';
import MovieService from 'services/movieService';

export function finishFetching() {
  return {
    type: ActionTypes.FINISH_FETCHING,
  };
}

export function setImageUri(imageUri) {
  return {
    type: ActionTypes.SET_IMAGE_URI,
    payload: { imageUri },
  };
}

export function startFetching() {
  return {
    type: ActionTypes.START_FETCHING,
  };
}

export async function fetchConfiguration(dispatch) {
  dispatch(startFetching());
  const imageConfiguration = await MovieService.getImagesConfiguration();

  const { baseUrl, posterSize } = imageConfiguration;
  dispatch(setImageUri(`${baseUrl}${posterSize}`));
}
