import React from "react";
import "./Card.scss";

const Card = ({ title, price }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__price">£{price}</p>
    </div>
  );
};

export default Card;
