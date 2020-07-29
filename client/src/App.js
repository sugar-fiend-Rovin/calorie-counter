import React, { Fragment } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { useQuery } from "@apollo/client";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { FoodQueryS, FoodQuery, AddFood } from "./Food-Query";
function App() {
  const getAllUsers = useQuery(FoodQuery);
  return (
    <div className="App">
      <p>{JSON.stringify(getAllUsers.data, null, 2)}</p>
      <Query query={FoodQuery}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          console.log(data);
          return (
            <Fragment>
              {data.getFoods.map((food) => (
                <h1>{food.food_name}</h1>
              ))}
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
}

export default compose(graphql(FoodQuery, { name: "chatSubscription" }))(App);
