import { combineReducers } from "redux";
import { Loginreducer } from "./auth/reducer";
import { userReducer } from "./app/reducer";


export const rootReducer=combineReducers({
    Loginreducer,
    userReducer
})