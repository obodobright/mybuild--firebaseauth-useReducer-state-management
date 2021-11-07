import "../../App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { Create } from "../pages/create/create";
import Dashboard from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/login";
import { Project } from "../pages/project/project";
import { Signup } from "../pages/signup/signup";

const Root = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="body-container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route path="/create" exact component={Create} />
            <Route path="/project" exact component={Project} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Root;
