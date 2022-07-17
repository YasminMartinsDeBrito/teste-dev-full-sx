import React from "react";

const Pokemon = ({ id, name, image, type }) => {
  return (
    <div className="thumb-container">
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img src="../../assets/img/pokemonpadrao.jpeg" alt={name} />
      )}
      <div className="number">
        <small>#0{id}</small>
      </div>
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default Pokemon;
