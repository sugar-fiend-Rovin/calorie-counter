const typeDefs = `type Query {
    getFood(    food_name: String!): Food
    getFoods: [Food]
    users: [User]
    me: User!
    getEntries: [Entry]
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
    password: String!
    journal: [Food]
  }
  type Entry {
      date: String!
      food_entry: String!
      food_en: Food
    }
  type Journal {
    entries: [Entry]
  }
  type Mutation {
      addFood(
        food_name: String!,
        type: String!,
        calories: Float!,
        carbohydrates: Float!,
        proteins: Float!,
        fats: Float!): Food!,
      deleteFood(food_name: String!): String!
      addEntry(
        food_entry: String!, date: Float!): Entry!
  }`;
module.exports = typeDefs;
