import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
import types from '../reducers/types';

export function getApi() {
  console.log('in api req');
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

export function* fetchUsers(action) {
  console.log('in fetchUsers');
  try {
    const users = yield call(getApi);
    console.log('in fetch usser after api call ' + users);
    yield put({type: 'GET_USERS_SUCCESS', users: users});
  } catch (error) {
    yield put({type: 'GET_USERS_FAILED', message: error.message});
  }
}

function* userSaga() {
  yield takeLatest('GET_USERS_REQUESTED', fetchUsers);
}

export default userSaga;
