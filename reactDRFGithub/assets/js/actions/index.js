import axios from 'axios';

export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';
export const ACTIVITY_SELECTED = 'ACTIVITY_SELECTED';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export const fetchActivity = (id) => {
    console.log("You Called fetchActivity Action");
    const url = `/activity/${id}`;
    const request = axios.get(url);

    return {
        type: FETCH_ACTIVITY,
        payload: request
    }//return
};

export const fetchActivities = () => {
    console.log("You Called fetchActivities Action");
    const url = `/activity/`;
    const request = axios.get(url);

    return {
        type: FETCH_ACTIVITIES,
        payload: request
    }//return
};

export const createActivity = (values, callback) => {
  console.log("Created Action Called");
  const url = `/activity/`;
  const request = axios.post(url, values).then(() => callback());

  return {
    type: CREATE_ACTIVITY,
    payload: request
  }//return
};

export const deleteActivity = (id, callback) => {
  const url = `/activity/${id}`;
  const request = axios.delete(url).then(() => callback());

  return {
    type: DELETE_ACTIVITY,
    payload: id
  }//return
}
