import React from "react";

const Pizza = ({ pizzaObject }) => {
  // if (pizzaObject.soldOut) return <p>sold out</p>;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt="Pizza Spinaci" />
      <div>
        <h1>{pizzaObject.name}</h1>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
