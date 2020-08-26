import React, { Fragment, useState, useContext } from "react";
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
  DeleteEntry,
} from "../Food-Query";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./journal.css";
import moment from "moment";
import { ItemsContext } from "./home";
import JournalItem from "./journalItem";
function Journal(props) {
  const [count, setCount] = useContext(ItemsContext);

  const { loading, error, data } = useQuery(EntryQuery, {
    variables: { date: count.format("MM-DD-YYYY") },
    pollInterval: 0.0001,
    context: {
      headers: {
        authentication: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  if (loading) return "Loading...";
  if (error) {
    return `Error! ${error.message}`;
  }

  const breakfast = data.getEntries.filter(
    (food) =>
      food.food_en.type === "breakfast" &&
      food.date === count.format("MM-DD-YYYY")
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
      <Row className="border-col align-items-center" style={{ height: "50px" }}>
        <Col className="" style={{}}></Col>
        <Col className="" style={{}}>
          carbohydrates
        </Col>
        <Col className="" style={{}}>
          fats
        </Col>
        <Col className="" style={{}}>
          proteins
        </Col>
        <Col className="" style={{}}>
          calories
        </Col>
        <Col className="" style={{}}></Col>
      </Row>
      <Row
        className="text-white border-col align-items-center"
        style={{ backgroundColor: "grey", height: "50px" }}
      >
        <Col>total</Col>
        <Col>{total_carbs}</Col>
        <Col>{total_fat}</Col>
        <Col>{total_protein}</Col>
        <Col>{total_calories}</Col>
        <Col></Col>
      </Row>
      <Row
        className="text-white border-col align-items-center"
        style={{ backgroundColor: "blue", height: "50px" }}
      >
        <Col>breakfast</Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>{breakfast_sum}</Col>
        <Col></Col>
      </Row>

      {breakfast.map((food) => (
        <JournalItem
          key={food.food_en.id}
          Food={food.food_en}
          count={food.quantity}
          date={count.format("MM-DD-YYYY")}
        />
      ))}
      <Row
        className="text-white border-col align-items-center"
        style={{ backgroundColor: "blue", height: "50px" }}
      >
        <Col>lunch</Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>{lunch_sum}</Col>
        <Col></Col>
      </Row>

      {lunch.map((food) => (
        <JournalItem
          key={food.food_en.id}
          Food={food.food_en}
          count={food.quantity}
          date={count.format("MM-DD-YYYY")}
        />
      ))}
      <Row
        className="text-white border-col align-items-center"
        style={{ backgroundColor: "blue", height: "50px" }}
      >
        <Col>dinner</Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>{dinner_sum}</Col>
        <Col></Col>
      </Row>

      {dinner.map((food) => (
        <JournalItem
          key={food.food_en.id}
          Food={food.food_en}
          count={food.quantity}
          date={count.format("MM-DD-YYYY")}
        />
      ))}
    </Fragment>
  );
}

export default Journal;
