import React, { useState } from "react";
import Flower  from  "./Flower";

function FlowerCard({ flowers, setFlowers }) {
  const [selectedOption, setSelectedOption] = useState("All");

  function handleSelect(e) {
    setSelectedOption(e.target.value);
  }

  

  function updateFlowers(data) {
    const updatedFlowers = flowers.map((flower) => {
      if (flower.id === data.id) {
        return data;
      }
      return flower;
    });
    setFlowers(updatedFlowers);
  }

  function handleDelete(id) {

    const deleted =  flowers.filter((flower) =>{
          return flower.id !== id
      })
      setFlowers(deleted)
    }
  

  const filteredFlowers = flowers.filter((flower) => {
    if (selectedOption === "All") {
      return flower;
    }
    return flower.delete === true && selectedOption === "delete";
    
  });

  const displayFlowers = filteredFlowers.map((flower) => {
    return (
      <Flower
        key={flower.id}
        favorite={flower.favourite}
        id={flower.id}
        name={flower.name}
        image={flower.image}
        description={flower.description}
        updateFlowers={updateFlowers}
        handleDelete={handleDelete}
        
      />
    );
  });

  return (
    <div className="flowers-card">
      <select onChange={handleSelect} value={selectedOption} className="select-bar">
        <option value="All">All Flowers</option>
      </select>
     
      {displayFlowers}
    </div>
  );
}

export default FlowerCard;
