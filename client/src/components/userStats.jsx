import React, { Fragment, useState, useContext, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import { useQuery, useLazyQuery } from "@apollo/client";
import { UserQuery } from "../Food-Query";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./journal.css";
import moment from "moment";
import { ItemsContext } from "./home";
import JournalItem from "./journalItem";
import { useAuthDispatch } from "../context/auth";

export default function UserStats(props) {
  const { loading, error, data } = useQuery(UserQuery);
  if (loading) return "Loading...";
  if (error) {
    return `Error! ${error.message}`;
  }
  console.log(data.getUser);
  return (
    <Row
      className="text-white border-col align-items-center"
      style={{ backgroundColor: "red", height: "50px" }}
    >
      <Col>daily goal</Col>
      <Col>
        {data.getUser.daily_calories ? data.getUser.daily_calories : "--"}
      </Col>
      <Col>
        {data.getUser.carbohydrates ? data.getUser.carbohydrates : "--"}
      </Col>
      <Col>{data.getUser.fats ? data.getUser.fats : "--"}</Col>
      <Col>{data.getUser.proteins ? data.getUser.proteins : "--"}</Col>
      <Col></Col>
    </Row>
  );
}
