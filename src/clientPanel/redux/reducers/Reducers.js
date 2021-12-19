import { ActionTypes } from "../Action-types/Action-types";

const initialState = {
    user: {},
    AuthIsReady: false,
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_LOGGED_IN:
            return { user: action.payload };
        default:
            return { state };
    }
};

export const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_SIGNED_UP:
            return { user: action.payload };
        default:
            return { state };
    }
};

export const signOutReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.IS_LOGGED_OUT:
            return { state };
        default:
            return { state };
    }
};

export const authIsReadyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_IS_READY:
            return {...state, user: action.payload, AuthIsReady: true };
        default:
            return { state };
    }
};