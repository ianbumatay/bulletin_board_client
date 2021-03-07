import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import {boardReducer} from './reducers/boardReducer'
import { composeWithDevTools } from 'redux-devtools-extension' 

import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'; 
import './index.css'

const store = createStore(boardReducer,
  composeWithDevTools(applyMiddleware(thunk))
  )




ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


