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
export { FoodQueryS, FoodQuery, AddFood };
