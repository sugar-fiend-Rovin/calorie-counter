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
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

export const ItemsContext = React.createContext();
export const JournalContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
