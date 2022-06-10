// import {applyMiddleware, compose} from 'redux';
// import {legacy_createStore as createStore} from 'redux';
// import rootReducer from './reducers/index';
// // import rootSaga from './sagas/index';
// import userSaga from './sagas/userSaga';
// import createSagaMiddleware from 'redux-saga';

// // console.log(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(userSaga);
// export default store;

import {applyMiddleware, compose} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import userSaga from './sagas/userSaga';
import createSagaMiddleware from 'redux-saga';

// console.log(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
