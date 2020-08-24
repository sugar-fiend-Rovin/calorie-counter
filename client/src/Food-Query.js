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
const UserQuery = gql`
  query($name: String!) {
    getUser(username: $name) {
      username
    }
  }
`;
const EntryQuery = gql`
  query($date: String!) {
    getEntries(date: $date) {
      username
      food_entry
      date
      quantity
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
// const EntryQueryS = gql`
//   query($name: String!) {
//     getEntry(food_entry: $name) {
//       food_entry
//       date
//       quantity
//       food_en {
//         food_name
//         type
//         calories
//         carbohydrates
//         proteins
//         fats
//       }
//     }
//   }
// `;
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
  mutation($food_entry: String!, $date: String!, $quantity: Float!) {
    createEntry(food_entry: $food_entry, date: $date, quantity: $quantity) {
      food_entry
      date
      quantity
    }
  }
`;
const AddUser = gql`
  mutation($name: String!) {
    addUser(username: $name) {
      username
    }
  }
`;
const DeleteEntry = gql`
  mutation($food_entry: String!, $date: String!) {
    deleteEntry(food_entry: $food_entry, date: $date)
  }
`;
const AddQuantity = gql`
  mutation($food_entry: String!, $date: String!) {
    updateEntryPlus(food_entry: $food_entry, date: $date) {
      food_entry
      date
      quantity
    }
  }
`;

const MinusQuantity = gql`
  mutation($food_entry: String!, $date: String!) {
    updateEntryMinus(food_entry: $food_entry, date: $date) {
      food_entry
      date
      quantity
    }
  }
`;
const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      token
    }
  }
`;
const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      token
    }
  }
`;
export {
  AddUser,
  EntryQuery,
  UserQuery,
  FoodQueryS,
  FoodQuery,
  AddFood,
  AddEntry,
  AddQuantity,
  MinusQuantity,
  // EntryQueryS,
  DeleteEntry,
  LOGIN_USER,
  REGISTER_USER,
};
