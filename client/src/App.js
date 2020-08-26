import React, { Fragment, useState, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { useQuery } from "@apollo/client";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { EntryQuery, FoodQuery, UserQuery } from "./Food-Query";
import FoodItem from "./components/foodItem";
import moment from "moment";
import Example from "./components/button";
import Journal from "./components/journal";
// import { route } from "../../server/src/routes/api/auth";
// import useScript from "./components/useScript";
import Login from "./components/login";
import Header from "./components/Header";
import Register from "./components/register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import { Container } from "react-bootstrap";
import Chart from "./components/chart";
export const ItemsContext = React.createContext();
export const JournalContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <Container className="pt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
