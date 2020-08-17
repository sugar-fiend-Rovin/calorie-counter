import React from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  EntryQuery,
  EntryQueryS,
  FoodQueryS,
  FoodQuery,
  AddFood,
  AddEntry,
  AddQuantity,
  MinusQuantity,
} from "../Food-Query";

export default function FoodItem({
  Food: { food_name, type, calories, carbohydrates, proteins, fats },
}) {
  const [createEntry, { data }] = useMutation(AddEntry, {
    refetchQueries: ["EntryQuery"],
  });

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
          createEntry({
            variables: { food_entry: food_name, date: "43", quantity: 1 },
          })
        }
        className="btn btn-primary btn-lg active"
      >
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
