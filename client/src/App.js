import React, { Fragment, useState, useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { useQuery } from "@apollo/client";
import * as compose from "lodash.flowright";
import { Query, Mutation, Subscription } from "@apollo/client/react/components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { EntryQuery, FoodQuery } from "./Food-Query";
import FoodItem from "./components/foodItem";
import moment from "moment";
import Example from "./components/button";
import Journal from "./components/journal";
export const ItemsContext = React.createContext();
export const JournalContext = React.createContext();

function App() {
  // const { loading, error, data } = useQuery(EntryQuery, {
  //   pollInterval: 0.0001,
  // });
  // console.log(data);
  // const [current, setCurrent] = useState(
  //   data.getEntries.map((entry) => entry.food_en)
  // );
  // useEffect(() => {
  //   if (loading === false && data) {
  //     const newarray = data.getEntries.map((entry) => entry.food_en);
  //     console.log(newarray);
  //     setCurrent(newarray);
  //   }
  // }, [loading, data]);
  const getAllUsers = useQuery(FoodQuery);
  const [count, setCount] = useState(moment());
  function handleChange(newValue) {
    setCount(newValue);
  }
  // add usernmae as paramter

  const { loading, error, data } = useQuery(EntryQuery, {
    variables: { date: count.format("MM-DD-YYYY") },
    pollInterval: 0.0001,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const newarray = data.getEntries.map((entry) => entry.food_en.food_name);
  return (
    //refetch
    <div className="App">
      <ItemsContext.Provider value={[count, setCount]}>
        <Example />
        <Journal />
      </ItemsContext.Provider>

      {/* <Query query={EntryQuery}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);

          return (
            <Fragment>
              {data.getEntries.map((food) => (
                <FoodItem key={food.id} Food={food.food_en} />
              ))}
            </Fragment>
          );
        }}
      </Query> */}
      <Query query={FoodQuery} pollInterval={0.0001}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          // console.log(count.format("ddd DD-MM-YYYY"));

          const breakfast = data.getFoods.filter(
            (food) =>
              food.type === "breakfast" && !newarray.includes(food.food_name)
          );
          // const breakfast_sum = breakfast.reduce(function (result, item) {
          //   return result + item.calories;
          // }, 0);
          const lunch = data.getFoods.filter(
            (food) =>
              food.type === "lunch" && !newarray.includes(food.food_name)
          );
          // const lunch_sum = lunch.reduce(function (result, item) {
          //   return result + item.calories;
          // }, 0);
          const dinner = data.getFoods.filter(
            (food) =>
              food.type === "dinner" && !newarray.includes(food.food_name)
          );
          // const dinner_sum = dinner.reduce(function (result, item) {
          //   return result + item.calories;
          // }, 0);
          // const total_calories = data.getFoods.reduce(function (result, item) {
          //   return result + item.calories;
          // }, 0);
          // const total_carbs = data.getFoods.reduce(function (result, item) {
          //   return result + item.carbohydrates;
          // }, 0);
          // const total_fat = data.getFoods.reduce(function (result, item) {
          //   return result + item.fats;
          // }, 0);
          // const total_protein = data.getFoods.reduce(function (result, item) {
          //   return result + item.proteins;
          // }, 0);
          // function sum(type) {
          //   const total = data.getFoods.reduce(function (result, item) {
          //     return result + item[type];
          //   }, 0);
          //   return total;
          // }

          return (
            <Fragment>
              {/* <div className="row">
                <div className="col-sm-2 ">total</div>
                <div className="col-sm-2 ">{sum(carbohydrates)}</div>
                <div className="col-sm-2 ">{sum(fats)}</div>
                <div className="col-sm-2 ">{sum(proteins)}</div>
                <div className="col-sm-2 ">{sum(calories)}</div>
              </div> */}
              {/* <div className="row">
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 ">carbohydrates</div>
                <div className="col-sm-2 ">fats</div>
                <div className="col-sm-2 ">proteins</div>
                <div className="col-sm-2 ">calories</div>
              </div>
              <div
                className="row text-white"
                style={{ backgroundColor: "grey" }}
              >
                <div className="col-sm-2">total</div>
                <div className="col-sm-2 ">{total_carbs}</div>
                <div className="col-sm-2 ">{total_fat}</div>
                <div className="col-sm-2 ">{total_protein}</div>
                <div className="col-sm-2">{total_calories}</div>
              </div>
              <div
                className="row text-white"
                style={{ backgroundColor: "blue" }}
              >
                <div className="col-sm-2">breakfast</div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2">{breakfast_sum}</div>
              </div> */}
              <div
                className="row text-white"
                style={{ backgroundColor: "blue" }}
              >
                breakfast
              </div>
              ;
              {breakfast.map((food) => (
                <FoodItem
                  key={food.id}
                  Food={food}
                  date={count.format("MM-DD-YYYY")}
                />
              ))}
              {/* <div
                className="row text-white"
                style={{ backgroundColor: "blue" }}
              >
                <div className="col-sm-2">lunch</div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2">{lunch_sum}</div>
              </div> */}
              {lunch.map((food) => (
                <FoodItem
                  key={food.id}
                  Food={food}
                  date={count.format("MM-DD-YYYY")}
                />
              ))}
              {/* <div
                className="row text-white"
                style={{ backgroundColor: "blue" }}
              >
                <div className="col-sm-2">dinner</div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2 "></div>
                <div className="col-sm-2">{dinner_sum}</div>
              </div> */}
              {dinner.map((food) => (
                <FoodItem
                  key={food.id}
                  Food={food}
                  date={count.format("MM-DD-YYYY")}
                />
              ))}
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
