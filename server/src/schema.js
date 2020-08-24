const typeDefs = `type Query {
    getFood(    food_name: String!): Food
    getFoods: [Food]
    getUser: String!
    getEntries(date:String!): [Entry]
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
  }
  type Food {
    food_name: String!,
    type: String!,
    calories: Float!,
    carbohydrates: Float!,
    proteins: Float!,
    fats: Float!
  }
  type Journal {
    date: Float!
    food_en: [String]
    entries: [Food]
  }
  type Entry {
    username: String!
    date: String!
    food_en: Food
    quantity: Float!
    food_entry: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
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
      createEntry(
        date: String!, food_entry: String!, quantity: Float!): Entry!
      updateEntryPlus(
        food_entry: String!, date: String!): Entry!
      updateEntryMinus(
        food_entry: String!, date: String!): Entry!
      deleteEntry(food_entry: String!, date: String!): String!
      register(registerInput: RegisterInput): User!
      login(username: String!, password: String!): User!
      }`;
module.exports = typeDefs;
