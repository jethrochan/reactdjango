import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import ReducerAllActivities from './activity-fetch';
import ActivityExpandedReducer from './reducer-expanded-activity';

const allReducers = combineReducers({
  activities: ReducerAllActivities,
  activity: ActivityExpandedReducer,
  form: formReducer, /*use this key pair naming verbatim for redux forms to work*/
}); //combines all reducers imported and maps them into a className that will be used throughout the application

export default allReducers;
