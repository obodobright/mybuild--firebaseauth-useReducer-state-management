import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";

const Sidebar = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Link to="/client/add" className="btn-success btn">
      <div style={styles}>
        <MdOutlineAdd />
        <span>New</span>
      </div>
    </Link>
  );
};

export default Sidebar;
