const { Food, Journal, Entry } = require("./models");

const resolvers = {
  Query: {
    getJournal: async (_, { date }) => {
      var result = await Journal.findOne({ date: date });
      return result;
    },
    getEntries: () => Entry.find(),
    getFoods: () => Food.find(),
    getFood: async (_, { food_name }) => {
      var result = await Food.findOne({ food_name: food_name });
      return result;
    },
    getJournals: () => Journal.find(),

    // me(root, args, ctx) {
    //   return {
    //     name: "Who am I?",
    //   };
    // },
  },
  Entry: {
    food_en: async ({ food_entry }) => {
      return Food.findOne({ food_name: food_entry });
    },
  },
  Journal: {
    food_en: async ({ food_entry }) => {
      return Food.findOne({ food_name: food_entry });
    },
  },
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
    createEntry: async (_, { date, food_entry, quantity }) => {
      const entry = new Entry({
        date,
        food_entry,
        quantity,
      });
      await entry.save();
      return entry;
    },
    updateEntryPlus: async (_, { food_entry }) => {
      //add date later
      // await Entry.update({ foods: [food, ...foods] });
      return await Entry.findOneAndUpdate(
        { food_entry: food_entry },
        { $inc: { quantity: 1 } },
        {
          new: true,
        }
      );
    },
    updateEntryMinus: async (_, { food_entry }) => {
      //add date later
      // await Entry.update({ foods: [food, ...foods] });
      return await Entry.findOneAndUpdate(
        { food_entry: food_entry },
        { $inc: { quantity: -1 } },
        {
          new: true,
        }
      );
    },
    deleteEntry: async (_, { food_entry }) => {
      await Entry.deleteOne({ food_entry: food_entry });
      return "Food deleted";
    },
  },
};

module.exports = resolvers;
