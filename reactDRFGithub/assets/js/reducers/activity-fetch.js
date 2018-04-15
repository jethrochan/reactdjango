import _ from 'lodash';
import {FETCH_ACTIVITIES, DELETE_ACTIVITY} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
      case DELETE_ACTIVITY: //not needed technically, since page rerouted to fistbump index on delete
        return _.omit(state, action.payload); //from lodash, create new state after syncing id

      case FETCH_ACTIVITIES:
        return action.payload;

      default:
        return state;
    }
}
