import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser =  () => async dispatch => {
  const res =  await axios.get('https://react-ssr-api.herokuapp.com/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}
