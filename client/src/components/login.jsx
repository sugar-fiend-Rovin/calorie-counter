import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "../util/hooks";
// import Button from "react-bootstrap/Button";
import { LOGIN_USER } from "../Food-Query";
import { AuthContext } from "../context/auth";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useLazyQuery } from "@apollo/client";
import { useAuthDispatch } from "../context/auth";

export default function Register(props) {
  const [variables, setVariables] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useAuthDispatch();

  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onError: (err) => {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    onCompleted(data) {
      console.log(data);
      dispatch({ type: "LOGIN", payload: data.login });

      props.history.push("/");
    },
  });

  const submitLoginForm = (e) => {
    e.preventDefault();

    loginUser({ variables });
  };

  return (
    <Row className="bg-white py-5 justify-content-center">
      <Col sm={8} md={6} lg={4}>
        <h1 className="text-center">Login</h1>
        <Form onSubmit={submitLoginForm}>
          <Form.Group>
            <Form.Label className={errors.username && "text-danger"}>
              {errors.username ?? "Username"}
            </Form.Label>
            <Form.Control
              type="text"
              value={variables.username}
              className={errors.username && "is-invalid"}
              onChange={(e) =>
                setVariables({ ...variables, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={errors.password && "text-danger"}>
              {errors.password ?? "Password"}
            </Form.Label>
            <Form.Control
              type="password"
              value={variables.password}
              className={errors.password && "is-invalid"}
              onChange={(e) =>
                setVariables({ ...variables, password: e.target.value })
              }
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "loading.." : "Login"}
            </Button>
            <br />
            <small>
              Don't have an account? <NavLink to="/register">Register</NavLink>
            </small>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
