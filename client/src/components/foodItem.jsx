import React from "react";
// import { Link } from "react-router-dom";

export default function FoodItem({
  Food: { food_name, type, calories, carbohydrates, proteins, fats },
}) {
  return (
    <div className="row">
      <div className="col-sm-2 ">{food_name}</div>
      <div className="col-sm-2 ">{carbohydrates}</div>
      <div className="col-sm-2 ">{fats}</div>
      <div className="col-sm-2 ">{proteins}</div>
      <div className="col-sm-2 ">{calories}</div>
    </div>
  );
}
