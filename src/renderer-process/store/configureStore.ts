import { Store, createStore, applyMiddleware } from "redux";
import reduximmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configureStore(): Store<any> {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(reduximmutableStateInvariant())));
}
