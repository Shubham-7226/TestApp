import * as types from '../reducers/types';

export function getUsers() {
  return {
    type: types.GET_USERS_REQUESTED,
    users: users,
  };
}
