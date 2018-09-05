import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Link className="btn btn-success btn-block" to="/clients/add">
      <i className="fas fa-plus" /> New
    </Link>
  );
};

export default Sidebar;
