import * as type from './types';

const initial_state = {
  users: [
    // {id: 1, name: 'John'},
    // {id: 2, name: 'Jane'},
  ],
  message: '',
};

export default function (state = initial_state, action) {
  // console.log('this is' + action.type, action.payload);
  switch (action.type) {
    case 'GET_USERS_REQUESTED':
      console.log('in get useer req');
    // return {
    //   ...state,
    //   // users: action.payload,
    // };
    case 'GET_USERS_SUCCESS':
      console.log('in user sucess', action.users);
      return {
        ...state,
        users: action.users,
      };
    case 'GET_USERS_FAILED':
      console.log('in user fail' + action.message);
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
}
