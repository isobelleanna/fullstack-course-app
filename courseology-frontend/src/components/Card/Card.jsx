import React from "react";

const Card = ({ title, category, instructor, price }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{category}</h2>
      <h3>{instructor}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Card;
