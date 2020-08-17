import React, { Fragment, useState } from "react";
import { graphql } from "@apollo/client/react/hoc";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import { useQuery } from "@apollo/client";
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

import JournalItem from "./journalItem";
function Journal(props) {
  const { loading, error, data } = useQuery(EntryQuery, {
    pollInterval: 0.0001,
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const breakfast = data.getEntries.filter(
    (food) => food.food_en.type === "breakfast"
  );
  const breakfast_sum = breakfast.reduce(function (result, item) {
    return result + item.food_en.calories * item.quantity;
  }, 0);
  const lunch = data.getEntries.filter((food) => food.food_en.type === "lunch");
  const lunch_sum = lunch.reduce(function (result, item) {
    return result + item.food_en.calories * item.quantity;
  }, 0);
  const dinner = data.getEntries.filter(
    (food) => food.food_en.type === "dinner"
  );
  const dinner_sum = dinner.reduce(function (result, item) {
    return result + item.food_en.calories * item.quantity;
  }, 0);
  const total_calories = data.getEntries.reduce(function (result, item) {
    return result + item.food_en.calories * item.quantity;
  }, 0);
  const total_carbs = data.getEntries.reduce(function (result, item) {
    return result + item.food_en.carbohydrates * item.quantity;
  }, 0);
  const total_fat = data.getEntries.reduce(function (result, item) {
    return result + item.food_en.fats * item.quantity;
  }, 0);
  const total_protein = data.getEntries.reduce(function (result, item) {
    return result + item.food_en.proteins * item.quantity;
  }, 0);
  return (
    <Fragment>
      {/* <div className="row">
                <div className="col-sm-2 ">total</div>
                <div className="col-sm-2 ">{sum(carbohydrates)}</div>
                <div className="col-sm-2 ">{sum(fats)}</div>
                <div className="col-sm-2 ">{sum(proteins)}</div>
                <div className="col-sm-2 ">{sum(calories)}</div>
              </div> */}
      <div className="row">
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 ">carbohydrates</div>
        <div className="col-sm-2 ">fats</div>
        <div className="col-sm-2 ">proteins</div>
        <div className="col-sm-2 ">calories</div>
      </div>
      <div className="row text-white" style={{ backgroundColor: "grey" }}>
        <div className="col-sm-2">total</div>
        <div className="col-sm-2 ">{total_carbs}</div>
        <div className="col-sm-2 ">{total_fat}</div>
        <div className="col-sm-2 ">{total_protein}</div>
        <div className="col-sm-2">{total_calories}</div>
      </div>
      <div className="row text-white" style={{ backgroundColor: "blue" }}>
        <div className="col-sm-2">breakfast</div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2">{breakfast_sum}</div>
      </div>

      {breakfast.map((food) => (
        <JournalItem
          key={food.food_en.id}
          Food={food.food_en}
          count={food.quantity}
        />
      ))}
      <div className="row text-white" style={{ backgroundColor: "blue" }}>
        <div className="col-sm-2">lunch</div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2">{lunch_sum}</div>
      </div>

      {lunch.map((food) => (
        <JournalItem
          key={food.food_en.id}
          Food={food.food_en}
          count={food.quantity}
        />
      ))}
      <div className="row text-white" style={{ backgroundColor: "blue" }}>
        <div className="col-sm-2">dinner</div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2 "></div>
        <div className="col-sm-2">{dinner_sum}</div>
      </div>

      {dinner.map((food) => (
        <JournalItem
          key={food.food_en.id}
          Food={food.food_en}
          count={food.quantity}
        />
      ))}
    </Fragment>
  );
}

export default Journal;
