import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Link to="/client/add" className="btn-success btn">
      New
    </Link>
  );
};

export default Sidebar;
