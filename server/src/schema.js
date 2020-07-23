const typeDefs = `type Query {
    getFood(    food_name: String!): Food
    getFoods: [Food]
    me: User!
  }
  type Food {
    food_name: String!,
    type: String!,
    calories: Float!,
    carbohydrates: Float!,
    proteins: Float!,
    fats: Float!
  }
  type User {
    name: String!
  }
  type Mutation {
      addFood(
        food_name: String!,
        type: String!,
        calories: Float!,
        carbohydrates: Float!,
        proteins: Float!,
        fats: Float!): Food!,
      deleteFood(food_name: String!): String
  }`;
module.exports = typeDefs;
