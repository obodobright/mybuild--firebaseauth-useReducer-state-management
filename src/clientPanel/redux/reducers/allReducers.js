import { combineReducers } from "redux";
import { LoginReducer, ClientReducer } from "./Reducers";
export const allReducers = combineReducers({
    user: LoginReducer,
    client: ClientReducer,
});