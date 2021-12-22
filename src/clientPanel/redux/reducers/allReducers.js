import { combineReducers } from "redux";
import { LoginReducer, getSingleClient } from "./Reducers";
export const allReducers = combineReducers({
    user: LoginReducer,
    // client: getSingleClient,
});