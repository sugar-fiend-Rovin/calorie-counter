import React from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import {
  EntryQuery,
  FoodQueryS,
  FoodQuery,
  AddFood,
  AddEntry,
} from "../Food-Query";

export default function FoodItem({
  Food: { food_name, type, calories, carbohydrates, proteins, fats },
}) {
  const [addEntry, { data }] = useMutation(AddEntry);

  return (
    <div className="row">
      <div className="col-sm-2 ">{food_name}</div>
      <div className="col-sm-2 ">{carbohydrates}</div>
      <div className="col-sm-2 ">{fats}</div>
      <div className="col-sm-2 ">{proteins}</div>
      <div className="col-sm-2 ">{calories}</div>
      <button
        type="button"
        onClick={() =>
          addEntry({ variables: { food_entry: food_name, date: 43 } })
        }
        className="btn btn-primary btn-lg active"
      ></button>
    </div>
  );
}
