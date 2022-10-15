import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

function Register({setCurrentUser }) {
    const history = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      confirm_password:""
    });
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user);
        
          history.push("/home");
        });
    }
  

  return (
    <div className="login">
    <form className="sign" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}/>

      <input
        type="password"
        name="password"
        placeholder="Confirm Password"
        value={formData.password}
        onChange={handleChange}/>
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Register;
