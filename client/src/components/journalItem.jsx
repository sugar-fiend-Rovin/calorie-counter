import React from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  EntryQuery,
  FoodQueryS,
  EntryQueryS,
  FoodQuery,
  AddFood,
  AddEntry,
  AddQuantity,
  MinusQuantity,
} from "../Food-Query";

export default function JournalItem({
  Food: { food_name, type, calories, carbohydrates, proteins, fats },
  count,
}) {
  const [addQuantity, { data }] = useMutation(AddQuantity, {
    refetchQueries: ["EntryQuery"],
  });
  const [minusQuantity, { data2 }] = useMutation(MinusQuantity, {
    refetchQueries: ["EntryQuery"],
  });

  return (
    <div className="row">
      <div className="col-sm-1 ">{food_name}</div>
      <div className="col-sm-1 ">{carbohydrates}</div>
      <div className="col-sm-1 ">{fats}</div>
      <div className="col-sm-1 ">{proteins}</div>
      <div className="col-sm-1 ">{calories}</div>
      <div className="col-sm-1 ">{count}</div>
      <button
        type="button"
        onClick={() => minusQuantity({ variables: { food_entry: food_name } })}
        className="btn btn-primary btn-lg active"
      >
        {" "}
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button
        type="button"
        onClick={() => addQuantity({ variables: { food_entry: food_name } })}
        className="btn btn-primary btn-lg active"
      >
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
