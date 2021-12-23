import { ActionTypes } from "../Action-types/Action-types";

const initialState = {
    user: null,
    AuthIsReady: true,
    client: [],
    selectedClient: {},
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.IS_LOGGED_IN:
            return { user: action.payload, AuthIsReady: true };
        case ActionTypes.IS_SIGNED_UP:
            return { user: action.payload, AuthIsReady: true };
        case ActionTypes.IS_LOGGED_OUT:
            return { user: action.payload, AuthIsReady: true };
        case ActionTypes.AUTH_IS_READY:
            return { user: action.payload, AuthIsReady: true };
        case ActionTypes.ALL_CLIENTS:
            return {...state, client: action.payload, AuthIsReady: true };
        case ActionTypes.SELECTED_CLIENT:
            return {...state, selectedClient: action.payload, AuthIsReady: true };
        case ActionTypes.UPDATED_BALANCE:
            return {...state, AuthIsReady: true };
        default:
            return { state };
    }
};

// export const getSingleClient = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionTypes.SELECTED_CLIENT:
//             return {...state, selectedClient: action.payload, AuthIsReady: true };
//         default:
//             return { state };
//     }
// };