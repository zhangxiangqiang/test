import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'


import reducer from './reducer/index';

let store = createStore(reducer,applyMiddleware(reduxThunk, reduxPromise));

export default store;
