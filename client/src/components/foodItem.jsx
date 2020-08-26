import React from "react";
// import { Link } from "react-router-dom";
import { useMutation, useContext } from "@apollo/client";
import moment from "moment";
import { ItemsContext } from "./../App";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./foodItem.css";
import { AddEntry } from "../Food-Query";

export default function FoodItem({
  Food: { food_name, type, calories, carbohydrates, proteins, fats },
  date,
}) {
  const [createEntry, { data }] = useMutation(AddEntry, {
    refetchQueries: ["EntryQuery"],
  });

  return (
    <Row className=" align-items-center border-col " style={{ height: "50px" }}>
      <Col>{food_name}</Col>
      <Col>{carbohydrates}</Col>
      <Col>{fats}</Col>
      <Col>{proteins}</Col>
      <Col>{calories}</Col>
      <Col>
        <Button
          variant="primary"
          onClick={() =>
            createEntry({
              variables: {
                food_entry: food_name,
                date: date,
                quantity: 1,
              },
              context: {
                headers: {
                  authentication: `Bearer ${localStorage.getItem("token")}`,
                },
              },
            })
          }
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Col>
    </Row>
  );
}
