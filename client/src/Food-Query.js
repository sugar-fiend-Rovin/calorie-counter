import { gql } from "@apollo/client";

const FoodQueryS = gql`
  query($name: String!) {
    getFood(food_name: $name) {
      food_name
      type
      calories
      carbohydrates
      proteins
      fats
    }
  }
`;
const EntryQuery = gql`
  query {
    getEntries {
      food_entry
      date
      food_en {
        food_name
        type
        calories
        carbohydrates
        proteins
        fats
      }
    }
  }
`;
const FoodQuery = gql`
  query {
    getFoods {
      food_name
      type
      calories
      carbohydrates
      proteins
      fats
    }
  }
`;
const AddFood = gql`
  mutation(
    $food_name: String!
    $type: String!
    $calories: Float!
    $carbohydrates: Float!
    $proteins: Float!
    $fats: Float!
  ) {
    addFood(
      food_name: $food_name
      type: $type
      calories: $calories
      carbohydrates: $carbohydrates
      proteins: $proteins
      fats: $fats
    ) {
      food_name
      type
      calories
      carbohydrates
      proteins
      fats
    }
  }
`;
const AddEntry = gql`
  mutation($food_entry: String!, $date: Float!) {
    addEntry(food_entry: $food_entry, date: $date) {
      food_entry
      date
    }
  }
`;
export { EntryQuery, FoodQueryS, FoodQuery, AddFood, AddEntry };
