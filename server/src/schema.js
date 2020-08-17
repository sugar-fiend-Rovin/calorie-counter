const typeDefs = `type Query {
    getFood(    food_name: String!): Food
    getFoods: [Food]
    getJournals: [Journal]
    getJournal: Journal!
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
  type Journal {
    date: Float!
    food_en: [String]
    entries: [Food]
  }
  type Entry {
    date: String!
    food_en: Food
    quantity: Float!
    food_entry: String!
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
        food_entry: String!): Entry!
      updateEntryMinus(
        food_entry: String!): Entry!
      }`;
module.exports = typeDefs;
