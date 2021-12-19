import { createContext, useReducer } from "react";

export const AuthContext = createContext();

// authReducer is a function used to control the state of our app
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };
    case "SIGNUP":
      return { ...state, user: null };
    default:
      return state;
  }
};

// dispatch will be responsible for the update of the userstate
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  console.log("AuthContext state", state);
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
