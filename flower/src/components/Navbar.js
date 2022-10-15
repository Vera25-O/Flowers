import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = ({currentUser,logoutUser}) => {
  return (
    <div className="nav">
     

      {currentUser?<NavLink to="/posts" exact="true"> 
      <button className="btn">Posts</button>
      </NavLink> :
      <NavLink to="/login" exact="true">
        <button className="btn">Login</button>
      </NavLink> }

      

      {!currentUser? <NavLink to="/register" exact="true">
        <button className="btn">Register</button>
      </NavLink>:
       <NavLink to="/new" exact="true">
        <button className="btn">Add Flower</button>
      </NavLink>}

      {currentUser?
       <NavLink onClick={logoutUser} exact="true">
       <button className="btn">Sign Out</button>
     </NavLink> 
     :
     <NavLink to="/" exact="true">
       <button className="btn">Home</button>
     </NavLink>}
    </div>
  );
};
export default Navbar;