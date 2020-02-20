import { combineReducers } from 'redux';
import AppReducer from 'containers/app/reducer';
import DiscoverReducer from 'containers/movies/discover/reducer';
import SearchReducer from 'containers/movies/search/reducer';

export default combineReducers({
  app: AppReducer,
  discover: DiscoverReducer,
  search: SearchReducer,
});
