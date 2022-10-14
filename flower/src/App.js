import { useState, useEffect } from "react";

import React from "react";

//navbar

import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Posts from './components/Posts';
import NewFlower from './components/NewFlower';
//navbarS
function App() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/flowers")
      .then((response) => response.json())
      .then((flowers) => setFlowers(flowers));
  }, []);

  

  function upDateFlowers(flower) {
    setFlowers([...flowers, flower]);
  }


 
  return (
    
    <div className="app">
      
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/posts" element={<Posts  flowers={flowers} setFlowers={setFlowers}/>} />
         <Route exact path="/new" element={<NewFlower updateFlowers={upDateFlowers}/>} />
      </Routes>
   
     
   </div>
  );
}

export default App;
