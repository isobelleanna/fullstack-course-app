import React from "react";
import "./Card.scss";

const Card = ({ title, category, instructor, price }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <h2 className="card__category">{category}</h2>
      <h3 className="card__instructor">{instructor}</h3>
      <p className="card__price">{price}</p>
    </div>
  );
};

export default Card;
