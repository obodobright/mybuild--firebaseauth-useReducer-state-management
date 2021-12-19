import { combineReducers } from "redux";
import { LoginReducer, SignUpReducer, signOutReducer, authIsReadyReducer } from "./Reducers";
export const allReducers = combineReducers({
    isLoggedIn: LoginReducer,
    isSignedUp: SignUpReducer,
    isLoggedOut: signOutReducer,
    authReady: authIsReadyReducer,
});