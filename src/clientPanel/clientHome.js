import React, { useEffect } from "react";
import AppNavBar from "./layout/AppNavbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./layout/DashBoard";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authReadyAction } from "./redux/actions/Actions";
import { fireAuth } from "./firebase/firebase";

const ClientHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSub = onAuthStateChanged(fireAuth, (user) => {
      dispatch(authReadyAction(user));
    });
    unSub();
  }, []);
  return (
    <BrowserRouter>
      <AppNavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ClientHome;
