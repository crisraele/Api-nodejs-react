import * as types from './actionTypes';


export const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});


//export const loadUsers = () => {}
