import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import { userReducer } from "./AdminRedux/user.reducer";

let rootReducer = combineReducers({ userManager: userReducer });
let composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
