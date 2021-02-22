import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import {boardReducer} from './reducers/boardReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'; 

const store = createStore(boardReducer,
  composeWithDevTools(applyMiddleware(thunk))
  )




ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);


