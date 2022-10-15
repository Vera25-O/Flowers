import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { Component }  from 'react';

function Login({ setCurrentUser }) {
    const history = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      console.log(JSON.stringify(formData))
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => {
         if(r.ok){
          r.json()
          .then((user) => {
            setCurrentUser(user);
            history("/posts");
            alert('Login successful')
          });
         }
         else{
          alert('Login failed')
         }
        })
        
        
    }
  

  return (
    <div className="login">
    <form className="sign" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default Login;