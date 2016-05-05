import 'babel-polyfill';
import React from 'react';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom';
import Main from './components/layouts/Main';
import { Router, Route, Link, browserHistory } from 'react-router'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import * as Pages from './pages'

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
  	thunkMiddleware,
    loggerMiddleware
  )
);

function checkLogin(nextState, replace) {
  if(!store.getState().Users.loggedIn) {
    replace({
      pathname: "login"
    })
  }
}

render(
	<Provider store={store}>
		<Router history={browserHistory}>
		    <Route path="/" component={Main}>
		    	<Route path="login" component={Pages.Login}/>
		    	<Route path="notes" component={Pages.Notes}/>
	    	</Route>
	  	</Router>
	</Provider>,
	document.getElementById('root')
);