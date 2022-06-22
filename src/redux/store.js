import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import personsReducer from './person';

const rootReducer = combineReducers({
  person: personsReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
