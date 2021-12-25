import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "DISABLED_BALANCE_EDIT":
      return { ...state, balance: !state.balance };
    case "DISABLED_BALANCE_ADD":
      return { ...state, disabledAdd: !state.disabledAdd };
    case "ENABLE_REGISTRATION":
      return { ...state, enableReg: !state.enableReg };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    balance: false,
    disabledAdd: false,
    enableReg: false,
  });
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
