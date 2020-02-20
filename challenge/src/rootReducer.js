import { combineReducers } from 'redux';
import AppReducer from 'containers/app/reducer';

export default combineReducers({
  app: AppReducer,
});
