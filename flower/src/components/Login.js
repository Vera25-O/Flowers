import { useState } from "react";
import React, { Component }  from 'react';

function Login({ onLogin }) {
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
      e.preventDefault();
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((user) => {
          onLogin(user);
          // after logging the user in, redirect to the home page!
          history.push("/home");
        });
    }
  

  return (
    <div className="login">
    <form className="new-flower" onSubmit={onSubmission}>
      <input
        value={newData.name}
        name="name"
        placeholder="Username"
        onChange={doChange}
      />
      
      <input
        value={newData.image}
        name="image"
        placeholder="Password"
        onChange={doChange}
      />
      <input type="submit" value="Login" />
    </form>
    </div>
  );
}

export default Login;
