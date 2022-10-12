import { NavLink} from "react-router-dom";

import React from "react";

const Navbar = () => {
    return (
        <div className="nav">
           
           
            

            
                <NavLink 
                  to="/"
                  exact="true"
                  
                >
                    <button className="btn">Home</button>
                </NavLink>
                
                
               
                <NavLink 
                  to="/posts"
                  exact="true"
                >
                    <button className="btn">Posts</button>
                </NavLink>
                
                <NavLink 
                  to="/new"
                  exact="true"
                >
                    <button className="btn">Add Shoe</button>
                </NavLink>
           
        </div>
    );
};
export default Navbar;