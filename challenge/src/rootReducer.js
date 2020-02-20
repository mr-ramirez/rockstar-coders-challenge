import { combineReducers } from 'redux';
import AppReducer from 'containers/app/reducer';
import DiscoverReducer from 'containers/movies/discover/reducer';

export default combineReducers({
  app: AppReducer,
  discover: DiscoverReducer,
});
