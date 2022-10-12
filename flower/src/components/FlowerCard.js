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

  const filteredFlowers = shoes.filter((flower) => {
    if (selectedOption === "All") {
      return flower;
    }
    return flower.favourite === true && selectedOption === "favourite";
  });

  const displayFlower = filteredFlowers.map((flower) => {
    return (
      <Flower
        key={flower.id}
        favorite={flower.favourite}
        id={flower.id}
        name={flower.name}
        image={flower.image}
        description={flower.description}
        updateFlowers={updateFlowers}
        
      />
    );
  });

  return (
    <div className="shoes-container">
      <select onChange={handleSelect} value={selectedOption} className="select-bar">
        <option value="All">All Shoes</option>
        <option value="favourite">Favorites</option>
      </select>
     
      {displayShoes}
    </div>
  );
}

export default ShoesContainer;
