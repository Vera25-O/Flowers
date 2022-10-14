import { useState } from "react";
import React, { Component }  from 'react';

function Login ({ updateFlowers }) {
    const [newData, setNewData] = useState({
        username: "",
        password_digest: ""
      });
  function onSubmission(e) {
    e.preventDefault();
    if (
      newData.username === "" ||
      newData.password_digest === "" 
    ) {
      alert("Please input all fields");
    } else {
      fetch("http://127.0.0.1:3000/flowers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          updateFlowers(data);
          setNewData({ ...newData, name: "", description: "", image: "" });
        });
    }
  }

  function doChange(e) {
    setNewData({ ...newData, [e.target.name]: e.target.value });
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