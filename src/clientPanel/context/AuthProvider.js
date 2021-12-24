import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "DISABLED_BALANCE":
      return { ...state, balance: !balance };
    default:
      return { state };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, { balance: false });
  return <AuthContext.Provider value={(state, dispatch)}>{children}</AuthContext.Provider>;
};
