import { useState, useEffect } from "react";

import React from "react";

//navbar

import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import NewFlower from "./components/NewFlower";
import Login from "./components/Login";
import Register from "./components/Register";
//navbarS
function App() {
  const navigate = useNavigate()
  const[currentUser, setCurrentUser] = useState(null)
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/flowers")
      .then((response) => response.json())
      .then((flowers) => setFlowers(flowers));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  function logoutUser(){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
        navigate('/login')
      }
    });
  }
  function upDateFlowers(flower) {
    setFlowers([...flowers, flower]);
  }

  return (
    <div className="app">
      <Navbar currentUser={currentUser} logoutUser={logoutUser}/>
      <Routes>
      <Route exact path="/register" element={<Register setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/posts"
          element={<Posts flowers={flowers} setFlowers={setFlowers} />}
        />
        <Route
          exact
          path="/new"
          element={<NewFlower updateFlowers={upDateFlowers} />}
        />
      </Routes>
    </div>
  );
}

export default App;