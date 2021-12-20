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
import { useSelector } from "react-redux";
import { NewClient } from "./pages/NewClient";

const ClientHome = () => {
  const authReady = useSelector((state) => state.user.AuthIsReady);
  const dispatch = useDispatch();
  useEffect(() => {
    const sub = onAuthStateChanged(fireAuth, (user) => {
      dispatch(authReadyAction(user));
    });
    sub();
  }, []);
  return (
    <>
      {authReady && (
        <BrowserRouter>
          <AppNavBar />
          <div className="container">
            <Switch>
              {/* {user ? <Route path="/" exact component={Dashboard} /> : <Redirect to="/login" />} */}
              <Route path="/" exact component={Dashboard} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/client/add" exact component={NewClient} />
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default ClientHome;
