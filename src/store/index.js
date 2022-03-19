import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';


const middlewares = [reduxThunk];

if(process.env.NODE_ENV ===  "development"){
  middlewares.push(logger)
}

export const Store = createStore(Reducers, applyMiddleware(...middlewares));
