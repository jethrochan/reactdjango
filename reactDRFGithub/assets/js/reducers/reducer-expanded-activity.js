import {FETCH_ACTIVITY} from '../actions';

export default function (state = null, action) {
    switch (action.type) {
      case FETCH_ACTIVITY:
        console.log(action.payload.data);
        return action.payload;
      default:
        return state;
    }
}
