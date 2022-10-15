import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" exact="true">
        <button className="btn">Home</button>
      </NavLink>

      <NavLink to="/login" exact="true">
        <button className="btn">Login</button>
      </NavLink>

      <NavLink to="/register" exact="true">
        <button className="btn">Register</button>
      </NavLink>

      <NavLink to="/posts" exact="true">
        <button className="btn">Posts</button>
      </NavLink> 

       <NavLink to="/new" exact="true">
        <button className="btn">Add Flower</button>
      </NavLink>
    </div>
  );
};
export default Navbar;
