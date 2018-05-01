import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import {browserHistory, hashHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'

const routeMiddleware = routerMiddleware(hashHistory);
const logger = createLogger();

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

export default createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, promise, logger, routeMiddleware)
);