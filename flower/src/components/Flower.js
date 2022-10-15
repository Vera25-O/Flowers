import React from "react";

function Flower({
  id,
  name,
  description,
  image,
  handleDelete,
}) {
  function addToDelete() {
    fetch(`/flowers/${id}`, {
      method: "DELETE",
    })
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

      <button onClick={addToDelete}>Delete</button>
    </div>
  );
}

export default Flower;
