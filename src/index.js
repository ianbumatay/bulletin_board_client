import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import {rootReducer} from './reducers/rootReducer'
import {composeWithDevtools} from 'redux-devtools-extension'

import App from './App'; 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))




ReactDOM.render(
    <App />,
  document.getElementById('root')
);


