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

export function setGenresList(genres) {
  return {
    type: ActionTypes.SET_GENRES_LIST,
    payload: { genres },
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
  const genresList = await MovieService.getGenresList();

  const { baseUrl, posterSize } = imageConfiguration;
  dispatch(setImageUri(`${baseUrl}${posterSize}`));
  dispatch(setGenresList(genresList));
}
