import React from "react";
import Clients from "../client/Client";
import Sidebar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
