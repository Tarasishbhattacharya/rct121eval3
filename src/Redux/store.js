import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./rootreducer";
import thunk from "redux-thunk";


export const Store=createStore(rootReducer,applyMiddleware(thunk))