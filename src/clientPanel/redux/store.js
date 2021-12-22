import { createStore } from "redux";

import { allReducers } from "./reducers/allReducers";
import thunk from "redux-thunk";

export const store = createStore(
    allReducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);