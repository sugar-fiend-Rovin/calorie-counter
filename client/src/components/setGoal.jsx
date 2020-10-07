import React, { Fragment, useState, useContext, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import { useQuery, useMutation } from "@apollo/client";
import { SetGoals, UserQuery } from "../Food-Query";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./journal.css";
import moment from "moment";
import { ItemsContext } from "./home";
import JournalItem from "./journalItem";
import { useAuthDispatch } from "../context/auth";
import * as yup from "yup";
import { Formik } from "formik";
const schema = yup.object({
  age: yup.number().required(),
  sex: yup.string().required(),
  height: yup.number().required(),
  heightTens: yup.number().required(),
  weight: yup.number().required(),
  goal: yup.string().required(),
  activityLevel: yup.string().required(),
});
export default function SetG(props) {
  var c = null;
  var f = null;
  var p = null;
  var k = null;
  const [stats, setStats] = useState({
    age: null,
    sex: null,
    height: null,
    heightTens: null,
    weight: null,
    goal: null,
    activityLevel: null,
  });
  const formula = (a, s, h, t, w, g, act) => {
    const height = t * 30.48 + h * 2.54;
    const weight = w * 0.453592;
    var calories =
      s === "male"
        ? weight * 10 + height * 6.25 - a * 5 + 5
        : weight * 10 + height * 6.25 - a * 5 - 161;
    switch (act) {
      case "Lightly active (moderate exercise but sedentary job)":
        calories = Math.round(calories * 1.1);
        break;
      case "Moderately active (intense exercise but sedentary job)":
        calories = Math.round(calories * 1.3);
        break;
      case "Very active (moderate exercise and active job)":
        calories = Math.round(calories * 1.5);
        break;
      case "Extra active (intense exercise and active job)":
        calories = Math.round(calories * 1.7);
        break;
    }
    var carbs = 0;
    var fats = 0;
    var protons = 0;
    switch (g) {
      case "Fat Loss":
        if (calories <= 2000) calories = Math.round(0.9 * calories);
        if (calories > 2000) calories = Math.round(0.8 * calories);
        carbs = Math.round((0.4 * calories) / 4);
        protons = Math.round((0.4 * calories) / 4);
        fats = Math.round((0.2 * calories) / 9);
        break;
      case "Maintenance":
        carbs = Math.round((0.45 * calories) / 4);
        protons = Math.round((0.3 * calories) / 4);
        fats = Math.round((0.25 * calories) / 9);
        break;
      case "Get Swole":
        calories += 500;
        carbs = Math.round((0.45 * calories) / 4);
        protons = Math.round((0.3 * calories) / 4);
        fats = Math.round((0.25 * calories) / 9);
        break;
    }
    console.log(fats);
    console.log(carbs);
    console.log(protons);
    c = carbs;
    f = fats;
    p = protons;
    k = calories;
    // setVariables({
    //   carbs,
    //   fats,

    //   protein: protons,
    //   kcal: calories,
    // });
  };
  const [errors, setErrors] = useState({});

  const [setGoal, { loading }] = useMutation(SetGoals, {
    update: (_, __) => props.history.push("/"),
    onError: (err) => setErrors(err.graphQLErrors[0].extensions.errors),

    refetchQueries: [{ query: UserQuery }],
  });
  const submitGoalForm = (e) => {
    e.preventDefault();

    setGoal({ variables: { carbs: c, fats: f, protein: p, kcal: k } });
  };
  const calculate = (e) => {
    e.preventDefault();
    formula(
      stats.age,
      stats.sex,
      stats.height,
      stats.heightTens,
      stats.weight,
      stats.goal,
      stats.activityLevel
    );
    setGoal({ variables: { carbs: c, fats: f, protein: p, kcal: k } });
  };
  return (
    <Row className="bg-white py-5 justify-content-center">
      <Form noValidate onSubmit={calculate}>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={stats.age}
            onChange={(e) =>
              setStats({ ...stats, age: parseInt(e.target.value) })
            }
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            Please provide an age.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="sex"
            as="select"
            value={stats.sex}
            onChange={(e) => setStats({ ...stats, sex: e.target.value })}
            isInvalid={!!errors.sex}
          >
            <option value="" disabled selected>
              Select One
            </option>

            <option>male</option>
            <option>female</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.sex}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            placeholder="Pounds"
            value={stats.weight}
            onChange={(e) =>
              setStats({ ...stats, weight: parseInt(e.target.value) })
            }
            isInvalid={!!errors.weight}
          />
          <Form.Control.Feedback type="invalid">
            {errors.weight}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="number"
              name="height"
              placeholder="feet"
              value={stats.height}
              onChange={(e) =>
                setStats({ ...stats, height: parseInt(e.target.value) })
              }
              isInvalid={!!errors.height}
            />
            <Form.Control.Feedback type="invalid">
              {errors.height}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label style={{ color: "white" }}>0</Form.Label>

            <Form.Control
              type="number"
              name="heightTens"
              placeholder="inches"
              value={stats.heightTens}
              onChange={(e) =>
                setStats({
                  ...stats,
                  heightTens: parseInt(e.target.value),
                })
              }
              isInvalid={!!errors.heightTens}
            />
            <Form.Control.Feedback type="invalid">
              {errors.heightTens}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group md="4">
          <Form.Label>Goal</Form.Label>
          <Form.Control
            type="text"
            name="goal"
            as="select"
            value={stats.goal}
            onChange={(e) => setStats({ ...stats, goal: e.target.value })}
            isInvalid={!!errors.goal}
          >
            <option value="" disabled selected>
              Select One
            </option>

            <option>Fat Loss</option>
            <option>Maintenance</option>
            <option>Get Swole</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.goal}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4">
          <Form.Label>Activity Level</Form.Label>
          <Form.Control
            type="text"
            name="activityLevel"
            as="select"
            value={stats.activityLevel}
            onChange={(e) =>
              setStats({ ...stats, activityLevel: e.target.value })
            }
            isInvalid={!!errors.activityLevel}
          >
            <option value="" disabled selected>
              Select One
            </option>

            <option>
              Lightly active (moderate exercise but sedentary job)
            </option>
            <option>
              Moderately active (intense exercise but sedentary job)
            </option>
            <option>Very active (moderate exercise and active job)</option>
            <option>Extra active (intense exercise and active job)</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.activityLevel}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
      )
    </Row>
  );
}
