import React, { Fragment, useState, useContext, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import { useQuery, useMutation } from "@apollo/client";
import { SetGoals } from "../Food-Query";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./journal.css";
import moment from "moment";
import { ItemsContext } from "./home";
import JournalItem from "./journalItem";
import { useAuthDispatch } from "../context/auth";

export default function SetG(props) {
  const [variables, setVariables] = useState({
    carbs: null,
    fats: null,
    protein: null,
    kcal: null,
  });
  const [errors, setErrors] = useState({});

  const [setGoal, { loading }] = useMutation(SetGoals, {
    update: (_, __) => props.history.push("/"),

    refetchQueries: ["UserQuery"],
  });
  const submitGoalForm = (e) => {
    e.preventDefault();

    setGoal({ variables });
  };
  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Goal</h1>
        <Form onSubmit={submitGoalForm}>
          <Form.Group>
            <Form.Label className={errors.carbs && "text-danger"}>
              {errors.carbs ?? "carbs"}
            </Form.Label>
            <Form.Control
              type="number"
              value={variables.carbs}
              className={errors.carbs && "is-invalid"}
              onChange={(e) =>
                setVariables({ ...variables, carbs: parseInt(e.target.value) })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={errors.fats && "text-danger"}>
              {errors.fats ?? "fats"}
            </Form.Label>
            <Form.Control
              type="number"
              value={variables.fats}
              className={errors.fats && "is-invalid"}
              onChange={(e) =>
                setVariables({ ...variables, fats: parseInt(e.target.value) })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className={errors.protein && "text-danger"}>
              {errors.protein ?? "protein"}
            </Form.Label>
            <Form.Control
              type="number"
              value={variables.protein}
              className={errors.protein && "is-invalid"}
              onChange={(e) =>
                setVariables({
                  ...variables,
                  protein: parseInt(e.target.value),
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={errors.kcal && "text-danger"}>
              {errors.kcal ?? "kcal"}
            </Form.Label>
            <Form.Control
              type="number"
              value={variables.kcal}
              className={errors.kcal && "is-invalid"}
              onChange={(e) =>
                setVariables({ ...variables, kcal: parseInt(e.target.value) })
              }
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "loading.." : "Submit"}
            </Button>
            <br />
            {/* <small>
              Don't have an account? <NavLink to="/register">Register</NavLink>
            </small> */}
          </div>
        </Form>
      </Col>
    </Row>
  );
}
