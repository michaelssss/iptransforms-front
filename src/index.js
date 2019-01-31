import React from 'react';
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import transform, * as reduces from './reducers'
import * as fetch from './action'
import {createStore , combineReducers ,applyMiddleware } from 'redux'
import App from './App';

let store = createStore(combineReducers(reduces),applyMiddleware(
    thunkMiddleware
))
store.dispatch(fetchPosts())
ReactDOM.render(<App/>, document.getElementById('root'));