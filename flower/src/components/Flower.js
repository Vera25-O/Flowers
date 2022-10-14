import React from "react";
import { useState } from "react";

function Flower({ id, name, description, image, favorite, updateFlowers }) {
  const [likes, setLikes] = useState(0);

  function coutLikes() {
    setLikes(likes + 1);
  }

  function addToFavourite() {
    fetch(`http://127.0.0.1:3000/flowers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify({ favourite: !favorite }),
    })
      .then((response) => response.json())
      .then((data) => updateFlowers(data))

      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{name}</h3>
      <img src={image} alt="flower" />
      <p>
        <strong>{description}</strong>
      </p>
      <button onClick={coutLikes} className="like-button">
        Likes {likes} ♥
      </button>

      <button onClick={addToFavourite}>
        {favorite ? "Remove Favourite" : "Add Favourite"}
      </button>
    </div>
  );
}

export default Flower;
