import { combineReducers } from "redux";
import { LoginReducer } from "./Reducers";
export const allReducers = combineReducers({
    user: LoginReducer,
});