// Startup point for client side application

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducers, preloadedState, applyMiddleware(thunk) );

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
