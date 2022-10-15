import React from "react";
import { useState } from "react";

function Flower({ id, name, description, image, favorite, updateFlowers, handleDelete }) {
  
  

  
  function addToDelete() {
    fetch(`/flowers/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((data) => handleDelete(id))
      
      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{name}</h3>
      <img src={image} alt="flower" />
      <p>
        <strong>{description}</strong>
      </p>
      

      

      <button onClick={addToDelete}>
        Delete
      </button>
    </div>
  );
}

export default Flower;
