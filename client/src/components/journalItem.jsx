import React from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./journalItem.css";
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

export default function JournalItem({
  Food: { food_name, type, calories, carbohydrates, proteins, fats },
  count,
  date,
}) {
  const [deleteEntry, { data3 }] = useMutation(DeleteEntry, {
    refetchQueries: ["EntryQuery"],
  });
  const [addQuantity, { data2 }] = useMutation(AddQuantity, {
    refetchQueries: ["EntryQuery"],
  });
  const [minusQuantity, { data }] = useMutation(
    MinusQuantity,
    {
      update: (cache, qe) => {
        console.log(qe.data.updateEntryMinus.food_entry);
        if (qe.data.updateEntryMinus.quantity === 0) {
          console.log("completed");
          deleteEntry({
            variables: {
              food_entry: qe.data.updateEntryMinus.food_entry,
              date: date,
            },
          });
        }
      },
    },
    {
      refetchQueries: ["EntryQuery"],
    }
  );

  return (
    <Row className=" align-items-center border-col " style={{ height: "50px" }}>
      <Col>{food_name}</Col>
      <Col>{carbohydrates * count}</Col>
      <Col>{fats * count}</Col>
      <Col>{proteins * count}</Col>
      <Col>{calories * count}</Col>
      <Col>
        <Button
          variant="primary"
          onClick={() =>
            minusQuantity({
              variables: { food_entry: food_name, date: date },
              context: {
                headers: {
                  authentication: `Bearer ${localStorage.getItem("token")}`,
                },
              },
            })
          }
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        {count}

        <Button
          style={{ marginRight: "30px" }}
          variant="primary"
          onClick={() =>
            addQuantity({
              variables: { food_entry: food_name, date: date },
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
        <Button
          variant="danger"
          onClick={() =>
            deleteEntry({
              variables: {
                food_entry: food_name,
                date: date,
              },
              context: {
                headers: {
                  authentication: `Bearer ${localStorage.getItem("token")}`,
                },
              },
            })
          }
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </Col>
    </Row>
  );
}
