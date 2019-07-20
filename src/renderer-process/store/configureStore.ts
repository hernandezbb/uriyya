import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduximmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export function configureStore(): Store<any> {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, reduximmutableStateInvariant())));
}
