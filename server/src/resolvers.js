const { Food, User, Entry, Journal } = require("./models");

const resolvers = {
  Query: {
    getFoods: () => Food.find(),
    getFood: async (_, { food_name }) => {
      var result = await Food.findOne({ food_name: food_name });
      return result;
    },
    getEntries: () => Entry.find(),
    me(root, args, ctx) {
      return {
        name: "Who am I?",
      };
    },
  },
  Entry: {
    food_en: async ({ food_entry }) => {
      return Food.findOne({ food_name: food_entry });
    },
  },
  // Journal: {
  //   food_en: async ({ food_entry }) => {
  //     return Food.findOne({ food_name: food_entry });
  //   },
  // },
  Mutation: {
    addFood: async (
      _,
      { food_name, type, calories, carbohydrates, proteins, fats }
    ) => {
      const food = new Food({
        food_name,
        type,
        calories,
        carbohydrates,
        proteins,
        fats,
      });
      await food.save();
      return food;
    },
    deleteFood: async (_, { id }) => {
      await Food.findByIdAndRemove(id);
      return "Food deleted";
    },
    addEntry: async (_, { food_entry, date }) => {
      // await Entry.update({ foods: [food, ...foods] });
      const entry = new Entry({
        food_entry,
        date,
      });
      await entry.save();
      return entry;
    },
  },
};

module.exports = resolvers;
