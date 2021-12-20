import { ActionTypes } from "../Action-types/Action-types";
export const loginAction = (user) => {
    return {
        type: ActionTypes.IS_LOGGED_IN,
        payload: user,
    };
};

export const signUpAction = (user) => {
    return {
        type: ActionTypes.IS_SIGNED_UP,
        payload: user,
    };
};
export const logOutAction = () => {
    return {
        type: ActionTypes.IS_LOGGED_OUT,
        payload: null,
    };
};
export const authReadyAction = (user) => {
    return {
        type: ActionTypes.AUTH_IS_READY,
        payload: user,
    };
};
export const allClient = (client) => {
    return {
        type: ActionTypes.ALL_CLIENTS,
        payload: client,
    };
};